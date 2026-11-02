"use client";
import { site } from "@/data/site";
import reviews from "@/data/reviews.json";
import { track } from "@/lib/tracking";

export default function RatingBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a href={site.google.reviewsUrl} target="_blank" rel="noopener" onClick={() => track("reviews_click")}
      className={`inline-flex items-center gap-3.5 bg-navy-card border border-lime/50 rounded-full no-underline text-bone ${compact ? "px-4 py-2" : "pl-3.5 pr-5 py-2.5"}`}>
      <span className="disp not-italic text-white" style={{ fontSize: compact ? 24 : 36 }}>{site.google.rating}</span>
      <span className="flex flex-col leading-tight"><span aria-hidden="true" className="text-lime tracking-[2px] text-lg">★★★★★</span><span className="text-[13px] text-bone-mid">{site.google.reviewCount} Google reviews · read them all</span></span>
    </a>
  );
}
