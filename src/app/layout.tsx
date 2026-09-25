import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#FAF9F1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://aswany.pro",
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
  authors: [{ name: "Aswany", url: "https://aswany.pro" }],
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
    url: "https://aswany.pro",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#FAF9F1] text-[#141414] antialiased selection:bg-[#E03D46] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
