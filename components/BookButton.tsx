"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { bookingUrl, track } from "@/lib/tracking";

type Props = {
  placement: string;                  // where on the site this button lives — becomes the analytics label
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "navy" | "teal";
  className?: string;
  service?: string;                   // optional: which service was selected (book page)
};

/** Every "Book" button on the site. Fires a booking_funnel_entry event and carries attribution to MoeGo. */
export default function BookButton({ placement, children = "Book a Run", variant = "primary", className = "", service }: Props) {
  const [href, setHref] = useState(site.booking);
  useEffect(() => { setHref(bookingUrl(placement)); }, [placement]);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`btn btn-${variant} ${className}`}
      onClick={() => track("booking_funnel_entry", { placement, service: service ?? null })}
    >
      {children}
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
    </a>
  );
}
