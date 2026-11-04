import type { Metadata } from "next";
import { Hero, TrustStrip, ServiceTrio, Ticker, HowItWorks, WatchSection, Athletes, Transformation, Reviews, PricingTable, FAQ, FinalCTA } from "@/components/sections";
import { site } from "@/data/site";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: `${site.name} — Mobile Dog Gym & In-Home Dog Training | Kansas City`,
  description: "Kansas City's mobile dog gym. Supervised slatmill workouts and in-home dog training delivered right to your driveway. Book your dog's first run.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceTrio />
      <Ticker />
      <HowItWorks />
      <WatchSection />
      <Athletes />
      <section className="wrap pt-24 pb-6 flex flex-col gap-10" id="services">
        <div className="reveal flex flex-col gap-4 max-w-[760px]"><p className="kick">Services</p><h2 className="disp text-[52px] md:text-[80px] text-white">Pick your dog&apos;s program.</h2></div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { href: "/mobile-dog-gym/", img: "svc-gym" as const, alt: "Doodle running on a slatmill inside the mobile gym", t: "Mobile Dog Gym", items: ["Individual slatmill workouts", "Multi-dog sessions", "Introductory sessions", "Recurring exercise"], d: "Supervised, dog-paced runs in a mobile gym parked in your driveway." },
            { href: "/dog-training/", img: "svc-training" as const, alt: "Trainer with a client and their dog beside the van", t: "In-Home Dog Training", items: ["Puppy foundations", "Leash manners", "Basic obedience", "Household behavior", "Owner coaching"], d: "Private sessions in your home, with you in the room learning alongside your dog." },
            { href: "/dog-training/#signature", img: "svc-combo" as const, alt: "Canine coach kneeling beside a doodle on the slatmill", t: "Coaching + Fitness Run", items: ["Structured slatmill run first", "Then 1:1 coaching in your home", "Owner participation and homework"], d: "A tired mind learns better. Our signature visit, $150.", tag: true },
          ].map((s) => (
            <article key={s.t} className="card-dark reveal p-7 flex flex-col gap-4">
              <Img name={s.img} alt={s.alt} sizes="(min-width: 1024px) 33vw, 100vw" className="w-full h-48 object-cover object-[center_40%] rounded-2xl" />
              <div className="flex items-center gap-2.5 flex-wrap"><h3 className="disp not-italic text-[36px] text-white">{s.t}</h3>{s.tag && <span className="kick text-[11px] border border-lime px-2 py-1 rounded">Our signature service</span>}</div>
              <ul className="m-0 pl-5 text-bone-mid leading-relaxed">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <p className="text-muted m-0 leading-relaxed">{s.d}</p>
              <a href={s.href} className="btn btn-ghost self-start mt-auto" >See {s.t.toLowerCase()}</a>
            </article>
          ))}
        </div>
      </section>
      <Transformation />
      <Reviews />
      <section id="pricing" className="wrap py-24 flex flex-col gap-10">
        <div className="reveal flex flex-col gap-4"><p className="kick">Pricing</p><h2 className="disp text-[52px] md:text-[80px] text-white">Simple rates.<br />No surprises.</h2></div>
        <PricingTable />
      </section>
      <section id="faq" className="bg-navy-deep border-t border-bone/10">
        <div className="wrap py-24 grid lg:grid-cols-2 gap-12">
          <div className="reveal flex flex-col gap-4"><p className="kick">FAQ</p><h2 className="disp text-[52px] md:text-[72px] text-white">Good questions.</h2><p className="text-muted m-0 max-w-[420px] leading-relaxed">Safety, equipment, scheduling, and what to expect.</p></div>
          <div className="reveal"><FAQ /></div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
