"use client";
import BookButton from "../BookButton";
import { PlayIcon, useVideo } from "../VideoModal";
import Img from "../Img";
import LazyVideo from "../LazyVideo";

const Wave = () => (
  <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute left-0 right-0 -bottom-px w-full h-[60px] md:h-[90px] block">
    <path d="M0 60 C 240 0 480 0 720 45 C 960 90 1200 90 1440 30 L1440 90 L0 90 Z" fill="#00B4B8" />
  </svg>
);

export function Hero() {
  const { open } = useVideo();
  const reel = () => open({ src: "/video/reel.mp4", title: "The pack in action · 0:44" });
  return (
    <section className="relative bg-gradient-to-br from-navy to-navy-deep overflow-hidden" aria-label="Hero">
      <div className="wrap grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center pt-12 md:pt-16 pb-28 md:pb-36">
        <div className="flex flex-col gap-6">
          <p className="kick rise d1">Mobile canine fitness + in-home training</p>
          <h1 className="disp rise d2 text-[64px] sm:text-[88px] lg:text-[112px] text-white">The gym<br /><span className="text-lime">comes to you.</span></h1>
          <p className="rise d3 font-display font-bold uppercase tracking-[0.18em] text-xs md:text-sm text-bone-mid">Your dog was born to run.</p>
          <p className="rise d3 text-lg md:text-xl text-[#D9E4EA] max-w-[520px] leading-relaxed">Mobile canine fitness and in-home training, delivered right to your driveway.</p>
          <div className="rise d4 flex gap-3 flex-wrap items-center">
            <BookButton placement="hero" />
            <button type="button" className="btn btn-ghost" onClick={reel}>
              <span aria-hidden="true" className="inline-flex w-[26px] h-[26px] rounded-full border-2 border-current items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
              Watch the action
            </button>
          </div>
          <div className="rise d4 flex gap-7 flex-wrap pt-4 border-t border-bone/15 font-display font-bold uppercase tracking-[0.1em] text-xs text-bone-mid">
            <span className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M4 18 18 6M10 6h8v8" /></svg>Fitness +<br />conditioning</span>
            <span className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /></svg>Mental<br />enrichment</span>
            <span className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11 12 4l9 7v9H3z" /></svg>Convenient<br />+ mobile</span>
          </div>
        </div>
        <div className="rise-x d2 relative rounded-[26px] overflow-hidden h-[480px] md:h-[600px] lg:h-[660px] shadow-[0_40px_80px_rgba(0,0,0,.45)] bg-navy-card">
          <Img name="hero-poster" priority alt="" aria-hidden="true" sizes="(min-width: 1024px) 48vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />
          <LazyVideo src="/video/hero-loop.mp4" poster="hero-poster" width={720} height={640}
            aria-label="Dogs running on the slatmill inside the Jog Dat Dog van" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy/75 pointer-events-none" />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-display font-bold uppercase tracking-[0.16em] text-[11px]">
            <span className="text-navy bg-lime px-2.5 py-1.5 rounded">The gym comes to you</span><span className="text-bone-mid">KC / 01</span>
          </div>
          <div aria-hidden="true" className="hidden md:block absolute -right-1.5 top-[38%] rotate-[8deg] bg-lime text-navy px-4 py-3.5 rounded-md shadow-xl font-display font-black uppercase leading-[0.95] text-[26px] w-[150px]">Less scrolling.<br />More tail wags.</div>
          <button type="button" onClick={reel}
            className="absolute left-4 bottom-4 inline-flex items-center gap-3 bg-navy/75 backdrop-blur border border-bone/20 rounded-full pl-2 pr-4 py-2 text-white hover:border-lime">
            <PlayIcon size={44} />
            <span className="flex flex-col text-left"><strong className="font-display font-bold uppercase tracking-[0.12em] text-xs">This is Jog Dat Dog</strong><span className="text-[13px] text-bone-mid">Watch the pack in action · 0:44</span></span>
          </button>
        </div>
      </div>
      <Wave />
    </section>
  );
}
