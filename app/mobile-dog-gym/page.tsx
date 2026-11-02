import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { StepPicker, FinalCTA, RatingBadge } from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mobile Dog Gym — Dog Treadmill Exercise in Kansas City",
  description: "A mobile dog gym that parks in your driveway. Supervised, dog-powered slatmill workouts for one to four dogs. Serving the Kansas City metro.",
  alternates: { canonical: "/mobile-dog-gym/" },
};

const benefits = [
  ["Controlled exercise", "Dog-powered, no motor", "M4 12h3l2-5 3 10 2-5h6"],
  ["Burn energy", "Real work, not a stroll", "M13 2 4 14h7l-1 8 9-12h-7z"],
  ["Mental stimulation", "New task, new focus", "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M12 8v4l3 2"],
  ["Supervised", "Eyes on your dog the whole run", "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4"],
];
const options = [
  ["First visit", "Introductory session", "A relaxed first run so your dog can get comfortable. Required for new dogs."],
  ["One dog", "Solo workouts", "30 or 60 minutes of supervised running, one dog at a time."],
  ["Same household", "Multi-dog sessions", "Duo, trio, or quad sessions on our dual mills in one visit."],
  ["Standing slot", "Recurring exercise", "Weekly or twice-weekly runs on a schedule. Set it once in booking."],
];

export default function Page() {
  return (
    <>
      <PageHero kick="Mobile Dog Gym" title={<>The mobile<br /><span className="text-lime">dog gym</span></>}
        blurb="A safe, structured, supervised workout on a dog-powered slatmill — parked in your driveway, adjusted to your dog."
        video="/video/step3-stride.mp4" poster="svc-gym" alt="Two dogs running side by side on dual slatmills"
        placement="gym_hero" secondary={{ href: "/pricing/", label: "See pricing" }} />
      <div className="bg-bone text-navy">
        <section className="wrap pt-14 pb-6 flex flex-col gap-6" aria-label="Benefits">
          <RatingBadge compact />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(([t, s, d]) => (
              <div key={t} className="flex items-center gap-3"><span className="inline-flex w-11 h-11 rounded-xl bg-navy items-center justify-center shrink-0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg></span><div><strong className="block">{t}</strong><span className="text-muted-dark text-sm">{s}</span></div></div>
            ))}
          </div>
        </section>
        <section id="how-it-works" className="wrap py-14 md:py-20 flex flex-col gap-9">
          <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 lg:gap-12 items-end">
            <div className="flex flex-col gap-3"><p className="kick text-teal-dark">01 / The experience</p><h2 className="disp text-[52px] md:text-[80px]">Not your<br />average <span className="text-teal-dark">dog walk.</span></h2></div>
            <div className="flex flex-col gap-2.5"><strong className="text-xl">We pull up. They perk up.</strong><p className="text-muted-dark m-0 leading-relaxed">Our mobile gym brings dog-powered slatmills to your door. No motor sets the speed. Your dog finds their stride, with a person right there to guide them.</p></div>
          </div>
          <StepPicker />
        </section>
        <section className="wrap pb-20 flex flex-col gap-6" aria-labelledby="opt-h">
          <h2 id="opt-h" className="disp text-[48px] md:text-[56px]">Session <span className="text-teal-dark">options</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {options.map(([k, t, d]) => (
              <div key={t} className="card-light p-6 flex flex-col gap-2"><p className="kick text-teal-dark m-0">{k}</p><strong className="text-[22px]">{t}</strong><p className="text-muted-dark m-0 text-sm leading-relaxed">{d}</p></div>
            ))}
          </div>
          <p className="text-muted-dark text-sm m-0">{site.serviceAreaBlurb}</p>
        </section>
      </div>
      <FinalCTA placement="gym_cta" />
    </>
  );
}
