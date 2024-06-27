import { Montserrat, Roboto_Slab } from "next/font/google";

export const header = Montserrat({
  weight: ["300", "500", "600", "800", "900"],
  display: "block",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-nextjs-header",
});

export const serif = Roboto_Slab({
  weight: ["300", "400", "700"],
  display: "block",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-nextjs-serif",
});

export const variable = [header, serif].map((v) => v.variable).join(" ");