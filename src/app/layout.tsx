import type { Metadata, Viewport } from "next";
import { Playfair_Display, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const viewport: Viewport = {
  themeColor: "#FAF9F1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aswany.me",
  ),

  title: {
    default: "Aswany | Full-Stack Developer",
    template: "%s | Aswany",
  },
  description:
    "Full-Stack Developer building scalable web applications with modern technologies. Transforming complex problems into elegant, user-centric solutions.",
  keywords: [
    "Aswany",
    "Aswany Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Aswany", url: "https://aswany.me" }],
  creator: "Aswany",

  icons: {
    icon: [
      { url: "/images/logo.webp" },
      { url: "/images/logo.webp", type: "image/webp" },
    ],
    shortcut: ["/images/logo.webp"],
    apple: [{ url: "/images/logo.webp", sizes: "180x180", type: "image/webp" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aswany.me",
    title: "Aswany | Full-Stack Developer",
    description:
      "Building scalable web applications with modern technologies. Turning ideas into fast, high-performance web solutions.",
    siteName: "Aswany Portfolio",
    images: [
      {
        url: "/images/logo.webp",
        width: 512,
        height: 512,
        alt: "Aswany Developer Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Aswany | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable web applications with modern technologies.",
    images: ["/images/logo.webp"],
    creator: "@aswany",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrains.variable} ${jakarta.variable}`}>
      <body className="bg-[#FAF9F1] text-[#141414] antialiased selection:bg-[#CA484A] selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}