import type { Metadata } from "next";
import "./globals.css";
import { variable } from "@/fonts";
import "@/scss/main.scss";
import Footer from "@/components/Footer";

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
      <body className={variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
