"use client";
import { useState } from "react";
import { pricing } from "@/data/site";
import BookButton from "../BookButton";


export function BookFlow() {
  const [svc, setSvc] = useState<"gym" | "training" | "signature">("gym");
  const [sess, setSess] = useState(1);
  const gymList = [{ name: "Intro", sub: "first visit, 1 dog", price: pricing.intro }, ...pricing.gym.map((r) => ({ name: r.name, sub: `${r.dogs} ${r.dogs === 1 ? "dog" : "dogs"} · ${pricing.sessionMinutes} min`, price: r.price }))];
  const list = svc === "gym" ? gymList : svc === "training" ? [{ name: "Training", sub: pricing.training.length, price: pricing.training.price }] : [{ name: "Coaching + Run", sub: "run, then 1:1 coaching", price: pricing.signature.price }];
  const cur = list[Math.min(sess, list.length - 1)];
  const summary = `${svc === "gym" ? "Mobile Dog Gym" : svc === "training" ? "In-Home Training" : pricing.signature.name} · ${cur.name}${cur.sub ? ` (${cur.sub})` : ""} · $${cur.price}`;
  const Opt = ({ on, onClick, icon, title, sub, label }: { on: boolean; onClick: () => void; icon: React.ReactNode; title: string; sub: string; label: string }) => (
    <button type="button" onClick={onClick} aria-pressed={on} aria-label={label}
      className={`text-left bg-white border-2 rounded-2xl p-5 flex gap-4 items-center min-h-[44px] transition-all hover:border-teal hover:-translate-y-0.5 ${on ? "border-lime bg-[#F3FAEE] ring-4 ring-lime/25" : "border-bone-mid"}`}>
      <span className="inline-flex w-[52px] h-[52px] rounded-2xl bg-navy items-center justify-center shrink-0">{icon}</span>
      <span className="flex flex-col"><strong className="text-lg">{title}</strong><span className="text-muted-dark text-sm">{sub}</span></span>
    </button>
  );
  return (
    <div className="card-light p-6 md:p-8 flex flex-col gap-7">
      <ol className="flex items-center m-0 p-0 list-none text-sm font-semibold text-muted-dark">
        {["Service", "Session", "Schedule", "Confirm"].map((t, k) => (
          <li key={t} className={`flex items-center ${k < 3 ? "flex-1" : ""}`}>
            <span className={`flex items-center gap-2.5 ${k < 2 ? "text-navy" : ""}`}><span className={`inline-flex w-[34px] h-[34px] rounded-full border-2 items-center justify-center font-display font-black ${k < 2 ? "bg-lime border-lime" : "border-bone-mid"}`}>{k + 1}</span><span className="hidden sm:inline">{t}</span></span>
            {k < 3 && <span className="flex-1 h-0.5 bg-bone-mid mx-3.5" />}
          </li>
        ))}
      </ol>
      <div className="flex flex-col gap-3">
        <strong className="text-lg">Select a service</strong>
        <div className="grid sm:grid-cols-3 gap-3.5">
          <Opt on={svc === "gym"} onClick={() => { setSvc("gym"); setSess(1); }} title="Mobile Dog Gym" sub="Slatmill exercise and enrichment" label="Select Mobile Dog Gym"
            icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M4 12h3l2-5 3 10 2-5h6" /></svg>} />
          <Opt on={svc === "training"} onClick={() => { setSvc("training"); setSess(0); }} title="In-Home Training" sub="Obedience, manners, and behavior" label="Select In-Home Training"
            icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11 12 4l9 7v9H3z" /><path d="M10 20v-6h4v6" /></svg>} />
          <Opt on={svc === "signature"} onClick={() => { setSvc("signature"); setSess(0); }} title="Coaching + Fitness Run" sub="Our signature visit" label="Select Coaching + Fitness Run"
            icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <strong className="text-lg">Choose a session</strong>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {list.map((s, k) => (
            <button key={s.name} type="button" onClick={() => setSess(k)} aria-pressed={sess === k}
              className={`text-center bg-white border-2 rounded-xl px-2.5 py-4 flex flex-col gap-1 items-center min-h-[44px] hover:border-teal ${sess === k ? "border-lime bg-[#F3FAEE] ring-4 ring-lime/25" : "border-bone-mid"}`}>
              <strong>{s.name}</strong><span className="text-muted-dark text-[13px]">{s.sub}</span><span className="font-display font-black text-[28px]">${s.price}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center gap-5 flex-wrap border-t border-navy/10 pt-5">
        <div className="text-muted-dark text-sm leading-relaxed">Selected: <strong className="text-navy">{summary}</strong><br />You&apos;ll pick the date, time, and address on the next screen.</div>
        <BookButton placement="book_page" service={summary} className="min-h-[56px] px-9">Continue</BookButton>
      </div>
    </div>
  );
}
