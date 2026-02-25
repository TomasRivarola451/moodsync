import "./EmotionalBanner.css";

const bannerContent = {
  happy: {
    title: "Seguí brillando",
    message: "Tu energía positiva es contagiosa. Disfrutá este momento.",
    emoji: "✨"
  },
  sad: {
    title: "Está bien sentirse así",
    message: "Las emociones pasan. No estás solo en esto.",
    emoji: "🌙"
  },
  energetic: {
    title: "Imparable",
    message: "Canalizá toda esa energía en algo que te apasione.",
    emoji: "⚡"
  },
  chill: {
    title: "Respirá profundo",
    message: "Este es tu momento de paz. Disfrutalo.",
    emoji: "🌿"
  },
  angry: {
    title: "Es válido sentir esto",
    message: "Dejá que la música te ayude a procesar.",
    emoji: "🔥"
  },
  tired: {
    title: "Descansá",
    message: "Tu cuerpo te está pidiendo pausa. Escuchalo.",
    emoji: "💤"
  }
};

function EmotionalBanner({ mood }) {
  if (!mood || !bannerContent[mood]) return null;

  const content = bannerContent[mood];

  return (
    <div className="emotional-banner">
      <div className="emotional-banner-content">
        <span className="emotional-banner-emoji">{content.emoji}</span>
        <h2 className="emotional-banner-title">{content.title}</h2>
        <p className="emotional-banner-message">{content.message}</p>
      </div>
    </div>
  );
}

export default EmotionalBanner;