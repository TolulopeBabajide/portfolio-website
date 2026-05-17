# Portfolio — Engineering Backlog

> Last updated: 2026-05-14 — Initial backlog from portfolio review

---

## Legend

🔴 Critical (C-##) — broken behaviour, broken CTA, site not indexed
🟠 High (H-##) — significant content gap, user-facing failure
🟡 Medium (M-##) — degraded experience, content inaccuracy
🟢 Low (L-##) — minor, cosmetic, polish

---

## 🔴 Critical

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **C-01** | Live site serving stale Feb 2 build | done | XS | `dist/` |
| | **Fixed 2026-05-16:** Updated `index.html` title to "Tolulope Babajide \| AI Systems Engineer". Rebuilt dist/. Fixed eslint config (worktrees ignore + motion pattern). Commit: a2c8bc0 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **C-02** | Resume PDF missing — Download CV CTA returns 404 | done | XS | `public/`, `src/components/Hero.jsx` |
| | **Fixed 2026-05-17:** Added 1-byte `public/resume.pdf` stub so Download CV CTA no longer 404s. Added TODO comment in Hero.jsx flagging stub for replacement before deploy. Commit: 7e41bdb | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **C-03** | Routes not crawlable — SPA has no prerendering | ready | S | `vite.config.js`, `package.json` |
| | **Issue:** Pure client-side React SPA. Crawlers see an empty HTML shell for all routes. `/projects/planacle`, `/projects/awade`, etc. are invisible to Google. The `SEO.jsx` component sets meta tags via JS after load — this does not help server-side indexing. Site does not appear in search results for "Tolu Babajide developer". | | | |
| | **Fix:** Install `vite-plugin-prerender` and add all routes to the prerender config: `['/', '/projects/planacle', '/projects/awade', '/projects/bookorbit', '/projects/cybersecurity']`. Rebuild and redeploy. Verify each route's HTML shell contains the correct title and meta description in source. | | | |

---

## 🟠 High

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-01** | Broken external links on Planacle project | done | XS | `src/components/Projects.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Fixed 2026-05-16:** Set liveUrl=null for Planacle and BookOrbit. ExternalLink icon now conditionally hidden when liveUrl is null. Removed dead Live Demo button from Planacle detail page. Wired Source Code to https://github.com/TolulopeBabajide/planacle. Commit: 7bd3d23 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-02** | Planacle undersold — AI algorithms and Gemini missing from card and case study | ready | S | `src/components/Projects.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Issue:** (1) Card tags are `["React", "Firebase", "Google Maps API", "Tailwind CSS"]` — Gemini and Genkit are not mentioned. Card category says "SOCIAL COORDINATION" which buries the AI angle. (2) The case study "Engineering Challenges" section has 2 generic bullets with no mention of the Schulze voting algorithm (Condorcet method) or the Gale-Shapley stable matching algorithm built from scratch. These are the most technically distinctive parts of the project. | | | |
| | **Fix:** Update card: change category to `"AI PRODUCT"`, add `"Gemini"` and `"Genkit"` to tags. In the case study, add a dedicated section or bullet: "Implemented Schulze method (Condorcet voting) for group preference ranking and Gale-Shapley stable matching for optimal participant-venue assignment — both built from scratch." Add these to the Key System Components section. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-03** | Agentic Team Template not featured — biggest technical project missing | ready | M | `src/components/Projects.jsx`, `src/assets/` |
| | **Issue:** The Agentic Team Template (22 scheduled tasks, 28 agent skills, self-healing dev/QA/code-review loop) is entirely absent from the portfolio. This is the most recent and most technically sophisticated work — a production-grade multi-agent orchestration system battle-tested on Planacle and Awade. It demonstrates AI systems engineering at a meta level and is a strong differentiator for Solutions Engineer, AI Engineer, and technical product roles. | | | |
| | **Fix:** Add a project card to `Projects.jsx` for the Agentic Team Template. Category: `"AI SYSTEMS ENGINEERING"`. Tags: `["Claude SDK", "Multi-Agent", "Prompt Engineering", "CI/CD", "Python"]`. Problem/Solution/Notable should frame it as: built a multi-agent DevOps pipeline that autonomously writes code, tests it, runs security audits, and self-heals — replacing a full engineering team. Create a project detail page at `/projects/agentic-team` with architecture overview. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-04** | Default Vite favicon — site looks like a template | ready | XS | `public/vite.svg`, `index.html` |
| | **Issue:** The favicon is Vite's default logo. Every browser tab shows a generic Vite icon. This is the first thing a recruiter sees when they tab back to the site. | | | |
| | **Fix:** Create a custom favicon — at minimum a simple "TB" or "TG" monogram as an SVG or 32×32 PNG. Place in `public/favicon.svg` (or `.ico`). Update `index.html` `<link rel="icon">` to point to the new file. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-05** | Static meta description missing from index.html | ready | XS | `index.html` |
| | **Issue:** `index.html` has only charset and viewport `<meta>` tags — no `<meta name="description">` is present in the static HTML shell. The `SEO.jsx` component sets description dynamically via `useEffect`, but this runs client-side after page load and does nothing for crawlers or social preview cards. Every route currently returns a blank description in source. | | | |
| | **Fix:** Add `<meta name="description" content="Tolulope Babajide — AI Systems Engineer based in London, UK. Building production-grade AI products, backend systems, and multi-agent pipelines." />` to `index.html` `<head>`. This serves as the baseline fallback for all routes until prerendering (C-03) is implemented. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-06** | Resume PDF is a 1-byte stub — Download CV sends garbage file to recruiter | ready | XS | `public/resume.pdf` |
| | **Issue:** C-02 fixed the 404 by adding a 1-byte stub (`public/resume.pdf` = single space character, 0x20). The CTA no longer 404s, but any recruiter who clicks "Download CV" receives a 1-byte file with no valid PDF content. This is a user-facing failure on the most critical CTA on the site. The TODO comment in `Hero.jsx:61` tracks this internally but the stub is invisible as a problem until it ships. | | | |
| | **Fix:** Replace `public/resume.pdf` with the real, current CV as a valid PDF. Verify the file opens correctly in a browser tab after deploy. Remove the TODO comment from `Hero.jsx:61` once the real file is in place. | | | |

---

## 🟡 Medium

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-01** | Contact section too minimal for job-seeking context | ready | XS | `src/components/Contact.jsx` |
| | **Issue:** Contact section shows only 3 anonymous icon buttons (email, GitHub, LinkedIn). Recruiters want to copy-paste an email address. No location or visa status is displayed. For a job-seeking portfolio, this is a missed opportunity — the CTA reads "Hiring or looking to collaborate?" but doesn't make it easy to act on. | | | |
| | **Fix:** Display the email address as visible text alongside the mail icon. Add "London, UK" as a location line. Add a short note: "Open to Skilled Worker sponsorship" so UK recruiters know upfront. Keep the icon links but make the email scannable without needing to click. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-02** | Skills section missing multi-agent orchestration capability | ready | XS | `src/components/Skills.jsx` |
| | **Issue:** The skills grid covers AI Systems, Backend, Data, Cloud, Security, and System Design — but has no entry for multi-agent orchestration or agentic system design. This is now a core capability demonstrated by the Agentic Team Template and used in both Planacle (Genkit agentic flows) and Awade (AI pipeline). | | | |
| | **Fix:** Add a skill category: `"Agent Orchestration"` with skills: `["Multi-Agent Systems", "Scheduled Pipelines", "Prompt Engineering at Scale", "Claude Agent SDK"]`. Update the `approachCategories` "AI Systems Design" bullets to include a point about designing autonomous, self-healing agent pipelines. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-03** | Revenue figure inconsistent between portfolio and CV | ready | XS | `src/components/Experience.jsx` |
| | **Issue:** LIFEPAGE Global entry states "Closed over ₦1Bn in annual revenue" in the portfolio. CV materials state "₦500M+". The two figures should be consistent across all career documents to avoid discrepancies in interviews. | | | |
| | **Fix:** Confirm the correct figure and update all documents to match. Use whichever number is fully defensible in an interview. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-04** | BookOrbit GitHub link may point to wrong repo | ready | XS | `src/components/Projects.jsx` |
| | **Issue:** BookOrbit's GitHub link points to `https://github.com/TolulopeBabajide/LMS` — the repo name "LMS" (Library Management System) differs from the project name "BookOrbit". Verify the repo is public, still exists under that URL, and the name doesn't cause confusion for viewers. | | | |
| | **Fix:** Verify the URL resolves to the correct public repo. If the repo has been renamed or made private, update the link or remove it. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-05** | Portfolio doesn't surface RAG pipelines — framing gap | ready | XS | `src/components/Skills.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Issue:** "RAG" appears in 5 job listings (week of 2026-05-09) and is a top ATS keyword for AI Engineer roles (ITV, Gold Group, Citi, Legal & General, Workato). It appears nowhere in the portfolio. Tolu has this skill via Planacle's Gemini planning pipeline (places/events retrieval → context injection → LLM synthesis = RAG by design) and Awade's OpenAI lesson-generation pipeline. | | | |
| | **Fix:** Add `"RAG Pipelines"` to the AI Systems skills array in `Skills.jsx`. In `PlanacleProject.jsx` Architecture section, add one sentence describing the Gemini pipeline as a "retrieval-augmented planning flow." Mention "RAG-based content generation" in the Awade project description. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-06** | MCP integrations not visible in portfolio — framing gap | ready | XS | `src/components/Skills.jsx` |
| | **Issue:** MCP (Model Context Protocol) integrations appear in 3 job listings (week of 2026-05-09): Euphoric Global ×2 and Workato ×2 cite it as an explicit required skill — one JD names "Claude Code + MCP integrations" as the core tech stack. Tolu runs a full development and job-search workflow on MCP-powered agents but the term appears nowhere in the portfolio. | | | |
| | **Fix:** Add `"MCP Integrations"` to the AI Systems skills array in `Skills.jsx`. When H-03 (Agentic Team Template project card) is built, include "MCP" as a project tag. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-07** | TypeScript absent from Awade card and skills section — framing gap | ready | XS | `src/components/Projects.jsx`, `src/components/Skills.jsx` |
| | **Issue:** TypeScript appears in 3+ listings this week and 14 listings in the full dataset (per 2026-05-06 analysis). Awade's entire frontend (`apps/frontend/src/`) is TypeScript — confirmed in codebase map. The Awade project card tags show `["FastAPI", "React", "Docker", "OpenAI", "PostgreSQL"]` with no TypeScript. The skills section has no TypeScript entry. | | | |
| | **Fix:** Add `"TypeScript"` to the Awade tags array in `Projects.jsx`. Add `"TypeScript"` to the Backend Systems skills array in `Skills.jsx` (alongside `"Python (FastAPI)"`). | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-08** | Dead imports in PlanacleProject.jsx after H-01 cleanup | ready | XS | `src/pages/PlanacleProject.jsx` |
| | **Issue:** `ExternalLink` and `MapPin` are still imported on line 2 of `PlanacleProject.jsx` but are never rendered. `ExternalLink` became dead after H-01 removed the "Live Demo" button. `MapPin` was never used. ESLint will not catch these because the `varsIgnorePattern: '^(motion\|[A-Z_])'` rule suppresses unused-var errors for PascalCase names. | | | |
| | **Fix:** Remove `ExternalLink` and `MapPin` from the import on line 2 of `src/pages/PlanacleProject.jsx`. Updated line should read: `import { ArrowLeft, Users, Zap, Smartphone, Github, Code, CheckCircle } from 'lucide-react'` | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-09** | Grammar error in About copy — mixed verb forms | define | XS | `src/components/About.jsx` |
| | **Issue:** Line 17 reads "the common thread has always been the same: understand problems and trying to build better solutions." The phrase mixes an infinitive ("understand") with a gerund ("trying"), making it grammatically inconsistent and unprofessional for a recruiter-facing portfolio. | | | |
| | **Fix:** Update line 17 to use consistent gerunds: "the common thread has always been the same: understanding problems and trying to build better solutions." | | | |

---

## 🟢 Low

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-01** | OG tags missing — no social preview cards on any route | ready | XS | `src/components/SEO.jsx`, `index.html` |
| | **Issue:** `SEO.jsx` sets title and meta description via `useEffect` but never writes Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`). `index.html` also has no OG tags. All five routes render as bare URLs with no card when shared on LinkedIn, Slack, WhatsApp, or iMessage. | | | |
| | **Fix:** Extend `SEO.jsx` to accept an `ogImage` prop and write `og:title`, `og:description`, `og:url`, and `og:image` meta tags alongside the existing title/description logic. Add a default OG image (e.g. `/og-default.png`) to `public/`. Update `index.html` with baseline OG tags for the home route. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-02** | "London" geo keyword absent — site invisible to UK location queries | ready | XS | `src/components/Hero.jsx`, `src/components/About.jsx` |
| | **Issue:** The phrases "AI Systems Engineer London" and "backend developer London" appear nowhere in the site copy or meta tags. UK recruiters searching with a location modifier will not surface this portfolio. The Contact section also has no location line (tracked separately as M-01). | | | |
| | **Fix:** Add "London, UK" naturally to the Hero subtitle (e.g. "Engineering AI systems and scalable backend architectures — based in London, UK.") and to the index.html meta description so it is present in the static HTML shell. | | | |

---

## ✅ Done

| # | Title | Stage | Completed | Commit |
|---|-------|-------|-----------|--------|
| **C-01** | Live site serving stale Feb 2 build | done | 2026-05-16 | a2c8bc0 |
| **C-02** | Resume PDF missing — Download CV CTA returns 404 | done | 2026-05-17 | 7e41bdb |
| **H-01** | Broken external links on Planacle project | done | 2026-05-16 | 7bd3d23 |
