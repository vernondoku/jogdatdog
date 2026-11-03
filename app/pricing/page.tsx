import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookButton from "@/components/BookButton";
import { PricingTable, FinalCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Pricing — Mobile Dog Gym Sessions & In-Home Training",
  description: "Transparent pricing for Jog Dat Dog: 30-minute slatmill runs from $60, intro run $75, in-home training $120, Coaching + Fitness Run $150, dog walks, nail trims, and monthly slatmill rentals.",
  alternates: { canonical: "/pricing/" },
};

export default function Page() {
  return (
    <>
      <PageHero kick="Pricing" title={<>Simple, transparent <span className="text-lime">pricing</span></>}
        blurb="Choose the session that fits your dog's needs. No packages to decode, no surprises." placement="pricing_hero" compact />
      <div className="bg-bone text-navy">
        <section className="wrap py-14 md:py-16" id="pricing"><PricingTable /></section>
        <section className="wrap pb-20 flex flex-col gap-5" aria-label="Single vs recurring">
          <h2 className="disp text-[44px] md:text-[48px]">Single session or <span className="text-teal-dark">on repeat?</span></h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-light p-6 flex flex-col gap-2"><p className="kick text-teal-dark m-0">Single session</p><strong className="text-xl">Book one at a time</strong><p className="text-muted-dark m-0 leading-relaxed">Good for a first try, a rainy week, or a dog that needs an extra outlet before a big day. Pay per visit.</p></div>
            <div className="card-light p-6 flex flex-col gap-2 !bg-navy !text-bone border-navy"><p className="kick m-0">Recurring</p><strong className="text-xl text-white">Lock in a standing slot</strong><p className="text-bone-mid m-0 leading-relaxed">Same day, same time, every week. Dogs do best on a routine, and your slot is held for you. Set the cadence when you book.</p></div>
          </div>
          <div className="flex justify-center pt-3"><BookButton placement="pricing_page" className="min-h-[60px] px-10 text-xl" /></div>
        </section>
      </div>
      <FinalCTA placement="pricing_cta" />
    </>
  );
}
