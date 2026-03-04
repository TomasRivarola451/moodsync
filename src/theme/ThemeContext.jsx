import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { normalizeMood } from "../services/moodAI";

/* -------------------------------------------------- */
/* 🎨 Themes por mood - NEGRO PURO                   */
/* -------------------------------------------------- */

export const themesByMood = {
  neutral: {
    primaryColor: "#e5e7eb",
    secondaryColor: "#9ca3af",
    textColor: "#f9fafb",
    accentColor: "#14b8a6",
    animationStyle: "calm",
  },
  happy: {
    primaryColor: "#f9fafb",
    secondaryColor: "#bbf7d0",
    textColor: "#f9fafb",
    accentColor: "#22c55e",
    animationStyle: "bright",
  },
  sad: {
    primaryColor: "#e5e7eb",
    secondaryColor: "#94a3b8",
    textColor: "#e2e8f0",
    accentColor: "#3b82f6",
    animationStyle: "soft-slow",
  },
  chill: {
    primaryColor: "#e5e7eb",
    secondaryColor: "#a5b4fc",
    textColor: "#e5e7eb",
    accentColor: "#a78bfa",
    animationStyle: "calm",
  },
  energetic: {
    primaryColor: "#fefce8",
    secondaryColor: "#fed7aa",
    textColor: "#f9fafb",
    accentColor: "#f97316",
    animationStyle: "punchy",
  },
  tired: {
    primaryColor: "#e5e7eb",
    secondaryColor: "#9ca3af",
    textColor: "#e5e7eb",
    accentColor: "#64748b",
    animationStyle: "soft-slow",
  },
  angry: {
    primaryColor: "#fee2e2",
    secondaryColor: "#fca5a5",
    textColor: "#fef2f2",
    accentColor: "#ef4444",
    animationStyle: "firm",
  },
};

/* -------------------------------------------------- */
/* 🧠 Context                                         */
/* -------------------------------------------------- */

const ThemeContext = createContext({
  mood: "neutral",
  theme: themesByMood.neutral,
  setMoodFromApi: () => {},
});

export function ThemeProvider({ children }) {
  const [currentMood, setCurrentMood] = useState("neutral");

  const theme = useMemo(
    () => themesByMood[currentMood] || themesByMood.neutral,
    [currentMood]
  );

  useEffect(() => {
    const root = document.documentElement;
    
    // SOLO setear el atributo data-theme
    // El CSS de themes.css hace el resto
    root.setAttribute("data-theme", currentMood);
    
    // Ritmo de animación (esto está bien dejarlo)
    const motionDuration =
      theme.animationStyle === "punchy"
        ? "260ms"
        : theme.animationStyle === "firm"
        ? "280ms"
        : theme.animationStyle === "soft-slow"
        ? "520ms"
        : "380ms";
  
    root.style.setProperty("--motion-duration", motionDuration);
  }, [currentMood, theme]);

  const setMoodFromApi = (moodFromApi) => {
    const normalized = normalizeMood(moodFromApi || "neutral");
    setCurrentMood(normalized);
  };

  const value = useMemo(
    () => ({
      mood: currentMood,
      theme,
      setMoodFromApi,
    }),
    [currentMood, theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}