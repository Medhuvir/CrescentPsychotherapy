# Case Study — Crescent Psychotherapy

---

## Meta

| Field | Value |
|---|---|
| File slug | `crescent-psychotherapy.html` |
| Image folder | `assets/portfolio/Crescent Psychotherapy/images/` |
| `<title>` | `Crescent Psychotherapy — DN Creative Studio` |
| `<meta description>` | `Brand identity, design system, and full website build for a New York telehealth therapy practice — case study by DN Creative Studio.` |

---

## Hero

| Field | Value |
|---|---|
| Eyebrow | `Case Study — 2025` |
| Category | `Brand Identity + Web Design` |
| Title | `CRESCENT <em>PSYCHOTHERAPY</em>` |
| Lede | `Full brand and site build for a solo LCSW private practice in New York — logo, design system, and a single-page telehealth site deployed in weeks.` |
| Hero gradient | `linear-gradient(135deg, #1C3020 0%, #2E4F32 60%, #3A6140 100%)` |
| Topo SVG color | `#3A6140` (Fern) |

---

## Meta Strip

| Label | Value |
|---|---|
| Client | Crescent Psychotherapy |
| Agency | DN Creative Studio (direct) |
| Year | 2025 |
| Scope | Brand Identity + Design System + Web Design + Web Development + SEO |
| Our Role | `Brand + Web` (--orange modifier) |

---

## Overview

### Brief Title

> *From no web presence to a full brand and live site — built for trust, built for Google.*

### Scope Pills

`Brand Identity` · `Logo Design` · `Design System` · `Web Design` · `Web Development` · `Copywriting` · `SEO` · `Structured Data` · `Telehealth UX`

### Narrative

Yanina Mitelman, LCSW had been practicing therapy in New York for years — accepting clients via Headway, Alma, and Psychology Today — but had no standalone web presence to call her own. Referrals came through third-party directories; there was no owned brand, no place to send word-of-mouth leads, and no way to control the first impression her practice made.

The ask was to build everything from zero: a logo, a visual identity, a design system, and a fully coded site — all working together to communicate warmth, safety, and clinical credibility to people searching for therapy when they're at their most vulnerable.

The constraint was clear: nothing could feel clinical, corporate, or cold. The target audience is people in distress looking for a human. Every decision — color, font, copy, layout — had to pass that test.

The result was a live, production-deployed site at crescentpsychotherapy.com with a complete brand identity, a documented design system, and full SEO/schema markup — ready to be found, ready to be trusted.

### The Ask Cards

**01 — The Client**
Yanina Mitelman is a New York licensed clinical social worker offering trauma-informed individual and couples therapy via telehealth. She runs a solo private practice, blending DBT, CBT, and somatic experiencing approaches with a warm, grounded clinical style.

**02 — The Ask**
No website, no brand, no logo. Just a name, a practice, and a philosophy. She needed a standalone identity and web presence that could sit alongside her Psychology Today, Headway, and Alma profiles — something ownable, referral-ready, and Google-discoverable from day one.

**03 — The Outcome**
A fully deployed single-page site at crescentpsychotherapy.com — complete with custom SVG logo, a documented design system (v1.1), scroll-triggered animations, a testimonial carousel, three-platform booking integration, schema.org MedicalBusiness structured data, and full Open Graph/Twitter Card SEO. Live via Netlify with a custom domain.

---

## Process + Tools

### Process Title

> *Brief to browser — no mockups, no handoff, no waiting.*

### Narrative

There was no Figma file. No wireframe phase. No design-then-dev handoff. The workflow was brief → build, with AI doing the heavy lifting in between.

The process started with a written brief: Yanina's practice philosophy, her audience, what she needed the site to do, and the one hard constraint — nothing could feel clinical. That brief went straight into Claude Code inside VS Code. From there, the entire project was built through a conversation: color systems, type pairings, logo geometry, component specs, copy, SEO markup — all developed iteratively in the editor, in real time.

Gemini handled the research layer — validating schema.org structures, checking SEO best practices against current guidance, and pressure-testing copy against what therapy-seekers actually search for. It ran alongside Claude as a second voice, particularly useful for factual grounding where hallucination risk mattered (structured data formats, HIPAA-adjacent copywriting considerations).

Antigravity handled live preview and browser QA — catching layout breaks, testing the testimonial carousel across viewports, and confirming the mobile hamburger nav before each push.

The logo started as a concept in the brief — a crescent with stars — and was rendered as a hand-crafted SVG directly in code: three paths, two sparkle forms, one crescent body, fully scalable from favicon to hero. No vector app opened. The design system lived in a markdown reference doc and a CSS custom properties block — tokens first, components second, site third.

Total tools opened: VS Code, a terminal, two browser tabs. Total time from brief to deployed site: weeks, not months.

### Process Phases

**01 — Brief**
Written brief established brand personality, audience emotional state, and hard constraints. The brief became the prompt — fed directly to Claude to anchor every decision that followed. No mood board. No discovery deck.

**02 — Identity in Code**
The logo mark was built as a hand-crafted SVG: three paths — large star, small star, crescent body — with a four-context color system documented inline. Claude iterated on path geometry and color relationships in VS Code; Antigravity previewed each pass in the browser.

**03 — Design System**
A 20-token color palette, type scale, and component library codified as CSS custom properties and a living markdown reference doc. No separate design file — the code was the design system.

**04 — Site Build**
The single-page site built section by section through Claude Code: sticky nav, animated hero, services grid, seamless testimonial carousel, three-platform booking grid, Calendly CTA. Mobile-responsive from the start; Antigravity caught every breakpoint issue before commit.

**05 — SEO + Launch**
Gemini validated the schema.org `MedicalBusiness` block — services, credentials, booking actions, `sameAs` cross-links — against current spec. Full OG, Twitter Cards, canonical, and meta descriptions written and verified. Pushed to Netlify via CNAME on crescentpsychotherapy.com.

### Tools Sidebar

| Group | Items |
|---|---|
| Build | Claude Code, VS Code, Antigravity, Gemini |
| Delivery | Production HTML/CSS/JS, CSS token system, design system reference doc, Netlify deploy |
| Team | Dan Nemirovsky — Brand, Design, Development |
| Client | Crescent Psychotherapy / Yanina Mitelman, LCSW |

---

## Bento Gallery

**Gallery title:** `Selected <em>work.</em>`
**Artifact count:** `<em>8</em> ARTIFACTS`

### Tile Plan

| # | Type | Size | Content |
|---|---|---|---|
| 01 | Hero | 4×3 | Homepage hero — dark Canopy bg, crescent logo mark centered large, hero copy |
| 02 | Tall | 2×3 | Color system — stacked swatches: Forest Greens / Warm Ambers / Neutrals |
| 03 | Wide | 4×2 | Services section — four service cards on white bg |
| 04 | Square | 2×2 | Logo mark — all four color variants (on Canopy / Parchment / White / Moss) |
| 05 | Wide | 4×2 | Testimonials carousel — dark section, card in view |
| 06 | Square | 2×2 | Type scale — Playfair Display headers + DM Sans body ramp |
| 07 | Square | 2×2 | Booking section — three platform cards (Psychology Today / Headway / Alma) |
| 08 | Square | 2×2 | Schema / SEO — structured data token grid or mobile nav screenshot |

### Tile Background Colors

| Tile | Background |
|---|---|
| 01 Hero | `#1C3020` Canopy |
| 02 Color System | `#F5F2E7` Parchment |
| 03 Services | `#FFFFFF` White |
| 04 Logo Variants | `#2E4F32` Moss |
| 05 Testimonials | `#1C3020` Canopy |
| 06 Type Scale | `#EAE5D0` Linen |
| 07 Booking | `#F5F2E7` Parchment |
| 08 SEO / Mobile | `#243D27` Deep Moss |

---

## Page-Specific CSS Notes

- **Accent color:** Replace Bloomberg purple (`#7c3aed`) with `#2E4F32` (Moss) for phase numbers, active dots, artifact badges, and component bullets
- **Secondary accent:** `#D49040` (Honey) for token labels and hover states
- **Hero gradient:** `linear-gradient(135deg, #1C3020 0%, #2E4F32 100%)`
- **Data tile — color swatches:** Render each color as a 40×40 rounded swatch with hex label in DM Sans 11/400
- **Data tile — type scale:** Playfair Display at 52/36/26/20 + DM Sans at 11/15/13 with weight labels

---

## Work Grid Entry (work.html)

| Field | Value |
|---|---|
| Category pill | `Brand + Web` |
| Title | `Crescent Psychotherapy` |
| Subtitle | `Brand Identity + Design System + Website` |
| Year | `2025` |
| Thumbnail bg | `#1C3020` |
| Thumbnail accent | `#D49040` |
| Link | `crescent-psychotherapy.html` |

---

## Checklist

- [ ] Copy `bloomberg-dap.html` → `crescent-psychotherapy.html`
- [ ] Create `assets/portfolio/Crescent Psychotherapy/images/`
- [ ] Export screenshots as PNG 2× (hero, services, testimonials, booking, mobile, logo variants)
- [ ] Update `<title>` and `<meta description>`
- [ ] Update hero: gradient, eyebrow, category, title, lede
- [ ] Update meta strip
- [ ] Write overview section (title, pills, narrative, ask cards)
- [ ] Write process section (title, narrative, phases, tools)
- [ ] Replace accent color in page CSS (`#7c3aed` → `#2E4F32` / `#D49040`)
- [ ] Build 8 bento tiles with screenshots + data tiles
- [ ] Set artifact count to 8
- [ ] Set project number in `.case-backbar__context`
- [ ] Add entry to `work.html` grid
- [ ] Test mobile + desktop
- [ ] Push to main
