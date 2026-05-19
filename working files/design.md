# Crescent Psychotherapy — Design System

**Practice:** Crescent Psychotherapy  
**Clinician:** Yanina Mitelman, LCSW  
**Version:** 1.1  
**Contact:** crescentpsychotherapy@gmail.com · (657) 291-1102  
**Web:** psychologytoday.com/profile/1565333

---

## 1. Brand overview

Crescent Psychotherapy is a private practice offering trauma-informed, somatic, CBT, and DBT therapy. The visual identity reflects the practice's core values: warmth, groundedness, and quiet trust. The aesthetic is organic and editorial — never clinical, never corporate.

The logo mark is a custom SVG consisting of three paths: a crescent moon body, a large sparkle star, and a small sparkle star. The crescent opens to the right with the stars sitting inside the bowl.

---

## 2. Logo

### SVG source

The master logo lives in `CTlogo.svg` (viewBox `0 0 706.26 702.43`). It contains three paths:

**Path 1 — Large star (Honey `#D49040` default)**
```
M444.6,441l-42.78-112.32-29.17,36.22,11.29-45.78-58.9,3.36,49.41-29.62-31.67-26.22,
42.17,11.6c-7.37-39.45-19.76-75.44-21.02-120.22l45,110.96,37.8-48.41-20.93,57.68,
64.15-4-56.88,29.72,25.02,24.01-36.02-5.15c8.7,40.3,20.82,72.13,22.52,118.16Z
```

**Path 2 — Small star (Ember `#C17B2A` default)**
```
M210.71,255.8l11.95,68.89-26.17-64.17-17.84,15.43,4.96-21.19-35.34-.14,31.12-17.28,
-7.01-7.71c-.89-.98-.82-2.74.55-2.82l13.05-.69-14.36-77.58,28.86,70.49,14.1-8.41,
.34,17.93,35.2-2.1-32.12,17.35,9.47,14.76-16.77-2.76Z
```

**Path 3 — Crescent body (varies by background)**
```
M405.14,0c120.91,40.63,208.02,154.88,208.02,289.48,0,168.62-136.7,305.32-305.32,
305.32S10.48,465.9,2.88,304.05c-1.9,14.82-2.88,29.92-2.88,45.25,0,195.03,158.1,
353.13,353.13,353.13s353.13-158.1,353.13-353.13C706.26,171.95,575.5,25.15,405.14,0Z
```

### Full inline SVG (copy-paste ready)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 706.26 702.43" width="80" height="80">
  <path d="M444.6,441l-42.78-112.32-29.17,36.22,11.29-45.78-58.9,3.36,49.41-29.62-31.67-26.22,42.17,11.6c-7.37-39.45-19.76-75.44-21.02-120.22l45,110.96,37.8-48.41-20.93,57.68,64.15-4-56.88,29.72,25.02,24.01-36.02-5.15c8.7,40.3,20.82,72.13,22.52,118.16Z" fill="#D49040"/>
  <path d="M210.71,255.8l11.95,68.89-26.17-64.17-17.84,15.43,4.96-21.19-35.34-.14,31.12-17.28-7.01-7.71c-.89-.98-.82-2.74.55-2.82l13.05-.69-14.36-77.58,28.86,70.49,14.1-8.41.34,17.93,35.2-2.1-32.12,17.35,9.47,14.76-16.77-2.76Z" fill="#C17B2A"/>
  <path d="M405.14,0c120.91,40.63,208.02,154.88,208.02,289.48,0,168.62-136.7,305.32-305.32,305.32S10.48,465.9,2.88,304.05c-1.9,14.82-2.88,29.92-2.88,45.25,0,195.03,158.1,353.13,353.13,353.13s353.13-158.1,353.13-353.13C706.26,171.95,575.5,25.15,405.14,0Z" fill="#1C3020"/>
</svg>
```

Adjust `width` and `height` freely — the viewBox keeps it proportional.

### Color variants

| Variant | Crescent fill | Star large | Star small | Background |
|---------|--------------|-----------|-----------|------------|
| On canopy | `#F5F2E7` Parchment | `#D49040` Honey | `#C17B2A` Ember | `#1C3020` Canopy |
| On parchment | `#1C3020` Canopy | `#D49040` Honey | `#C17B2A` Ember | `#F5F2E7` Parchment |
| On white | `#1C3020` Canopy | `#D49040` Honey | `#C17B2A` Ember | `#FFFFFF` White |
| On moss | `#EAE5D0` Linen | `#E8C48A` Wheat | `#D49040` Honey | `#2E4F32` Moss |

### Usage rules

- Maintain minimum clearspace of 1× logo height on all sides
- Never stretch, skew, rotate, recolor, or crop the mark
- Minimum display size: 24px height
- Stars always use amber tones; crescent always uses a green or cream — never swap these

### Logo as divider

The full mark can be used at 16–20px as a section divider between two hairlines:

```html
<div style="display:flex; align-items:center; gap:14px;">
  <div style="flex:1; height:0.5px; background:#DDD6BC;"></div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 706.26 702.43" width="18" height="18">
    <!-- paths here with muted fills -->
  </svg>
  <div style="flex:1; height:0.5px; background:#DDD6BC;"></div>
</div>
```

---

## 3. Color palette

### Forest greens (primary)

| Name | Hex | Usage |
|------|-----|-------|
| Canopy | `#1C3020` | Primary brand color, dark backgrounds, nav |
| Deep moss | `#243D27` | Headings on light backgrounds |
| Moss | `#2E4F32` | Body text, mid-weight headings |
| Fern | `#3A6140` | Accents, secondary text |
| Leaf | `#5E8E65` | Muted text, captions |
| Sage | `#A8C9AC` | Tag fills, light accents |
| Mist | `#D3E8D5` | Light fills, hover states |

### Warm ambers (accent)

| Name | Hex | Usage |
|------|-----|-------|
| Bark | `#8C5510` | Dark amber accent |
| Copper | `#B06E18` | Ghost button text, links |
| Ember | `#C17B2A` | Primary highlight, small star |
| Honey | `#D49040` | Large star, icons, divider accents |
| Wheat | `#E8C48A` | Soft dividers, background tints |
| Straw | `#F3DFB5` | Tag fills, very light amber |

### Neutrals

| Name | Hex | Usage |
|------|-----|-------|
| Parchment | `#F5F2E7` | Page background |
| Linen | `#EAE5D0` | Section surfaces |
| Stone | `#DDD6BC` | Borders, divider lines |
| White | `#FFFFFF` | Card surfaces, form fields |

---

## 4. Typography

### Fonts

- **Display / Headings:** Playfair Display (Google Fonts) — italic for emotional emphasis
- **Body / UI:** DM Sans (Google Fonts) — 300 body, 400 small/caption, 500 labels/buttons

### Type scale

| Role | Font | Weight | Size | Line height |
|------|------|--------|------|-------------|
| Display XL | Playfair Display | 400 | 52px | 1.05 |
| Display LG | Playfair Display | 400 | 36px | 1.15 |
| Heading H1 | Playfair Display | 500 | 26px | 1.25 |
| Heading H2 | Playfair Display | 500 | 20px | 1.3 |
| Label / Eyebrow | DM Sans | 500 | 11px | — · all-caps · +0.14em |
| Body | DM Sans | 300 | 15px | 1.8 |
| Small | DM Sans | 400 | 13px | 1.6 |
| Caption | DM Sans | 400 | 12px | 1.5 |

---

## 5. Components

### Buttons

**Primary** — `#243D27` bg · `#F5F2E7` text · pill · 13px/500  
**Secondary** — transparent · `#243D27` text · 1.5px `#3A6140` border · pill  
**Ghost** — transparent · `#B06E18` text · 1px `#D49040` border-bottom only · no radius

### Tags / badges

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| Green | `#D3E8D5` | `#243D27` | 0.5px `#A8C9AC` |
| Amber | `#F3DFB5` | `#8C5510` | 0.5px `#E8C48A` |
| Cream | `#F5F2E7` | `#3A6140` | 0.5px `#DDD6BC` |

All tags: DM Sans 500 / 11px / pill / +0.06em tracking.

### Form fields

- Border: 1px `#DDD6BC` Stone · focus: `#5E8E65` Leaf
- Border-radius: 10px · Font: DM Sans 300 / 14px
- Placeholder: `#A8C9AC` Sage · Label: DM Sans 500 / 11px uppercase `#3A6140`

### Cards

- Background: `#FFFFFF` · Border: 0.5px `#DDD6BC` · Border-radius: 16px · Padding: 2rem

### Dividers

1. **Logo mark divider** — hairline + mini CTlogo.svg at 18px
2. **Diamond divider** — hairline + `· · ◆ · ·` in Honey/Ember
3. **Dot divider** — hairline + `· · ·` in Honey

---

## 6. Spacing scale

`4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96`

Use `rem` for vertical rhythm. Use `px` for component-internal gaps.

---

## 7. Border radius scale

| Value | Usage |
|-------|-------|
| 4px | Small internal elements |
| 8px | Badges, small inputs |
| 10px | Form fields |
| 14px | Service cards |
| 16px | Standard cards |
| 100px | Pills (buttons, tags) |
| 50% | Avatars |

---

## 8. Voice & tone

**Personality:** grounded · warm · present · healing · gentle · trustworthy · non-clinical · human

**Do say:** "You deserve a space where you feel safe." · "We work at your pace." · "I'm here when you're ready."

**Avoid:** clinical jargon, passive imperatives, anything that sounds like a hospital intake form.

---

## 9. CSS variables

```css
:root {
  --cp-green-900: #1C3020;
  --cp-green-800: #243D27;
  --cp-green-700: #2E4F32;
  --cp-green-600: #3A6140;
  --cp-green-400: #5E8E65;
  --cp-green-200: #A8C9AC;
  --cp-green-100: #D3E8D5;
  --cp-amber-700: #8C5510;
  --cp-amber-600: #B06E18;
  --cp-amber-500: #C17B2A;
  --cp-amber-400: #D49040;
  --cp-amber-200: #E8C48A;
  --cp-amber-100: #F3DFB5;
  --cp-cream:        #F5F2E7;
  --cp-cream-dark:   #EAE5D0;
  --cp-cream-deeper: #DDD6BC;
  --cp-white:        #FFFFFF;
  --cp-serif: 'Playfair Display', Georgia, serif;
  --cp-sans:  'DM Sans', system-ui, sans-serif;
}
```

---

*Crescent Psychotherapy Design System — v1.1*  
*Yanina Mitelman, LCSW · crescentpsychotherapy@gmail.com*
