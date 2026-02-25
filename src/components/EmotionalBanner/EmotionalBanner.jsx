import "./EmotionalBanner.css";

const bannerContent = {
  happy: {
    title: "Seguí brillando",
    message: "Tu energía es contagiosa",
    emoji: "✨"
  },
  sad: {
    title: "Está bien sentirse así",
    message: "No estás solo",
    emoji: "🌙"
  },
  energetic: {
    title: "Imparable",
    message: "Canalizá esa energía",
    emoji: "⚡"
  },
  chill: {
    title: "Respirá profundo",
    message: "Tu momento de paz",
    emoji: "🌿"
  },
  angry: {
    title: "Es válido sentir esto",
    message: "Dejá que la música ayude",
    emoji: "🔥"
  },
  tired: {
    title: "Descansá",
    message: "Tu cuerpo pide pausa",
    emoji: "💤"
  }
};

function EmotionalBanner({ mood }) {
  if (!mood || !bannerContent[mood]) return null;

  const content = bannerContent[mood];

  return (
    <div className="emotional-banner">
      <div className="emotional-banner-content">
        {/* Placeholder for future mood image */}
        <div className="emotional-banner-image-placeholder" />
        <h2 className="emotional-banner-title">{content.title}</h2>
        <p className="emotional-banner-message">{content.message}</p>
      </div>
    </div>
  );
}

export default EmotionalBanner;