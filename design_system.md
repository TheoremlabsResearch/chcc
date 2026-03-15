# CHCC Design System & Branding Guidelines

*This document is the single source of truth for all visual decisions on the CHCC website, brochure, and digital assets. Every designer and developer must reference this file before making visual choices.*

---

## Brand Identity Overview

### Core Vibe
CHCC's visual identity communicates **five attributes simultaneously:**
1. **Heritage** — Rooted in 5,000+ years of Dharmic civilization
2. **Modern** — Contemporary, clean, and universally accessible
3. **Welcoming** — Warm, non-intimidating, and inclusive of all backgrounds
4. **Eco-conscious** — Nature-connected, sustainable, and grounded
5. **Aspirational** — Premium quality that inspires confidence in donors

**What we are NOT:** A traditional temple website with busy patterns, clashing colors, and clip-art images of deities. CHCC is a modern civic institution that happens to be rooted in Hindu values — think premium YMCA, JCC, or high-end Ayurvedic wellness retreat, not a religious organization's homepage.

**Comparable Design References:**
- Kripalu Center for Yoga & Health (kripalu.org) — clean, welcoming, wellness-forward
- Sivananda Yoga Vedanta (sivananda.org) — authentic but not intimidating
- YMCA (ymca.net) — multi-generational, civic, community-first design language
- Sonima Foundation — premium wellness, clean typography, rich photography

---

## Color System

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Saffron / Sunset** | `#F47C36` | rgb(244, 124, 54) | Primary CTA buttons, accent headers, donate button, logo mark |
| **Earth Green** | `#4A7C59` | rgb(74, 124, 89) | Secondary buttons, Gaushala/wellness sections, eco-related content |
| **Teak / Wood Brown** | `#8B5A2B` | rgb(139, 90, 43) | Structural accents, borders, traditional design elements, Mallakhamba references |
| **Sattvic Cream** | `#FDFBF7` | rgb(253, 251, 247) | Primary background; page backgrounds, card backgrounds |

### Extended Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Saffron (Hover)** | `#D4621E` | Hover state for primary buttons |
| **Forest Green (Hover)** | `#3A6347` | Hover state for secondary buttons |
| **Warm Ivory** | `#F5F0E8` | Section alternating backgrounds |
| **Soft Turmeric** | `#F9E4C8` | Info boxes, highlight callouts, testimonial backgrounds |
| **Sandalwood** | `#C4956A` | Gradient accents, subtle ornamental elements |
| **Charcoal Text** | `#2D2D2D` | Primary body text |
| **Medium Gray** | `#6B7280` | Secondary text, captions, placeholder text |
| **Light Gray** | `#E5E7EB` | Dividers, borders, input fields |
| **White** | `#FFFFFF` | Cards over cream backgrounds, nav bar |
| **Error Red** | `#DC2626` | Form errors, urgent alerts |
| **Success Green** | `#16A34A` | Form success, donation confirmations |

### Color Usage Rules
- **Never** use pure black (`#000000`) — use Charcoal (`#2D2D2D`) instead.
- **Never** use pure white backgrounds in sections — use Sattvic Cream or Warm Ivory for warmth.
- The Saffron (`#F47C36`) "Donate" button must appear in the header on every page — this is the highest-priority CTA.
- Section alternation: Sattvic Cream → Warm Ivory → Sattvic Cream (never two identical adjacent backgrounds).

### Accessibility
- All text must meet WCAG 2.1 AA contrast standards (minimum 4.5:1 ratio for normal text, 3:1 for large text).
- Do not place Saffron text on white backgrounds — contrast ratio is insufficient.
- Charcoal text on Sattvic Cream: contrast ratio ≈ 14:1 (excellent).

---

## Typography

### Font Stack

**Headings (H1–H3): Playfair Display**
- Style: Serif, elegant, heritage feel
- Weights used: 400 (Regular), 700 (Bold), 900 (Black for hero text)
- Letter-spacing: -0.5px for H1; 0 for H2–H3
- Google Fonts URL: `fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900`

**Body & UI (H4–H6, paragraphs, labels, buttons): Inter**
- Style: Sans-serif, highly legible, modern
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Line height: 1.6 for body text; 1.2 for headings
- Google Fonts URL: `fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700`

**Sanskrit & Devanagari Text: Noto Serif Devanagari**
- Used for Sanskrit shlokas, Devanagari script, and traditional text elements
- Google Fonts URL: `fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;700`

### Type Scale (Desktop)

| Element | Size | Weight | Font | Color |
|---------|------|--------|------|-------|
| H1 (Hero) | 64px | 900 | Playfair Display | #2D2D2D or White |
| H2 (Section) | 48px | 700 | Playfair Display | #2D2D2D |
| H3 (Subsection) | 36px | 700 | Playfair Display | #2D2D2D |
| H4 (Card title) | 24px | 600 | Inter | #2D2D2D |
| H5 (Label) | 18px | 600 | Inter | #2D2D2D |
| H6 (Caption) | 14px | 500 | Inter | #6B7280 |
| Body Large | 18px | 400 | Inter | #2D2D2D |
| Body Regular | 16px | 400 | Inter | #2D2D2D |
| Body Small | 14px | 400 | Inter | #6B7280 |
| Button Text | 16px | 600 | Inter | White or #2D2D2D |
| Nav Link | 15px | 500 | Inter | #2D2D2D |

*Mobile: Reduce H1 to 40px, H2 to 32px, H3 to 26px. Body sizes remain unchanged.*

---

## Spacing System

Use an 8px base grid throughout.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight: icon padding, inline gaps |
| `space-2` | 8px | Element padding, small gaps |
| `space-3` | 16px | Default padding, component gaps |
| `space-4` | 24px | Card padding, section element gaps |
| `space-5` | 32px | Section padding (mobile) |
| `space-6` | 48px | Section padding (tablet) |
| `space-7` | 64px | Section padding (desktop) |
| `space-8` | 96px | Hero section padding |
| `space-9` | 128px | Maximum section breathing room |

---

## Component Guidelines

### Buttons

**Primary Button (Donate / CTA)**
- Background: `#F47C36` (Saffron)
- Text: White, Inter SemiBold 16px
- Border-radius: 8px
- Padding: 14px 28px
- Hover: `#D4621E` background + slight shadow lift (box-shadow: 0 4px 12px rgba(244,124,54,0.4))
- Active: Scale 0.98

**Secondary Button (Learn More / Volunteer)**
- Background: `#4A7C59` (Earth Green)
- Text: White
- Same radius/padding as primary

**Outline Button (Download / PDF)**
- Background: Transparent
- Border: 2px solid `#F47C36`
- Text: `#F47C36`
- Hover: Fill with `#F47C36`, text white

**Ghost Button (Navigation / Secondary Links)**
- Background: Transparent
- Text: `#2D2D2D`
- Hover: `#F5F0E8` background

---

### Cards

**Program Card**
- Background: White
- Border-radius: 12px
- Box-shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Hover: shadow lifts to `0 8px 24px rgba(0,0,0,0.12)` + translate(-2px)
- Image: 16:9 ratio header image, border-radius top 12px
- Padding: 24px
- Contains: Image, Category Tag, Title (H4), Description (2–3 lines), CTA Link

**Testimonial Card**
- Background: `#F9E4C8` (Soft Turmeric)
- Border-left: 4px solid `#F47C36`
- Border-radius: 0 12px 12px 0
- Padding: 24px 28px
- Contains: Quote mark icon (Saffron), Quote text (Italic, 18px), Attribution (Bold 14px + Location)

**Donation Tier Card**
- Background: White with Saffron top border (4px)
- Box-shadow medium
- Contains: Tier name (H4, Saffron), Dollar amount (H2, Bold), What it funds, CTA button
- Hover: Full Saffron background, white text (dramatic transition)

**Impact Metric Card**
- Background: Gradient from Saffron to Deep Saffron
- Text: White
- Number: H1 size, animated counter on scroll
- Label: Body Small, white 80% opacity

---

### Navigation

**Desktop Nav:**
- Sticky top bar: White background, 1px bottom border `#E5E7EB`
- Logo (left), Nav links (center), "Donate" button (right, Saffron)
- Nav links: 15px Inter Medium, spaced 32px apart
- Dropdown menus: White background, 8px border-radius, shadow, 220px min-width

**Mobile Nav:**
- Hamburger icon (right), animated to X on open
- Full-screen overlay menu: Sattvic Cream background
- Menu items: 24px Inter Medium, generous touch targets (min 48px height)
- "Donate" button always visible in mobile header (not hidden in hamburger)

---

## Imagery Guidelines

### Photography Direction

**Hero Images:**
- Prefer outdoor, natural settings: the Gaushala fields, park yoga, festival gatherings
- Golden hour lighting (warm, soft shadows) aligned with Saffron brand palette
- Subjects should be relaxed, joyful, and genuine — no posed stock photography
- Aspect ratio: 21:9 for hero; 16:9 for section headers

**Community Photography:**
- **Always** show multi-generational interaction: grandparents with grandchildren, seniors with young professionals
- **Always** show diversity: North and South Indian, different regional dress, children, families, singles
- Avoid: Solo subjects in formal poses, overly professional lighting that feels corporate

**Program Photography:**
- Yoga: Natural light studio or outdoor; non-competitive, non-acrobatic poses — accessibility and serenity
- Gaushala: Wide-open fields, sunlight on cows, families smiling during Meet & Feed
- Aum School: Children engaged with hands-on learning, not sitting at desks passively
- Dance/Arts: Motion-blurred classical dance, tabla hands close-up, traditional costumes with modern framing

**What to Avoid:**
- Stock photos of generic "Indian" subjects (easily identifiable as stock)
- Formal deity imagery that might feel religiously exclusive
- Busy, dark, or crowded compositions
- Clip art or low-resolution traditional motifs

### Illustration & Iconography

**Icons:** Use Phosphor Icons (phosphoricons.com) — clean, rounded, modern. Size: 24px standard; 32px for feature icons.

**Traditional Motifs (Used Sparingly):**
- Lotus flower: As a subtle SVG accent in section dividers or background watermarks (10% opacity, Saffron)
- Om symbol (ॐ): In logo and footer only; never as a decorative element on program pages
- Kolam/rangoli patterns: As SVG background texture in festival/events sections (subtle, Sandalwood color)
- Mandala: As a circular frame for team member photos or as a loading animation

**Logo Concept (For Graphic Designer):**
- Primary mark: Stylized banyan tree (roots and canopy) with an Om (ॐ) symbol integrated into the trunk
- The banyan represents: rootedness, community, shade for all, interconnectedness across generations
- Color: Saffron primary, Earth Green secondary
- Wordmark: "CHCC" in Inter Bold; "Charlotte Hindu Community Center" in Playfair Display Regular below
- Clear space: Minimum 24px clearance around logo at all sizes

---

## Motion & Animation

- **Page transitions:** Fade-in (300ms, ease-out) — no slide transitions that feel jarring
- **Scroll animations:** Elements enter viewport with `opacity: 0` → `opacity: 1` + `translateY(20px)` → `translateY(0)` (400ms, ease-out)
- **Counter animations:** Impact metrics count from 0 to final value over 2 seconds when scrolled into view
- **Button hover:** 200ms transition on all interactive elements
- **No autoplay videos** with sound; videos may autoplay muted as hero backgrounds
- **Reduced motion:** Respect `prefers-reduced-motion` — disable animations for accessibility

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `xs` | < 480px | Small phones |
| `sm` | 480–768px | Large phones |
| `md` | 768–1024px | Tablets |
| `lg` | 1024–1280px | Laptops |
| `xl` | 1280–1536px | Desktops |
| `2xl` | > 1536px | Large monitors |

**Mobile-first approach:** Write base styles for mobile, layer up with min-width media queries.

---

## Accessibility Standards

- **Target:** WCAG 2.1 Level AA compliance minimum
- **Alt text:** Required on all images; descriptive and culturally informative
- **Focus states:** Visible focus rings on all interactive elements (2px solid `#F47C36`)
- **Skip navigation:** "Skip to main content" link at top of every page
- **ARIA labels:** All icon-only buttons must have `aria-label`
- **Form labels:** All inputs have associated `<label>` elements
- **Heading hierarchy:** Never skip heading levels; H1 → H2 → H3 sequentially

