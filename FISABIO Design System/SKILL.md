---
name: fisabio-design
description: Use this skill to generate well-branded interfaces and assets for FISABIO (Fundació per al Foment de la Investigació Sanitària i Biomèdica de la Comunitat Valenciana), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start
- **Global CSS:** link `styles.css` (it `@import`s every token + font file). Everything is driven by CSS custom properties — never hard-code hex; use `var(--brand)`, `var(--accent)`, `var(--text-strong)`, etc.
- **Components:** load `_ds_bundle.js` and read from `window.FISABIODesignSystem_61892e` — `Button`, `Badge`, `Card`, `Input`, `Tabs`, `Stat`, `Logo`. Each has a `.prompt.md` next to its source with usage.
- **Logos:** use the real SVGs in `assets/logos/` (or the `Logo` component). The GVA + Fisabio **lockup** is mandatory for official institutional communications. Never redraw the mark.
- **Icons:** Lucide via CDN (`<i data-lucide="…">` + `lucide.createIcons()`).

## Non-negotiables
- Deep indigo `#1d0f44` is the primary; **coral `#ff647d` is the only accent** — at most one coral CTA per view.
- Display face = Larsseit (substituted with **Figtree**); body = **Roboto**. Headings sentence case; eyebrows are short tracked-out caps.
- Pills for buttons, circles for the motif. Soft indigo-tinted shadows. Calm ease-out motion, no bounce. No emoji.
- Copy is Valencian-first, institutional, first-person-plural, people-centred.

See `readme.md` → CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY for the full guidance, and `ui_kits/website/` for a worked example.
