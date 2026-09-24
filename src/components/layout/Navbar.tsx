/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { 
  Home, 
  UserRound, 
  BriefcaseBusiness, 
  Mail, 
  LayoutGrid,
  Menu, 
  X 
} from "lucide-react";

// أيقونة الواتساب الرسمية
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const links = [
  { href: "#home", label: "HOME", mobileLabel: "Home", icon: Home },
  { href: "#skills", label: "SKILLS", mobileLabel: "Skills", icon: UserRound },
  { href: "#projects", label: "PROJECTS", mobileLabel: "Projects", icon: BriefcaseBusiness },
  { href: "#contact", label: "CONTACT", mobileLabel: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoTriggered, setIsLogoTriggered] = useState(false);

  // حساب التمرير والنسبة المئوية بلحظية وبدون أي تأخير
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // التمرير السلس لأعلى الصفحة مع تفعيل أنيميشن الخط وخلفية الحرف
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setIsLogoTriggered(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsLogoTriggered(false);
    }, 1200);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAF9F1]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b-2 border-[#141414]" : "border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex h-20 xl:h-24 items-center justify-between gap-6 transition-all duration-300">
        
        {/* اللوجو التفاعلي: الضغط يصعد للأعلى وينفذ حركة الخط وخلفية الحرف */}
        <button
          onClick={handleScrollToTop}
          className="group relative flex items-center gap-3.5 text-left outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* مربع الحرف */}
          <span
            className={`grid h-11 w-11 xl:h-12 xl:w-12 place-items-center border-2 border-[#141414] text-xl xl:text-2xl font-black text-white shadow-[2px_2px_0px_#141414] transition-colors duration-300 `}
          >
            <img src="/images/logo.png" alt="logo" />
          </span>

          {/* نص الاسم مع الخط الأحمر السفلي */}
          <div className="relative pb-1">
            <span className="font-serif text-2xl sm:text-3xl xl:text-4xl font-black tracking-tight text-[#141414]">
              ASWANY<span className="text-[#E03D46]">.</span>
            </span>

            {/* الخط الأحمر الممتد بسلاسة */}
            <span
              className={`absolute bottom-0 left-0 h-[3.5px] w-full bg-[#E03D46] origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isLogoTriggered ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        </button>

        {/* روابط الديسكتوب المركزية مع تأثير الـ Hover بالصندوق الأسود والمربع الأحمر */}
        <nav className="hidden items-center gap-2 xl:gap-4 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group relative inline-flex items-center gap-2 px-3.5 py-2 xl:px-4.5 xl:py-2.5 text-[12px] xl:text-[13px] font-black uppercase tracking-[0.1em] text-[#141414] transition-colors duration-150 hover:bg-[#141414] hover:!text-white"
            >
              <Icon size={15} strokeWidth={2.4} className="shrink-0 transition-colors group-hover:text-white" />
              <span className="transition-colors group-hover:text-white">{label}</span>

              {/* المربع الأحمر الملتصق بالزاوية السفلية اليمنى والمتدلي للأسفل */}
              <span className="absolute right-0  top-0 w-2.5 h-2.5 bg-[#E03D46] opacity-0 transition-opacity duration-150 group-hover:opacity-100 pointer-events-none" />
            </a>
          ))}
        </nav>

        {/* أزرار الإجراءات على اليمين: زر صفحة المشاريع + زر الواتساب المكبرين */}
        <div className="hidden items-center gap-3.5 xl:gap-5 md:flex">
          
          {/* 1. زر الانتقال لصفحة المشاريع المستقلة (/projects) */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] xl:text-[13px] font-black uppercase tracking-[0.12em] text-[#141414] shadow-[3.5px_3.5px_0_#141414] xl:shadow-[4.5px_4.5px_0_#141414] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5.5px_5.5px_0_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <LayoutGrid size={16} strokeWidth={2.4} className="text-[#141414]" />
            <span>PROJECTS</span>
          </Link>

          {/* 2. زر WHATSAPP المكبر مع صعود اللون الأصفر */}
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 border-2 border-[#141414] bg-[#E03D46] px-6 py-2.5 xl:px-8 xl:py-3 text-[11px] xl:text-[13px] font-black uppercase tracking-[0.12em] text-white shadow-[3.5px_3.5px_0_#141414] xl:shadow-[4.5px_4.5px_0_#141414] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5.5px_5.5px_0_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {/* الخلفية الصفراء الصاعدة من الأسفل */}
            <span className="absolute inset-0 z-0 bg-[#FFCA58] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 pointer-events-none" />

            {/* المحتوى */}
            <span className="relative z-10 flex items-center gap-2.5 text-white group-hover:text-[#141414] transition-colors duration-200">
              <WhatsAppIcon className="shrink-0" />
              <span className="font-black tracking-widest">WHATSAPP</span>
            </span>
          </a>
        </div>

        {/* زر قائمة الموبايل */}
        <div className="lg:hidden">
          {open ? (
            <button
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center bg-[#E03D46] border-2 border-[#DCB766] text-white shadow-sm"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center border-2 border-[#141414] bg-[#FAF9F1] text-[#141414] shadow-[2px_2px_0_#141414]"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>

      </div>

      {/* خط التقدم المكبر (Progress Line) - تمت زيادة سماكته لـ 4.5px */}
      {scrolled && (
        <div className="absolute -bottom-[3px] left-0 h-[4.5px] w-full bg-transparent overflow-hidden pointer-events-none">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full w-full bg-[#E03D46]"
          />
        </div>
      )}

      {/* قائمة الموبايل المنسدلة مع تضمين رابط صفحة المشاريع */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t-2 border-[#141414] bg-[#FAF9F1] px-6 py-6 lg:hidden"
          >
            <nav className="flex flex-col space-y-5">
              {links.map(({ href, mobileLabel, icon: Icon }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 text-2xl font-serif font-black text-[#141414] hover:text-[#CA484A] transition-colors"
                >
                  <Icon size={22} strokeWidth={2.2} className="text-[#141414]" />
                  <span>{mobileLabel}</span>
                </motion.a>
              ))}

              {/* رابط إضافي لصفحة المشاريع في الموبايل */}
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-2xl font-serif font-black text-[#E03D46] pt-2"
              >
                <LayoutGrid size={22} strokeWidth={2.2} />
                <span>All Projects Page</span>
              </Link>
            </nav>
            <div className="border-b-2 border-[#141414] mt-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}