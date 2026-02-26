import { useEffect, useState } from "react";
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
  const [currentColor, setCurrentColor] = useState("#14b8a6");

  useEffect(() => {
    setCurrentColor(getMoodColor(mood));
  }, [mood]);

  return (
    <div
      className={`logo-container logo-${size}`}
      style={{ "--logo-color": currentColor }}
    >
      <img src={logoSvg} alt="MoodSync logo" className="logo-icon" />
      <span className="logo-text">MoodSync</span>
    </div>
  );
}

export default Logo;

