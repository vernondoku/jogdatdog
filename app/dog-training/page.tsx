import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookButton from "@/components/BookButton";
import { FinalCTA } from "@/components/sections";
import { pricing } from "@/data/site";
import reviews from "@/data/reviews.json";

export const metadata: Metadata = {
  title: "In-Home Dog Training — Kansas City, Overland Park & the Northland",
  description: "Private in-home dog training in Kansas City: puppy foundations, leash manners, basic obedience, household behavior, and owner coaching. $120 per visit, or $150 for our signature Coaching + Fitness Run.",
  alternates: { canonical: "/dog-training/" },
};

const focuses = [
  ["Basic obedience", "Sit, stay, come, place", "m5 13 4 4L19 7"],
  ["Leash manners", "Loose-leash walking", "M4 18c4-8 8-8 12-2 2 3 3 2 4 0"],
  ["Household behavior", "Doors, guests, jumping", "M3 11 12 4l9 7v9H3zM10 20v-6h4v6"],
  ["Recall", "Come when called", "M20 12a8 8 0 1 1-3-6.2M20 4v5h-5"],
  ["Puppy foundations", "Start right, early", "M12 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12M8 7 6 4M16 7l2-3"],
  ["Owner coaching", "You learn it too", "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M3 20c0-4 3-6 6-6s6 2 6 6M17 11.5a2.5 2.5 0 1 0 0-5M15 20c0-3 1.5-5 4-5s3 2 3 5"],
];
const Check = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0"><path d="m5 13 4 4L19 7" /></svg>;

export default function Page() {
  const quotes = (reviews.featured as [string, string][]).filter(([n]) => n === "Teresa J." || n === "Molly W.");
  return (
    <>
      <PageHero kick="Dog Training" title={<>In-home<br /><span className="text-lime">dog training</span></>}
        blurb="Private sessions in the place your dog actually lives and learns — with you in the room, so the progress sticks after we leave."
        img="svc-training" alt="Canine coach with a client's dog at the open door of the Jog Dat Dog van"
        cta="Book training" placement="training_hero" secondary={{ href: "/pricing/", label: "See pricing" }} />
      <div className="bg-bone text-navy">
        <section className="wrap py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="disp text-[48px] md:text-[56px]">Training <span className="text-teal-dark">focuses</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
              {focuses.map(([t, s, d]) => (
                <div key={t} className="card-light flex flex-col items-center text-center gap-2.5 p-5"><span className="inline-flex w-12 h-12 rounded-xl bg-navy items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg></span><strong>{t}</strong><span className="text-muted-dark text-[13px]">{s}</span></div>
              ))}
            </div>
          </div>
          <div className="card-light p-8 flex flex-col gap-4 border-2 border-lime">
            <p className="kick text-teal-dark m-0">1:1 in-home training</p>
            <h3 className="disp text-[40px]">${pricing.training.price} <span className="text-lg not-italic text-muted-dark font-bold">per {pricing.training.length}</span></h3>
            {["30–45 minute sessions", "Personalized to your goals", "Real-world training, in your home", "Owner involvement and coaching"].map((t) => <div key={t} className="flex gap-2.5 items-center font-medium"><Check />{t}</div>)}
            <p className="text-muted-dark text-sm m-0 leading-relaxed">Want exercise and training in one visit? See the <a href="#signature" className="text-teal-dark font-semibold underline">Coaching + Fitness Run</a> below.</p>
            <BookButton placement="training_card" className="self-start mt-2">Book training</BookButton>
          </div>
        </section>
        <section className="wrap pb-16" id="signature" aria-labelledby="sig-h">
          <div className="card-light p-8 md:p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 border-2 border-lime">
            <div className="flex flex-col gap-4">
              <p className="kick text-teal-dark m-0">Our signature service</p>
              <h2 id="sig-h" className="disp text-[40px] md:text-[52px]">{pricing.signature.name}</h2>
              <p className="text-xl font-semibold m-0">{pricing.signature.tagline}</p>
              <p className="text-muted-dark m-0 leading-relaxed">{pricing.signature.desc}</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {pricing.signature.includes.map((t) => <div key={t} className="flex gap-2.5 items-center font-medium"><Check />{t}</div>)}
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-navy text-bone rounded-2xl p-7">
              <span className="disp not-italic text-[64px] text-lime leading-none">${pricing.signature.price}</span>
              <span className="text-bone-mid text-sm">per visit · run + coaching</span>
              <p className="kick m-0 pt-2">Perfect for</p>
              <ul className="m-0 pl-5 text-bone-mid leading-relaxed">{pricing.signature.bestFor.map((t) => <li key={t}>{t}</li>)}</ul>
              <BookButton placement="signature_card" className="self-start mt-auto">Book the signature visit</BookButton>
            </div>
          </div>
        </section>
        <section className="wrap pb-20">
          <div className="band rounded-[22px] p-8 md:p-12 grid lg:grid-cols-2 gap-8">
            {quotes.map(([n, t]) => (
              <blockquote key={n} className="m-0 flex flex-col gap-3"><span className="disp text-lime text-[64px] leading-[.6]" aria-hidden="true">“</span><p className="m-0 text-lg leading-relaxed text-bone">{t}</p><footer className="kick">{n} · Google review</footer></blockquote>
            ))}
          </div>
        </section>
      </div>
      <FinalCTA placement="training_cta" />
    </>
  );
}
