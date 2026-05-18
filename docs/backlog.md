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
| **C-03** | Routes not crawlable — SPA has no prerendering | done | S | `src/AppRoutes.jsx`, `src/entry-server.jsx`, `scripts/prerender.mjs`, `package.json` |
| | **Fixed 2026-05-17:** No-dependency SSR prerender via `react-dom/server` + `StaticRouter`. Extracted routes into `AppRoutes.jsx` shared by client (`BrowserRouter`) and server (`StaticRouter`). `entry-server.jsx` renders each route with `renderToString`. `scripts/prerender.mjs` post-build script writes `dist/<route>/index.html` for all 6 routes. Build chain: `vite build && vite build --ssr src/entry-server.jsx --outDir dist/server && node scripts/prerender.mjs`. All 6 routes verified to contain real component HTML in static output. Commit: ad1fee9 | | | |

---

## 🟠 High

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-01** | Broken external links on Planacle project | done | XS | `src/components/Projects.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Fixed 2026-05-16:** Set liveUrl=null for Planacle and BookOrbit. ExternalLink icon now conditionally hidden when liveUrl is null. Removed dead Live Demo button from Planacle detail page. Wired Source Code to https://github.com/TolulopeBabajide/planacle. Commit: 7bd3d23 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-02** | Planacle undersold — AI algorithms and Gemini missing from card and case study | done | S | `src/components/Projects.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Fixed 2026-05-17:** Changed category to AI PRODUCT, added Gemini/Genkit tags, updated solution/notable copy. Added Schulze Voting and Gale-Shapley Stable Matching as named architecture cards in PlanacleProject.jsx. Commit: c1971cc | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-03** | Agentic Team Template not featured — biggest technical project missing | done | M | `src/components/Projects.jsx`, `src/assets/` |
| | **Fixed 2026-05-17:** Added Agentic Team Template project card (AI SYSTEMS ENGINEERING category, MCP/Claude SDK/Multi-Agent tags). Created AgenticTeamProject.jsx case study page with architecture overview, agent loop description, stats, and tech stack. Added /projects/agentic-team route in App.jsx. Added null-image and null-github guards in Projects.jsx card render. Commit: 5a660fd | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-04** | Default Vite favicon — site looks like a template | done | XS | `public/favicon.svg`, `index.html` |
| | **Fixed 2026-05-18:** Created `public/favicon.svg` — dark navy background (#0f172a) with "TB" monogram in sky-blue (#38bdf8). Updated `index.html` `<link rel="icon">` to point to `/favicon.svg`. Commit: 5f3c24c | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-05** | Static meta description missing from index.html | done | XS | `index.html` |
| | **Fixed 2026-05-18:** Added `<meta name="description">` to `index.html` `<head>` with content "Tolulope Babajide — AI Systems Engineer based in London, UK. Building production-grade AI products, backend systems, and multi-agent pipelines." Confirmed present in prerendered `dist/index.html`. Commit: 41f47c6 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-06** | Resume PDF is a 1-byte stub — Download CV sends garbage file to recruiter | ready | XS | `public/resume.pdf` |
| | **Issue:** C-02 fixed the 404 by adding a 1-byte stub (`public/resume.pdf` = single space character, 0x20). The CTA no longer 404s, but any recruiter who clicks "Download CV" receives a 1-byte file with no valid PDF content. This is a user-facing failure on the most critical CTA on the site. The TODO comment in `Hero.jsx:61` tracks this internally but the stub is invisible as a problem until it ships. | | | |
| | **Fix:** Replace `public/resume.pdf` with the real, current CV as a valid PDF. Verify the file opens correctly in a browser tab after deploy. Remove the TODO comment from `Hero.jsx:61` once the real file is in place. | | | |

---

## 🟡 Medium

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-01** | Contact section too minimal for job-seeking context | done | XS | `src/components/Contact.jsx` |
| | **Fixed 2026-05-18:** Email address now displayed as visible text with mail icon. London, UK location line added. "Open to Skilled Worker sponsorship" note added. GitHub and LinkedIn remain as icon-only links. Commit: 8445785 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-02** | Skills section missing multi-agent orchestration capability | done | XS | `src/components/Skills.jsx` |
| | **Fixed 2026-05-18:** Added "Agent Orchestration" skill category with Multi-Agent Systems, Scheduled Pipelines, Prompt Engineering at Scale, and Claude Agent SDK. Added "Designing autonomous, self-healing agent pipelines" bullet to AI-powered applications approach panel. Commit: 802e83e | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-03** | Revenue figure inconsistent between portfolio and CV | ready | XS | `src/components/Experience.jsx` |
| | **Issue:** LIFEPAGE Global entry states "Closed over ₦1Bn in annual revenue" in the portfolio. CV materials state "₦500M+". The two figures should be consistent across all career documents to avoid discrepancies in interviews. | | | |
| | **Fix:** Confirm the correct figure and update all documents to match. Use whichever number is fully defensible in an interview. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-04** | BookOrbit GitHub link may point to wrong repo | done | XS | `src/components/Projects.jsx` |
| | **Fixed 2026-05-18:** Verified `https://github.com/TolulopeBabajide/LMS` returns HTTP 404. Set `github: null` on BookOrbit entry so the GitHub icon is hidden rather than linking to a dead URL. Commit: 88d7735 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-05** | Portfolio doesn't surface RAG pipelines — framing gap | done | XS | `src/components/Skills.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Fixed 2026-05-18:** Added "RAG Pipelines" to AI & Data Systems skills in Skills.jsx. Appended retrieval-augmented planning flow description to Agentic Planning (Genkit) card in PlanacleProject.jsx. Updated Awade solutionDetail in Projects.jsx to "RAG-based lesson content generation". Commit: 33650b7 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-06** | MCP integrations not visible in portfolio — framing gap | done | XS | `src/components/Skills.jsx` |
| | **Fixed 2026-05-18:** Added `"MCP Integrations"` to the AI & Data Systems skills array in `Skills.jsx`. H-03 already included "MCP" as a project tag (commit 5a660fd). Commit: de0f2ee | | | |

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

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-10** | C-03 prerender route list stale — `/projects/agentic-team` missing | done | XS | `docs/backlog.md`, `vite.config.js` |
| | **Resolved 2026-05-18:** `scripts/prerender.mjs` (commit ad1fee9) includes `/projects/agentic-team` in the routes array. All 6 routes are prerendered. M-10 is resolved by the C-03 implementation. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-11** | prerender.mjs uses String.replace() — fragile if appHtml contains `$&`/`$'` sequences | define | XS | `scripts/prerender.mjs` |
| | **Issue:** `template.replace('<div id="root"></div>', \`<div id="root">${appHtml}</div>\`)` uses the overload where the replacement is a string literal. In JavaScript, replacement strings treat `$$`, `$&`, `$'`, `` $` `` as special patterns. If `renderToString` output ever contains one of these sequences (e.g., in inline JS or data), the HTML output will be silently garbled. This is a pre-build script, so failures are invisible at runtime — the static file will simply contain wrong HTML. | | | |
| | **Fix:** Replace the string replacement with a function form that avoids special-char interpolation: `template.replace('<div id="root"></div>', () => \`<div id="root">${appHtml}</div>\`)`. The replacement function return value is never interpreted for special `$` patterns. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-12** | Contact social links missing `target="_blank"` and `rel="noopener noreferrer"` | define | XS | `src/components/Contact.jsx` |
| | **Issue:** GitHub (line 37) and LinkedIn (line 40) `<motion.a>` elements in `Contact.jsx` have no `target="_blank"` or `rel="noopener noreferrer"`. Clicking either link navigates the recruiter away from the portfolio in the same tab, breaking the viewing session. Missing `rel="noopener noreferrer"` also exposes a reverse tabnapping vector. | | | |
| | **Fix:** Add `target="_blank" rel="noopener noreferrer"` to both `<motion.a>` elements on lines 37 and 40 of `src/components/Contact.jsx`. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-13** | Portfolio doesn't surface "Generative AI" label — framing gap | ready | XS | `src/components/Skills.jsx`, `src/components/Projects.jsx` |
| | **Issue:** "Generative AI" and "GenAI" appear in 5 job listings (Citi Junior Generative AI Application Developer ×3, Bridewell Generative AI Engineer, Accenture AI & Data) as both a job title keyword and required skill (week of 2026-05-11). Tolu builds generative AI applications (Planacle Gemini synthesis, Awade OpenAI lesson generation) but neither "Generative AI" nor "GenAI" appears anywhere in the portfolio's visible text or skill tags. ATS coverage at Citi (top Tier 1 target) is estimated at 44% — implementing this fix alongside M-05 (RAG) would materially lift that score. | | | |
| | **Fix:** Add `"Generative AI"` to the `skills` array in the AI & Data Systems entry in `Skills.jsx`. In `Projects.jsx`, update Planacle's `solutionDetail` to include "generative AI" (e.g. "Real-time AI planning with generative AI synthesis via Gemini-powered itinerary generation…"). | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-14** | Genkit never bridged to LangChain/LangGraph in portfolio copy — framing gap | ready | XS | `src/pages/PlanacleProject.jsx`, `src/components/Skills.jsx` |
| | **Issue:** LangChain appears in 5 listings (week of 2026-05-11) and LangGraph in 6. Tolu's Genkit is architecturally equivalent (tool-augmented LLM orchestration with agentic flows) but ATS systems won't connect the names. The Planacle case study explains Genkit in depth but never draws the LangChain/LangGraph parallel — so it fails to close the keyword gap for the top AI Engineer roles including Citi, Bridewell, and Tracer Cloud. | | | |
| | **Fix:** In `PlanacleProject.jsx` Architecture section under "Agentic Planning (Genkit)", append: "Genkit is a Google-first orchestration framework equivalent to LangChain/LangGraph." In `Skills.jsx` AI & Data Systems, update `"Google Genkit"` to `"Google Genkit (LangChain-equivalent)"`. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-15** | Agentforce framing absent — Salesforce ASE role unaddressed despite 3 consecutive appearances | ready | XS | `src/components/Skills.jsx` |
| | **Issue:** Salesforce Account Solution Engineer (High Tech) appeared in 3 separate daily runs (May 12, May 17, May 18) as a confirmed Tier 1 sponsor role. The JD explicitly asks for "Agentforce AI experience including ideation, innovation, POC." Tolu's Planacle Genkit pipeline is a POC-stage multi-agent agentic flow — the exact capability Agentforce requires. The portfolio's Solutions Engineering panel has no reference to "Agentforce" or enterprise agentic workflows, undercutting the single best-fit hybrid role in the current dataset. | | | |
| | **Fix:** In `Skills.jsx` `approachCategories` Solutions Engineering `items`, add: `{ label: "Agentic workflow design", detail: "Designing enterprise-grade agentic pipelines (Agentforce-equivalent) using multi-agent orchestration frameworks." }`. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-16** | Dead imports `Shield` and `Search` in Skills.jsx | define | XS | `src/components/Skills.jsx` |
| | **Issue:** `Shield` (line 6) and `Search` (line 9) are imported from `lucide-react` in `Skills.jsx` but neither icon is assigned to any `skillCategories` entry or rendered anywhere in the component. ESLint will not catch these because the `varsIgnorePattern: '^(motion\|[A-Z_])'` rule suppresses unused-var errors for PascalCase names — same class of issue as M-08. | | | |
| | **Fix:** Remove `Shield` and `Search` from the import statement in `src/components/Skills.jsx`. Updated import should read: `import { Code, Server, Brain, Layout, GitBranch, CheckCircle, PenTool } from 'lucide-react'` | | | |
| **M-17** | Skills component exceeds 60-line guideline — extract sub-components | define | XS | `src/components/Skills.jsx` |
| | **Issue:** `Skills` component function (lines 90–172) is ~83 lines, exceeding the 60-line guideline. It contains two distinct rendering concerns: the approach/strategy section and the technical skills grid. | | | |
| | **Fix:** Extract `ApproachSection` (renders `approachCategories`) and `SkillsGrid` (renders `skillCategories`) as named sub-components in the same file or separate files. `Skills` becomes a thin layout shell under ~30 lines. | | | |
| **M-18** | Deep JSX nesting (7 levels) in Skills approach section | define | XS | `src/components/Skills.jsx` |
| | **Issue:** The approach grid inner list rendering reaches 7 levels of JSX nesting (section → div → div → motion.div → ul → li → div), exceeding the 4-level guideline. Makes the component harder to scan and modify. | | | |
| | **Fix:** Extract an `ApproachCard` component that receives a single `category` object and renders its `points` or `items` list. This brings Skills.jsx nesting to ≤4 levels and is the same extraction suggested in M-17. | | | |

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
| **H-02** | Planacle undersold — AI algorithms and Gemini missing from card and case study | done | 2026-05-17 | c1971cc |
| **H-03** | Agentic Team Template not featured — biggest technical project missing | done | 2026-05-17 | 5a660fd |
| **C-03** | Routes not crawlable — SPA has no prerendering | done | 2026-05-17 | ad1fee9 |
| **H-04** | Default Vite favicon — site looks like a template | done | 2026-05-18 | 5f3c24c |
| **H-05** | Static meta description missing from index.html | done | 2026-05-18 | 41f47c6 |
| **M-01** | Contact section too minimal for job-seeking context | done | 2026-05-18 | 8445785 |
| **M-02** | Skills section missing multi-agent orchestration capability | done | 2026-05-18 | 802e83e |
| **M-04** | BookOrbit GitHub link may point to wrong repo | done | 2026-05-18 | 88d7735 |
| **M-05** | Portfolio doesn't surface RAG pipelines — framing gap | done | 2026-05-18 | 33650b7 |
| **M-06** | MCP integrations not visible in portfolio — framing gap | done | 2026-05-18 | de0f2ee |
