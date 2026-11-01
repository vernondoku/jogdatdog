"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { track } from "@/lib/tracking";

type Vid = { src: string; title: string } | null;
const Ctx = createContext<{ open: (v: NonNullable<Vid>) => void }>({ open: () => {} });

/** Wrap a page in this; any child can call useVideo().open({src,title}). One modal per page. */
export function VideoProvider({ children }: { children: React.ReactNode }) {
  const [vid, setVid] = useState<Vid>(null);
  const open = useCallback((v: NonNullable<Vid>) => { setVid(v); track("video_play", { video_title: v.title }); }, []);
  useEffect(() => {
    if (!vid) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setVid(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [vid]);
  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {vid && (
        <div className="fixed inset-0 z-[100] bg-[#001420]/95 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={vid.title} onClick={() => setVid(null)}>
          <div className="relative w-full max-w-[960px] bg-navy rounded-[18px] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setVid(null)} aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-11 h-11 rounded-full bg-lime text-navy inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
            <video src={vid.src} controls autoPlay playsInline className="w-full max-h-[80vh] bg-black"
              onEnded={() => track("video_complete", { video_title: vid.title })} />
            <div className="px-4 py-3 flex justify-between items-center gap-3 flex-wrap">
              <span className="kick">{vid.title}</span>
              <span className="text-xs text-muted">Jog Dat Dog · real sessions</span>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
export const useVideo = () => useContext(Ctx);

export function PlayIcon({ size = 44 }: { size?: number }) {
  return (
    <span aria-hidden="true" className="inline-flex rounded-full bg-lime items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,.4)]" style={{ width: size, height: size }}>
      <svg width={size / 2} height={size / 2} viewBox="0 0 24 24" fill="#00304A"><path d="M8 5v14l11-7z" /></svg>
    </span>
  );
}
