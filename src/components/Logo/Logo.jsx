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
  // Filtros CSS ajustados para colores precisos
  const filters = {
    neutral: "hue-rotate(0deg) saturate(1)",              // Teal #14b8a6
    happy: "hue-rotate(-55deg) saturate(1.3)",            // Verde #22c55e
    sad: "hue-rotate(200deg) saturate(1.2)",              // Azul #3b82f6
    energetic: "hue-rotate(-80deg) saturate(1.5) brightness(1.1)", // Naranja #f97316
    chill: "hue-rotate(100deg) saturate(1.3)",            // Violeta #a78bfa
    angry: "hue-rotate(-130deg) saturate(1.6) brightness(1.05)",  // Rojo #ef4444
    tired: "hue-rotate(20deg) saturate(0.5) brightness(0.8)",     // Gris #64748b
  };
  return filters[mood] || filters.neutral;
};

function Logo({ mood, size = "medium" }) {
  const color = getMoodColor(mood);
  const filter = getMoodFilter(mood);

  return (
    <div className={`logo-container logo-${size}`}>
      <img
        src={logoSvg}
        alt="MoodSync"
        className="logo-svg"
        style={{
          filter: `
            ${filter}
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