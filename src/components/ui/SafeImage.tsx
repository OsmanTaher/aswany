"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";

type Props = ImageProps & {
  fallback?: string;
};

export default function SafeImage({ fallback = "/images/profile-placeholder.svg", src, alt, ...props }: Props) {
  const initial = useMemo(() => String(src), [src]);
  const [currentSrc, setCurrentSrc] = useState<string>(initial);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
