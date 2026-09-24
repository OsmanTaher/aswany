"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallback?: string;
};

export default function SafeImage({
  fallback = "/images/profile-placeholder.svg",
  src,
  alt,
  ...props
}: Props) {
  const source = String(src);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const currentSrc = failedSource === source ? fallback : source;

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (source !== fallback) setFailedSource(source);
      }}
    />
  );
}
