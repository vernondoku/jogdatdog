"use client";
import { steps } from "@/data/site";
import { PlayIcon, useVideo } from "../VideoModal";
import Img from "../Img";


export function WatchSection() {
  const { open } = useVideo();
  return (
    <section id="watch" className="bg-navy-deep border-t border-bone/10" aria-labelledby="w-h">
      <div className="wrap py-20 md:py-28 flex flex-col gap-9">
        <div className="reveal flex justify-between items-end gap-8 flex-wrap">
          <div className="flex flex-col gap-4"><p className="kick">See it in action</p><h2 id="w-h" className="disp text-[52px] md:text-[80px] text-white">Watch how<br />it works.</h2></div>
          <p className="text-muted max-w-[400px] m-0 leading-relaxed">Thirty seconds tells you more than a page of words. Real dogs, real sessions, no actors.</p>
        </div>
        <button type="button" onClick={() => open({ src: "/video/reel.mp4", title: "The pack in action · 0:44" })}
          className="reveal relative rounded-3xl overflow-hidden border-2 border-bone/10 hover:border-lime transition-colors group">
          <Img name="hero-desktop" alt="A lab and a pit mix running side by side on dual slatmills inside the mobile gym" sizes="(min-width: 1280px) 1200px, 100vw" className="w-full h-[320px] md:h-[560px] object-cover object-[center_40%]" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy/35 group-hover:bg-navy/25 transition-colors">
            <PlayIcon size={96} />
            <span className="flex flex-col items-center gap-1"><strong className="disp text-[32px] md:text-[40px] text-white">The pack in action</strong><span className="text-sm text-bone-mid">0:44 · sound on</span></span>
          </span>
        </button>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <button key={s.num} type="button" onClick={() => open({ src: s.video, title: s.title })}
              className="relative rounded-2xl overflow-hidden border-2 border-bone/10 hover:border-lime hover:-translate-y-1 transition-all text-left bg-navy-card">
              <Img name={s.poster} alt={s.alt} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="w-full h-[220px] object-cover object-[center_35%]" />
              <span className="absolute inset-0 flex items-end gap-3 p-4 bg-gradient-to-b from-transparent via-transparent to-navy/90">
                <PlayIcon size={44} />
                <span className="flex flex-col"><strong className="text-white">{s.title}</strong><span className="text-xs text-bone-mid">{s.caption}</span></span>
              </span>
            </button>
          ))}
        </div>
        <p className="text-muted text-[13px] m-0">Every clip is cut from Jog Dat Dog&apos;s own session footage.</p>
      </div>
    </section>
  );
}
