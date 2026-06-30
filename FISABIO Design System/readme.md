# FISABIO Design System

A design system for **FISABIO** — *Fundació per al Foment de la Investigació Sanitària i Biomèdica de la Comunitat Valenciana* (Foundation for the Promotion of Health and Biomedical Research of the Valencian Community). FISABIO is a public foundation of the **Generalitat Valenciana (GVA)** that manages and promotes health and biomedical research across the three Valencian provinces (València, Castelló, Alacant). It groups public-health research (CSISP / FISABIO-Salut Pública), the FISABIO-Oftalmologia Mèdica centre (FOM) and associated hospital research units.

Primary working language is **Valencian/Catalan** (with Castilian and English logo variants available). The institutional voice is paired with the GVA: official communications must show both marks together.

## Sources used to build this system
- `uploads/fs-m003-fisabio-manual-identitat-corporativa.pdf` — **Manual d'Identitat Corporativa** (34 pp). Primary source: brand concept, logo construction & versions, typography, the colour gamut (gamma cromàtica) and corporate-stationery rules. All colour values and the two typefaces below are taken verbatim from it.
- `uploads/fs-i032-convivencia-logo-gva-fisabio-ed02.pdf` — the "convivència" (GVA + Fisabio coexistence) lockup reference.
- `uploads/convivencia-{blanc,blau,negre}.svg` — the source vector lockups. **Note:** the supplied SVGs ship with no fill colours (empty `<style>`/`<defs>`), so they all render black as-delivered. We re-coloured them and produced the variants in `assets/logos/` (originals preserved in `assets/logos/source/`).

> No website codebase, Figma file, or slide deck was provided. The website UI kit is therefore a **faithful brand application** built from the manual's foundations — not a pixel replica of an existing fisabio.es view. Provide the real site source/Figma to align it exactly.

---

## CONTENT FUNDAMENTALS

How FISABIO writes.

- **Language:** Valencian/Catalan first. Spanish and English exist as parallel logo/communication versions, chosen per audience. Keep diacritics correct (à, è, í, ò, ·l·l, ç).
- **Register:** institutional, sober, scientific — but warm and people-centred. It is a public foundation, so copy is trustworthy and plain, never hype-y or salesy.
- **Person:** speaks in the **first person plural** about itself — *"Impulsem la investigació…", "Investiguem…", "La fundació treballa…"*. Addresses the reader formally/neutrally; avoids slangy "tu" marketing tone.
- **Casing:** sentence case for headings and UI. Small **ALL-CAPS eyebrows/kickers** are a signature (e.g. `QUÈ INVESTIGUEM`, `IMPACTE 2025`) — short, tracked-out, in the display face. Never set long passages in caps.
- **Numbers & impact:** concrete figures, in the mono face for data (`2,847 publicacions`, `42 M€`, `3 províncies`). The "three" motif (three provinces / three DNA chains) recurs.
- **Vocabulary:** *investigació, recerca, salut pública, biomèdica, grups, àrees, convocatòries, transferència, excel·lència.*
- **Emoji:** none. This is a public health-research institution — emoji are off-brand.
- **Vibe:** "ciència que cuida" — rigorous science in service of the community's health.

Example copy (used across the kit):
> **Eyebrow:** FUNDACIÓ PER AL FOMENT DE LA INVESTIGACIÓ
> **Headline:** Ciència que cuida la salut valenciana
> **Body:** Impulsem la investigació sanitària i biomèdica d'excel·lència a la Comunitat Valenciana, de la recerca bàsica fins a la salut pública.

---

## VISUAL FOUNDATIONS

**Brand concept (the mark).** The isotip is three chains of semicircles. Per the manual it fuses: the **heart** (health), the **circle** (the microscope — the tool of scientific enquiry), the **staff of Asclepius** (medicine), **DNA/RNA** (biomedicine), and the **territory** — the three chains stand for the three Valencian provinces. Everything circular flows from this.

**Colour.** Deep indigo `#1d0f44` (Pantone 2766CP) is *the* brand colour and does the heavy lifting — large brand surfaces, headings, primary buttons. The palette is otherwise cool and quiet: periwinkle `#bfbee0`, sky `#c9e1ea`, and a warm **coral `#ff647d`** (Pantone 1777CP) as the single accent for emphasis/CTAs, plus a muted blush `#eaccce`. Neutrals are faintly indigo-tinted (never pure grey). The GVA corporate red `#c8102e` (Pantone 186C, used on stationery) doubles as the danger colour. Full tints/shades in `tokens/colors.css`.

**Typography.** Two families, from the manual:
- **Larsseit** — the corporate/display face (used in the logotype). *Larsseit is commercial and is NOT shipped here* — substituted with **Figtree** (Google Fonts), the closest free geometric-humanist grotesque. Used for headings, buttons, eyebrows, stats.
- **Roboto** — the free-use text face for body copy, captions and stationery (manual specifies a body size no smaller than ~10pt). Shipped via Google Fonts.
- **Roboto Mono** — dates, metrics, IDs.
Headings are tight-tracked sentence case; eyebrows are tracked-out caps. See `tokens/typography.css`.

**Backgrounds.** Mostly light (paper `#f6f6fb` / white), with confident **full indigo brand bands** for hero, impact and footer. The recurring decorative element is **circles** — rings and gradient-filled circles, and DNA-like dot fields (see the hero `DotField`) — drawn from the microscope/DNA motif. Gradients are used sparingly and on-brand: indigo→coral diagonals for media/news placeholders, soft radial glows behind hero content. No photography is shipped (none supplied); media slots use brand gradients as placeholders.

**Shape & geometry.** Generous radii; the **pill and the circle are first-class shapes** (buttons are fully pill-shaped; avatars, icon buttons and motif dots are circles). Cards use `--radius-xl` (24px).

**Elevation & cards.** Cards are white, 1px `--border`, generous radius, with **soft indigo-tinted shadows** (never neutral black). Interactive cards lift 3px and deepen the shadow on hover, and tint the border indigo. A short **coral accent bar** optionally sits above a card title for feature emphasis.

**Motion.** Calm and scientific. Ease-out (`cubic-bezier(.2,.7,.3,1)`), 120–360ms. Fades and small translateY lifts; **no bounce**, no spring, no infinite decorative loops.

**Interaction states.**
- *Hover:* primary → darker indigo + brand shadow; secondary/ghost → faint indigo-50 fill; accent → darker coral + coral glow; links → darker indigo + underline.
- *Press:* a subtle 1px downward nudge (`translateY(1px)`) — colour-led, not heavy scaling.
- *Focus:* a 3px coral focus ring (`--ring-focus`); inputs get an indigo border + indigo-100 halo.
- *Disabled:* 45% opacity, no transform.

**Borders & transparency.** 1px hairlines in indigo-tinted grey. On the indigo brand surface, borders and secondary text use white at low alpha (`--border-on-brand`, `--text-on-brand-muted`). Glass/blur is reserved for the sticky header (86% white + 12px backdrop-blur) — used sparingly.

**Layout.** Content max-width `1200px`, 32px gutters, 4px spacing grid. Sections breathe (≈84px vertical). Three-column grids for areas/news.

---

## ICONOGRAPHY

- The brand manual defines **no icon set** of its own; its only proprietary glyph system is the **logo/symbol** (the three DNA chains) plus circular graphic resources.
- **Icon system in use: [Lucide](https://lucide.dev)** (open-source, 24px, ~2px rounded stroke) — loaded from CDN (`unpkg.com/lucide`) and rendered via `<i data-lucide="name">` + `lucide.createIcons()`. *This is a documented substitution* chosen for its clean, even-weight geometry, which sits well with the geometric display face. Swap it if FISABIO standardises on another set.
- Stroke icons only; they inherit `currentColor` and are typically indigo on light, white on the brand surface.
- **No emoji.** No Unicode-glyph icons. Decorative "icons" that are really brand motif (rings, gradient circles, DNA dot fields) are generated from CSS/SVG circles — these are foundational brand geometry, not illustration.
- **Logos** are real vector assets in `assets/logos/` — never redraw them. Use the `Logo` component.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the single entry point consumers link (an `@import` manifest only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter wrapper.

**`tokens/`** (all `@import`ed by `styles.css`)
- `fonts.css` — font families + Google Fonts import (Figtree/Roboto/Roboto Mono).
- `colors.css` — brand primitives, indigo/coral/sky/blush scales, neutrals, status, semantic aliases.
- `typography.css` — weights, type scale, line-height, tracking, roles.
- `spacing.css` — 4px spacing scale + layout tokens.
- `effects.css` — radii, shadows, borders, motion.
- `base.css` — element reset/defaults + brand utilities (`.fs-eyebrow`, `.fs-prose`, `.fs-dotrow`).

**`assets/logos/`** — re-coloured FISABIO+GVA lockups, Fisabio imagotip, and isotip symbol in indigo/white/coral/black/periwinkle; `source/` holds the original SVGs.

**`components/`** — reusable React primitives (compiled to `window.FISABIODesignSystem_61892e`):
- `core/` — `Button`, `Badge`, `Card`, `Input`, `Tabs`
- `data/` — `Stat`
- `brand/` — `Logo`
Each ships a `.jsx`, `.d.ts`, `.prompt.md`, and a `@dsCard` showcase HTML.

**`ui_kits/website/`** — the FISABIO institutional website kit (`index.html` click-through: home → research areas → article), built from `Sections.jsx`, `Blocks.jsx`, `Screens.jsx`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) rendered in the Design System tab.

**Namespace:** components are exposed at `window.FISABIODesignSystem_61892e`.
