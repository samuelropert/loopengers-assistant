"use client";
import { useState, useRef } from "react";

export default function VoiceRecorder({ onFinalText, disabled }) {
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);

  // Utilisation de Web Speech API au lieu de WebSocket
  // Plus simple et compatible avec tous les navigateurs modernes
  const startRecording = async () => {
    try {
      setError("");

      // Vérifier si le navigateur supporte Web Speech API
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        setError("Votre navigateur ne supporte pas la reconnaissance vocale.");
        return;
      }

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'fr-FR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setRecording(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript && onFinalText) {
          onFinalText(transcript);
        }
        setRecording(false);
      };

      recognition.onerror = (event) => {
        console.error("Erreur de reconnaissance:", event.error);
        setError("Erreur lors de la reconnaissance vocale. Réessayez.");
        setRecording(false);
      };

      recognition.onend = () => {
        setRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();

    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de démarrer l'enregistrement.");
      setRecording(false);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setRecording(false);
  };

  return (
    <div style={{ marginBottom: "24px", textAlign: "center" }}>
      {!recording ? (
        <button
          onClick={startRecording}
          disabled={disabled}
          style={{
            background: disabled ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "16px 32px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "30px",
            boxShadow: disabled ? "none" : "0 4px 15px rgba(102, 126, 234, 0.4)",
            cursor: disabled ? "not-allowed" : "pointer"
          }}
        >
          🎙️ Parler
        </button>
      ) : (
        <button
          onClick={stopRecording}
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            padding: "16px 32px",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "30px",
            boxShadow: "0 4px 15px rgba(245, 87, 108, 0.4)",
            animation: "pulse 1.5s infinite"
          }}
        >
          ⏹️ Arrêter
        </button>
      )}

      {error && (
        <p style={{ 
          color: "#e33", 
          marginTop: "12px", 
          fontSize: "14px" 
        }}>
          {error}
        </p>
      )}

      {recording && (
        <p style={{ 
          color: "#667eea", 
          marginTop: "12px", 
          fontSize: "14px",
          fontStyle: "italic"
        }}>
          🎤 Écoute en cours...
        </p>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
