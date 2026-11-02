import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { VideoProvider } from "@/components/VideoModal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Mobile Dog Gym & In-Home Dog Training | Kansas City`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, images: [{ url: "/media/hero-desktop.jpg", width: 1440, height: 960 }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

/** Set NEXT_PUBLIC_GTM_ID in Vercel (e.g. GTM-XXXXXXX) to turn on Google Tag Manager. GA4 + Google Ads tags live inside GTM. */
const GTM = process.env.NEXT_PUBLIC_GTM_ID;

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+1-816-610-9044",
  email: site.email,
  image: `${site.url}/media/hero-desktop.jpg`,
  logo: `${site.url}/media/logo-lockup.png`,
  priceRange: "$$",
  areaServed: [
    { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 39.0997, longitude: -94.5786 }, geoRadius: `${site.serviceRadiusMiles * 1609} m` },
    ...site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  ],
  sameAs: Object.values(site.social),
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.google.rating, reviewCount: site.google.reviewCount },
  makesOffer: [
    { "@type": "Offer", name: "Mobile Dog Gym session", price: "60", priceCurrency: "USD", url: `${site.url}/pricing/` },
    { "@type": "Offer", name: "In-Home Dog Training visit", price: "120", priceCurrency: "USD", url: `${site.url}/dog-training/` },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/barlow-condensed-caps-900-italic.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/barlow-condensed-lower-900-italic.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/barlow-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="icon" href="/media/favicon-v2.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {GTM && (
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');` }} />
        )}
      </head>
      <body>
        {GTM && <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>}
        <VideoProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </VideoProvider>
      </body>
    </html>
  );
}
