import { Poppins } from "@next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
});
