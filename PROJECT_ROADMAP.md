# Ubunifu Tech - Master Project Roadmap

This document serves as the master checklist to take **Ubunifu Tech** from its current state (High-Fidelity Prototype) to a fully operational, data-driven consulting platform.

## 🟢 Phase 1: Frontend & Brand Identity (The "Shop Window")
**Status: 90% Complete**
*Objective: Launch a world-class landing page that establishes credibility immediately.*

- [x] **Core Architecture**: Next.js 15, TypeScript, CSS Modules.
- [x] **Design System**: Premium "Dark Mode" aesthetic, responsive layouts, glassmorphism UI.
- [x] **Key Sections**: Hero, Mission (Moving Forward), Services, Contact.
- [x] **Portfolio**: Integrated real project logos (Usambara, Safari King) with professional cards.
- [x] **Team Bios**: Added leadership profiles for Richard (Data/Strategy) and HappyGod (Design/Ops).
- [x] **Blog (MVP)**: Markdown-based blog system for instant content publishing.
- [ ] **SEO Optimization**: Configure Open Graph tags, metadata, and sitemap for Google indexing.
- [ ] **Polishing**: Final mobile responsiveness check and micro-interactions.

---

## 🟡 Phase 2: Backyard Infrastructure (The "Engine")
**Status: Pending**
*Objective: Build the scalable Python foundation requested to demonstrate technical prowess.*

- [ ] **API Setup**: Initialize **FastAPI** (Python) project.
- [ ] **Database**: Set up **PostgreSQL** (via Supabase or Railway).
    - *Schema*: `users`, `blog_posts`, `projects`, `contact_submissions`.
- [ ] **API Endpoints**:
    - `POST /contact`: Handle form submissions & trigger email notifications (Resend/SendGrid).
    - `GET /posts`: Fetch blog articles (replacing local Markdown files).
    - `GET /projects`: Fetch portfolio items dynamically.
- [ ] **Integration**: Connect Next.js frontend to fetch data from this new FastAPI backend.

---

## 🟠 Phase 3: Admin Dashboard (The "Control Room")
**Status: Pending**
*Objective: Create internal tools for the team to manage the business without coding.*

- [ ] **Authentication**: Secure login for Richard & HappyGod (JWT or NextAuth).
- [ ] **Dashboard UI**: Private route (`/admin`) in the Next.js app.
- [ ] **Features**:
    - **Lead Manager**: View and manage contact form submissions.
    - **Blog Editor**: WYSIWYG editor to publish articles directly to the DB.
    - **Project Manager**: Add new client projects/logos easily.

---

## 🔵 Phase 4: Production Launch
**Status: Pending**
*Objective: Go live and start doing business.*

- [ ] **Frontend Deployment**: Deploy Next.js to **Vercel** (Recommended for speed/SEO).
- [ ] **Backend Deployment**: Deploy FastAPI + Postgres to **Railway** or **Render**.
- [ ] **Domain Configuration**: Point `ubunifutech.com` to the Vercel deployment.
- [ ] **Email Setup**: Configure professional email records (MX, SPF, DKIM).
- [ ] **Analytics**: Integrate PostHog or Google Analytics to track visitor behavior.
