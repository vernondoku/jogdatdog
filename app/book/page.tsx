import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { BookFlow } from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Run — Mobile Dog Gym & Training in Kansas City",
  description: "Book your dog's slatmill session or in-home training visit. Pick a service and session here, then schedule and pay on our secure booking page.",
  alternates: { canonical: "/book/" },
  robots: { index: false }, // utility page; keep it out of search results
};

export default function Page() {
  return (
    <>
      <PageHero kick="Booking" title={<>Book a <span className="text-lime">run</span></>}
        blurb="Pick a service and a session here; scheduling and payment happen on our secure MoeGo booking page." placement="book_hero" cta="Skip to booking" compact />
      <div className="bg-bone text-navy">
        <section className="wrap py-12 md:py-16 flex flex-col gap-7">
          <BookFlow />
          <p className="text-muted-dark text-[13px] text-center m-0">First-time dogs start with an introductory session. Questions? Call <a href={site.phoneHref} className="font-semibold text-teal-dark">{site.phone}</a>.</p>
        </section>
      </div>
    </>
  );
}
