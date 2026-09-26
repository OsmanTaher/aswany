"use client";

import { scrollToTop } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F1] border-t-2 border-[#141414] py-1.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#141414]/70 md:flex-row md:items-center md:justify-between">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 border-2 border-[#141414] bg-[#FAF9F1] px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#141414] transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_#141414] hover:text-[#CA484A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer w-fit leading-none"
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <span className="text-xs">↑</span>
        </button>

        <span>© {new Date().getFullYear()} ASWANY. All rights reserved.</span>
      </div>
    </footer>
  );
}