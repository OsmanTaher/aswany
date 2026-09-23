"use client";

import { useEffect, useState } from "react";

export default function Counter({ value, suffix = "", duration = 1200 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    let frame = 0;
    const startedAt = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (value - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return <>{display.toLocaleString()}{suffix}</>;
}
