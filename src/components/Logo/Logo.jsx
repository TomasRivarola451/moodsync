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
  // Filtros CSS para cambiar el color del logo según mood
  const filters = {
    neutral: "hue-rotate(0deg) saturate(1)",           // Teal original
    happy: "hue-rotate(-30deg) saturate(1.2)",         // Verde
    sad: "hue-rotate(180deg) saturate(1.1)",           // Azul
    energetic: "hue-rotate(-90deg) saturate(1.3)",     // Naranja
    chill: "hue-rotate(90deg) saturate(1.2)",          // Violeta
    angry: "hue-rotate(-120deg) saturate(1.4)",        // Rojo
    tired: "grayscale(0.3) saturate(0.7)",             // Gris apagado
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