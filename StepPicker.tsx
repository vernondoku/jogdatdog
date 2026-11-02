"use client";
import { useState } from "react";
import { steps } from "@/data/site";
import { track } from "@/lib/tracking";
import LazyVideo from "../LazyVideo";

const Arrow = () => <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>;

export function StepPicker() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <div className="relative rounded-[22px] overflow-hidden h-[420px] md:h-[620px] bg-navy-card shadow-[0_30px_60px_rgba(0,48,74,.25)]">
        <LazyVideo key={s.video} src={s.video} poster={s.poster} width={1280} height={720} aria-label={s.alt} className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        <div className="absolute left-4 right-4 bottom-4 bg-white/95 rounded-xl px-4 py-3 flex justify-between items-center gap-3 font-display font-bold uppercase tracking-[0.14em] text-xs text-navy">
          <span>{s.num} / 04</span><span>{s.caption}</span>
        </div>
      </div>
      <div className="flex flex-col">
        {steps.map((st, k) => (
          <button key={st.num} type="button" onClick={() => { setI(k); track("step_view", { step: st.title }); }} aria-pressed={i === k}
            className="flex gap-4 items-start text-left border-t last:border-b border-navy/10 py-5 min-h-[44px] group">
            <span className="font-display font-bold text-xs text-muted-dark tracking-[0.1em] w-7 shrink-0 pt-1.5">{st.num}</span>
            <span className="flex flex-col flex-1">
              <span className={`disp text-[26px] ${i === k ? "text-teal-dark" : "text-navy group-hover:text-teal-dark"}`}>{st.title}</span>
              {i === k && <span className="text-muted-dark text-sm leading-relaxed mt-2 max-w-[380px]">{st.desc}</span>}
            </span>
            <span className="text-teal-dark pt-1 shrink-0" aria-hidden="true"><Arrow /></span>
          </button>
        ))}
        <p className="text-muted-dark text-[13px] mt-4 m-0">Tap a step to watch it. Clips are cut from real Jog Dat Dog sessions.</p>
      </div>
    </div>
  );
}
