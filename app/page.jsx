import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ 
      padding: "60px 40px", 
      maxWidth: "800px", 
      margin: "0 auto",
      textAlign: "center" 
    }}>
      <h1 style={{ 
        fontSize: "3rem", 
        marginBottom: "20px",
        color: "#333" 
      }}>
        🚚 Loopengers
      </h1>
      <p style={{ 
        fontSize: "1.2rem", 
        marginBottom: "40px",
        color: "#666" 
      }}>
        Assistant Vocal pour Devis Transport
      </p>
      
      <Link 
        href="/assistant" 
        style={{ 
          display: "inline-block",
          background: "#0070f3",
          color: "white",
          padding: "16px 32px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.1rem",
          fontWeight: "600",
          transition: "all 0.2s ease"
        }}
      >
        Ouvrir l'assistant vocal →
      </Link>

      <div style={{ 
        marginTop: "60px", 
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          Comment ça marche ?
        </h2>
        <ol style={{ 
          textAlign: "left", 
          maxWidth: "500px", 
          margin: "0 auto",
          lineHeight: "1.8",
          color: "#666"
        }}>
          <li>Cliquez sur le bouton pour accéder à l'assistant</li>
          <li>Utilisez votre voix ou tapez votre demande</li>
          <li>Décrivez l'objet à transporter</li>
          <li>Recevez instantanément votre devis</li>
        </ol>
      </div>
    </main>
  );
}
