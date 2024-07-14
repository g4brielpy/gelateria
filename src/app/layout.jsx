import "@/styles/globals.css";
import HeaderTop from "@/components/HeaderTop";
import { poppins } from "@/lib/fonts";

export const metadata = {
  title: "Gelateria",
  description: "Landing Page Sorveteria criado com Next, React e Tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        <HeaderTop />
        {children}
      </body>
    </html>
  );
}
