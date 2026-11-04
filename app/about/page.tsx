import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookButton from "@/components/BookButton";
import { FinalCTA } from "@/components/sections";
import { site } from "@/data/site";
import Img from "@/components/Img";

export const metadata: Metadata = {
  title: "About Us — Kansas City's Mobile Dog Gym",
  description: "Dogs deserve more than a walk. So we built a gym that drives to them. Meet the founder and coaches behind Kansas City's mobile dog gym and read how Jog Dat Dog began.",
  alternates: { canonical: "/about/" },
};

const coaches = [
  { name: "Vernon", role: "Founder & Canine Coach", img: "coach-vernon" as const },
  { name: "Grace", role: "Canine Coach", img: "coach-grace" as const },
  { name: "Lilly", role: "Canine Coach", img: "coach-lilly" as const },
];

const Check = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0"><path d="m5 13 4 4L19 7" /></svg>;

export default function Page() {
  return (
    <>
      <PageHero kick="About Us" title={<>Our <span className="text-lime">story</span></>}
        blurb="Dogs deserve more than a walk. So we built a gym that drives to them — dog-powered slatmills, real workouts, right in your driveway."
        img="coach-vernon" imgPos="object-top" alt="Founder Vernon in his Jog Dat Dog coach polo in front of the van" placement="about_hero" />
      <div className="bg-bone text-navy">
        <section className="wrap pt-16 pb-6 grid md:grid-cols-3 gap-5 items-start">
          <div className="card-light p-7 flex flex-col gap-3"><span className="inline-flex w-[52px] h-[52px] rounded-2xl bg-navy items-center justify-center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg></span><strong className="disp not-italic text-[28px]">Our mission</strong><p className="text-muted-dark m-0 leading-relaxed">A happier, healthier, more fulfilled dog — without the owner leaving home. Structured exercise, enrichment, and training that fits real life.</p></div>
          <div className="card-light p-7 flex flex-col gap-3"><span className="inline-flex w-[52px] h-[52px] rounded-2xl bg-navy items-center justify-center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l4-5h10l4 5-9 12z" /><path d="M3 9h18M9 4l3 17 3-17" /></svg></span><strong className="disp not-italic text-[28px]">Our difference</strong><p className="text-muted-dark m-0 leading-relaxed">A mobile gym with dog-powered slatmills, plus professional in-home training — one team, one van, tailored to your dog.</p></div>
          <div className="card-light p-7 flex flex-col gap-3"><span className="inline-flex w-[52px] h-[52px] rounded-2xl bg-navy items-center justify-center"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></svg></span><strong className="disp not-italic text-[28px]">Our values</strong>{["Dog-first approach", "Safety and trust", "Convenience", "Owners in the loop"].map((t) => <div key={t} className="flex gap-2.5 items-center font-medium"><Check />{t}</div>)}</div>
        </section>
        <section className="wrap py-7 pb-20 grid lg:grid-cols-2 gap-5 items-stretch">
          <Img name="van" alt="The Jog Dat Dog van parked in front of the Chiefs Kingdom mural in Kansas City" sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-[300px] lg:h-[380px] object-cover object-[center_55%] rounded-[18px]" />
          <div className="card-light p-7 flex flex-col gap-3.5">
            <p className="kick text-teal-dark m-0">The team</p>
            <strong className="disp not-italic text-[32px]">Who shows up at your door</strong>
            <p className="text-muted-dark m-0 leading-relaxed">Jog Dat Dog was born from a simple idea: dogs deserve more than just a walk — they deserve an opportunity to run, exercise, and thrive. Having already built businesses in the pet care industry, I saw firsthand how many dogs struggled with excess energy, limited exercise, and behavioral challenges.</p>
            <p className="text-muted-dark m-0 leading-relaxed">I discovered slatmills as a safe, dog-powered way to give dogs a fulfilling workout, and I wanted to make that experience accessible without owners having to leave home. What started as a passion for improving dogs&apos; lives has grown into a mission to bring canine fitness, enrichment, and training directly to families&apos; doorsteps.</p>
            <p className="text-muted-dark m-0 leading-relaxed">{site.serviceAreaBlurb} Supporting local rescues through the Helping Paws program — donate a run at booking.</p>
            <BookButton placement="about_cta" className="self-start mt-auto" />
          </div>
        </section>
        <section className="wrap pb-20 flex flex-col gap-6" aria-labelledby="coaches">
          <div className="flex flex-col gap-2">
            <p className="kick text-teal-dark m-0">Meet the coaches</p>
            <h2 id="coaches" className="disp not-italic text-[32px] md:text-[40px] m-0">The people in the van</h2>
            <p className="text-muted-dark m-0 leading-relaxed max-w-[640px]">Every session is run by a Jog Dat Dog canine coach, inside the van with your dog the whole time.</p>
          </div>
          <ul className="m-0 p-0 list-none grid sm:grid-cols-3 gap-5">
            {coaches.map((c) => (
              <li key={c.name} className="rounded-[18px] overflow-hidden">
                <Img name={c.img} alt={`${c.name}, ${c.role} at Jog Dat Dog, in front of the van`} sizes="(min-width: 640px) 33vw, 100vw" className="w-full aspect-[3/4] object-cover" />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <FinalCTA placement="about_final" />
    </>
  );
}
