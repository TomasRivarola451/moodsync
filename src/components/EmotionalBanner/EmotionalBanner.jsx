import "./EmotionalBanner.css";

function EmotionalBanner({ mood }) {
  if (!mood) return null;

  const label = `Imagen de ${mood}`;

  return (
    <div className="emotional-banner">
      <div className="emotional-banner-image-container">
        <div className="emotional-banner-placeholder">
          <span className="emotional-banner-placeholder-text">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default EmotionalBanner;
