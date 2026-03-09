import logoSvg from "../../assets/logo.svg";
import "./Logo.css";

const getMoodColor = (mood) => {
  const colors = {
    neutral: "#14b8a6",
    happy: "#22c55e",
    sad: "#3b82f6",
    energetic: "#f97316",
    chill: "#a78bfa",
    angry: "#ef4444",
    tired: "#64748b",
  };
  return colors[mood] || colors.neutral;
};

const getMoodFilter = (mood) => {
  // Filtros CSS específicos calculados para coincidir exactamente con los colores
  const filters = {
    // Neutral: Teal #14b8a6 (base del SVG, sin filtro)
    neutral: "none",
    
    // Happy: Verde #22c55e
    happy: "brightness(1.1) saturate(1.4) hue-rotate(-45deg)",
    
    // Sad: Azul #3b82f6
    sad: "brightness(1.15) saturate(1.3) hue-rotate(190deg)",
    
    // Energetic: Naranja #f97316
    energetic: "brightness(1.25) saturate(1.6) hue-rotate(-75deg)",
    
    // Chill: Violeta #a78bfa
    chill: "brightness(1.2) saturate(1.4) hue-rotate(100deg)",
    
    // Angry: Rojo #ef4444
    angry: "brightness(1.15) saturate(1.8) hue-rotate(-140deg) contrast(1.1)",
    
    // Tired: Gris #64748b
    tired: "saturate(0.4) brightness(0.75) contrast(0.9)",
  };
  return filters[mood] || filters.neutral;
};

function Logo({ mood, size = "medium" }) {
  const color = getMoodColor(mood);
  const colorFilter = getMoodFilter(mood);

  return (
    <div className={`logo-container logo-${size}`}>
      <img
        src={logoSvg}
        alt="MoodSync"
        className="logo-svg"
        style={{
          filter: `
            ${colorFilter}
            drop-shadow(0 6px 16px ${color}50) 
            drop-shadow(0 0 32px ${color}35)
            drop-shadow(0 0 48px ${color}20)
          `,
        }}
      />
    </div>
  );
}

export default Logo;