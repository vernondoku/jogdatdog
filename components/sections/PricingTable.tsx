"use client";
import Link from "next/link";
import { pricing } from "@/data/site";
import Img from "../Img";

const Arrow = () => <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>;
const Head = ({ children }: { children: React.ReactNode }) => <div className="bg-teal-dark text-white font-display font-black uppercase tracking-[0.08em] text-lg px-6 py-3.5 flex justify-between items-center gap-3 flex-wrap">{children}</div>;
const Row = ({ label, sub, price }: { label: string; sub?: string; price: number }) => (
  <div className="flex justify-between items-center gap-4 px-6 py-3.5 border-t border-navy/10 font-medium">
    <span>{label} {sub && <span className="text-muted-dark text-sm">({sub})</span>}</span>
    <span className="font-display font-black text-[28px] whitespace-nowrap">${price}</span>
  </div>
);

export function PricingTable() {
  const dogsLabel = (d: number, plus?: boolean) => `${d}${plus ? "+" : ""} ${d === 1 ? "dog" : "dogs"}`;
  return (
    <div className="grid lg:grid-cols-2 gap-7 items-start">
      <div className="flex flex-col gap-7">
        <div className="card-light flex flex-col overflow-hidden">
          <Head><span>Dog gym runs</span><span className="text-sm tracking-normal normal-case font-sans font-semibold opacity-90">{pricing.sessionMinutes} minutes · dog-powered slatmill</span></Head>
          {pricing.gym.map((r) => <Row key={r.name} label={r.name} sub={dogsLabel(r.dogs)} price={r.price} />)}
          <div className="px-6 pt-4 pb-1 border-t border-navy/10"><strong className="text-sm uppercase tracking-[0.08em] text-teal-dark">First visit · introductory run</strong></div>
          {pricing.introByDogs.map((r) => <Row key={r.dogs} label="Intro run" sub={dogsLabel(r.dogs, r.plus)} price={r.price} />)}
          <p className="text-muted-dark text-[13px] px-6 py-4 m-0 leading-relaxed">The intro run is required for first-time dogs — a relaxed first session to get comfortable on the mill. Multi-dog sessions are for dogs from the same household.</p>
        </div>
        <div className="card-light p-6 flex items-center gap-4 border-2 border-lime">
          <div className="flex flex-col gap-1 flex-1"><strong className="disp text-[26px]">Recurring exercise</strong><span className="text-muted-dark text-sm leading-relaxed">{pricing.recurringNote}</span></div>
          <Link href="/book/" aria-label="Set up recurring exercise" className="w-11 h-11 rounded-full bg-lime text-navy inline-flex items-center justify-center shrink-0"><Arrow /></Link>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="card-light overflow-hidden">
          <Head><span>Training</span></Head>
          <div className="grid sm:grid-cols-[1fr_140px] gap-4 items-center p-6">
            <div className="flex flex-col gap-1.5"><strong className="text-xl">In-home training</strong><span className="text-muted-dark">{pricing.training.length}, 1:1, in your home</span><span className="disp not-italic text-navy text-[56px] mt-1">${pricing.training.price}</span></div>
            <Img name="ath2" alt="Black dog with a donut toy on the slatmill" sizes="(min-width: 640px) 140px, 100vw" className="w-full sm:w-[140px] h-48 sm:h-36 object-cover object-[center_35%] rounded-2xl" />
          </div>
          <div className="bg-navy text-bone p-6 flex flex-col gap-2">
            <p className="kick m-0">Our signature service</p>
            <div className="flex justify-between items-end gap-4 flex-wrap"><strong className="text-xl text-white">{pricing.signature.name}</strong><span className="disp not-italic text-lime text-[44px] leading-none">${pricing.signature.price}</span></div>
            <p className="text-bone-mid text-sm m-0 leading-relaxed">{pricing.signature.tagline} A slatmill run first, then one-on-one coaching in your home. <Link href="/dog-training/#signature" className="text-lime font-semibold underline">Details</Link></p>
          </div>
        </div>
        <div className="card-light overflow-hidden">
          <Head><span>More from JDD</span></Head>
          <Row label={pricing.walk.name} sub="one-on-one" price={pricing.walk.price} />
          <Row label={pricing.nails.name} sub={`+$${pricing.nails.additional} each additional`} price={pricing.nails.price} />
          <div className="px-6 pt-4 pb-1 border-t border-navy/10"><strong className="text-sm uppercase tracking-[0.08em] text-teal-dark">{pricing.rental.name} · per month</strong><p className="text-muted-dark text-sm m-0 mt-1 leading-relaxed">{pricing.rental.desc}</p></div>
          {pricing.rental.tiers.map((t) => <Row key={t.name} label={t.name} sub={t.range} price={t.price} />)}
          <p className="text-muted-dark text-[13px] px-6 py-4 m-0 leading-relaxed">Rentals carry a one-time ${pricing.rental.setupFee} setup fee and a ${pricing.rental.deposit} security deposit.</p>
        </div>
      </div>
    </div>
  );
}
