import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import MoodInput from "./components/MoodInput/MoodInput";
import MoodResultHeader from "./components/MoodResultHeader/MoodResultHeader";
import MoodResult from "./components/MoodResult/MoodResult";
import MoodParticles from "./components/MoodParticles/MoodParticles";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import AudioToggleButton from "./components/AudioToggleButton/AudioToggleButton";
import EmotionalBanner from "./components/EmotionalBanner/EmotionalBanner";
import { EmotionalAudioProvider } from "./audio/EmotionalAudioProvider";
import { getMoodFromText } from "./services/aiService";
import "./App.css";

function App() {
  const [mood, setMood] = useState(null);
  const [variant, setVariant] = useState(null);
  const [reason, setReason] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Estado visual: si ya hubo detección o no
  const hasDetectedMood = mood !== null;

  // Actualizar tema según mood
  useEffect(() => {
    if (mood) {
      document.documentElement.setAttribute("data-theme", mood);
    } else {
      document.documentElement.setAttribute("data-theme", "neutral");
    }
  }, [mood]);

  const handleMoodSubmit = async (text) => {
    setLoading(true);
    setError(null);

    try {
      const result = await getMoodFromText(text);
      
      if (result.error) {
        setError(result.error);
      } else {
        setMood(result.mood);
        setVariant(result.variant);
        setReason(result.reason);
        setMessage(result.message);
      }
    } catch (err) {
      setError("Error al analizar el estado. Intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeMood = () => {
    // Reset para volver al estado inicial
    setMood(null);
    setVariant(null);
    setReason(null);
    setMessage(null);
    setError(null);
  };

  return (
    <EmotionalAudioProvider mood={mood}>
      {/* Background animado */}
      <AnimatedBackground mood={mood} />
      
      {/* Particles por mood */}
      {mood && <MoodParticles mood={mood} />}

      {/* Layout principal */}
      <Layout hasDetectedMood={hasDetectedMood}>
        {/* Input: compacto si ya hay mood, hero si no */}
        <MoodInput
          onSubmit={handleMoodSubmit}
          loading={loading}
          mood={mood}
          isCompact={hasDetectedMood}
          onChangeMood={handleChangeMood}
        />

        {loading && (
          <div className="loading-indicator">
            <span className="loading-dot" />
            <span className="loading-dot" />
            <span className="loading-dot" />
            <span>Analizando tu estado...</span>
          </div>
        )}

        {/* Resultado: solo visible cuando hay mood */}
        {hasDetectedMood && (
          <>
            <MoodResultHeader
              mood={mood}
              variant={variant}
              message={message}
              reason={reason}
            />

            <MoodResult mood={mood} error={error} />

            {/* Banner emocional final */}
            <EmotionalBanner mood={mood} />
          </>
        )}
      </Layout>

      {/* Botón de audio toggle */}
      <AudioToggleButton />
    </EmotionalAudioProvider>
  );
}

export default App;