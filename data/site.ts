import type images from "./images.json";
type ImgName = keyof typeof images;

/**
 * SITE CONTENT — edit this file to change prices, copy, dogs, areas, FAQ.
 * Anything in [BRACKETS] is a placeholder waiting on a real answer.
 */

export const site = {
  name: "Jog Dat Dog",
  tagline: "The gym comes to you.",
  description:
    "Kansas City's mobile dog gym. Supervised slatmill workouts and in-home dog training, delivered right to your driveway.",
  url: "https://www.jogdatdog.com",
  phone: "(816) 610-9044",
  phoneHref: "tel:+18166109044",
  email: "info@jogdatdog.com",
  booking: "https://booking.moego.pet/ol/JogDatDog/landing",
  google: {
    rating: 4.9,
    reviewCount: 31,
    reviewsUrl:
      "https://www.google.com/maps/place/Jog+Dat+Dog/@39.058078,-94.5755075,17z/data=!4m8!3m7!1s0x822fdb25757d3e65:0x4bb6d9da27a47ce1!9m1!1b1",
  },
  social: {
    instagram: "https://www.instagram.com/jogdatdog",
    facebook: "https://www.facebook.com/jogdatdog",
    youtube: "https://www.youtube.com/@JOGDATDOG-uo5jf",
  },
  /** Cities you actually serve. Drives the service-area copy and LocalBusiness schema. Confirm before launch. */
  serviceAreas: [
    "Kansas City, MO",
    "Kansas City, KS",
    "Overland Park",
    "Prairie Village",
    "Leawood",
    "Lee's Summit",
    "Liberty",
    "North Kansas City",
  ],
  /** Confirmed by Vern: KC metro and surrounding areas within a 20-mile radius of downtown. */
  serviceRadiusMiles: 20,
  serviceAreaBlurb: "The Kansas City metro and all surrounding areas within a 20-mile radius of downtown.",
  serviceAreasConfirmed: true,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/mobile-dog-gym/", label: "Mobile Dog Gym" },
  { href: "/dog-training/", label: "Dog Training" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/our-pack/", label: "Why JDD" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
];

/** Prices confirmed by Vern, Nov 2026 (intro $75). */
export const pricing = {
  intro: 75,
  gym30: [
    { name: "Solo", dogs: 1, price: 60 },
    { name: "Duo", dogs: 2, price: 80 },
    { name: "Trio", dogs: 3, price: 140 },
    { name: "Quad", dogs: 4, price: 180 },
  ],
  gym60: [
    { name: "Solo", dogs: 1, price: 80 },
    { name: "Duo", dogs: 2, price: 120 },
    { name: "Trio", dogs: 3, price: 140 },
    { name: "Quad", dogs: 4, price: 180 },
  ],
  training: { price: 120, length: "30–45 minute visit" },
  recurringNote: "Same per-session rate on a standing weekly or twice-weekly slot. Set the cadence when you book.",
};

export const steps: { num: string; title: string; caption: string; desc: string; video: string; poster: ImgName; alt: string }[] = [
  {
    num: "01",
    title: "The gym rolls up.",
    caption: "Your driveway. Our destination.",
    desc: "Your driveway becomes their next adventure. We bring the equipment and the encouragement.",
    video: "/video/step1-arrive.mp4",
    poster: "step1-arrive",
    alt: "Jog Dat Dog van parked on a residential street",
  },
  {
    num: "02",
    title: "A little sniff. A little hello.",
    caption: "A hello before the let's go.",
    desc: "A calm, treat-forward introduction to the slatmill at your dog's pace. Curious noses welcome.",
    video: "/video/step2-hello.mp4",
    poster: "step2-meet",
    alt: "Trainer offering a treat to a doodle on the slatmill",
  },
  {
    num: "03",
    title: "They find their stride.",
    caption: "Their pace. Their workout.",
    desc: "A supervised run where your dog sets the speed. We watch form, breathing, and energy the whole time.",
    video: "/video/step3-stride.mp4",
    poster: "svc-gym",
    alt: "Two dogs running side by side on dual slatmills",
  },
  {
    num: "04",
    title: "Back home. Big tail wags.",
    caption: "A little run. A lot of happy.",
    desc: "Water, a cool-down, and a dog that's ready to relax.",
    video: "/video/step4-wags.mp4",
    poster: "step4-finish",
    alt: "Trainer kneeling with two happy dogs after a session",
  },
];

/** Benefit cards (home "Why Jog Dat Dog" grid + Our Pack page). Photos are real client dogs; copy describes the service. */
export const benefits: { title: string; tag: string; line: string; more: string; img: ImgName; alt: string }[] = [
  { title: "Real exercise, not just a walk.", tag: "body", line: "A full trot or run, not a sniff-and-stroll.",
    more: "On a slatmill your dog can open up into a sustained trot or run — the kind of effort a leash walk rarely allows. Thirty or sixty minutes of real work, start to finish.",
    img: "ath1", alt: "Goldendoodle running with tongue out" },
  { title: "A calmer dog at home.", tag: "mind", line: "Energy with somewhere to go.",
    more: "Structured exercise gives a dog's energy an outlet. Paired with a predictable routine, many dogs settle more easily afterward — less pacing, less barking at the window, more napping.",
    img: "ath2", alt: "Black dog with a donut toy on the slatmill" },
  { title: "Supervised by a pro.", tag: "safety", line: "A canine coach with vet tech experience.",
    more: "Every session is run by a canine coach with vet tech experience who watches form, breathing, and energy the whole time. Water, treats, and toys are on hand, and the run is adjusted to your dog's conditioning.",
    img: "ath3", alt: "Yellow lab on the slatmill, smiling" },
  { title: "Zero car rides.", tag: "ease", line: "The gym parks in your driveway.",
    more: "No drop-off, no pickup, no crate in the back seat. We come to you, run the session outside your door, and your dog walks back inside ready to relax.",
    img: "ath4", alt: "Brown and white dog running toward the camera" },
  { title: "Their pace, always.", tag: "body", line: "Dog-powered. No motor.",
    more: "The slatmill only moves when your dog moves it. There's no motor pushing the belt — your dog sets the speed and can stop any time, which makes it a natural fit for nervous first-timers and seasoned runners alike.",
    img: "step2-meet", alt: "Trainer with a doodle on the slatmill" },
  { title: "Built for multi-dog homes.", tag: "ease", line: "Up to four dogs in one visit.",
    more: "Dual slatmills mean two dogs can run side by side, and duo, trio, and quad sessions cover the whole household in a single stop. Same driveway, same visit, everyone tired.",
    img: "transform", alt: "Two doodles side by side on slatmills" },
];
export const benefitTags = [
  { key: "all", label: "All benefits" },
  { key: "body", label: "Fitness" },
  { key: "mind", label: "Behavior" },
  { key: "safety", label: "Safety" },
  { key: "ease", label: "Convenience" },
];

export const faq = [
  { q: "What's a slatmill?", a: "A treadmill powered entirely by the dog. There's no motor — your dog sets the pace and can stop any time." },
  { q: "Is it safe for my dog?", a: "Yes. Every session is supervised by a canine coach with vet tech experience, and the run is adjusted to your dog's conditioning and comfort. We keep water, treats, and toys on hand the whole time." },
  { q: "Where do you go?", a: "The Kansas City metro and all surrounding areas within a 20-mile radius of downtown." },
  { q: "How long is a session?", a: "Gym sessions are 30 or 60 minutes. In-home training visits run 30–45 minutes." },
  { q: "Can you run more than one of my dogs?", a: "Yes — our dual slatmills handle duo, trio, and quad sessions for dogs from the same household." },
  { q: "What if it's raining or cold?", a: "The gym is a climate-controlled van, so sessions run year-round." },
  { q: "How do I book?", a: "Online, any time, through our booking page. Pick a service, pick a time, done. First-time dogs start with an introductory session." },
];
