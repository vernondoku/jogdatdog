import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FAQ, FinalCTA } from "@/components/sections";
import { faq } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ — Slatmills, Safety, Scheduling & What to Expect",
  description: "Answers about Jog Dat Dog's mobile dog gym: what a slatmill is, safety, session length, multi-dog visits, weather, and how to book.",
  alternates: { canonical: "/faq/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero kick="FAQ" title={<>Curious? <span className="text-lime">Good dog.</span></>}
        blurb="Safety, equipment, scheduling, and what to expect on your first visit." placement="faq_hero" compact />
      <div className="bg-bone text-navy">
        <section className="wrap py-12 md:py-16 max-w-[860px]"><FAQ dark={false} /></section>
      </div>
      <FinalCTA placement="faq_cta" />
    </>
  );
}
