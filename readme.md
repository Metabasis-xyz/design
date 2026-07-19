# METABASIS Design System

METABASIS is a global CFD exchange built on the Canton network, designed for enterprises: HFT desks and institutional traders first, retail second. Full-KYC venue. The infrastructure is blockchain-based, but the brand treats that as invisible plumbing — this is **pure financial infrastructure**, never "crypto."

**Design stance:** very minimal, American, institutional. Think ICE/NYSE market infrastructure with Stripe-grade clarity — not a trading-app aesthetic, not Web3. Instruments span FX, commodities, equities, and digital-asset CFDs.

Sources: no prior brand assets, codebase, or Figma were provided. Everything here was created from scratch per the founder's brief (minimal / American / enterprise / non-crypto). The wordmark is set in plain type; the mark (`assets/mark.svg`) is an original geometric "descending-basis M" created for this system — replace when a formal identity exists.

## Content fundamentals

- **Tone:** plainspoken and precise, Stripe-like. Declarative sentences. No hype, no exclamation points, no crypto vocabulary (never "web3", "DeFi", "on-chain" in headline copy; "Canton network" appears only in factual infrastructure/compliance contexts).
- **Voice:** "we" for the exchange, "you/your desk" for the customer. Second person in product copy.
- **Casing:** sentence case everywhere — headlines, buttons, nav. UPPERCASE reserved for tiny structural labels (column headers, badges, section eyebrows) at `--tracking-wide`.
- **Numbers are the imagery.** Copy leads with verifiable specifics: "Sub-millisecond matching", "142 venues", "99.99% uptime". Numbers always set in mono.
- **No emoji. Ever.**
- Example headline: "Institutional CFD execution, without the intermediary stack."
- Example body: "Every counterparty on METABASIS clears identity verification before their first order. You trade against a known book."
- Buttons are verbs: "Request access", "Open terminal", "Read the docs". Never "Learn more →" with arrow decoration; a plain "Learn more" link is acceptable.

## Visual foundations

- **Color:** cool near-achromatic neutrals; one institutional blue accent (`--accent`). Market semantics: green up / red down (US convention), with subtle tinted backgrounds for fills. Max two background colors per surface. No gradients anywhere.
- **Modes:** light is the document default (marketing); terminal surfaces set `[data-theme="dark"]`. Dark is near-black `#0B0C0E`, borders-not-shadows.
- **Type:** Archivo (grotesque; UI + display) and IBM Plex Mono (every number that can tick, tickers, code, timestamps, labels). Display headlines: Archivo 600, `--tracking-tight`. Data: mono with `font-variant-numeric: tabular-nums`.
- **Spacing:** 4px base scale. Terminals are dense (28px rows, 12–13px type); marketing is airy (96px section padding).
- **Radii:** sharp. Terminal panels 0; controls 2px; cards 4px; overlays 6px. Nothing pill-shaped except status dots.
- **Borders & shadows:** 1px borders carry all structure. Light mode allows one whisper shadow on cards (`--shadow-card`); dark mode uses borders only. Overlays get `--shadow-overlay`.
- **Backgrounds:** flat color only. No textures, patterns, illustrations, or gradients. Marketing sections alternate `--surface-page` / `--surface-card` / occasionally `--surface-inverse` (dark band).
- **Imagery:** the product IS the imagery — real terminal screenshots/embeds and typographic stat blocks. No stock photos, no 3D renders, no abstract blobs.
- **Motion:** fast and functional. 100–240ms, `--ease`, opacity/transform fades only. Price flashes: background tint (`--up-subtle`/`--down-subtle`) decaying over 400ms. No bounces, no parallax.
- **Hover:** darker fill (light mode) / lighter fill (dark mode), border-strong on interactive rows. **Press:** one shade darker still; no scale transforms. **Focus:** `--focus-ring` double ring, always visible.
- **Cards:** `--surface-card`, 1px `--border-default`, 4px radius, `--shadow-card` in light mode.
- **Transparency/blur:** none, except overlay scrims `rgba(11,12,14,0.5)`.

## Iconography

- Icon system: **Lucide** (CDN, https://unpkg.com/lucide@latest) — 1.5px stroke, square joins fit the engineered feel. Use sparingly: navigation, table actions, status. Never decorative icon grids.
- Sizes 16/20px, `stroke-width: 1.5`, color `currentColor`.
- Unicode arrows `▲ ▼` are used for price direction (mono font), colored `--up`/`--down`.
- No emoji, no icon fonts, no filled/duotone styles.
- Substitution flag: Lucide is a stand-in; if METABASIS adopts a proprietary set, swap here.

## Index

- `styles.css` — global entry; imports `tokens/` (fonts, colors, typography, spacing).
- `ds_loader.js` — browser fallback that compiles the `.jsx` sources directly when the generated `_ds_bundle.js` isn't present; demo cards and UI-kit pages boot through it.
- `assets/` — `mark.svg`, `mark-inverse.svg` (original placeholder mark).
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `components/core/` — Button, IconButton, Badge, Tag, Card, Tabs; `components/forms/` — Input, Select, Checkbox, Radio, Switch; `components/feedback/` — Dialog, Toast, Tooltip.
- `components/data/` — PriceChange, TickerCell, StatBlock, DataTable.
- `ui_kits/terminal/` — dark trading terminal (watchlist, order book, chart, order ticket, positions).
- `ui_kits/website/` — light marketing site (hero, stats, product, compliance, footer).
- `ui_kits/social/` — Twitter/X templates (1600×900): announcement, stat card, listing.
- `SKILL.md` — agent-skill entry point.

## Intentional additions

- `components/data/*` — trading-specific primitives (price change, tickers, stat blocks, data tables) required by the product category; no source inventory existed.
