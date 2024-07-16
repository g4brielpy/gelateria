import "@/styles/globals.css";
import { poppins } from "@/lib/fonts";

import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
