# Bitutam International Cleaning Services

Marketing site for **Bitutam International Cleaning Services** — professional cleaning, gardening and
landscaping for homes, businesses and institutions across Nairobi and Kenya.

Built from the company profile deck (`Bitutam International Company Profile.pdf`).

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static prerender)
- [Tailwind CSS v4](https://tailwindcss.com)
- `next/image` with AVIF/WebP output
- Barlow Condensed + Inter via `next/font`

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Structure

```
app/
  layout.tsx     metadata, fonts, favicon
  page.tsx       all page sections
  globals.css    design tokens + Tailwind
components/
  nav.tsx        sticky header w/ mobile menu
  icons.tsx      inline SVG icon set
public/img/      28 photographs
```

## Brand

| Token | Value | Use |
| --- | --- | --- |
| Brand green | `#0d431f` | Sampled from the company profile deck |
| Deep green | `#062615` | Dark sections, footer |
| Lime accent | `#7bc144` | CTAs, icons, highlights |
| Bone | `#f6f5f1` | Alternating section backgrounds |

## Content notes

- Copy is taken verbatim from the company profile deck.
- Contact details: `+254 720 447 964` (supplied by the client; the deck had a dummy) and `info@bitutam.co.ke`.
  **The phone number looks like a placeholder** — confirm before promoting the site.
- Photography is a mix of the deck's own images and license-free stock (Unsplash).

## Deployment

Deployed on Vercel. Pushing to `main` triggers a production deployment.
