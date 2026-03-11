import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import MoodInput from "./components/MoodInput/MoodInput";
import MoodResultHeader from "./components/MoodResultHeader/MoodResultHeader";
import MoodResult from "./components/MoodResult/MoodResult";
import MoodParticles from "./components/MoodParticles/MoodParticles";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import AudioToggleButton from "./components/AudioToggleButton/AudioToggleButton";
import MoodFooter from "./components/MoodFooter/MoodFooter"; // ← CAMBIADO
import FloatingLines from "./components/FloatingLines/FloatingLines";
import { EmotionalAudioProvider } from "./audio/EmotionalAudioProvider";
import { getMoodFromText } from "./services/aiService";
import "./App.css";
import "./styles/themes.css";

function App() {
  const [mood, setMood] = useState(null);
  const [variant, setVariant] = useState(null);
  const [reason, setReason] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const hasDetectedMood = mood !== null;

  const getFloatingLinesConfig = (currentMood) => {
    const configs = {
      neutral: {
        linesGradient: ["#14b8a6", "#0d9488", "#0f766e"],
        lineCount: [6, 4],
        lineDistance: [5, 6],
        enabledWaves: ["bottom", "middle"],
        animationSpeed: 0.6,
      },
      happy: {
        linesGradient: ["#22c55e", "#16a34a", "#15803d"],
        lineCount: [7, 5],
        lineDistance: [4, 5],
        enabledWaves: ["bottom", "middle"],
        animationSpeed: 0.8,
      },
      sad: {
        linesGradient: ["#3b82f6", "#2563eb", "#1d4ed8"],
        lineCount: [4, 3],
        lineDistance: [6, 7],
        enabledWaves: ["bottom", "middle"],
        animationSpeed: 0.4,
      },
      energetic: {
        linesGradient: ["#f97316", "#ea580c", "#c2410c"],
        lineCount: [8, 6, 4],
        lineDistance: [3, 4, 5],
        enabledWaves: ["top", "middle", "bottom"],
        animationSpeed: 1.2,
      },
      chill: {
        linesGradient: ["#a78bfa", "#8b5cf6", "#7c3aed"],
        lineCount: [5, 3],
        lineDistance: [7, 8],
        enabledWaves: ["bottom", "middle"],
        animationSpeed: 0.3,
      },
      angry: {
        linesGradient: ["#ef4444", "#dc2626", "#b91c1c"],
        lineCount: [6, 5],
        lineDistance: [4, 5],
        enabledWaves: ["bottom", "middle"],
        animationSpeed: 1.0,
        bendStrength: -0.8,
      },
      tired: {
        linesGradient: ["#64748b", "#475569", "#334155"],
        lineCount: [3, 2],
        lineDistance: [8, 9],
        enabledWaves: ["bottom"],
        animationSpeed: 0.2,
      },
    };

    return {
      interactive: true,
      bendRadius: 5,
      bendStrength: -0.3,
      mouseDamping: 0.05,
      parallax: true,
      parallaxStrength: 0.15,
      mixBlendMode: "screen",
      ...configs[currentMood || "neutral"],
    };
  };

  useEffect(() => {

    const cleanInlineStyles = () => {
      document.documentElement.style.removeProperty('--bg-gradient');
      document.documentElement.style.removeProperty('--bg-color');
      document.documentElement.style.removeProperty('--aura-color');
      document.documentElement.style.removeProperty('--primary-color');
      document.documentElement.style.removeProperty('--secondary-color');
      document.documentElement.style.removeProperty('--accent-color');
      document.documentElement.style.removeProperty('--text-color');
      document.documentElement.style.removeProperty('--motion-duration');
    };

    if (mood) {
      document.documentElement.setAttribute("data-theme", mood);
    } else {
      document.documentElement.setAttribute("data-theme", "neutral");
    }
    

    cleanInlineStyles();
  }, [mood]);

  const handleMoodSubmit = async (text) => {
    setLoading(true);
    setError(null);

    try {
      const result = await getMoodFromText(text);
      
      if (result.error) {
        setError(result.error);
      } else {
        setMood(result.mood);
        setVariant(result.variant);
        setReason(result.reason);
        setMessage(result.message);
      }
    } catch (err) {
      setError("Error al analizar el estado. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeMood = () => {
    setMood(null);
    setVariant(null);
    setReason(null);
    setMessage(null);
    setError(null);
  };

  return (
    <EmotionalAudioProvider mood={mood}>
      <div className="floating-lines-background">
        <FloatingLines {...getFloatingLinesConfig(mood)} />
      </div>

      <AnimatedBackground mood={mood} />
      
      {mood && <MoodParticles mood={mood} />}

      <Layout hasDetectedMood={hasDetectedMood}>
        <MoodInput
          onSubmit={handleMoodSubmit}
          loading={loading}
          mood={mood}
          error={error}
          isCompact={hasDetectedMood}
          onChangeMood={handleChangeMood}
        />

        {loading && (
          <div className="loading-indicator">
            <span className="loading-dot" />
            <span className="loading-dot" />
            <span className="loading-dot" />
            <span>Analizando tu estado...</span>
          </div>
        )}

        {hasDetectedMood && (
          <>
            <MoodResultHeader
              mood={mood}
              variant={variant}
              message={message}
              reason={reason}
            />

            <MoodResult mood={mood} error={error} />

            <MoodFooter onChangeMood={handleChangeMood} />
          </>
        )}
      </Layout>

      <AudioToggleButton />
    </EmotionalAudioProvider>
  );
}

export default App;