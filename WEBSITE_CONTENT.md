# Ubunifu Technologies — Website Content Plan

Full copy and structure for ubunifutech.com. This document defines every section
the site should have, in order, with exact text and implementation notes.

---

## Site Structure (page order)

```
Navbar
↓
Hero
↓
Problem Strip ("Why this matters")
↓
Products (Insight + Rafiki)
↓
Insight Features (detailed)
↓
How It Works (3 steps)
↓
Social Proof / Stats
↓
Portfolio
↓
About / Team
↓
Pricing Teaser
↓
FAQ
↓
Contact
↓
Footer
```

---

## 1. Navbar

**Logo:** `U` mark (emerald) + "Ubunifu Technologies"

**Nav links:**
- Products → `#products`
- Portfolio → `#portfolio`
- About → `#about`
- Blog → `/blog`

**CTA:** "Try Insight →" → `https://insight.ubunifutech.com`

**Behaviour:** Transparent on top, border + blur on scroll.

**Status:** ✅ Done

---

## 2. Hero

**Eyebrow:** `Arusha, Tanzania`

**H1:**
```
We build software
for Africa.
```

**Subtitle:**
```
Ubunifu Technologies creates SaaS products designed around how businesses
in Tanzania actually work — pay as you go, WhatsApp support, and built to
run on the infrastructure available here.
```

**CTAs:**
- Primary: "See our products" → `#products`
- Secondary: "Get in touch" → `#contact`

**Status:** ✅ Done

---

## 3. Problem Strip — NEW

A single narrow section between Hero and Products. No heading, just a row
of 3 honest statements that name the problem space.

**Layout:** 3 columns, each a short label + 1 line of text. Light grey background.

**Content:**

| Label | Body |
|---|---|
| The problem | Most business software is built for US or European companies and adapted for everyone else. It shows. |
| Our approach | We build from scratch for Africa — starting in Tanzania, with the pricing models, languages, and workflows that match. |
| Starting with AI | Ubunifu Insight puts AI document tools in the hands of teams who currently do this work manually in Excel and WhatsApp. |

**Implementation:** New component `ProblemStrip.tsx` + `ProblemStrip.module.css`

---

## 4. Products

**Eyebrow:** `Our Products`

**H2:** `Software built for Tanzania`

**Subheading:**
```
Each product solves a real problem for African businesses, priced and
supported to match local needs.
```

### Card 1 — Ubunifu Insight (Live)

**Name:** Ubunifu Insight
**Domain:** insight.ubunifutech.com
**Badge:** Live (green)
**Tagline:** Document AI for your team
**Description:**
```
Upload documents, ask questions in plain language, and get accurate answers
with citations. Extract structured data from PDFs, generate reports, and
build a searchable knowledge base — all in one place.
```
**Features:** RAG-powered Q&A · Data extraction · Document generation · Team workspaces · Pay as you go
**CTA:** "Try Insight →"

### Card 2 — Ubunifu Rafiki (Coming Soon)

**Name:** Ubunifu Rafiki
**Domain:** rafiki.ubunifutech.com
**Badge:** Coming soon (grey)
**Description:**
```
The next product from Ubunifu Technologies. Built for Tanzania, designed
around the tools and workflows your team already uses.
```
**CTA:** "Notify me when it launches" (placeholder — link to email form or Mailchimp)

**Status:** ✅ Done (cards exist, Rafiki CTA still needs a real email capture)

---

## 5. Insight Features — NEW

This section sells Ubunifu Insight specifically. Sits right below Products.
Visitors who clicked "See our products" need detail before going to the app.

**Eyebrow:** `Ubunifu Insight`

**H2:** `Everything your team needs to work with documents`

**Layout:** 2-column feature grid (icon + title + body), 6 features

| Icon | Title | Body |
|---|---|---|
| 💬 | Ask your documents anything | Upload any PDF or Word file and ask questions in plain English or Swahili. Get cited answers — not summaries. |
| 📊 | Extract structured data | Pull tables, names, numbers, and dates out of hundreds of documents automatically. Export to CSV or JSON. |
| 📝 | Generate documents | Use your knowledge base to draft contracts, reports, and proposals with your organisation's own information. |
| 🗂️ | Team workspaces | Invite colleagues, share document libraries, and keep each project's knowledge separate. |
| 💳 | Pay as you go | No annual subscriptions. Top up with credit and pay only for what you use. Works with M-Pesa and card. |
| 🔒 | Your data stays yours | Documents are stored in your workspace and never used to train shared models. |

**CTA at bottom:** "Start for free — no credit card required" → `https://insight.ubunifutech.com`

**Implementation:** New component `InsightFeatures.tsx` + `InsightFeatures.module.css`

---

## 6. How It Works — NEW

Simple 3-step section showing how Insight works for a first-time user.

**Eyebrow:** `How it works`

**H2:** `From upload to answer in under a minute`

**Steps:**

| Step | Title | Body |
|---|---|---|
| 1 | Upload your documents | Drag and drop PDFs, Word files, or spreadsheets into your workspace. Insight indexes them in seconds. |
| 2 | Ask anything | Type a question like "What are the payment terms in the Sanlam contract?" and Insight finds the answer — with the exact page and paragraph. |
| 3 | Extract, generate, export | Run a batch extraction across 50 documents. Generate a report. Download a CSV. Work the way your team already works. |

**Implementation:** New component `HowItWorks.tsx` + `HowItWorks.module.css`

---

## 7. Social Proof / Stats — NEW

Numbers-driven trust signal. Keep it simple — 3 stats in a row.
If real numbers aren't available yet, use honest, verifiable ones.

**Layout:** 3 columns, large number + label + optional note

| Stat | Label | Note |
|---|---|---|
| < 60s | Time to first answer | From upload to cited response |
| Pay as you go | Pricing model | No lock-in, no annual contract |
| Tanzania-first | Built for | Swahili support, local payment methods |

> **Note:** Replace with real user/usage numbers when available.
> If adding logos: Usambara Destination, Safari King Africa, and any other clients.

**Implementation:** New component `Stats.tsx` + `Stats.module.css`

---

## 8. Portfolio

**Eyebrow:** `Portfolio`

**H2:** `Recent work.`

**Subheading:**
```
Live websites we've built for Tanzania-based businesses.
```

### Project 1 — Usambara Destination
- **Category:** Travel & Eco-Tourism Platform
- **Description:** Premium eco-tourism website connecting travelers with the Usambara Mountains. Built for performance and SEO.
- **Tech:** Next.js · TypeScript · Responsive Design · SEO
- **Link:** https://www.usambaradestination.com/
- **Image:** `/images/usambara.jpg`

### Project 2 — Safari King Africa
- **Category:** Luxury Safari Website
- **Description:** High-performance website for Tanzania's premier safari destination. Mobile-first, with dynamic content and lead forms.
- **Tech:** React · Modern UI/UX · Mobile-First · Lead Forms
- **Link:** https://www.safarikingafrica.com/
- **Image:** `/images/safariking.png`

**Status:** ✅ Done

---

## 9. About / Team

**Eyebrow:** `The Team`

**H2:** `Built in Tanzania`

**Intro:**
```
We are a small team focused on one thing: building software that works for
African businesses. No unnecessary complexity, no subscription traps.
```

### Richard Pallangyo — Founder & CEO
```
Builds the products. Richard has worked in data science and software
engineering, and started Ubunifu to put that work to use building tools
for African businesses rather than for someone else.
```
**Skills:** AI & Machine Learning · Data Engineering · Python / FastAPI · Product

### HappyGod Pallangyo — Creative Director
```
Shapes how the products look and feel. HappyGod brings brand, design, and
visual direction — making sure our software is clear and honest, not just
functional.
```
**Skills:** Brand Identity · UI/UX Design · Visual Direction · Video

**Status:** ✅ Done

---

## 10. Pricing Teaser — NEW

A short, reassuring section just before the FAQ and Contact.
Links through to Insight's pricing page.

**Eyebrow:** `Pricing`

**H2:** `Simple pricing. No surprises.`

**Body:**
```
Ubunifu Insight runs on a pay-as-you-go credit model. You top up when you
need to, and pay only for what you use — no annual contracts, no seat fees.

New accounts start with free credits so you can explore the platform before
spending anything.
```

**CTA:** "See Insight pricing →" → `https://insight.ubunifutech.com/pricing`

**Implementation:** New component `PricingTeaser.tsx` + `PricingTeaser.module.css`
(or add as a section in `Products.tsx`)

---

## 11. FAQ — NEW

5 common questions a visitor would have before signing up.

**Eyebrow:** `FAQ`

**H2:** `Common questions`

| Question | Answer |
|---|---|
| What types of documents does Insight work with? | PDFs, Word documents (.docx), plain text files, and spreadsheets. Support for images and scanned documents (OCR) is on the roadmap. |
| Is my data private? | Yes. Your documents are stored in your workspace and are never used to train shared AI models. Each workspace is isolated. |
| What languages does Insight support? | Questions and answers work in English and Swahili. Support for more Tanzanian languages is planned. |
| How does pay-as-you-go work? | You purchase credits in advance. Each action (indexing a document, asking a question, running an extraction) costs a small number of credits. There's no monthly fee. |
| Can I use Insight with my whole team? | Yes. You can invite colleagues to your workspace, with role-based access (admin, editor, viewer). |

**Implementation:** New component `FAQ.tsx` + `FAQ.module.css` (accordion style)

---

## 12. Contact

**Eyebrow:** `Contact`

**H2:** `Get in touch`

**Body:**
```
Have a question about Ubunifu Insight, or interested in what we are
building next? Reach us directly — we respond to every message.
```

**Methods:**
- **Email:** info@ubunifutech.com
- **Phone:** +255 765 948 816
- **Location:** Arusha, Tanzania

**Status:** ✅ Done (consider adding a simple contact form later)

---

## 13. Footer

**Logo:** U mark + "Ubunifu Technologies"
**Tagline:** Building software for Africa.

**Columns:**

| Products | Company | Contact |
|---|---|---|
| Ubunifu Insight (live) | About | info@ubunifutech.com |
| Ubunifu Rafiki (coming soon) | Portfolio | +255 765 948 816 |
| | Blog | Arusha, Tanzania |

**Copyright:** © 2025 Ubunifu Technologies Ltd. All rights reserved.

**Status:** ✅ Done

---

## 16. Blog

Already exists at `/blog`. Two posts live:
- "The future of AI in Tanzania"
- "Brand storytelling"

**Recommended future posts:**
- How Ubunifu Insight handles Swahili documents
- Why we chose pay-as-you-go pricing
- Building software in Tanzania: what we've learned
- Announcing Ubunifu Rafiki

---

## Implementation Priority

### Phase 1 — Content (do now)
| # | Component | Status |
|---|---|---|
| 1 | ProblemStrip | ❌ Missing |
| 2 | InsightFeatures | ❌ Missing |
| 3 | HowItWorks | ❌ Missing |
| 4 | Stats | ❌ Missing |
| 5 | PricingTeaser | ❌ Missing |
| 6 | FAQ | ❌ Missing |
| 7 | Rafiki email capture | ❌ Missing |

### Phase 2 — Polish
- Add OG image (1200×630) instead of logo.png for social sharing
- Add a real sitemap
- Add Google Analytics / PostHog
- Add WhatsApp chat widget (green bubble, bottom right)
- Add a sticky "Try Insight free" banner on mobile

### Phase 3 — Trust signals
- Customer logos / quotes (collect from first users)
- Replace placeholder stats with real numbers
- Add Swahili language toggle or Swahili landing page (`/sw`)

---

## Design tokens in use (globals.css)

| Token | Value | Usage |
|---|---|---|
| `--background` | `#ffffff` | Main page background |
| `--surface` | `#f9fafb` | Alternate section background |
| `--foreground` | `#111827` | Body text |
| `--muted` | `#6b7280` | Secondary text |
| `--primary` | `#059669` | Emerald — CTAs, badges, links |
| `--primary-hover` | `#047857` | Primary hover state |
| `--primary-light` | `#d1fae5` | Light emerald — feature dots, backgrounds |
| `--border` | `#e5e7eb` | Card borders |
| `--border-dark` | `#d1d5db` | Hover border |

**Alternating backgrounds:** White (`--background`) and grey (`--surface`) sections should alternate to create visual rhythm.

```
Hero          → white
ProblemStrip  → grey
Products      → grey
InsightFeatures → white
HowItWorks    → grey
Stats         → white
Portfolio     → grey
About         → white
PricingTeaser → grey
FAQ           → white
Contact       → white
Footer        → white (with border-top)
```
