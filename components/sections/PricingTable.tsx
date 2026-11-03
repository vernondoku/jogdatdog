"use client";
import Link from "next/link";
import { useState } from "react";
import { pricing } from "@/data/site";
import { track } from "@/lib/tracking";
import Img from "../Img";

const Arrow = () => <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>;

export function PricingTable() {
  const [len, setLen] = useState<30 | 60>(30);
  const rows = len === 30 ? pricing.gym30 : pricing.gym60;
  const pick = (l: 30 | 60) => { setLen(l); track("pricing_toggle", { length: l }); };
  return (
    <div className="grid lg:grid-cols-2 gap-7 items-start">
      <div className="card-light flex flex-col overflow-hidden">
        <div className="bg-teal-dark text-white font-display font-black uppercase tracking-[0.08em] text-lg px-6 py-3.5 flex justify-between items-center gap-3 flex-wrap">
          <span>Dog gym sessions</span>
          <div className="inline-flex bg-white/15 rounded-full p-1 gap-1" role="group" aria-label="Session length">
            {[30, 60].map((l) => (
              <button key={l} type="button" onClick={() => pick(l as 30 | 60)} aria-pressed={len === l}
                className={`font-display font-black uppercase tracking-[0.08em] text-base px-5 min-h-[44px] rounded-full ${len === l ? "bg-navy text-white" : "text-white"}`}>{l} min</button>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-3.5 border-t border-navy/10 font-medium"><span>Intro session <span className="text-muted-dark text-sm">(first visit)</span></span><span className="font-display font-black text-[28px]">${pricing.intro}</span></div>
        {rows.map((r) => (
          <div key={r.name} className="flex justify-between items-center px-6 py-3.5 border-t border-navy/10 font-medium">
            <span>{r.name} <span className="text-muted-dark text-sm">({r.dogs} {r.dogs === 1 ? "dog" : "dogs"}{r.dogs <= 2 ? `, ${len} min` : ""})</span></span>
            <span className="font-display font-black text-[28px]">${r.price}</span>
          </div>
        ))}
        <p className="text-muted-dark text-[13px] px-6 py-4 m-0 leading-relaxed">Intro session is required for first-time dogs. Multi-dog sessions are for dogs from the same household.</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="card-light overflow-hidden">
          <div className="bg-teal-dark text-white font-display font-black uppercase tracking-[0.08em] text-lg px-6 py-3.5">Dog training</div>
          <div className="grid sm:grid-cols-[1fr_160px] gap-4 items-center p-6">
            <div className="flex flex-col gap-1.5"><strong className="text-xl">In-home training</strong><span className="text-muted-dark">{pricing.training.length}, 1:1, in your home</span><span className="disp not-italic text-navy text-[64px] mt-2">${pricing.training.price}</span></div>
            <Img name="ath2" alt="Black dog with a donut toy on the slatmill" sizes="(min-width: 640px) 160px, 100vw" className="w-full sm:w-40 h-56 sm:h-40 object-cover object-[center_35%] rounded-2xl" />
          </div>
        </div>
        <div className="card-light p-6 flex items-center gap-4 border-2 border-lime">
          <div className="flex flex-col gap-1 flex-1"><strong className="disp text-[26px]">Recurring exercise</strong><span className="text-muted-dark text-sm leading-relaxed">{pricing.recurringNote}</span></div>
          <Link href="/book/" aria-label="Set up recurring exercise" className="w-11 h-11 rounded-full bg-lime text-navy inline-flex items-center justify-center shrink-0"><Arrow /></Link>
        </div>
      </div>
    </div>
  );
}
