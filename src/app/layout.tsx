import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "A brutalist editorial portfolio inspired by the supplied design reference.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
