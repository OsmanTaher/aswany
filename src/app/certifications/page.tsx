"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Calendar, ExternalLink, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { certifications, type Certification } from "@/data/certifications";

// هيكل كارت التحميل (Skeleton Loader)
function CardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-neutral-300 bg-white/70 animate-pulse">
      <div className="h-44 sm:h-52 w-full bg-neutral-200" />
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="h-5 w-4/5 rounded bg-neutral-200 mb-3" />
          <div className="h-4 w-1/3 rounded bg-neutral-200 mb-4" />
          <div className="h-3.5 w-1/2 rounded bg-neutral-200 mb-6" />
        </div>
        <div className="h-10 w-full rounded-lg bg-neutral-200" />
      </div>
    </div>
  );
}

// متغيرات أنيميشن الظهور المتتابع
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CertificationsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Certification[]>([]);

  useEffect(() => {
    // محاكاة تحميل البيانات لتفعيل الـ Skeleton بسلاسة
    const timer = setTimeout(() => {
      setData(certifications);
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F1] text-[#141414] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* زر الرجوع للرئيسية */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] px-4 py-2 text-xs font-mono font-bold tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <ArrowLeft size={14} strokeWidth={2.4} />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* ترويسة الصفحة المطابقة للصورة */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#141414] tracking-tight">
              Certifications{" "}
              <span className="text-[#E89D25] font-serif">&amp;</span>{" "}
              Achievements
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-mono text-neutral-600 tracking-tight max-w-xl mx-auto leading-relaxed">
              Professional certifications that validate my skills, knowledge,
              and commitment to continuous learning.
            </p>
          </div>

          {/* حالة التحميل (Loading State) */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <CardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            /* شبكة كروت الشهادات مع تأثير الدخول الحركي */
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
            >
              {data.map((item, index) => (
                <motion.article
                  key={index}
                  variants={cardVariants}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#141414] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_#141414]"
                >
                  <div>
                    {/* النصف العلوي: الصورة الكبيرة للشهادة مع أنيميشن التكبير اللطيف */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b-2 border-[#141414] bg-neutral-100">
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* تفاصيل الشهادة */}
                    <div className="p-4 sm:p-5 pb-2 sm:pb-2">
                      <h2 className="font-serif text-base sm:text-lg font-black text-[#141414] leading-snug line-clamp-2 mb-1.5 group-hover:text-[#CA484A] transition-colors">
                        {item.title}
                      </h2>

                      {/* جهة الإصدار */}
                      <p className="text-xs sm:text-sm font-semibold text-[#8F836B] mb-2">
                        {item.description}
                      </p>

                      {/* تاريخ الإصدار بخط أوضح ومسافة أقرب للزر */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-mono text-neutral-600 font-medium mb-3">
                        <Calendar
                          size={14}
                          className="shrink-0 text-neutral-500"
                        />
                        <span>{item.data}</span>
                      </div>
                    </div>
                  </div>

                  {/* زر التحقق من الشهادة (Verify Credential) */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] py-2 px-4 text-xs font-mono font-bold uppercase tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414] transition-all duration-200 hover:bg-[#141414] hover:!text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink
                        size={13}
                        strokeWidth={2.4}
                        className="shrink-0"
                      />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* زر عرض كافة الشهادات على LinkedIn بالأسفل */}
          <div className="mt-14 sm:mt-16 flex justify-center">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-[#141414] bg-white px-7 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#141414] shadow-[4px_4px_0px_#141414] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <Trophy
                size={16}
                className="text-[#E89D25] shrink-0 group-hover:scale-110 transition-transform"
              />
              <span>View All Certifications on LinkedIn</span>
              <ExternalLink
                size={14}
                strokeWidth={2.4}
                className="shrink-0 text-neutral-500 group-hover:text-[#141414]"
              />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
