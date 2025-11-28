import './globals.css';

export const metadata = {
  title: "Loopengers Assistant",
  description: "Assistant vocal pour devis transport",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
