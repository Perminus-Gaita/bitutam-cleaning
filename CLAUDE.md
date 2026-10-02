# Bitutam International Cleaning Services — project memory

## What this is

Marketing site for the **cleaning / gardening / landscaping** arm of Bitutam International.
Live at https://bitutam-cleaning.vercel.app · repo `Perminus-Gaita/bitutam-cleaning`.

There is a **sister site** for a completely different Bitutam business — trading, procurement and
supply — at https://bitutam-trading.vercel.app (`Perminus-Gaita/bitutam-trading`). Keep the two
separate; they share a company name and contact details but nothing else.

## Source of truth

Built from `~/Documents/Bitutam/Bitutam International Company Profile.pdf` (11 pages).
All body copy is verbatim from that deck. If the deck changes, this site should follow it.

Gotcha: the PDF's internal metadata title is `BANOU Cleaning Services - Profile web version-2` —
it was produced from a reused template. Ignore the metadata; the content is genuinely Bitutam's.

Second gotcha: the PDF has **no text layer at all** (`pdftotext` returns zero bytes). To re-extract
copy, either read the rendered pages as images (`pdftoppm -r 60 -png`) or use the sibling
`Bitutam_International_Company_Profile_Editable.docx` — but note that DOCX describes the *trading*
business, not this one.

## Design decisions

- Brand green is `#0d431f`, **sampled directly** from the profile deck's own artwork rather than
  guessed. Lime accent `#7bc144`, deep `#062615`, bone `#f6f5f1`.
- Single long-form page with anchor nav — mirrors the structure of the 11-page profile deck.
- Fonts: Barlow Condensed (display, uppercase) + Inter (body).
- Section order intentionally follows the deck: hero → about → vision/mission → clients →
  cleaning → gardening → equipment → portfolio → assurance → why choose → contact.

## Imagery

28 images in `public/img/`. Two provenances:

- **From the deck** (`hero-facade`, `staff-mopping`, `staff-vacuum`, `supplies-green`, `mop-*`,
  `hedge-*`, `lawn-mow`, `strimmer`, `vacuum-carpet`, `bedroom-bw`, `apartment-block`). These are the
  brand-authentic ones — `staff-mopping` and `staff-vacuum` show the actual green uniform. They are
  low-resolution (100 DPI print extracts); do not upscale them into hero positions.
- **License-free stock** (Unsplash) for everything else, higher resolution.

## Gotchas

- Phone is `+254 720 447 964` (real number from the user, 2026-10-02 — the deck's `+254 700 123 456`
  was a dummy). `info@bitutam.co.ke` is forwarded by ImprovMX to jthuranira@icloud.com. Shared with
  the sister site. Live at https://cleaning.bitutam.co.ke.
- Next.js image optimization is slow on a cold cache — a first-load screenshot will show blank
  images for ~10 seconds. This is not a bug. Warm with
  `curl "localhost:PORT/_next/image?url=%2Fimg%2FNAME.jpg&w=1920&q=75"` before screenshotting.
- Pinned to `next@15.5.23`, not `15.5.4` — the latter has CVE-2025-66478.
- `gh repo create --push` fails in this environment (`git: 'remote-https' is not a git command`).
  Push separately with:
  `git -c credential.helper='!f(){ echo username=x-access-token; echo "password=$(gh auth token)"; };f' push`

## Deployment

Vercel project `bitutam-cleaning` (`prj_61YF4bhFxqYaWIgBtRCCH6XL2tbI`), team `gaitas-projects`.
Push to `main` → production deploy. Vercel Authentication is disabled, so the URL is public.
