import "./MoodResultHeader.css";
import { moodSongs } from "../../data/moodSongs";
import { normalizeMood } from "../../services/moodAI";

function MoodResultHeader({ mood, variant, message, reason }) {
  if (!mood) return null;

  const normalizedMood = normalizeMood(mood);
  const moodKey = normalizedMood || mood;
  const moodData = moodKey ? moodSongs[moodKey] || null : null;

  const title = (moodData?.title || "Sesión emocional").toUpperCase();
  const subtitle = moodData
    ? `Parece que estás ${moodData.label}${
        variant ? ` (${variant})` : ""
      }`
    : `Estado detectado: ${moodKey}`;

  const displayMessage = message || moodData?.description;
  const displayReason = reason;
  const quote = moodData?.quote;

  return (
    <section className="mood-result-header">
      <div className="mood-result-header-card accent-glow">
        <div className="mood-result-header-top">
          <p className="mood-result-header-kicker">
            Estado emocional detectado
          </p>
          <h2 className="mood-result-header-title">{title}</h2>
          <p className="mood-result-header-subtitle">{subtitle}</p>
        </div>

        {displayMessage && (
          <p className="mood-result-header-message">{displayMessage}</p>
        )}

        {displayReason && (
          <p className="mood-result-header-reason">{displayReason}</p>
        )}

        {quote && (
          <p className="mood-result-header-quote">“{quote}”</p>
        )}
      </div>
    </section>
  );
}

export default MoodResultHeader;

