# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This is the digital asset project for the **Charlotte Hindu Community Center (CHCC)** — a 501(c)(3) nonprofit based in Charlotte, NC. The deliverables are:
1. A modern, responsive **website** with a donation/pledge portal
2. A digital **fundraising brochure** (PDF-ready layout)
3. A **donation & pledge portal** with Stripe integration

**Theme:** Holistic Heritage, Wellness, and Harmony
**Tone:** Welcoming, professional, culturally respectful, modern — NOT a traditional temple website. Think premium wellness center (Kripalu, JCC) meets civic institution.
**Audience:** Intergenerational Indian-American community + broader Charlotte public; donors ranging from $501 gifts to $100,000+ pledges.

---

## Recommended Tech Stack

- **Framework:** Next.js 14+ (App Router) — for SSR, SEO performance, and ISR for dynamic content
- **Styling:** Tailwind CSS — design tokens defined in `tailwind.config.js` from design_system.md
- **UI Components:** shadcn/ui (built on Radix UI) — accessible, customizable, headless
- **Payments:** Stripe — for donation tiers (Track A) and pledge form submissions
- **Forms:** React Hook Form + Zod validation
- **CMS:** Sanity.io or Contentful — for events calendar, program pages, and activity report updates
- **Email:** Resend or SendGrid — for donation receipts, volunteer onboarding, newsletter
- **Analytics:** Google Analytics 4 via GTM; Stripe webhook for donation events
- **Deployment:** Vercel (optimal for Next.js) with preview deployments per branch

---

## Development Commands

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint (ESLint + Prettier)
npm run lint
npm run lint:fix

# Type checking
npm run type-check

# Run tests
npm test

# Run a single test file
npm test -- --testPathPattern=<filename>

# Run tests in watch mode
npm test -- --watch

# Generate Stripe webhook listener (local testing)
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## Design Token Reference

Import design tokens from the design system. Key values from `design_system.md`:

```js
// tailwind.config.js — extend with these CHCC tokens
colors: {
  saffron: { DEFAULT: '#F47C36', hover: '#D4621E' },
  'earth-green': { DEFAULT: '#4A7C59', hover: '#3A6347' },
  teak: '#8B5A2B',
  cream: '#FDFBF7',
  ivory: '#F5F0E8',
  turmeric: '#F9E4C8',
  charcoal: '#2D2D2D',
}
fonts: {
  heading: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
  devanagari: ['Noto Serif Devanagari', 'serif'],
}
```

---

## Project Content Files

All content (copy, program details, pricing, design specs) lives in `.md` files at the project root. Read these before writing any page content — do not invent content not found in these files.

| File | Purpose |
|------|---------|
| `brief.md` | Vision, facility plan, timeline, impact projections — for About Us and Facilities pages |
| `programs.md` | All program descriptions, schedules, pricing — for the Programs section |
| `activity_report.md` | Pre-construction community impact data — for Our Impact section and homepage |
| `budget.md` | Donation tiers, pledge options, financial breakdown — for the Donate page |
| `sitemap.md` | Every page, its sections, content priority, and CTAs — the implementation roadmap |
| `volunteer.md` | Volunteer roles and Ambassador form fields — for Get Involved pages |
| `design_system.md` | Colors, typography, components, spacing, imagery rules — the visual source of truth |

**Build order:** Homepage → Donate → About → Programs → Gaushala → Aum School → Get Involved → Events

---

## Architecture Notes

### Donation Flow
- Track A (general tiers): Stripe Payment Intent → success redirect → GA4 conversion event → Resend receipt email
- Track B (pledge program): PDF pledge form download + email submission to CHCC board (no payment processing; loan terms handled offline)
- All donations create a record in the CMS/database for donor management

### The "Our Impact" Section
- Impact metrics (events, attendees, volunteer hours, food donated) are stored in the CMS and rendered server-side
- Animated counters trigger on scroll-into-view (use Intersection Observer; respect `prefers-reduced-motion`)
- Update metrics quarterly — the CMS editor interface should make this easy for non-technical staff

### Volunteer / Ambassador Form
- Multi-step form with React Hook Form
- Submissions → CRM (HubSpot Free or Airtable via API)
- Auto-responder email via Resend within 60 seconds of submission
- Volunteer coordinator receives daily digest email, not per-submission notifications (prevents inbox overload)

### Events Calendar
- Data in CMS (Sanity or Contentful) with recurring event support
- Show both list view and monthly calendar view (toggle)
- Each event exports to Google Calendar / Apple Calendar (ICS format)
- Events tagged by pillar: Wellness | Learn | Gather | Serve

---

## Key UX Rules

- The **[DONATE]** button (Saffron, `#F47C36`) must be visible in the header at all times — including mobile. Never hide it in the hamburger menu.
- The fundraising **progress bar** (funds raised vs. $2M goal) appears on the homepage hero and the Donate page. Keep it live/accurate.
- **Accessibility:** WCAG 2.1 AA minimum. All images need descriptive alt text that is culturally informative, not generic.
- **No autoplay video with sound.** Hero background video must be muted, with a pause button.
- Sanskrit/Devanagari text (shloka quotes, Om symbol) must use `font-family: 'Noto Serif Devanagari'` — never render Devanagari in a Latin-only font.

---

## Role and Context

You are an expert full-stack developer and UX/UI designer building this project. The center is a 501(c)(3) nonprofit. Messaging must focus on Youth Development, Healthy Living, and Social Responsibility (Sewa) — not religious dogma. The website should be welcoming to people of all faiths and backgrounds.

