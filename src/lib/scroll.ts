import type { MouseEvent } from "react";


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