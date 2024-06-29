import type { Metadata } from "next";
import "./globals.css";
import "@/scss/main.scss";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: ["300", "500", "600", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Ecosta: Creating A Greener Tomorrow",
  description: "We are a non profit organization dedicated to empowering the future of Earth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
