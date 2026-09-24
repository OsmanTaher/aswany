"use client";

import { scrollToTop } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="footer bg-[#FAF9F1] border-t-2 border-[#141414] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-4 text-xs font-mono font-bold uppercase tracking-[0.1em] text-[#141414]/70 md:flex-row md:items-center md:justify-between">
        {/* زر العودة لأعلى بنعومة وسلاسة */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 border-2 border-[#141414] bg-[#FAF9F1] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#141414] transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#141414] hover:text-[#CA484A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer w-fit"
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <span className="text-sm">↑</span>
        </button>

        <span>© {new Date().getFullYear()} ASWANY. All rights reserved.</span>
      </div>
    </footer>
  );
}
