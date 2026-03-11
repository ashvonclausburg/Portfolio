# Ashley's Portfolio — Project Context

## Overview
Personal portfolio site for a product designer. Built with vanilla HTML/CSS/JS + Vite (no React/framework). Hosted on GitHub, will deploy to Netlify with custom domain.

**GitHub:** https://github.com/ashvonclausburg/Portfolio
**Local preview:** `npm run dev` → http://localhost:5173
**Preview server name (launch.json):** `Portfolio`

---

## File Structure
```
/Users/ashleyvonclausburg/Desktop/Portfolio/
├── index.html                  # Homepage / work grid
├── case-study.html             # Figma-matched case study (Square Risk project)
├── case-study-v1.html          # Original version (pre-Figma) — also Square Risk
├── src/
│   ├── type.css                # ⭐ Shared typography system (import on ALL pages)
│   ├── style.css               # Global nav, hero, footer styles
│   ├── case-study.css          # Styles for case-study.html
│   └── case-study-v1.css       # Styles for case-study-v1.html
└── public/
    └── images/
        └── ProactiveDocIDV/
            ├── journey.jpg              # Low-res (145KB) — replaced by journey2
            ├── journey2.jpg             # High-res journey map (1MB)
            ├── UsabilityPrototype.mov   # Original video (2.7MB)
            └── UsabilityPrototype.mp4  # Compressed video (331KB) ← use this
```

---

## Core Design Rules (apply to ALL pages)

### Centering / Width
- Body content: `max-width: 850px; margin: 0 auto; width: 100%` on `.cs-section-inner`
- Hero sections: can be full-width or left-aligned — no centering constraint
- Pattern: full-width `<section>` shell → inner `<div class="cs-section-inner">` constrained to 850px

### Typography System (`src/type.css`)
Always link `type.css` before page-specific CSS. It defines:
- `--t-xs` through `--t-4xl` for font sizes
- `--w-regular` through `--w-bold` for weights
- `--lh-tight` through `--lh-loose` for line heights
- `--color-text`, `--color-text-soft`, `--color-text-muted`, `--color-text-faint`
- `--color-accent: #006aff`
- `--space-1` through `--space-20` for spacing

### Fonts
- **Inter** — all body/heading text (loaded via Google Fonts)
- **Source Code Pro** — case study label only (monospace, uppercase, underlined)

### Colors
- Accent: `#006aff`
- Quote card background: `#f8f9fa`, border: `1px solid rgba(0,0,0,0.08)`
- Section divider: `border-bottom: 1px solid rgba(0,0,0,0.06)`

---

## CSS Link Order (every HTML page)
```html
<link rel="stylesheet" href="src/style.css" />
<link rel="stylesheet" href="src/type.css" />
<link rel="stylesheet" href="src/[page-specific].css" />
```

---

## Git Workflow
- Commit regularly after meaningful changes
- Push to GitHub after each commit: `git push`
- Commit message format: short description + `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
- **Always `cd /Users/ashleyvonclausburg/Desktop/Portfolio` before running git commands**

---

## Figma MCP
- Uses Figma Desktop App local MCP server at `http://127.0.0.1:3845/mcp`
- Requires Figma desktop app open with the file in Dev Mode
- Design file: `https://www.figma.com/design/v5XWWsuTD6Yp9DjvuyVvVA/2026-Get-a-job`
- **Important:** Call `get_metadata` first on large nodes, then `get_design_context` on individual sublayer IDs — the full page is too large for context

---

## Video Handling
- Use native HTML5 `<video>` (no YouTube/Vimeo embeds)
- Always provide `.mp4` as primary source, `.mov` as fallback
- Compress with ffmpeg (now installed via Homebrew): `ffmpeg -i input.mov -vcodec h264 -acodec aac -crf 28 -preset fast -movflags +faststart output.mp4`
- ffmpeg path: `/opt/homebrew/bin/ffmpeg` (add to PATH with `eval "$(/opt/homebrew/bin/brew shellenv zsh)"`)

---

## Pending / Next Steps
- [ ] Fix case-study-v1.html: add missing text content from Figma + image placeholders for missing sections
- [ ] Fix case-study-v1.html: "Proposed experience" section — journey map image should be inside the section, remove extra headline
- [ ] Export Figma hero image locally (currently served from `localhost:3845`, only works when Figma desktop is open)
- [ ] Homepage refinement
- [ ] Set up Netlify deployment with custom domain
- [ ] Add scroll animations / lightbox effects to remaining images
- [ ] Replace placeholder images with real assets as they become available
- [ ] Set up git config name/email to avoid committer warnings

---

## Notes
- The `.mov` video (UsabilityPrototype) is kept as a fallback but `.mp4` is the primary source
- `journey.jpg` (145KB) is the old low-res version — `journey2.jpg` (1MB) is current
- Lightbox is already implemented on the journey map in case-study-v1.html
