/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { scrollToTop } from "@/lib/scroll";

// الروابط بعد ضبطها لتبدأ من جذر الموقع وتوجيه HOME مباشرة لـ /
const links = [
  { href: "/", label: "HOME", mobileLabel: "Home", icon: Home },
  { href: "/#skills", label: "SKILLS", mobileLabel: "Skills", icon: UserRound },
  { href: "/#projects", label: "PROJECTS", mobileLabel: "Projects", icon: BriefcaseBusiness },
  { href: "/#contact", label: "CONTACT", mobileLabel: "Contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLogoTriggered, setIsLogoTriggered] = useState(false);

  const pathname = usePathname();

  // حساب التمرير والنسبة المئوية بلحظية وبدون أي تأخير
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // منطق الضغط على اللوجو: إذا كان في الرئيسية يصعد لأعلى، وإن كان في صفحة أخرى يعود للرئيسية
  const handleLogoClick = (e: React.MouseEvent) => {
    setOpen(false);
    setIsLogoTriggered(true);

    setTimeout(() => {
      setIsLogoTriggered(false);
    }, 1200);

    if (pathname === "/") {
      scrollToTop(e);
      window.history.replaceState(null, "", "/");
    }
  };

  // منطق الضغط على زر HOME: إذا كان في الرئيسية يصعد لأعلى وينظف الرابط
  const handleHomeClick = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (href === "/" && pathname === "/") {
      scrollToTop(e);
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAF9F1]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b-2 border-[#141414]" : "border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex h-20 xl:h-24 items-center justify-between gap-6 transition-all duration-300">
        
        {/* اللوجو التفاعلي: ينقلك دائماً لأول الصفحة الرئيسية */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group relative flex items-center gap-3.5 text-left outline-none cursor-pointer"
          aria-label="Home"
        >
          {/* مربع الحرف */}
          <span
            className="grid h-11 w-11 xl:h-12 xl:w-12 place-items-center border-2 border-[#141414] text-xl xl:text-2xl font-black text-white shadow-[2px_2px_0px_#141414] transition-colors duration-300"
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
        </Link>

        {/* روابط الديسكتوب المركزية */}
        <nav className="hidden items-center gap-2 xl:gap-4 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleHomeClick(e, href)}
              className="group relative inline-flex items-center gap-2 px-3.5 py-2 xl:px-4.5 xl:py-2.5 text-[12px] xl:text-[13px] font-black uppercase tracking-[0.1em] text-[#141414] transition-colors duration-150 hover:bg-[#141414] hover:!text-white"
            >
              <Icon size={15} strokeWidth={2.4} className="shrink-0 transition-colors group-hover:text-white" />
              <span className="transition-colors group-hover:text-white">{label}</span>

              {/* المربع الأحمر في الزاوية */}
              <span className="absolute right-0 top-0 w-2.5 h-2.5 bg-[#E03D46] opacity-0 transition-opacity duration-150 group-hover:opacity-100 pointer-events-none" />
            </Link>
          ))}
        </nav>

        {/* أزرار الإجراءات على اليمين: LABS + WHATSAPP */}
        <div className="hidden items-center gap-3.5 xl:gap-5 md:flex">
          
          {/* 1. زر الانتقال لصفحة المشاريع المستقلة (/projects) */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] px-5 py-2.5 xl:px-6 xl:py-3 text-[11px] xl:text-[13px] font-black uppercase tracking-[0.12em] text-[#141414] shadow-[3.5px_3.5px_0_#141414] xl:shadow-[4.5px_4.5px_0_#141414] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5.5px_5.5px_0_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <LayoutGrid size={16} strokeWidth={2.4} className="text-[#141414]" />
            <span>LABS</span>
          </Link>

          {/* 2. زر WHATSAPP المكبر */}
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 border-2 border-[#141414] bg-[#E03D46] px-6 py-2.5 xl:px-8 xl:py-3 text-[11px] xl:text-[13px] font-black uppercase tracking-[0.12em] text-white shadow-[3.5px_3.5px_0_#141414] xl:shadow-[4.5px_4.5px_0_#141414] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5.5px_5.5px_0_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <span className="absolute inset-0 z-0 bg-[#FFCA58] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 pointer-events-none" />
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

      {/* خط التقدم المكبر (Progress Line) */}
      {scrolled && (
        <div className="absolute -bottom-[3px] left-0 h-[4.5px] w-full bg-transparent overflow-hidden pointer-events-none">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full w-full bg-[#E03D46]"
          />
        </div>
      )}

      {/* قائمة الموبايل المنسدلة */}
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
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={href}
                    onClick={(e) => handleHomeClick(e, href)}
                    className="flex items-center gap-4 text-2xl font-serif font-black text-[#141414] hover:text-[#CA484A] transition-colors"
                  >
                    <Icon size={22} strokeWidth={2.2} className="text-[#141414]" />
                    <span>{mobileLabel}</span>
                  </Link>
                </motion.div>
              ))}

              {/* رابط صفحة المشاريع في الموبايل */}
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