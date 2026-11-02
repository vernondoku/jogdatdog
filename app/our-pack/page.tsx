import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookButton from "@/components/BookButton";
import { PackGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Why Jog Dat Dog — What a Mobile Dog Gym Session Does for Your Dog",
  description: "Real exercise, a calmer dog at home, pro supervision, zero car rides. Six reasons Kansas City dog owners book Jog Dat Dog — shown on real client dogs.",
  alternates: { canonical: "/our-pack/" },
};

export default function Page() {
  return (
    <>
      <PageHero kick="03 / Why it works" title={<>Why Jog <span className="text-lime">Dat Dog</span></>}
        blurb="What a session actually does for your dog — shown on the real dogs who run with us." placement="pack_hero" cta="Book your first run" compact />
      <div className="bg-bone text-navy">
        <section className="wrap py-12 md:py-16 flex flex-col gap-8">
          <PackGrid />
          <div className="band rounded-[20px] p-7 md:p-8 flex items-center justify-between gap-5 flex-wrap">
            <div><strong className="disp text-[32px] text-white">Want to see it on your dog?</strong><p className="m-0 mt-1 text-bone-mid">Every dog in these photos started with one intro run.</p></div>
            <BookButton placement="pack_cta">Book your first run</BookButton>
          </div>
        </section>
      </div>
    </>
  );
}
