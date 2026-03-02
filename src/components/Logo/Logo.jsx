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

function Logo({ mood }) {
  const color = getMoodColor(mood);

  return (
    <div className="logo-container">
      <img
        src={logoSvg}
        alt="MoodSync"
        className="logo-icon"
        style={{
          filter: `drop-shadow(0 0 20px ${color}40)`,
          transition: "filter 0.6s ease",
        }}
      />
      <span
        className="logo-text"
        style={{
          color,
          transition: "color 0.6s ease",
        }}
      >
        MOODSYNC
      </span>
    </div>
  );
}

export default Logo;


