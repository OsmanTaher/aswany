// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     formats: ["image/avif", "image/webp"],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // تفعيل ضغط Gzip و Brotli تلقائياً
  images: {
    formats: ["image/avif", "image/webp"], // تحويل الصور تلقائياً إلى AVIF عند دعم المتصفح لها (أخف بنسبة 30% من WebP)
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // إزالة الكونسول في بيئة الإنتاج لتقليص حجم ملفات JS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;