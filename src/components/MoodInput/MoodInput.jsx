import { useState } from "react";
import "./MoodInput.css";

function MoodInput({ onSubmit, loading, mood, isCompact, onChangeMood }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  return (
    <div className={`mood-input-container ${isCompact ? "mood-input-container--compact" : ""}`}>
      <div className="mood-input-card">
        {!isCompact ? (
          // MODO HERO: Estado inicial sin mood
          <>
            <h1 className="mood-input-title">¿Cómo te sentís hoy?</h1>
            <p className="mood-input-subtitle">
              Escribí cómo te sentís y te recomendamos música para acompañarte.
            </p>
            
            <form onSubmit={handleSubmit} className="mood-input-wrapper">
              <input
                type="text"
                className="mood-input-field"
                placeholder="Escribí algo como: 'me siento solo últimamente' o 'tengo mucha energía y ganas de hacer cosas'"
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="mood-input-submit"
                disabled={loading || !text.trim()}
              >
                {loading ? "Analizando..." : "Buscar canciones"}
              </button>
            </form>
          </>
        ) : (
          // MODO COMPACT: Ya hay mood detectado
          <div className="mood-input-compact">
            <div className="mood-badge">
              <span className="mood-badge-label">Mood detectado:</span>
              <span className="mood-badge-value">{mood}</span>
            </div>
            <button 
              onClick={onChangeMood}
              className="mood-change-button"
              type="button"
            >
              Cambiar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoodInput;