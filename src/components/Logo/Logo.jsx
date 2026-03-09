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

function Logo({ mood, size = "medium" }) {
  const color = getMoodColor(mood);

  return (
    <div className={`logo-container logo-${size}`}>
      <img
        src={logoSvg}
        alt="MoodSync"
        className="logo-svg"
        style={{
          filter: `
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