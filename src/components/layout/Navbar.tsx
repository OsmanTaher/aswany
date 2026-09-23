"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { 
  Home, 
  UserRound, 
  BriefcaseBusiness, 
  Mail, 
  ArrowRightToLine, 
  Menu, 
  X 
} from "lucide-react";

// أيقونة الواتساب الدقيقة
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3-.5.7-.5 1 0l.8 1.4c.2.4.1.8-.2 1l-.4.3c-.2.2-.2.5 0 .8 1 1.4 2 2.3 3.3 2.7.3.1.6 0 .8-.2l.4-.4c.3-.3.7-.3 1-.1l1.4.8c.4.3.4.8 0 1.2-.5.5-1.3.8-2.1.5-2.7-1-5.2-3.4-6.4-6.2-.4-.9-.1-1.8.4-2.3z" fill="currentColor" stroke="none" />
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

  // حساب التمرير والنسبة المئوية بلحظية وبدون أي تأخير (Real-Time 60fps)
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAF9F1]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b-2 border-[#141414]" : "border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex h-20 items-center justify-between gap-6">
        
        {/* اللوجو: الحرف الأسود + ASWANY */}
        <a href="#home" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center border-2 border-[#141414] bg-[#141414] text-xl font-black text-white shadow-[2px_2px_0px_#141414]">
            A
          </span>
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#141414]">
            ASWANY<span className="text-[#CA484A]">.</span>
          </span>
        </a>

        {/* روابط الديسكتوب المركزية مع تأثير الـ Hover بالصندوق الأسود والمربع الأحمر */}
        <nav className="hidden items-center gap-4 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group relative inline-flex items-center justify-center px-4 py-2.5 transition-all duration-150"
            >
              {/* المظهر الافتراضي للرابط */}
              <span className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.1em] text-[#141414] transition-opacity duration-150 group-hover:opacity-0">
                <Icon size={15} strokeWidth={2.4} />
                <span>{label}</span>
              </span>

              {/* مظهر الـ Hover: صندوق أسود + نص أبيض + المربع الأحمر البارز في الزاوية */}
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 bg-[#141414] px-4 py-2 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-[2px_2px_0px_#141414] pointer-events-none">
                <Icon size={15} strokeWidth={2.2} className="text-white shrink-0" />
                <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  {label}
                </span>

                {/* المربع الأحمر البارز في الركن السفلي الأيمن */}
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#E03D46]" />
              </span>
            </a>
          ))}
        </nav>

        {/* أزرار الديسكتوب */}
        <div className="hidden items-center gap-3.5 md:flex">
          {/* زر HIRE ME */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-[#141414] bg-[#FAF9F1] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.1em] text-[#141414] shadow-[3.5px_3.5px_0_#141414] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <ArrowRightToLine size={14} strokeWidth={2.4} />
            <span>HIRE ME</span>
          </a>

          {/* زر WHATSAPP مع أنيميشن صعود اللون الأصفر من الأسفل للأعلى */}
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-2 border-2 border-[#141414] bg-[#E03D46] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.1em] text-white shadow-[3.5px_3.5px_0_#141414] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_#141414] active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            {/* الخلفية الصفراء التي تصعد من الأسفل إلى الأعلى */}
            <span className="absolute inset-0 z-0 bg-[#FFCA58] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 pointer-events-none" />

            {/* محتوى الزر يعلو الخلفية ويتحول النص والأيقونة للون الأسود */}
            <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-[#141414] transition-colors duration-200">
              <WhatsAppIcon className="shrink-0" />
              <span className="font-black">WHATSAPP</span>
            </span>
          </a>
        </div>

        {/* زر القائمة في الموبايل */}
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

      {/* خط التقدم الحسابي اللحظي (Progress Line) - يظهر فور بدء التمرير وينقص ويزيد لحظياً */}
      {scrolled && (
        <div className="absolute -bottom-[2.5px] left-0 h-[2.5px] w-full bg-transparent overflow-hidden pointer-events-none">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full w-full bg-[#CA484A]"
          />
        </div>
      )}

      {/* قائمة الموبايل المنسدلة */}
      {open && (
        <div className="border-t-2 border-[#141414] bg-[#FAF9F1] px-6 py-6 lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-5">
            {links.map(({ href, mobileLabel, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-2xl font-serif font-black text-[#141414] hover:text-[#CA484A] transition-colors"
              >
                <Icon size={22} strokeWidth={2.2} className="text-[#141414]" />
                <span>{mobileLabel}</span>
              </a>
            ))}
          </nav>
          <div className="border-b-2 border-[#141414] mt-6" />
        </div>
      )}
    </header>
  );
}