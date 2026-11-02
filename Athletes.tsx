"use client";
import Link from "next/link";
import { useState } from "react";
import { benefits } from "@/data/site";
import Img from "../Img";

const Arrow = () => <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>;

export function Athletes() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="pack" className="bg-navy-deep border-y border-bone/10">
      <div className="wrap py-20 md:py-28 flex flex-col gap-10">
        <div className="reveal flex justify-between items-end gap-8 flex-wrap">
          <div className="flex flex-col gap-4"><p className="kick">Why Jog Dat Dog</p><h2 className="disp text-[52px] md:text-[80px] text-white">Small paws.<br />Big benefits.</h2></div>
          <p className="text-muted max-w-[380px] m-0 leading-relaxed">What a session actually does for your dog. Tap a card to read more.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.slice(0, 4).map((d, i) => (
            <button key={i} type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-pressed={openIdx === i}
              className={`card-dark reveal text-left overflow-hidden p-0 ${openIdx === i ? "border-lime ring-4 ring-lime/25" : ""}`}>
              <Img name={d.img} alt={d.alt} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="w-full h-[300px] object-cover object-[center_30%]" />
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-baseline gap-3"><h3 className="disp not-italic text-[26px] leading-tight text-white">{d.title}</h3><span className="kick text-xs">0{i + 1}</span></div>
                <p className="text-muted text-[15px] m-0">{openIdx === i ? d.more : d.line}</p>
              </div>
            </button>
          ))}
        </div>
        <Link href="/our-pack/" className="btn btn-ghost self-start">See every benefit <Arrow /></Link>
      </div>
    </section>
  );
}
