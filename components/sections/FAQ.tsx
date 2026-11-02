"use client";
import { faq } from "@/data/site";
import { track } from "@/lib/tracking";


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
