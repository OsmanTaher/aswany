"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { labs, type Lab } from "@/data/labs";

// أيقونة GitHub الرسمية
function GithubIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// كارت التحميل الهيكلي (Skeleton Card)
function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white/60 p-4 sm:p-5 animate-pulse">
      <div>
        <div className="aspect-[16/10] w-full rounded-xl bg-neutral-200" />
        <div className="mt-4 h-5 w-3/4 rounded bg-neutral-200" />
        <div className="mt-2.5 h-3.5 w-full rounded bg-neutral-200" />
        <div className="mt-1.5 h-3.5 w-5/6 rounded bg-neutral-200" />
        <div className="mt-4 flex gap-1.5">
          <div className="h-5 w-14 rounded-md bg-neutral-200" />
          <div className="h-5 w-16 rounded-md bg-neutral-200" />
          <div className="h-5 w-12 rounded-md bg-neutral-200" />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 border-t border-neutral-100 pt-3">
        <div className="h-7 w-20 rounded-md bg-neutral-200" />
        <div className="h-7 w-16 rounded-md bg-neutral-200" />
      </div>
    </div>
  );
}

// إعدادات حركة الظهور المتتابع
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Lab[]>([]);

  useEffect(() => {
    // محاكاة تحميل البيانات لضمان تفعيل الـ Loading
    const timer = setTimeout(() => {
      setData(labs);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F1] text-[#141414] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          
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

          {/* ترويسة الصفحة */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-2 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#141414]">
              <span className="text-[#E03D46] font-serif leading-none">*</span>
              <h1 className="font-serif">More Projects</h1>
            </div>
            <p className="mt-4 text-xs sm:text-sm font-mono text-neutral-600 tracking-tight">
              Additional projects showcasing various technologies and learning experiences.
            </p>
          </div>

          {/* عرض حالة التحميل (Loading State) */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            /* شبكة المشاريع الحقيقية مع أنيميشن الدخول */
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch"
            >
              {data.map((item, index) => {
                const hasLive = Boolean(item.liveUrl && item.liveUrl.trim() !== "");
                const hasGithub = Boolean(item.githubUrl && item.githubUrl.trim() !== "");

                return (
                  <motion.article
                    key={item.slug || index}
                    variants={cardVariants}
                    className="group relative flex flex-col justify-between rounded-2xl border border-neutral-300/80 bg-white/70 p-4 sm:p-5 transition-all duration-300 hover:border-[#141414] hover:shadow-[4px_4px_0px_#141414] hover:-translate-y-1"
                  >
                    <div>
                      {/* حاوية الصورة المصغرة */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-100">
                        <SafeImage
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* عنوان المشروع */}
                      <h3 className="mt-4 text-base font-bold text-[#141414] tracking-tight">
                        {item.title}
                      </h3>

                      {/* الوصف */}
                      <p className="mt-1.5 text-xs font-mono text-neutral-500 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* وسوم التقنيات */}
                      {item.stack && item.stack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-neutral-300 bg-white px-2 py-0.5 text-[11px] font-mono text-neutral-700 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* أزرار الإجراءات المشروطة (Live & Source) */}
                    {(hasLive || hasGithub) && (
                      <div className="mt-6 flex items-center gap-2 border-t border-neutral-100 pt-3">
                        {/* زر GitHub Source */}
                        {hasGithub && (
                          <a
                            href={item.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-mono font-bold text-neutral-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#141414] hover:bg-[#141414] hover:text-white! hover:shadow-[2px_2px_0px_#141414]"
                          >
                            <GithubIcon size={14} className="shrink-0" />
                            <span>Source</span>
                          </a>
                        )}

                        {/* زر Live Demo */}
                        {hasLive && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-mono font-bold text-neutral-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E03D46] hover:bg-[#E03D46] hover:text-white hover:shadow-[2px_2px_0px_#141414]"
                          >
                            <ExternalLink size={13} strokeWidth={2.4} className="shrink-0" />
                            <span>Live</span>
                          </a>
                        )}
                      </div>
                    )}
                  </motion.article>
                );
              })}
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}