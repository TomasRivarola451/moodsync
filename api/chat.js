/* eslint-env node */
/* global process */
import OpenAI from "openai";

/**
 * Elimina TODOS los emojis de un texto
 */
function removeEmojis(text) {
  if (!text || typeof text !== "string") return text;
  
  return text
    .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
    .replace(/[\u{1F300}-\u{1F5FF}]/gu, '') // Símbolos y pictogramas
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Transporte
    .replace(/[\u{1F700}-\u{1F77F}]/gu, '') // Alquímicos
    .replace(/[\u{1F780}-\u{1F7FF}]/gu, '') // Geométricos
    .replace(/[\u{1F800}-\u{1F8FF}]/gu, '') // Flechas
    .replace(/[\u{1F900}-\u{1F9FF}]/gu, '') // Suplementarios
    .replace(/[\u{1FA00}-\u{1FA6F}]/gu, '') // Ajedrez
    .replace(/[\u{1FA70}-\u{1FAFF}]/gu, '') // Extendidos-A
    .replace(/[\u{2600}-\u{26FF}]/gu, '')   // Misceláneos
    .replace(/[\u{2700}-\u{27BF}]/gu, '')   // Dingbats
    .replace(/[\u{FE00}-\u{FE0F}]/gu, '')   // Variación
    .replace(/[\u{1F1E6}-\u{1F1FF}]/gu, '') // Banderas
    .trim();
}

// Vocabulario de moods que puede devolver la IA (se normalizan en el frontend vía moodMap)
// Debe estar alineado con src/services/moodAI.js
const ALLOWED_MOODS = [
  "happy",
  "joyful",
  "excited",

  "sad",
  "depressed",
  "down",
  "lonely",

  "chill",      // ✅ CAMBIO: "calm" → "chill"
  "relaxed",
  "anxious",
  "stressed",
  "overwhelmed",

  "energetic",
  "motivated",

  "tired",
  "exhausted",
  "sleepy",
  "burned_out",

  "angry",
  "frustrated",

  "neutral",
  "meh",
];

const ALLOWED_MOODS_STRING = ALLOWED_MOODS.join(", ");

const DEFAULT_ERROR_MESSAGE = "No se pudo interpretar el estado de ánimo";

const SYSTEM_PROMPT = `Eres un asistente que detecta y explica el estado de ánimo del usuario a partir de un texto corto.

Debes responder SIEMPRE ÚNICAMENTE con un JSON válido en UNA sola línea, sin markdown, sin backticks y sin texto extra antes o después.

Estructura EXACTA esperada:
{
  "mood": "sad",
  "variant": "lonely",
  "reason": "Mencionás sentirte solo y con poco ánimo",
  "message": "No estás solo en sentirte así. Tomate un momento para vos.",
  "error": null
}

REGLAS:
1. "mood": debe ser exactamente uno de estos valores en minúsculas: ${ALLOWED_MOODS_STRING}.
   - Si hay varias emociones, elige la dominante.
   - Si no hay un estado de ánimo claro, usa "neutral".

2. "variant": es un sub-estado más específico (por ejemplo: "lonely", "nostalgic", "burned_out", "hopeful").
   - Puede ser igual a "mood" o un matiz más concreto.
   - Debe ser una palabra o frase corta en minúsculas.

3. "reason": explica brevemente POR QUÉ detectaste ese estado. Máximo 1 oración corta, en español, sin emojis.

4. "message": es un mensaje empático y humano dirigido al usuario. Una sola oración corta en español, sin emojis.

5. "error":
   - Si el texto tiene sentido humano (aunque sea breve), "error" debe ser null.
   - SOLO si el texto es claramente sin sentido (ej: "asdkjashdk", "xxxqqq"), devuelve:
     {
       "mood": null,
       "variant": null,
       "reason": null,
       "message": null,
       "error": "No se pudo interpretar el estado de ánimo"
     }

6. No incluyas explicaciones, comentarios ni texto fuera del JSON.
7. NUNCA uses emojis en ningún campo del JSON.
`;

/**
 * Extrae la estructura emocional completa de la respuesta de OpenAI.
 * Nunca devuelve "unknown": si el mood no es reconocido se normaliza a "neutral".
 */
function parseAnalysisFromResponse(rawContent) {
  if (!rawContent || typeof rawContent !== "string") {
    return {
      mood: null,
      variant: null,
      reason: null,
      message: null,
      isError: true,
      errorMessage: DEFAULT_ERROR_MESSAGE,
    };
  }

  const raw = rawContent.trim();

  const tryParseObject = (text) => {
    try {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object") return null;

      const rawError = parsed.error;
      let isError = false;
      let errorMessage = null;

      if (typeof rawError === "string" && rawError.trim()) {
        isError = true;
        errorMessage = rawError.trim();
      } else if (rawError === true) {
        isError = true;
        errorMessage = DEFAULT_ERROR_MESSAGE;
      }

      let mood =
        typeof parsed.mood === "string" ? parsed.mood.trim().toLowerCase() : null;
      const variant =
        typeof parsed.variant === "string" ? removeEmojis(parsed.variant.trim()) : null;
      const reason =
        typeof parsed.reason === "string" ? removeEmojis(parsed.reason.trim()) : null;
      const message =
        typeof parsed.message === "string" ? removeEmojis(parsed.message.trim()) : null;

      if (!isError) {
        if (mood && !ALLOWED_MOODS.includes(mood)) {
          // Mood no reconocido → normalizar a neutral, sin marcar error.
          mood = "neutral";
        }
        if (!mood) {
          // Si la IA no devolvió un mood pero no indicó error, asumimos neutral.
          mood = "neutral";
        }
      } else {
        // En caso de error, consideramos que no hay mood utilizable.
        mood = null;
      }

      return {
        mood,
        variant,
        reason,
        message,
        isError,
        errorMessage,
      };
    } catch {
      return null;
    }
  };

  // 1) Intentar parsear como JSON directo
  const direct = tryParseObject(raw);
  if (direct) return direct;

  // 2) Buscar un JSON embebido en texto
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    const embedded = tryParseObject(jsonMatch[0]);
    if (embedded) return embedded;
  }

  // 3) Si nada funcionó, tratamos como error de formato
  return {
    mood: null,
    variant: null,
    reason: null,
    message: null,
    isError: true,
    errorMessage: DEFAULT_ERROR_MESSAGE,
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.length < 10) {
    console.error("[chat] OPENAI_API_KEY is missing or invalid (env not set or too short)");
    return res.status(500).json({
      error: "Server misconfiguration: OpenAI API key not set",
    });
  }

  const client = new OpenAI({ apiKey });

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "No se pudo interpretar el estado de ánimo",
      });
    }

    const userText = message.trim();
    if (!userText) {
      return res.status(400).json({
        error: "No se pudo interpretar el estado de ánimo",
      });
    }

    console.log("[chat] Request message length:", userText.length, "chars");

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userText },
      ],
      max_tokens: 160,
      temperature: 0,
    });

    const rawContent = completion?.choices?.[0]?.message?.content ?? null;
    console.log("[chat] OpenAI raw response:", JSON.stringify(rawContent));

    if (rawContent == null) {
      console.error(
        "[chat] OpenAI returned no content. Full completion:",
        JSON.stringify(completion)
      );
      return res.status(500).json({
        error: "OpenAI returned no content",
      });
    }

    const { mood, variant, reason, message: emotionalMessage, isError, errorMessage } =
      parseAnalysisFromResponse(rawContent);

    if (isError) {
      console.log("[chat] Interpreted as nonsense/error:", errorMessage);
      return res.status(200).json({
        mood: null,
        variant: null,
        reason: null,
        message: null,
        error: errorMessage || DEFAULT_ERROR_MESSAGE,
      });
    }

    console.log("[chat] Resolved mood:", mood, "| variant:", variant);

    return res.status(200).json({
      mood,
      variant: variant || null,
      reason: reason || null,
      message: emotionalMessage || null,
      error: null,
    });
  } catch (error) {
    console.error("[chat] OpenAI or handler error:", error?.message ?? error);
    if (error?.response) {
      console.error("[chat] OpenAI API response status:", error.response?.status);
      console.error("[chat] OpenAI API response data:", JSON.stringify(error.response?.data));
    }
    return res.status(500).json({
      error: error?.message || "OpenAI error",
    });
  }
}