# Jog Dat Dog — website

Static Next.js site for jogdatdog.com. Seven pages, real session video, MoeGo booking handoff with ad attribution.

## Change content (no code knowledge needed)

Everything you'd normally edit lives in **`data/site.ts`**:

| What | Where |
| --- | --- |
| Prices | `pricing` |
| Service areas | `site.serviceAreas` (set `serviceAreasConfirmed: true` once verified) |
| Phone / email / socials | `site` |
| How-it-works steps + clips | `steps` |
| Roster dogs (names, lines, photos) | `dogs` |
| FAQ | `faq` |
| Reviews | `data/reviews.json` (`featured` = home page cards) |

Photos go in `public/media/`, video in `public/video/`. Keep video under ~6 MB each; cut clips with ffmpeg at 720px wide, H.264, `-movflags +faststart`.

Edit → commit → push to `main` → Vercel deploys in about a minute. Preview any branch before merging.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deploy (Vercel)

1. vercel.com → Add New Project → import this GitHub repo. Framework auto-detects as Next.js. Build command `next build`, output `out`.
2. Project → Settings → Environment Variables: `NEXT_PUBLIC_GTM_ID` = your GTM container ID (`GTM-XXXXXXX`). Redeploy.
3. Project → Settings → Domains: add `jogdatdog.com` and `www.jogdatdog.com`; follow the DNS instructions at your registrar. Keep the old WordPress host live until the new site is verified on the Vercel preview URL.

`vercel.json` carries 301 redirects from the old WordPress URLs (`/gallery`, `/services`, `/about-us`, `/contact-us`) and long-cache headers for media.

## Tracking setup (one-time)

1. **GA4**: one property, web stream for `jogdatdog.com`. In Admin → Data Streams → Configure tag settings → Configure your domains, add `booking.moego.pet` (cross-domain).
2. **GTM**: container with a GA4 Configuration tag (fires on All Pages) and GA4 Event tags for the custom events the site pushes to `dataLayer`:
   `booking_funnel_entry` (params: `placement`, `service`), `video_play`, `video_complete`, `pricing_toggle`, `faq_open`, `step_view`, `reviews_click`.
3. **MoeGo**: Online Booking → Integration → Google Analytics → paste the same GA4 Measurement ID. Completed bookings land on `/ol/appointment/submitted` on booking.moego.pet.
4. **GA4 key event**: Admin → Events → Create event `booking_complete` where `page_location` contains `/ol/appointment/submitted`. Mark as key event.
5. **Google Ads**: Tools → Conversions → Import from GA4 → `booking_complete`. Bid to this, not to clicks.
6. The site already carries `gclid`/`utm_*` from the landing URL through to every MoeGo link (`lib/tracking.ts`), and tags each with `utm_placement` so you can see which button converts.

## Open content items

Search the code for `[` to find placeholders: dog names/bios, founder story (About), safety practices + service areas (FAQ), recurring discount (Pricing). Pricing in `data/site.ts` follows the Oct 2026 brief; the printed flyer differs — confirm.
