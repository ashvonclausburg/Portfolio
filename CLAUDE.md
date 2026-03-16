# Ashley's Portfolio — Project Context

## Overview
Personal portfolio site for a product designer. Built with vanilla HTML/CSS/JS + Vite (no React/framework). Deployed via **GitHub Pages** with custom domain `vonclausburg.com`.

**GitHub:** https://github.com/ashvonclausburg/Portfolio
**Live site:** https://vonclausburg.com
**Local preview:** `npm run dev` → http://localhost:5173
**Preview server name (launch.json):** `Portfolio`
**Figma design file:** `https://www.figma.com/design/v5XWWsuTD6Yp9DjvuyVvVA/2026-Get-a-job`

---

## File Structure

```
/Users/ashleyvonclausburg/Desktop/Portfolio/
├── index.html                      # Homepage
├── styleguide.html                 # Internal design system reference
│
├── risk-freeze-rates.html          # ✅ Square: Reducing Risk Freeze Rates
├── invoices-null-state.html        # ✅ Square: Invoices Null State Redesign
├── contracts.html                  # Square: Contracts case study
├── services-sellers.html           # Square: Services Sellers case study
├── automattic-design-system.html   # ✅ Automattic Design System
├── wordpress-digital-identity.html # ✅ WordPress.com Digital Identity
├── wordpress-social-ads.html       # ✅ WP Social Ad Experiments
│
├── src/
│   ├── type.css                # ⭐ Shared typography tokens (import on ALL pages)
│   ├── style.css               # Homepage: nav, hero, cards, career rows, footer
│   ├── case-study-v1.css       # ✅ Shared case study layout (ALL case study pages)
│   ├── automattic.css          # Automattic-specific overrides (brand banner, text-only hero)
│   └── wordpress.css           # WordPress-specific overrides (brand banner, text-only hero)
│
├── public/
│   ├── password-gate.js        # Client-side password gate for case studies
│   ├── CNAME                   # Custom domain: vonclausburg.com
│   └── images/
│       ├── avatar-sketch.svg
│       ├── vonClausburgResume2026.pdf
│       ├── Automattic/         # 22 files
│       ├── WordPress/          # 9 files
│       ├── WPSocialAds/        # 9 files (hero, thumbnail, pinterest, motion, videos)
│       ├── ProactiveDocIDV/    # Hero, journey map, prototype video, solutions
│       ├── NullState/          # Hero + thumbnail
│       ├── ServicesSellers/
│       └── visualsection/
│
└── vite.config.js              # Multi-page build config
```

---

## Case Study Page Structure

All case studies use `case-study-v1.css`. Three hero variants exist:
- **Split** (text left, image right): `risk-freeze-rates`, `invoices-null-state`
- **Text-only** (full-width banner below): `automattic-design-system`, `wordpress-digital-identity`
- **Text + full image** (`cs-hero--no-image` + `cs-hero-full-image`): `wordpress-social-ads`

```
nav
→ cs-hero
  → cs-label (eyebrow)
  → cs-title
  → cs-subtitle
  → cs-meta-row (Company / Role)
  → cs-hero-image | cs-hero-full-image (varies by page)
→ cs-section (+ cs-section--gray variant)
  → cs-section-inner (max-width: 850px)
    → cs-section-label, cs-section-title, cs-body
    → optional: cs-stats, cs-quotes, cs-callout, cs-two-col,
                cs-problem-card, cs-hypothesis, cs-finding,
                cs-recs, cs-solution, cs-journey-img-btn
→ cs-section.cs-outcome (dark/black bg)
→ cs-footer
```

---

## Core Design Rules

### Typography System (`src/type.css`)
Always import **before** page-specific CSS. Defines:
- `--t-xs` → `--t-4xl` — font sizes
- `--w-regular` → `--w-bold` — weights
- `--lh-tight` → `--lh-loose` — line heights
- `--color-text`, `--color-text-soft`, `--color-text-muted`, `--color-text-faint`
- `--color-accent: #006aff`
- `--space-1` → `--space-20` — spacing scale (4px increments)

### Font
- **Inter** — all text (Google Fonts, weights 400–900)

### Colors
- Accent blue: `#006aff`
- Gray section: `background: #fafafa`
- Outcome/dark section: `background: #000`
- Section divider: `border-bottom: 1px solid rgba(0,0,0,0.06)`

### CSS Link Order (every HTML page)
```html
<link rel="stylesheet" href="/src/style.css" />
<link rel="stylesheet" href="/src/type.css" />
<link rel="stylesheet" href="/src/case-study-v1.css" />  <!-- case studies only -->
```

### Responsive
- Desktop: sections use `padding: 80px 80px`
- Mobile (≤768px): `padding: 24px` sides, tighter hero spacing
- `.desktop-only` utility class hides elements on mobile

---

## Image & Video

- All images served locally from `public/images/`, organized by case study
- Thumbnail crop helpers in `style.css`: `.img-crop-top`, `.img-crop-face`, plus inline `object-position`
- Video: native `<video autoplay loop muted playsinline>`, `.mp4` primary
- ffmpeg path: `/opt/homebrew/bin/ffmpeg`

---

## Password Gate
- Case study pages include `<script src="/password-gate.js" defer></script>`
- Password: `lorem` (stored in `public/password-gate.js`)
- Uses `sessionStorage` — lasts one browser session

---

## Git & Deployment
- **Deployment:** GitHub Pages from `main` branch, custom domain `vonclausburg.com`
- Pushing to `main` triggers automatic deploy
- Commit format: short description + `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
- **Always run git from:** `/Users/ashleyvonclausburg/Desktop/Portfolio`
- **Before committing, run `git status`** to check for untracked files — especially new images in `public/images/`

---

## Figma MCP
- Requires Figma Desktop App open in Dev Mode
- Local MCP server: `http://127.0.0.1:3845/mcp`
- On large nodes, call `get_metadata` first → then `get_design_context` on specific sublayer IDs

---

## Pending

- [ ] Remove styleguide link from index.html before launch
- [ ] Refactor hardcoded CSS values to use type.css variables
- [ ] Clean up inline styles in case study HTML files
- [ ] Add scroll animations to career section rows

---

## Notes
- WordPress.com and Automattic are the same employer (2017–2021) but listed separately in the career section
- Square (2021–2026) is intentionally omitted from the career section — already prominent through Product Design case studies
- `journey.jpg` is the old low-res journey map — `journey2.jpg` is current
