import BookButton from "./BookButton";
import Link from "next/link";
import Img from "./Img";
import LazyVideo from "./LazyVideo";
import type meta from "@/data/images.json";

type Props = {
  kick: string;
  title: React.ReactNode;     // use <span className="text-lime"> for the accent word
  blurb: string;
  img?: keyof typeof meta; alt?: string;
  video?: string; poster?: keyof typeof meta;
  cta?: string; placement: string;
  secondary?: { href: string; label: string };
  compact?: boolean;
};

/** Navy hero band with teal wave, used on every inner page. */
export default function PageHero({ kick, title, blurb, img, alt, video, poster, cta = "Book a run", placement, secondary, compact }: Props) {
  const media = video
    ? <div className="relative w-full h-[360px] md:h-[520px] rounded-[22px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,.35)] bg-navy-card">
        <Img name={poster!} priority alt="" aria-hidden="true" sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0 w-full h-full object-cover object-[center_35%]" />
        <LazyVideo src={video} poster={poster!} width={1280} height={720} aria-label={alt} className="absolute inset-0 w-full h-full object-cover object-[center_35%]" />
      </div>
    : img ? <Img name={img} priority alt={alt} sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-[360px] md:h-[520px] object-cover object-[center_40%] rounded-[22px] shadow-[0_30px_60px_rgba(0,0,0,.35)]" /> : null;
  return (
    <section className="band">
      <div className={`wrap ${media ? "grid lg:grid-cols-2 gap-10 lg:gap-12 items-center" : "flex flex-col gap-3.5 max-w-[720px]"} pt-14 md:pt-16 ${compact ? "pb-24" : "pb-28 md:pb-32"} relative z-10`}>
        <div className="flex flex-col gap-5">
          <p className="kick">{kick}</p>
          <h1 className="disp text-[56px] md:text-[80px] lg:text-[96px] text-white">{title}</h1>
          <p className="text-lg md:text-xl leading-relaxed m-0 max-w-[520px] text-bone-mid">{blurb}</p>
          <div className="flex gap-3.5 flex-wrap">
            <BookButton placement={placement}>{cta}</BookButton>
            {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        </div>
        {media}
      </div>
      <div aria-hidden="true" className="absolute -left-[5%] -bottom-[30px] w-[110%] h-[70px] bg-teal -rotate-2 pointer-events-none" />
      <div aria-hidden="true" className="absolute -left-[5%] bottom-[10px] w-[110%] h-[14px] bg-lime -rotate-2 pointer-events-none" />
    </section>
  );
}
