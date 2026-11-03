import Link from "next/link";
import { steps } from "@/data/site";
import reviews from "@/data/reviews.json";
import BookButton from "../BookButton";
import Img from "../Img";
import RatingBadge from "./RatingBadge";

const Arrow = () => <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>;

export function ServiceTrio() {
  const Card = ({ img, alt, title, blurb, href, cta, ctaLabel, tile, pos }: { img?: "svc-gym" | "ath4"; alt?: string; pos?: string; title: React.ReactNode; blurb: string; href: string; cta: string; ctaLabel?: string; tile?: React.ReactNode }) => (
    <article className="card-light grid sm:grid-cols-[190px_1fr] overflow-hidden min-h-[220px] shadow-[0_20px_40px_rgba(0,40,62,.25)] transition-transform hover:-translate-y-1.5">
      {img ? <Img name={img} alt={alt} sizes="(min-width: 640px) 190px, 100vw" className={`w-full h-48 sm:h-full object-cover ${pos ?? "object-center"}`} /> : tile}
      <div className="flex flex-col gap-2.5 p-6">
        <h2 className="disp text-[32px]">{title}</h2>
        <span className="block w-12 h-1 bg-lime rounded" />
        <p className="text-sm leading-relaxed text-muted-dark m-0">{blurb}</p>
        <Link href={href} aria-label={ctaLabel} className="btn btn-teal self-start mt-auto">{cta} <Arrow /></Link>
      </div>
    </article>
  );
  return (
    <section className="bg-teal pt-2 pb-16" aria-label="What we do">
      <div className="wrap grid md:grid-cols-3 gap-5">
        <Card img="svc-gym" alt="Trainer crouched beside two dogs on dual slatmills" title={<>Mobile<br />dog gym</>} blurb="Their pace. Their workout. Right at your door." href="/mobile-dog-gym/" cta="See the mobile dog gym" ctaLabel="See the mobile dog gym" />
        <Card title={<>In-home<br />training</>} blurb="Everyday skills. Personal coaching. Better together." href="/dog-training/" cta="See in-home training" ctaLabel="See in-home training"
          tile={<div className="bg-gradient-to-br from-navy to-navy-card flex flex-col items-center justify-center gap-2.5 p-5 text-center h-48 sm:h-full"><svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 4l9 7v9H3z" /><path d="M10 20v-6h4v6" /></svg><span className="disp text-[26px] text-lime">Good habits.<br />At home.</span></div>} />
        <Card img="ath4" pos="object-[center_30%]" alt="Brown and white dog running toward the camera" title={<>Meet<br />the pack</>} blurb="Real pups. Real workouts. A whole lot of personality." href="/our-pack/" cta="See our pack" />
      </div>
    </section>
  );
}


export function Ticker() {
  const items = ["Mobile dog gym", "Slatmill workouts", "In-home training", "Kansas City metro", "Supervised. Personalized. Fun."];
  const row = items.map((t, i) => <span key={i} className="disp not-italic text-[22px] md:text-[28px] mr-12">{t}<span className="text-teal ml-12">·</span></span>);
  return (
    <div className="overflow-hidden whitespace-nowrap border-y-[3px] border-teal bg-navy-deep py-4" aria-hidden="true">
      <div className="inline-block ticker-track">{row}{row}</div>
    </div>
  );
}


export function HowItWorks() {
  return (
    <section id="how" className="wrap py-20 md:py-28 flex flex-col gap-12">
      <div className="reveal grid md:grid-cols-2 gap-8 md:gap-12 items-end">
        <div className="flex flex-col gap-4"><p className="kick">What is Jog Dat Dog?</p><h2 className="disp text-[52px] md:text-[80px] text-white">Not your average dog walk.</h2></div>
        <p className="text-lg md:text-xl text-bone-mid leading-relaxed m-0">A specialized mobile dog gym pulls up to your driveway. Inside, your dog runs on a dog-powered slatmill — no motor, no forced pace — under supervision, with the session adjusted to their conditioning and comfort. Real exercise, real enrichment, zero commute.</p>
      </div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 m-0 p-0 list-none">
        {steps.map((s) => (
          <li key={s.num} className="card-dark reveal p-6 flex flex-col gap-3.5">
            <span className="font-display font-black text-[64px] leading-none text-lime/25">{s.num}</span>
            <Img name={s.poster} alt={s.alt} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="w-full h-40 object-cover rounded-2xl" />
            <h3 className="disp not-italic text-[28px] text-white">{s.title}</h3>
            <p className="text-muted m-0 leading-relaxed text-[15px]">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}


export function Transformation() {
  return (
    <section className="wrap py-16 md:py-24" aria-labelledby="tr-h">
      <div className="reveal grid lg:grid-cols-2 gap-10 items-center bg-lime text-navy rounded-[28px] p-8 md:p-16 overflow-hidden">
        <div className="flex flex-col gap-5">
          <p className="kick text-navy">The transformation</p>
          <h2 id="tr-h" className="disp text-[52px] md:text-[80px]">Less restless.<br />More fulfilled.</h2>
          <p className="text-lg leading-relaxed m-0 max-w-[520px]">Structured exercise gives a dog&apos;s energy somewhere to go. Paired with enrichment and a predictable routine, many dogs settle more easily at home. Every dog is different — we adjust each session to the dog in front of us.</p>
          <div className="flex gap-10 flex-wrap pt-2">
            {[["30–60", "minute sessions"], ["1–4", "dogs per visit"], ["0", "car rides required"]].map(([n, l]) => (
              <div key={l}><p className="font-display font-black text-[56px] leading-none m-0">{n}</p><p className="font-semibold m-0 mt-1">{l}</p></div>
            ))}
          </div>
          <p className="text-xs text-bone-mid m-0">Every dog is different. Exercise supports a healthy routine; outcomes vary. Check with your veterinarian if you have concerns about your dog&apos;s fitness for exercise.</p>
        </div>
        <Img name="transform" alt="Two doodles side by side on slatmills in the van" sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-[320px] lg:h-[440px] object-cover object-[center_40%] rounded-2xl" />
      </div>
    </section>
  );
}


export function Reviews({ limit = 6 }: { limit?: number }) {
  const list = (reviews.featured as [string, string][]).slice(0, limit);
  return (
    <section className="bg-navy-deep border-y border-bone/10" aria-labelledby="rv-h">
      <div className="wrap py-20 md:py-28 flex flex-col gap-10">
        <div className="reveal flex justify-between items-end gap-8 flex-wrap">
          <div className="flex flex-col gap-4"><p className="kick">Real dogs. Real experiences.</p><h2 id="rv-h" className="disp text-[52px] md:text-[80px] text-white">Don&apos;t take our word for it.</h2></div>
          <RatingBadge />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map(([name, text]) => (
            <blockquote key={name} className="card-dark reveal m-0 p-7 flex flex-col gap-3">
              <span aria-label="5 out of 5 stars" role="img" className="text-lime tracking-[2px]">★★★★★</span>
              <p className="m-0 text-[17px] leading-relaxed text-bone-mid">“{text}”</p>
              <footer className="kick text-xs mt-auto">{name} · Google review</footer>
            </blockquote>
          ))}
        </div>
        <p className="text-muted text-[13px] m-0">Reviews quoted from Jog Dat Dog&apos;s public Google Business Profile. Names shortened to first name and last initial.</p>
      </div>
    </section>
  );
}


export function FinalCTA({ placement = "final_cta" }: { placement?: string }) {
  return (
    <section className="relative overflow-hidden bg-lime text-navy" aria-labelledby="cta-h">
      <span aria-hidden="true" className="disp absolute -left-[2%] top-1/2 -translate-y-1/2 text-[200px] md:text-[420px] text-white/20 whitespace-nowrap pointer-events-none">Let&apos;s go.</span>
      <div className="wrap reveal py-24 md:py-36 flex flex-col items-center text-center gap-6 relative">
        <p className="kick text-navy">Your dog&apos;s next favorite thing</p>
        <h2 id="cta-h" className="disp text-[60px] md:text-[112px]">Ready to<br />unleash the fun?</h2>
        <p className="text-lg md:text-xl m-0 max-w-[520px] leading-relaxed">The gym comes to you. The happy goes home with them.</p>
        <BookButton placement={placement} variant="navy" className="min-h-[64px] px-10 text-[22px]">Book your dog&apos;s first run</BookButton>
        <p className="text-[13px] text-navy m-0">Scheduling and payment happen on our secure MoeGo booking page.</p>
      </div>
    </section>
  );
}
