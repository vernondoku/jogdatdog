"use client";
import Link from "next/link";
import { useState } from "react";
import { site, steps, dogs, dogTags, pricing, faq } from "@/data/site";
import reviews from "@/data/reviews.json";
import BookButton from "./BookButton";
import { PlayIcon, useVideo } from "./VideoModal";
import { track } from "@/lib/tracking";

const Arrow = () => <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>;
const Wave = () => (
  <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute left-0 right-0 -bottom-px w-full h-[60px] md:h-[90px] block">
    <path d="M0 60 C 240 0 480 0 720 45 C 960 90 1200 90 1440 30 L1440 90 L0 90 Z" fill="#00B4B8" />
  </svg>
);

/* ---------- HOME HERO ---------- */
export function Hero() {
  const { open } = useVideo();
  const reel = () => open({ src: "/video/reel.mp4", title: "The pack in action · 0:44" });
  return (
    <section className="relative bg-gradient-to-br from-navy to-navy-deep overflow-hidden" aria-label="Hero">
      <div className="wrap grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center pt-12 md:pt-16 pb-28 md:pb-36">
        <div className="flex flex-col gap-6">
          <p className="kick rise d1">Mobile canine fitness + in-home training</p>
          <h1 className="disp rise d2 text-[64px] sm:text-[88px] lg:text-[112px] text-white">The gym<br /><span className="text-lime">comes to you.</span></h1>
          <p className="rise d3 font-display font-bold uppercase tracking-[0.18em] text-xs md:text-sm text-bone-mid">Your dog was born to run.</p>
          <p className="rise d3 text-lg md:text-xl text-[#D9E4EA] max-w-[520px] leading-relaxed">Mobile canine fitness and in-home training, delivered right to your driveway.</p>
          <div className="rise d4 flex gap-3 flex-wrap items-center">
            <BookButton placement="hero" />
            <button type="button" className="btn btn-ghost" onClick={reel}>
              <span aria-hidden="true" className="inline-flex w-[26px] h-[26px] rounded-full border-2 border-current items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
              Watch the action
            </button>
          </div>
          <div className="rise d4 flex gap-7 flex-wrap pt-4 border-t border-bone/15 font-display font-bold uppercase tracking-[0.1em] text-xs text-bone-mid">
            <span className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M4 18 18 6M10 6h8v8" /></svg>Fitness +<br />conditioning</span>
            <span className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /></svg>Mental<br />enrichment</span>
            <span className="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11 12 4l9 7v9H3z" /></svg>Convenient<br />+ mobile</span>
          </div>
        </div>
        <div className="rise d2 relative rounded-[26px] overflow-hidden h-[480px] md:h-[600px] lg:h-[660px] shadow-[0_40px_80px_rgba(0,0,0,.45)] bg-navy-card">
          <video src="/video/hero-loop.mp4" poster="/media/hero-poster.jpg" autoPlay muted loop playsInline preload="metadata"
            aria-label="Dogs running on the slatmill inside the Jog Dat Dog van" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-transparent to-navy/75 pointer-events-none" />
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center font-display font-bold uppercase tracking-[0.16em] text-[11px]">
            <span className="text-navy bg-lime px-2.5 py-1.5 rounded">The gym comes to you</span><span className="text-bone-mid">KC / 01</span>
          </div>
          <div aria-hidden="true" className="hidden md:block absolute -right-1.5 top-[38%] rotate-[8deg] bg-lime text-navy px-4 py-3.5 rounded-md shadow-xl font-display font-black uppercase leading-[0.95] text-[26px] w-[150px]">Less scrolling.<br />More tail wags.</div>
          <button type="button" onClick={reel} aria-label="Play: This is Jog Dat Dog — watch the pack in action"
            className="absolute left-4 bottom-4 inline-flex items-center gap-3 bg-navy/75 backdrop-blur border border-bone/20 rounded-full pl-2 pr-4 py-2 text-white hover:border-lime">
            <PlayIcon size={44} />
            <span className="flex flex-col text-left"><strong className="font-display font-bold uppercase tracking-[0.12em] text-xs">This is Jog Dat Dog</strong><span className="text-[13px] text-bone-mid">Watch the pack in action · 0:44</span></span>
          </button>
        </div>
      </div>
      <Wave />
    </section>
  );
}

/* ---------- SERVICE TRIO (teal band) ---------- */
export function ServiceTrio() {
  const Card = ({ img, alt, title, blurb, href, cta, tile }: { img?: string; alt?: string; title: React.ReactNode; blurb: string; href: string; cta: string; tile?: React.ReactNode }) => (
    <article className="card-light grid sm:grid-cols-[190px_1fr] overflow-hidden min-h-[220px] shadow-[0_20px_40px_rgba(0,40,62,.25)] transition-transform hover:-translate-y-1.5">
      {img ? <img src={img} alt={alt} className="w-full h-48 sm:h-full object-cover" loading="lazy" /> : tile}
      <div className="flex flex-col gap-2.5 p-6">
        <h2 className="disp text-[32px]">{title}</h2>
        <span className="block w-12 h-1 bg-lime rounded" />
        <p className="text-sm leading-relaxed text-muted-dark m-0">{blurb}</p>
        <Link href={href} className="btn btn-teal self-start mt-auto">{cta} <Arrow /></Link>
      </div>
    </article>
  );
  return (
    <section className="bg-teal pt-2 pb-16" aria-label="What we do">
      <div className="wrap grid md:grid-cols-3 gap-5">
        <Card img="/media/svc-gym.jpg" alt="Trainer crouched beside two dogs on dual slatmills" title={<>Mobile<br />dog gym</>} blurb="Their pace. Their workout. Right at your door." href="/mobile-dog-gym/" cta="Learn more" />
        <Card title={<>In-home<br />training</>} blurb="Everyday skills. Personal coaching. Better together." href="/dog-training/" cta="Learn more"
          tile={<div className="bg-gradient-to-br from-navy to-navy-card flex flex-col items-center justify-center gap-2.5 p-5 text-center h-48 sm:h-full"><svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 4l9 7v9H3z" /><path d="M10 20v-6h4v6" /></svg><span className="disp text-[26px] text-lime">Good habits.<br />At home.</span></div>} />
        <Card img="/media/ath4.jpg" alt="Brown and white dog running toward the camera" title={<>Meet<br />the pack</>} blurb="Real pups. Real workouts. A whole lot of personality." href="/our-pack/" cta="See our pack" />
      </div>
    </section>
  );
}

/* ---------- TICKER ---------- */
export function Ticker() {
  const items = ["Mobile dog gym", "Slatmill workouts", "In-home training", "Kansas City metro", "Supervised. Personalized. Fun."];
  const row = items.map((t, i) => <span key={i} className="disp not-italic text-[22px] md:text-[28px] mr-12">{t}<span className="text-teal ml-12">·</span></span>);
  return (
    <div className="overflow-hidden whitespace-nowrap border-y-[3px] border-teal bg-navy-deep py-4" aria-hidden="true">
      <div className="inline-block ticker-track">{row}{row}</div>
    </div>
  );
}

/* ---------- HOW IT WORKS (cards) ---------- */
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
            <img src={s.poster} alt={s.alt} className="w-full h-40 object-cover rounded-2xl" loading="lazy" />
            <h3 className="disp not-italic text-[28px] text-white">{s.title}</h3>
            <p className="text-muted m-0 leading-relaxed text-[15px]">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- SEE IT IN ACTION (videos) ---------- */
export function WatchSection() {
  const { open } = useVideo();
  return (
    <section id="watch" className="bg-navy-deep border-t border-bone/10" aria-labelledby="w-h">
      <div className="wrap py-20 md:py-28 flex flex-col gap-9">
        <div className="reveal flex justify-between items-end gap-8 flex-wrap">
          <div className="flex flex-col gap-4"><p className="kick">See it in action</p><h2 id="w-h" className="disp text-[52px] md:text-[80px] text-white">Watch how<br />it works.</h2></div>
          <p className="text-muted max-w-[400px] m-0 leading-relaxed">Thirty seconds tells you more than a page of words. Real dogs, real sessions, no actors.</p>
        </div>
        <button type="button" onClick={() => open({ src: "/video/reel.mp4", title: "The pack in action · 0:44" })} aria-label="Play: The pack in action"
          className="reveal relative rounded-3xl overflow-hidden border-2 border-bone/10 hover:border-lime transition-colors group">
          <img src="/media/hero-desktop.jpg" alt="Two dogs running side by side on slatmills inside the mobile gym" className="w-full h-[320px] md:h-[560px] object-cover object-[center_40%]" loading="lazy" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy/35 group-hover:bg-navy/25 transition-colors">
            <PlayIcon size={96} />
            <span className="flex flex-col items-center gap-1"><strong className="disp text-[32px] md:text-[40px] text-white">The pack in action</strong><span className="text-sm text-bone-mid">0:44 · sound on</span></span>
          </span>
        </button>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <button key={s.num} type="button" onClick={() => open({ src: s.video, title: s.title })} aria-label={`Play: ${s.title}`}
              className="relative rounded-2xl overflow-hidden border-2 border-bone/10 hover:border-lime hover:-translate-y-1 transition-all text-left bg-navy-card">
              <img src={s.poster} alt={s.alt} className="w-full h-[220px] object-cover object-[center_35%]" loading="lazy" />
              <span className="absolute inset-0 flex items-end gap-3 p-4 bg-gradient-to-b from-transparent via-transparent to-navy/90">
                <PlayIcon size={44} />
                <span className="flex flex-col"><strong className="text-white">{s.title}</strong><span className="text-xs text-bone-mid">{s.caption}</span></span>
              </span>
            </button>
          ))}
        </div>
        <p className="text-muted text-[13px] m-0">Every clip is cut from Jog Dat Dog&apos;s own session footage.</p>
      </div>
    </section>
  );
}

/* ---------- ATHLETES (home) ---------- */
export function Athletes() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="pack" className="bg-navy-deep border-y border-bone/10">
      <div className="wrap py-20 md:py-28 flex flex-col gap-10">
        <div className="reveal flex justify-between items-end gap-8 flex-wrap">
          <div className="flex flex-col gap-4"><p className="kick">Meet the athletes</p><h2 className="disp text-[52px] md:text-[80px] text-white">Small paws.<br />Big energy.</h2></div>
          <p className="text-muted max-w-[380px] m-0 leading-relaxed">Our roster of real Jog Dat Dog runners. Tap a card to see their stats.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dogs.slice(0, 4).map((d, i) => (
            <button key={i} type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-pressed={openIdx === i}
              className={`card-dark reveal text-left overflow-hidden p-0 ${openIdx === i ? "border-lime ring-4 ring-lime/25" : ""}`}>
              <img src={d.img} alt={d.alt} className="w-full h-[300px] object-cover object-[center_30%]" loading="lazy" />
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-baseline"><h3 className="disp not-italic text-[28px] text-white">{d.name}</h3><span className="kick text-xs">#0{i + 1}</span></div>
                <p className="text-muted text-[15px] m-0">{d.line}</p>
              </div>
            </button>
          ))}
        </div>
        <Link href="/our-pack/" className="btn btn-ghost self-start">See the whole pack <Arrow /></Link>
      </div>
    </section>
  );
}

/* ---------- TRANSFORMATION ---------- */
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
          <p className="text-xs opacity-75 m-0">Every dog is different. Exercise supports a healthy routine; outcomes vary. Check with your veterinarian if you have concerns about your dog&apos;s fitness for exercise.</p>
        </div>
        <img src="/media/transform.jpg" alt="Two doodles side by side on slatmills in the van" className="w-full h-[320px] lg:h-[440px] object-cover object-[center_40%] rounded-2xl" loading="lazy" />
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
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
export function RatingBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a href={site.google.reviewsUrl} target="_blank" rel="noopener" onClick={() => track("reviews_click")}
      className={`inline-flex items-center gap-3.5 bg-navy-card border border-lime/50 rounded-full no-underline text-bone ${compact ? "px-4 py-2" : "pl-3.5 pr-5 py-2.5"}`}>
      <span className="disp not-italic text-white" style={{ fontSize: compact ? 24 : 36 }}>{site.google.rating}</span>
      <span className="flex flex-col leading-tight"><span aria-hidden="true" className="text-lime tracking-[2px] text-lg">★★★★★</span><span className="text-[13px] text-bone-mid">{site.google.reviewCount} Google reviews · read them all</span></span>
    </a>
  );
}

/* ---------- PRICING TABLE ---------- */
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
            <div className="flex flex-col gap-1.5"><strong className="text-xl">In-home training</strong><span className="text-muted-dark">{pricing.training.length}, 1:1, in your home</span><span className="disp not-italic text-lime text-[64px] mt-2">${pricing.training.price}</span></div>
            <img src="/media/ath2.jpg" alt="Black dog with a donut toy on the slatmill" className="w-full sm:w-40 h-40 object-cover object-[center_30%] rounded-2xl" loading="lazy" />
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

/* ---------- FAQ ---------- */
export function FAQ({ items = faq, dark = true }: { items?: typeof faq; dark?: boolean }) {
  return (
    <div className="flex flex-col">
      {items.map((f) => (
        <details key={f.q} className={`border-t last:border-b py-5 ${dark ? "border-bone/15" : "border-navy/10"}`} onToggle={(e) => { if ((e.target as HTMLDetailsElement).open) track("faq_open", { question: f.q }); }}>
          <summary className={`cursor-pointer font-semibold text-lg ${dark ? "text-bone" : "text-navy"}`}>{f.q}</summary>
          <p className={`mt-2.5 mb-0 leading-relaxed ${dark ? "text-muted" : "text-muted-dark"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- FINAL CTA (lime) ---------- */
export function FinalCTA({ placement = "final_cta" }: { placement?: string }) {
  return (
    <section className="relative overflow-hidden bg-lime text-navy" aria-labelledby="cta-h">
      <span aria-hidden="true" className="disp absolute -left-[2%] top-1/2 -translate-y-1/2 text-[200px] md:text-[420px] text-white/20 whitespace-nowrap pointer-events-none">Let&apos;s go.</span>
      <div className="wrap reveal py-24 md:py-36 flex flex-col items-center text-center gap-6 relative">
        <p className="kick text-navy">Your dog&apos;s next favorite thing</p>
        <h2 id="cta-h" className="disp text-[60px] md:text-[112px]">Ready to<br />unleash the fun?</h2>
        <p className="text-lg md:text-xl m-0 max-w-[520px] leading-relaxed">The gym comes to you. The happy goes home with them.</p>
        <BookButton placement={placement} variant="navy" className="min-h-[64px] px-10 text-[22px]">Book your dog&apos;s first run</BookButton>
        <p className="text-[13px] opacity-75 m-0">Scheduling and payment happen on our secure MoeGo booking page.</p>
      </div>
    </section>
  );
}

/* ---------- STEP PICKER (gym page) ---------- */
export function StepPicker() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <div className="relative rounded-[22px] overflow-hidden h-[420px] md:h-[620px] bg-navy-card shadow-[0_30px_60px_rgba(0,48,74,.25)]">
        <video key={s.video} src={s.video} poster={s.poster} autoPlay muted loop playsInline preload="metadata" aria-label={s.alt} className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        <div className="absolute left-4 right-4 bottom-4 bg-white/95 rounded-xl px-4 py-3 flex justify-between items-center gap-3 font-display font-bold uppercase tracking-[0.14em] text-xs text-navy">
          <span>{s.num} / 04</span><span>{s.caption}</span>
        </div>
      </div>
      <div className="flex flex-col">
        {steps.map((st, k) => (
          <button key={st.num} type="button" onClick={() => { setI(k); track("step_view", { step: st.title }); }} aria-pressed={i === k}
            className="flex gap-4 items-start text-left border-t last:border-b border-navy/10 py-5 min-h-[44px] group">
            <span className="font-display font-bold text-xs text-muted-dark tracking-[0.1em] w-7 shrink-0 pt-1.5">{st.num}</span>
            <span className="flex flex-col flex-1">
              <span className={`disp text-[26px] ${i === k ? "text-teal-dark" : "text-navy group-hover:text-teal-dark"}`}>{st.title}</span>
              {i === k && <span className="text-muted-dark text-sm leading-relaxed mt-2 max-w-[380px]">{st.desc}</span>}
            </span>
            <span className="text-teal-dark pt-1 shrink-0" aria-hidden="true"><Arrow /></span>
          </button>
        ))}
        <p className="text-muted-dark text-[13px] mt-4 m-0">Tap a step to watch it. Clips are cut from real Jog Dat Dog sessions.</p>
      </div>
    </div>
  );
}

/* ---------- PACK GRID (our-pack page) ---------- */
export function PackGrid() {
  const [f, setF] = useState("all");
  const list = dogs.map((d, i) => ({ ...d, num: `0${i + 1}` })).filter((d) => f === "all" || d.tag === f);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center gap-5 flex-wrap">
        <div className="flex gap-2.5 flex-wrap" role="group" aria-label="Filter the pack">
          {dogTags.map((t) => (
            <button key={t.key} type="button" onClick={() => setF(t.key)} aria-pressed={f === t.key}
              className={`font-display font-black uppercase tracking-[0.08em] text-base px-5 min-h-[44px] rounded-full border-2 ${f === t.key ? "bg-navy border-navy text-white" : "bg-white border-teal-dark text-teal-dark hover:bg-teal-dark/10"}`}>{t.label}</button>
          ))}
        </div>
        <p className="text-muted-dark text-[13px] m-0">Names and bios appear once each owner approves.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((d) => (
          <article key={d.num} className="card-light overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
            <img src={d.img} alt={d.alt} className="w-full h-[300px] object-cover object-[center_30%]" loading="lazy" />
            <div className="p-5 flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2.5">
                <span className="flex items-baseline gap-2.5"><span className="kick text-xs text-teal-dark">{d.num}</span><strong className="disp not-italic text-[28px]">{d.name}</strong></span>
                <span className="font-display font-bold uppercase tracking-[0.1em] text-xs bg-lime-soft px-2.5 py-1 rounded-full">{dogTags.find((t) => t.key === d.tag)?.label}</span>
              </div>
              <span className="text-muted-dark text-[15px]">{d.line}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------- BOOK FLOW (book page) ---------- */
export function BookFlow() {
  const [svc, setSvc] = useState<"gym" | "training">("gym");
  const [sess, setSess] = useState(1);
  const gymList = [{ name: "Intro", sub: "first visit", price: pricing.intro }, ...pricing.gym30.map((r) => ({ name: r.name, sub: r.dogs <= 2 ? "30 min" : `${r.dogs} dogs`, price: r.price }))];
  const list = svc === "gym" ? gymList : [{ name: "Training", sub: pricing.training.length, price: pricing.training.price }];
  const cur = list[Math.min(sess, list.length - 1)];
  const summary = `${svc === "gym" ? "Mobile Dog Gym" : "In-Home Training"} · ${cur.name}${cur.sub ? ` (${cur.sub})` : ""} · $${cur.price}`;
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
        <div className="grid sm:grid-cols-2 gap-3.5">
          <Opt on={svc === "gym"} onClick={() => { setSvc("gym"); setSess(1); }} title="Mobile Dog Gym" sub="Slatmill exercise and enrichment" label="Select Mobile Dog Gym"
            icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M4 12h3l2-5 3 10 2-5h6" /></svg>} />
          <Opt on={svc === "training"} onClick={() => { setSvc("training"); setSess(0); }} title="In-Home Training" sub="Obedience, manners, and behavior" label="Select In-Home Training"
            icon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#84C06C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11 12 4l9 7v9H3z" /><path d="M10 20v-6h4v6" /></svg>} />
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
