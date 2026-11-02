import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-navy pb-24 lg:pb-0">
      <div className="wrap py-14 grid gap-8 md:grid-cols-3 text-sm text-muted">
        <div className="flex flex-col gap-3">
          <span className="disp text-[28px] text-lime">Your driveway.<br />Their gym.</span>
          <img src="/media/logo-badge-v2.png" alt="" className="h-16 w-auto self-start mt-2" width="1000" height="518" />
          <span>Mobile dog gym &amp; in-home training · Kansas City metro</span>
        </div>
        <div className="flex flex-col gap-2">
          {nav.filter((n) => n.href !== "/").map((n) => (
            <Link key={n.href} href={n.href} className="text-bone-mid hover:text-white">{n.label}</Link>
          ))}
          <Link href="/book/" className="text-lime font-semibold">Book a Run</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="kick text-xs">Say hello</span>
          <a href={site.phoneHref} className="text-bone-mid hover:text-white">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="text-bone-mid hover:text-white">{site.email}</a>
          <div className="flex gap-4 pt-2">
            <a href={site.social.instagram} target="_blank" rel="noopener" className="text-bone-mid hover:text-white">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener" className="text-bone-mid hover:text-white">Facebook</a>
            <a href={site.social.youtube} target="_blank" rel="noopener" className="text-bone-mid hover:text-white">YouTube</a>
          </div>
          <span className="pt-4">© {new Date().getFullYear()} Jog Dat Dog LLC</span>
        </div>
      </div>
    </footer>
  );
}
