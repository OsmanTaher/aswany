// src/lib/scroll.ts
import type { MouseEvent } from "react";

/**
 * دالة للتمرير السلس إلى أعلى الصفحة
 */
export const scrollToTop = (e?: MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};