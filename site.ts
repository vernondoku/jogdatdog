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
  serviceAreasConfirmed: false, // flip to true once the list above is verified
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/mobile-dog-gym/", label: "Mobile Dog Gym" },
  { href: "/dog-training/", label: "Dog Training" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/our-pack/", label: "Our Pack" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
];

/** Prices from the Oct 2026 brief. The printed flyer differs (intro $75, duo $100) — confirm which is current. */
export const pricing = {
  intro: 60,
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
  recurringNote: "Same per-session rate on a standing weekly or twice-weekly slot. [Recurring discount: TO BE CONFIRMED]",
};

export const steps = [
  {
    num: "01",
    title: "The gym rolls up.",
    caption: "Your driveway. Our destination.",
    desc: "Your driveway becomes their next adventure. We bring the equipment and the encouragement.",
    video: "/video/step1-arrive.mp4",
    poster: "/media/step1-arrive.jpg",
    alt: "Jog Dat Dog van parked on a residential street",
  },
  {
    num: "02",
    title: "A little sniff. A little hello.",
    caption: "A hello before the let's go.",
    desc: "A calm, treat-forward introduction to the slatmill at your dog's pace. Curious noses welcome.",
    video: "/video/step2-hello.mp4",
    poster: "/media/step2-meet.jpg",
    alt: "Trainer offering a treat to a doodle on the slatmill",
  },
  {
    num: "03",
    title: "They find their stride.",
    caption: "Their pace. Their workout.",
    desc: "A supervised run where your dog sets the speed. We watch form, breathing, and energy the whole time.",
    video: "/video/step3-stride.mp4",
    poster: "/media/svc-gym.jpg",
    alt: "Two dogs running side by side on dual slatmills",
  },
  {
    num: "04",
    title: "Back home. Big tail wags.",
    caption: "A little run. A lot of happy.",
    desc: "Water, a cool-down, and a dog that's ready to relax.",
    video: "/video/step4-wags.mp4",
    poster: "/media/step4-finish.jpg",
    alt: "Trainer kneeling with two happy dogs after a session",
  },
];

/** Roster. Names/bios are placeholders until each owner approves. Photos are real client dogs. */
export const dogs = [
  { name: "[Dog name]", tag: "solo", line: "[Owner-approved line]", img: "/media/ath1.jpg", alt: "Goldendoodle running with tongue out" },
  { name: "[Dog name]", tag: "buddies", line: "[Owner-approved line]", img: "/media/ath2.jpg", alt: "Black dog with a donut toy on the slatmill" },
  { name: "[Dog name]", tag: "solo", line: "[Owner-approved line]", img: "/media/ath3.jpg", alt: "Yellow lab on the slatmill, smiling" },
  { name: "[Dog name]", tag: "solo", line: "[Owner-approved line]", img: "/media/ath4.jpg", alt: "Brown and white dog running toward the camera" },
  { name: "[Dog name]", tag: "training", line: "[Owner-approved line]", img: "/media/step2-meet.jpg", alt: "Trainer with a doodle on the slatmill" },
  { name: "[Dog name]", tag: "buddies", line: "[Owner-approved line]", img: "/media/transform.jpg", alt: "Two doodles side by side on slatmills" },
];
export const dogTags = [
  { key: "all", label: "All dogs" },
  { key: "solo", label: "Solo strides" },
  { key: "buddies", label: "Workout buddies" },
  { key: "training", label: "In training" },
];

export const faq = [
  { q: "What's a slatmill?", a: "A treadmill powered entirely by the dog. There's no motor — your dog sets the pace and can stop any time." },
  { q: "Is it safe for my dog?", a: "Every run is supervised and adjusted to your dog's conditioning and comfort. [Add JDD's specific safety practices and any age/health guidelines.]" },
  { q: "Where do you go?", a: "The Kansas City metro. [Confirm the service-area list before launch.]" },
  { q: "How long is a session?", a: "Gym sessions are 30 or 60 minutes. In-home training visits run 30–45 minutes." },
  { q: "Can you run more than one of my dogs?", a: "Yes — our dual slatmills handle duo, trio, and quad sessions for dogs from the same household." },
  { q: "What if it's raining or cold?", a: "The gym is a climate-controlled van, so sessions run year-round." },
  { q: "How do I book?", a: "Online, any time, through our booking page. Pick a service, pick a time, done. First-time dogs start with an introductory session." },
];
