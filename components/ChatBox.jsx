"use client";
import React, { useState, useEffect } from 'react';
import VoiceRecorder from '@/components/VoiceRecorder'; 
import { fetchExtraction, fetchPrice, fetchExplanation } from '@/lib/api';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleText = async (text) => {
    try {
      setLoading(true);

      // Étape 1 : Extraction des informations
      const extraction = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: text })
      }).then(r => r.json());

      // Étape 2 : Calcul du prix
      const price = await fetch("/api/price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(extraction)
      }).then(r => r.json());

      // Étape 3 : Explication finale
      const final = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ extraction, price })
      }).then(r => r.json());

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: final.text || "Devis généré avec succès !"
      }]);
    } catch (error) {
      console.error("Erreur:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Désolé, une erreur s'est produite. Veuillez réessayer."
      }]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    setMessages(prev => [...prev, { role: "user", content: input }]);
    await handleText(input);
    setInput("");
  };

  return (
    <div style={{
      background: "white",
      borderRadius: "12px",
      padding: "30px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
    }}>
      {/* Enregistreur vocal */}
      <VoiceRecorder 
        onFinalText={(t) => {
          setMessages(prev => [...prev, { role: "user", content: t }]);
          handleText(t);
        }}
        disabled={loading}
      />

      {/* Zone de messages */}
      <div style={{
        border: "1px solid #e5e5e5",
        padding: "20px",
        borderRadius: "8px",
        minHeight: "300px",
        maxHeight: "500px",
        overflowY: "auto",
        marginBottom: "20px",
        background: "#fafafa"
      }}>
        {messages.length === 0 ? (
          <p style={{ 
            color: "#999", 
            textAlign: "center",
            marginTop: "100px"
          }}>
            Commencez une conversation en parlant ou en écrivant...
          </p>
        ) : (
          messages.map((m, i) => (
            <div 
              key={i} 
              style={{
                marginBottom: "16px",
                padding: "12px",
                borderRadius: "8px",
                background: m.role === "user" ? "#e3f2fd" : "#f5f5f5",
                borderLeft: m.role === "user" ? "3px solid #0070f3" : "3px solid #666"
              }}
            >
              <strong style={{ 
                color: m.role === "user" ? "#0070f3" : "#666",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {m.role === "user" ? "Vous" : "Assistant"}
              </strong>
              <div style={{ 
                marginTop: "8px",
                lineHeight: "1.6",
                color: "#333"
              }}>
                {m.content}
              </div>
            </div>
          ))
        )}
        {loading && (
          <div style={{ 
            textAlign: "center", 
            color: "#666",
            fontStyle: "italic"
          }}>
            ⏳ Traitement en cours...
          </div>
        )}
      </div>

      {/* Zone de saisie */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Décrivez votre objet à transporter..."
          disabled={loading}
          style={{
            flex: 1,
            padding: "14px",
            fontSize: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px"
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            padding: "14px 24px",
            background: loading ? "#ccc" : "#0070f3",
            color: "white",
            fontWeight: "600",
            fontSize: "15px"
          }}
        >
          {loading ? "..." : "Envoyer"}
        </button>
      </div>
    </div>
  );
}
