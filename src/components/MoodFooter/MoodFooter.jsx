import "./MoodFooter.css";

function MoodFooter({ onChangeMood }) {
  return (
    <div className="mood-footer">
      <div className="mood-footer-content">
        <p className="mood-footer-text">
          ¿Querés explorar otro estado de ánimo?
        </p>
        <button 
          onClick={onChangeMood} 
          className="mood-footer-button"
          type="button"
        >
          Cambiar mood
        </button>
      </div>
    </div>
  );
}

export default MoodFooter;