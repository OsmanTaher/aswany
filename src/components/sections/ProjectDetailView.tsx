"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import Reveal from "@/components/ui/Reveal";
import {
  ArrowLeft,
  ExternalLink,
  ArrowUpRight,
  Zap,
  Target,
  Clock,
  Shield,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const defaultFeatures = [
  { text: "level security." },
  {
    text: "by-design architecture, ensuring data protection, system stability, and scalability for future growth.",
  },
  { text: "Students browse and enroll in courses بسهولة" },
  { text: "Instructors create and manage their course content" },
  {
    text: "Admins control the entire platform through a centralized dashboard",
  },
  { text: "Role-based authentication system (Student / Instructor / Admin)" },
  { text: "Full protection for all data and APIs" },
  { text: "Clean and user-friendly interface for students" },
  {
    text: "Powerful Admin Dashboard for managing content, students, and courses",
  },
  { text: "Advanced role-based access control (Student / Instructor / Admin)" },
];

const featureIcons = [Zap, Target, Clock, Shield];

interface ProjectDetailViewProps {
  project: {
    title: string;
    slug: string;
    category?: string;
    type?: string;
    year?: string;
    number?: string;
    description: string;
    image: string;
    liveUrl?: string;
    stack?: string[];
    technologies?: string[];
    features?: string[];
    gallery?: string[];
  };
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  // مصفوفة الصور المعتمدة (تستخدم صور gallery للمشروع مباشرة)
  const galleryScreens: string[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image || `/projects/${project.slug}.png`];

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const techStack = project.stack ||
    project.technologies || ["Next.js", "TypeScript", "Tailwind CSS"];

  const featuresList =
    project.features && project.features.length > 0
      ? project.features.map((f) => ({ text: f }))
      : defaultFeatures;

  const projectNumber = project.number || "01";
  const projectType = project.type || project.category || "E-COMMERCE";
  const projectYear = project.year || "2026";
  const projectLiveUrl = project.liveUrl || "#";

  // دوال التنقل في نافذة المعاينة
  const nextLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryScreens.length);
  }, [galleryScreens.length]);

  const prevLightboxImage = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev - 1 + galleryScreens.length) % galleryScreens.length,
    );
  }, [galleryScreens.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // الاستماع لأزرار الكيبورد: الأسهم لليمين واليسار وزر Esc للخروج
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      } else if (event.key === "ArrowRight") {
        nextLightboxImage();
      } else if (event.key === "ArrowLeft") {
        prevLightboxImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextLightboxImage, prevLightboxImage]);

  return (
    <div className="bg-[#FAF9F1]">
      {/* 1. قسم الواجهة وتفاصيل المشروع (خالٍ من الخطوط السفلية) */}
      <section className="pt-8 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* زر العودة للمشاريع */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] px-4 py-2 text-xs font-mono font-bold tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              <ArrowLeft size={14} strokeWidth={2.4} />
              <span>Back to Projects</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* الجانب الأيسر: شاشة الماك الرئيسية وشريط المعاينة الأفقي */}
            <div className="lg:col-span-7">
              <Reveal>
                {/* إطار شاشة الماك */}
                <div className="relative bg-[#141414] rounded-2xl p-3 sm:p-4 border-2 border-[#141414] shadow-[6px_6px_0px_#141414]">
                  {/* شريط المتصفح */}
                  <div className="flex items-center justify-between px-2 py-1 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block" />
                    </div>

                    <div className="bg-neutral-900 border border-neutral-700 px-4 py-0.5 rounded text-[11px] font-mono text-neutral-400 truncate max-w-[220px] sm:max-w-[320px]">
                      {projectLiveUrl.replace(/^https?:\/\//, "") ||
                        "https://gomla-store.online"}
                    </div>

                    <div className="w-12 h-1.5 rounded-full bg-neutral-700/50 hidden sm:block" />
                  </div>

                  {/* الصورة داخل الشاشة */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-950 border border-neutral-800">
                    <SafeImage
                      src={project.image}
                      alt={project.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* شريط التمرير الأفقي مع مؤشر التتبع المطابق للصورة 52 */}
                <div className="mt-6">
                  <div
                    className="flex items-center gap-4 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth
                               [scrollbar-width:auto] [scrollbar-color:#141414_#EAE7DF]
                               [&::-webkit-scrollbar]:h-5
                               [&::-webkit-scrollbar-track]:bg-[#EAE7DF]
                               [&::-webkit-scrollbar-thumb]:bg-[#141414]"
                  >
                    {galleryScreens.map((screen, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveScreenIndex(idx);
                          openLightbox(idx);
                        }}
                        className={`relative aspect-[16/10] w-32 sm:w-40 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                          activeScreenIndex === idx
                            ? "border-[#E03D46] shadow-[3px_3px_0px_#141414] -translate-y-1"
                            : "border-[#141414] opacity-80 hover:opacity-100 hover:-translate-y-0.5"
                        }`}
                      >
                        <SafeImage
                          src={screen}
                          alt={`thumb-${idx}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* الجانب الأيمن: بيانات دراسة الحالة */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal delay={0.08}>
                {/* الشارات العلوية */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="bg-[#E03D46] border-2 border-[#141414] px-3 py-1 flex items-center justify-center">
                    <span className="font-mono font-black text-xs text-white tracking-wider leading-none">
                      {projectNumber}
                    </span>
                  </div>

                  <div className="bg-[#FAF9F1] border-2 border-[#141414] px-3 py-1 flex items-center justify-center">
                    <span className="font-mono font-extrabold text-[11px] text-[#141414] tracking-[0.14em] uppercase leading-none">
                      {projectType}
                    </span>
                  </div>

                  <div className="bg-[#FFCA58] border-2 border-[#141414] px-3.5 py-1 flex items-center justify-center">
                    <span className="font-mono font-black text-[11px] text-[#141414] tracking-wider leading-none">
                      {projectYear}
                    </span>
                  </div>
                </div>

                {/* العنوان الرئيسي */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#141414] tracking-tight leading-tight mb-4">
                  {project.title}
                </h1>

                {/* خط فاصل خفيف وناعم */}
                <div className="w-full border-b border-[#141414]/15 my-4" />

                {/* الوصف */}
                <p className="text-[#6B6A65] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* كبسولات التقنيات باللون الذهبي */}
                <div className="mb-6">
                  <span className="block text-[11px] font-mono font-bold tracking-[0.16em] text-[#8F836B] uppercase mb-3">
                    TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#FFCA58] border border-[#141414] px-3 py-1 text-xs font-mono font-bold text-[#141414] uppercase tracking-wider shadow-[1px_1px_0px_#141414]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* وسم السنة */}
                <div className="mb-8">
                  <span className="block text-[11px] font-mono font-bold tracking-[0.16em] text-[#8F836B] uppercase mb-2">
                    PROJECT YEAR
                  </span>
                  <div className="inline-block border-2 border-[#141414] bg-[#FAF9F1] px-4 py-1.5 font-mono text-xs font-bold shadow-[2px_2px_0px_#141414]">
                    {projectYear}
                  </div>
                </div>

                {/* زر زيارة الموقع */}
                <a
                  href={projectLiveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#141414] bg-[#E03D46] py-4 px-6 text-white text-xs sm:text-sm font-black uppercase tracking-[0.14em] shadow-[4px_4px_0px_#141414] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
                >
                  <span>VISIT WEBSITE</span>
                  <ExternalLink size={16} strokeWidth={2.4} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم المميزات الرئيسية (خالٍ من الخطوط السفلية) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3.5 mb-14">
            <div className="bg-[#E03D46] border-2 border-[#141414] px-4 py-1.5 flex items-center justify-center shadow-[2px_2px_0px_#141414]">
              <span className="font-serif font-black text-2xl sm:text-3xl text-white leading-none">
                02
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#141414] tracking-tight">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {featuresList.map((feature, index) => {
              const IconComponent = featureIcons[index % featureIcons.length];
              const featureNumber = String(index + 1).padStart(2, "0");

              return (
                <Reveal key={index} delay={index * 0.04}>
                  <div className="border-2 border-[#141414] bg-[#FAF9F1] p-5 sm:p-6 shadow-[3.5px_3.5px_0px_#141414] flex items-start gap-4 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#141414]">
                    <div className="w-11 h-11 bg-[#E03D46] text-white flex items-center justify-center shrink-0 border border-[#141414] shadow-sm">
                      <IconComponent size={20} strokeWidth={2.2} />
                    </div>

                    <div className="flex-1">
                      <span className="block text-xs font-mono font-bold text-[#8F836B] mb-1">
                        {featureNumber}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#141414] leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. معرض الشاشات الكامل (خالٍ من الخطوط السفلية) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
            <div className="flex items-center gap-3.5">
              <div className="bg-[#E03D46] border-2 border-[#141414] px-4 py-1.5 flex items-center justify-center shadow-[2px_2px_0px_#141414]">
                <span className="font-serif font-black text-2xl sm:text-3xl text-white leading-none">
                  03
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#141414] tracking-tight">
                Gallery
              </h2>
            </div>

            <span className="font-serif italic text-lg sm:text-xl text-[#8F836B]">
              {galleryScreens.length} Screens
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {galleryScreens.map((screen, index) => (
              <Reveal key={index} delay={index * 0.03}>
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[16/10] w-full rounded-md overflow-hidden border-2 border-[#141414] bg-neutral-900 cursor-pointer shadow-[3px_3px_0px_#141414] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#141414] transition-all duration-200"
                >
                  <SafeImage
                    src={screen}
                    alt={`Screen ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold">
                    View
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. قسم الخاتمة والدعوة للعمل مع إصلاح زر START A CONVERSATION بالكامل */}
      <section className="relative bg-[#E03D46] py-24 sm:py-32 overflow-hidden text-center text-white">
        {/* المربعات الديكورية الشفافة */}
        <div className="absolute -top-10 -left-10 w-48 h-48 border-2 border-white/20 rotate-[-15deg] pointer-events-none" />
        <div className="absolute -bottom-14 -right-10 w-64 h-64 border-2 border-white/20 rotate-[12deg] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-4">
              Have a project in mind?
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-white/90 text-base sm:text-xl font-normal mb-10 max-w-2xl mx-auto">
              Let&apos;s build something extraordinary together.
            </p>
          </Reveal>

          {/* زر START A CONVERSATION - تم ضبط لونه الأسود الصريح ليظهر بوضوح تام */}
          <Reveal delay={0.16}>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white !text-[#141414] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-[0.14em] border-2 border-[#141414] shadow-[4px_4px_0px_#141414] transition-all duration-200 hover:bg-[#141414] hover:!text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
            >
              <span className="font-mono font-black tracking-wider !text-current">
                START A CONVERSATION
              </span>
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="shrink-0 !text-current"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. نافذة المعاينة الكبيرة (تدعم الأسهم وزر Esc) */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* زر الإغلاق */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full border border-neutral-700 hover:border-white transition-colors cursor-pointer z-50"
            aria-label="Close Preview (Esc)"
            title="Press Esc to close"
          >
            <X size={24} />
          </button>

          {/* زر السابق */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white bg-neutral-900/80 border border-neutral-700 p-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer z-50"
            aria-label="Previous image (Left Arrow)"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={26} />
          </button>

          {/* صورة المعاينة */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[16/10] bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl"
          >
            <SafeImage
              src={galleryScreens[lightboxIndex]}
              alt={`Preview ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* زر التالي */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white bg-neutral-900/80 border border-neutral-700 p-3 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer z-50"
            aria-label="Next image (Right Arrow)"
            title="Next (Right Arrow)"
          >
            <ChevronRight size={26} />
          </button>

          {/* نقاط الترقيم في الأسفل */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-5 flex items-center gap-2 max-w-md overflow-x-auto px-4 py-2"
          >
            {galleryScreens.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all shrink-0 cursor-pointer ${
                  lightboxIndex === i
                    ? "bg-[#E03D46] scale-125"
                    : "bg-neutral-600 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
