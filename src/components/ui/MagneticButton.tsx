"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MouseEvent, useRef } from "react";

export default function MagneticButton({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.15);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1a1a1a] text-white! font-extrabold text-xs tracking-wider uppercase border-2 border-[#343630] shadow-[4px_4px_0px_#343630] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#343630] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
    >
      <span className="text-white! font-extrabold">{label}</span>
      <ArrowRight size={15} className="text-white!" />
    </motion.a>
  );
}