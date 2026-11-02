"use client";
import { useEffect, useRef } from "react";

type Props = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src" | "poster" | "preload"> & {
  src: string;
  /** basename in public/media (WebP variants exist), or a full path */
  poster: string;
};

/**
 * Silent looping background video that only starts downloading once it scrolls into view
 * (and after the page has hydrated), so it never competes with the LCP image, fonts or CSS.
 * Shows the WebP poster until then. Honors prefers-reduced-motion by leaving the poster up.
 */
export default function LazyVideo({ src, poster, className, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => {
      if (v.src) return;
      v.src = src;
      v.play().catch(() => {});
    };
    if (!("IntersectionObserver" in window)) { start(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { start(); io.disconnect(); }
    }, { rootMargin: "200px" });
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  const posterUrl = poster.startsWith("/") ? poster : `/media/${poster}-800.webp`;
  return <video ref={ref} poster={posterUrl} muted loop playsInline preload="none" className={className} {...rest} />;
}
