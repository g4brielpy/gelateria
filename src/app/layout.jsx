import "@/styles/globals.css";

export const metadata = {
  title: "Gelateria",
  description: "Landing Page Sorveteria criado com Next, React e Tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
