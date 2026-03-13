# Ashley's Portfolio — Project Context

## Overview
Personal portfolio site for a product designer. Built with vanilla HTML/CSS/JS + Vite (no React/framework). Hosted on GitHub, deploying to Netlify with custom domain.

**GitHub:** https://github.com/ashvonclausburg/Portfolio
**Local preview:** `npm run dev` → http://localhost:5173
**Preview server name (launch.json):** `Portfolio`
**Figma design file:** `https://www.figma.com/design/v5XWWsuTD6Yp9DjvuyVvVA/2026-Get-a-job`

---

## File Structure

```
/Users/ashleyvonclausburg/Desktop/Portfolio/
├── index.html                  # Homepage: hero, work grid (3-col), career rows, about
├── styleguide.html             # Internal design system reference (remove link before launch)
│
├── case-study-v1.html          # ✅ Square: Reducing Risk Freeze Rates (full content)
├── null-state.html             # 🚧 Square: Invoices Null State Redesign (hero only, WIP)
├── automattic.html             # ✅ Automattic Design System case study
├── wordpress.html              # ✅ WordPress.com Digital case study
├── wp-social-ads.html          # ✅ WP Social Ad Experiments case study
│
├── src/
│   ├── type.css                # ⭐ Shared typography tokens (import on ALL pages)
│   ├── style.css               # Homepage: nav, hero, cards, career rows, footer
│   ├── case-study.css          # Unused/legacy
│   └── case-study-v1.css       # ✅ Shared case study layout (used by ALL case study pages)
│
└── public/
    └── images/
        ├── avatar-sketch.svg
        ├── NullState/
        │   └── NullState.png               # Hero + thumbnail for null-state.html
        └── ProactiveDocIDV/
            ├── DocIDVHero.png              # Hero + thumbnail for case-study-v1.html
            ├── journey2.jpg               # High-res journey map (lightbox)
            ├── UsabilityPrototype.mp4     # Compressed video ← use this
            ├── UsabilityPrototype.mov     # Fallback only
            ├── Warn_Lock.png
            ├── Solution_Part1.png
            ├── Solution_Part2.png
            └── ResearchRecommendation1.png
```

---

## Homepage Structure (`index.html`)

1. **Nav** — sticky, blur backdrop
2. **Hero** — big headline, avatar, email copy button, tagline
3. `<hr class="divider" />`
4. **Work** (`#work`) — two `.work-cat` blocks:
   - `01 Product Design` — 2 cards: Risk Freeze Rates + Invoices Null State
   - `02 Visual & Systems Design` — 3 cards: Automattic, WordPress.com Digital, WP Social Ads
5. `<hr class="divider" />`
6. **Career** (`section.career`) — 4 numbered rows: Automattic, WordPress.com, Udemy, Freelance
7. `<hr class="divider" />`
8. **About** (`#about`)
9. **Footer**
10. Temporary style guide link (remove before launch)

---

## Case Study Page Structure

All case studies use `case-study-v1.css`. Structure:
```
nav
→ cs-hero (split: text left, image right)
  → cs-label (eyebrow)
  → cs-title
  → cs-subtitle
  → cs-meta-row (Company / Role / Focus)
  → cs-hero-image
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

### Centering / Width
- Case study body: `max-width: 850px; margin: 0 auto` on `.cs-section-inner`
- Homepage sections use `padding: 80px 80px` (24px on mobile)

### Typography System (`src/type.css`)
Always import **before** page-specific CSS. Defines:
- `--t-xs` → `--t-4xl` — font sizes
- `--w-regular` → `--w-bold` — weights
- `--lh-tight` → `--lh-loose` — line heights
- `--color-text`, `--color-text-soft`, `--color-text-muted`, `--color-text-faint`
- `--color-accent: #006aff`
- `--space-1` → `--space-20` — spacing scale (4px increments)

### Eyebrow Label Class
- **Homepage:** `.section-label` (12px, uppercase, #999, `letter-spacing: 0.12em`)
- **Case studies:** `.cs-label` (same style, used in hero) and `.cs-section-label` (used in sections)
- These are the same visual style — create a shared class if you need to add a new one

### Fonts
- **Inter** — all body/heading text (Google Fonts, weights 400–900)
- **Source Code Pro** — monospace, only used in legacy case-study.css (not active)

### Colors
- Accent blue: `#006aff`
- Quote card: `background: #f8f9fa`, `border: 1px solid rgba(0,0,0,0.08)`
- Section divider: `border-bottom: 1px solid rgba(0,0,0,0.06)`
- Gray section: `background: #fafafa`
- Outcome/dark section: `background: #000`

### CSS Link Order (every HTML page)
```html
<link rel="stylesheet" href="/src/style.css" />
<link rel="stylesheet" href="/src/type.css" />
<link rel="stylesheet" href="/src/case-study-v1.css" />  <!-- case studies only -->
```

---

## Image Handling

### Thumbnail Crop Helpers (homepage cards)
Per-image CSS classes in `style.css` for images that need special cropping in the 16:10 card thumbnail:
- `.img-crop-top` — `scale(1.35), transform-origin: top center` — hides bottom text in wide images (Automattic card)
- `.img-crop-face` — `scale(1.1), transform-origin: 35% center` — shifts focus left (WordPress.com card)
- Inline `style="object-position: left top;"` — anchors Square DocIDV gradient to top-left
- Inline `style="object-position: top;"` — anchors Null State image to show gradient at top

### Wix CDN Images (external thumbnails)
Automattic and WordPress.com thumbnails use Wixstatic URLs. Change the `al_X` parameter to control server-side crop alignment:
- `al_c` = center (default), `al_t` = top, `al_b` = bottom, `al_l` = left, `al_r` = right
- Example: `...fill/w_800,h_500,al_t,...` crops from the top

### Video
- Use native HTML5 `<video autoplay loop muted playsinline>`
- `.mp4` as primary source, `.mov` as fallback
- Compress: `ffmpeg -i input.mov -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart output.mp4`
- ffmpeg: `/opt/homebrew/bin/ffmpeg`

---

## Git Workflow
- Commit regularly after meaningful changes, push after each commit: `git push`
- Format: short description + `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
- **Always run git from:** `/Users/ashleyvonclausburg/Desktop/Portfolio`
- **Before committing, run `git status`** to check for untracked files — especially new images in `public/images/`. If HTML references an image, that image must be committed too. Worktrees only get tracked files, so untracked images will appear broken.
- Note: git committer name/email not configured — harmless warning, can be fixed with `git config --global user.name/email`

---

## Figma MCP
- Requires Figma Desktop App open in Dev Mode
- Local MCP server: `http://127.0.0.1:3845/mcp`
- **Important:** On large nodes, call `get_metadata` first → then `get_design_context` on specific sublayer IDs
- Resume Figma node: `node-id=3-4` (page 1 of the design file)

---

## Pending / Next Steps

### Active
- [ ] **null-state.html** — fill in body content once designs are ready (hero is done)

### Soon
- [ ] Set up Netlify deployment with custom domain
- [ ] Remove styleguide link from index.html before launch (the `<div>` above `<script>` tag)
- [ ] Update homepage About section copy (currently placeholder)
- [ ] Update homepage footer social links (GitHub/LinkedIn/Twitter)
- [ ] Update nav contact email (currently placeholder)

### Polish
- [ ] Export Figma hero images locally (some currently served from localhost:3845)
- [ ] Add scroll animations to career section rows
- [ ] Set up git config name/email: `git config --global user.name "Ashley vonClausburg"`

---

## Notes
- `case-study.html` + `case-study.css` are legacy/unused — can be deleted eventually
- `journey.jpg` (145KB) is the old low-res journey map — `journey2.jpg` (1MB) is current
- Lightbox is implemented in case-study-v1.html (click to expand on journey map)
- WordPress.com and Automattic are the same employer (2017–2021) but listed separately in the career section to match how they appear as distinct case studies
- Square (2021–2026) is intentionally omitted from the career section — it's the primary employer and already prominent through the Product Design case studies
