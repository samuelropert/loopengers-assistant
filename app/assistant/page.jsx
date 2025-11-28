"use client";
import ChatBox from '@/components/ChatBox';
import Link from 'next/link';

export default function AssistantPage() {
  return (
    <div style={{ 
      maxWidth: "700px", 
      margin: "40px auto", 
      padding: "0 20px" 
    }}>
      <div style={{ 
        marginBottom: "30px",
        textAlign: "center"
      }}>
        <Link 
          href="/" 
          style={{ 
            color: "#0070f3", 
            textDecoration: "none",
            fontSize: "14px"
          }}
        >
          ← Retour à l'accueil
        </Link>
        <h1 style={{ 
          marginTop: "20px",
          fontSize: "2rem",
          color: "#333"
        }}>
          Assistant Devis Live
        </h1>
        <p style={{ 
          color: "#666",
          marginTop: "10px" 
        }}>
          Loopengers • Voix optimisée
        </p>
      </div>
      
      <ChatBox />
    </div>
  );
}
