"use client";
import { useState } from "react";
import { benefits, benefitTags } from "@/data/site";
import Img from "../Img";


export function PackGrid() {
  const [f, setF] = useState("all");
  const list = benefits.map((d, i) => ({ ...d, num: `0${i + 1}` })).filter((d) => f === "all" || d.tag === f);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center gap-5 flex-wrap">
        <div className="flex gap-2.5 flex-wrap" role="group" aria-label="Filter benefits">
          {benefitTags.map((t) => (
            <button key={t.key} type="button" onClick={() => setF(t.key)} aria-pressed={f === t.key}
              className={`font-display font-black uppercase tracking-[0.08em] text-base px-5 min-h-[44px] rounded-full border-2 ${f === t.key ? "bg-navy border-navy text-white" : "bg-white border-teal-dark text-teal-dark hover:bg-teal-dark/10"}`}>{t.label}</button>
          ))}
        </div>
        <p className="text-muted-dark text-[13px] m-0">Every photo is a real Jog Dat Dog client on a real session.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((d, k) => (
          <article key={d.num} className="card-light overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
            <Img name={d.img} alt={d.alt} priority={k < 2} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="w-full h-[300px] object-cover object-[center_30%]" />
            <div className="p-5 flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2.5">
                <span className="flex items-baseline gap-2.5"><span className="kick text-xs text-teal-dark">{d.num}</span><strong className="disp not-italic text-[26px] leading-tight">{d.title}</strong></span>
                <span className="font-display font-bold uppercase tracking-[0.1em] text-xs bg-lime-soft px-2.5 py-1 rounded-full whitespace-nowrap">{benefitTags.find((t) => t.key === d.tag)?.label}</span>
              </div>
              <strong className="text-teal-dark text-[15px]">{d.line}</strong>
              <p className="text-muted-dark text-[15px] m-0 leading-relaxed">{d.more}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
