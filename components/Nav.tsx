"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { captureAttribution, track } from "@/lib/tracking";
import BookButton from "./BookButton";

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { captureAttribution(); }, []);
  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <div className="bg-teal text-navy font-display font-bold uppercase tracking-[0.16em] text-[11px] md:text-xs">
        <div className="wrap flex justify-between items-center min-h-[30px] gap-4">
          <span>A little run. A lot of happy.</span>
          <span className="hidden sm:inline">Kansas City&apos;s mobile dog gym</span>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur border-b border-bone/10">
        <nav className="wrap flex items-center justify-between gap-6 min-h-[72px]" aria-label="Primary">
          <Link href="/" aria-label={`${site.name} home`} className="flex items-center">
            <img src="/media/logo-badge-v2.png" alt={`${site.name} — Mobile Dog Gym`} className="h-11 md:h-12 w-auto" width="1000" height="518" />
          </Link>
          <div className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}
                className={`text-[15px] font-semibold py-2 border-b-2 transition-colors ${path === n.href ? "border-lime text-white" : "border-transparent text-bone hover:border-lime hover:text-white"}`}
                aria-current={path === n.href ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link href="/book/" className="btn btn-primary min-h-[44px] px-5 text-base">Book a Run</Link>
            <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden w-11 h-11 inline-flex items-center justify-center text-white">
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
              </svg>
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden wrap pb-6 flex flex-col bg-navy">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`py-4 border-b border-bone/10 disp not-italic text-[26px] ${path === n.href ? "text-lime" : "text-white"}`}>{n.label}</Link>
            ))}
            <a href={site.phoneHref} className="py-4 text-bone-mid">{site.phone}</a>
          </div>
        )}
      </header>
      {/* sticky mobile booking bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 flex items-center gap-2 px-4 py-2 bg-navy/95 backdrop-blur border-t border-bone/10" style={{ paddingBottom: "calc(8px + env(safe-area-inset-bottom))" }}>
        <a href={site.phoneHref} onClick={() => track("phone_click", { placement: "sticky_mobile" })} aria-label={`Call Jog Dat Dog at ${site.phone}`}
          className="inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[48px] px-4 rounded-full bg-navy-card border border-lime/60 text-white font-display font-bold uppercase tracking-[0.1em] text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>Call
        </a>
        <BookButton placement="sticky_mobile" className="flex-1 min-h-[48px] text-[17px]" />
      </div>
    </>
  );
}
