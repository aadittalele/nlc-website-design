import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: ["300", "500", "600", "800", "900"] });

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
      </body>
    </html>
  );
}
