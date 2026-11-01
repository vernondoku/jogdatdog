import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap py-32 flex flex-col items-center text-center gap-5">
      <p className="kick">404</p>
      <h1 className="disp text-[64px] md:text-[96px] text-white">That one got <span className="text-lime">off leash.</span></h1>
      <p className="text-bone-mid m-0">The page you're looking for isn't here.</p>
      <Link href="/" className="btn btn-primary">Back home</Link>
    </section>
  );
}
