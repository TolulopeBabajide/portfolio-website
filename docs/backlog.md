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

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **C-04** | `text-slate-300` on Notable text fails WCAG AA in light mode | done | XS | `src/components/Projects.jsx` |
| | **Fixed 2026-05-18:** Changed Notable `<p>` class from `text-slate-300` to `text-slate-600 dark:text-slate-300`. Restores WCAG AA contrast (≥4.5:1) in light mode while preserving dark-mode appearance. Commit: e86c4e6 | | | |

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
| **M-07** | TypeScript absent from Awade card and skills section — framing gap | done | XS | `src/components/Projects.jsx`, `src/components/Skills.jsx` |
| | **Fixed 2026-05-18:** Added `"TypeScript"` to Awade project tags in `Projects.jsx`. `Skills.jsx` already contained `"TypeScript (React)"` in the Systems Dev category. Commit: a9c95bc | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-08** | Dead imports in PlanacleProject.jsx after H-01 cleanup | done | XS | `src/pages/PlanacleProject.jsx` |
| | **Fixed 2026-05-18:** Removed `ExternalLink` and `MapPin` from the import on line 2 of `PlanacleProject.jsx`. Commit: 38bac8e | | | |

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
| **M-13** | Portfolio doesn't surface "Generative AI" label — framing gap | done | XS | `src/components/Skills.jsx`, `src/components/Projects.jsx` |
| | **Fixed 2026-05-18:** Added `"Generative AI"` to AI & Data Systems skills in `Skills.jsx`. Updated Planacle `solutionDetail` to include "generative AI synthesis" phrase. Commit: 5f86046 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-14** | Genkit never bridged to LangChain/LangGraph in portfolio copy — framing gap | done | XS | `src/pages/PlanacleProject.jsx`, `src/components/Skills.jsx` |
| | **Fixed 2026-05-18:** Appended "Genkit is a Google-first orchestration framework equivalent to LangChain/LangGraph." to Agentic Planning (Genkit) card in PlanacleProject.jsx. Updated Skills.jsx AI & Data Systems to "Google Genkit (LangChain-equivalent)". Commit: 743ab13 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-15** | Agentforce framing absent — Salesforce ASE role unaddressed despite 3 consecutive appearances | done | XS | `src/components/Skills.jsx` |
| | **Fixed 2026-05-18:** Added `{ label: "Agentic workflow design", detail: "Designing enterprise-grade agentic pipelines (Agentforce-equivalent) using multi-agent orchestration frameworks." }` to Solutions Engineering items in `Skills.jsx`. Commit: b230281 | | | |

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
| **M-19** | Projects component exceeds 60-line guideline — extract sub-components | define | XS | `src/components/Projects.jsx` |
| | **Issue:** `Projects` component function (lines 90–235) is ~145 lines, exceeding the 60-line guideline. Contains three distinct rendering concerns: project card grid, project card internals, and CyberLabs section. | | | |
| | **Fix:** Extract `ProjectCard` (renders a single project card, receiving a `project` object as prop) and `CyberLabsSection` (renders the Security Labs block) as named components. `Projects` becomes a thin layout shell under ~30 lines. Resolves M-20 at the same time. | | | |
| **M-20** | Deep JSX nesting (8–9 levels) in Projects card render area | define | XS | `src/components/Projects.jsx` |
| | **Issue:** The project card render area (lines 107–196) reaches 8–9 levels of JSX nesting (section → div.grid → motion.div → div.aspect → conditional → div.absolute / div.p-5 → div.flex → div.flex → a), exceeding the 4-level guideline. | | | |
| | **Fix:** Extract `ProjectCard` as described in M-19; this naturally reduces nesting to ≤4 levels within each sub-component. M-19 and M-20 should be addressed together in a single extraction task. | | | |
| **M-21** | SEO.jsx created but not wired to project pages — per-page OG metadata dead | define | XS | `src/components/SEO.jsx`, `src/pages/*.jsx` |
| | **Issue:** `src/components/SEO.jsx` was created in L-01 (commit 2f5236f) to provide per-page OG/Twitter card overrides, but none of the five project case study pages (`AwadeProject`, `PlanacleProject`, `BookOrbitProject`, `CyberProject`, `AgenticTeamProject`) import or render `<SEO>`. Social shares of project page URLs (e.g. `/projects/awade`) will serve the generic home-route metadata from `index.html` — wrong title, wrong image, wrong description — instead of project-specific content. | | | |
| | **Fix:** In each project page, import `SEO` and render it as the first child: `<SEO title="Awade \| Tolulope Babajide" url="/projects/awade" />`. Note: because `SEO` uses `useEffect`, it only runs client-side and won't affect the prerendered static HTML. For full crawler support, per-page OG tags should be injected into `scripts/prerender.mjs` during the static build step. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-22** | Portfolio doesn't surface "LLM / Large Language Models" — framing gap | done | XS | `src/components/Skills.jsx`, `src/components/Projects.jsx` |
| | **Fixed 2026-05-26:** Added `"LLM / Large Language Models"` to the AI & Data Systems skill array in `Skills.jsx`. Updated Awade `solutionDetail` to "LLM-powered RAG-based lesson content generation...". Updated Planacle `solutionDetail` to "Real-time AI planning with LLM-powered generative AI synthesis...". Commit: 67d3fcd | | | |

---

## 🟢 Low

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-01** | OG tags missing — no social preview cards on any route | done | XS | `src/components/SEO.jsx`, `index.html` |
| | **Fixed 2026-05-19:** Created `src/components/SEO.jsx` with og:type, og:title, og:description, og:url, og:image, and Twitter card tags. Added `public/og-default.png` placeholder (1200×630, dark navy). Updated `index.html` with baseline OG/Twitter tags for the home route. Commit: 2f5236f | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-02** | "London" geo keyword absent — site invisible to UK location queries | done | XS | `src/components/Hero.jsx`, `src/components/About.jsx` |
| | **Fixed 2026-05-19:** Appended "— based in London, UK." to Hero subtitle in `Hero.jsx`. `index.html` meta description already contained "London, UK" (added in H-05). Commit: f893161 | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-03** | Download CV link missing `rel="noopener noreferrer"` | define | XS | `src/components/Hero.jsx` |
| | **Issue:** Line 68 of `Hero.jsx` has `href="/resume.pdf" target="_blank"` with no `rel="noopener noreferrer"`. Even for same-origin links, opening with `target="_blank"` without `rel="noopener"` allows the opened page to access `window.opener` — a reverse tabnapping vector. | | | |
| | **Fix:** Add `rel="noopener noreferrer"` to the Download CV `<motion.a>` element. Recommend combining this fix with the real-PDF replacement in H-06 so both are addressed in a single commit. | | | |

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
| **H-06** | Resume PDF is a 1-byte stub — Download CV sends garbage file to recruiter | done | 2026-05-27 | 7e48ba6 |
| **M-01** | Contact section too minimal for job-seeking context | done | 2026-05-18 | 8445785 |
| **M-02** | Skills section missing multi-agent orchestration capability | done | 2026-05-18 | 802e83e |
| **M-03** | Revenue figure inconsistent between portfolio and CV | done | 2026-05-26 | 68bf180 |
| **M-04** | BookOrbit GitHub link may point to wrong repo | done | 2026-05-18 | 88d7735 |
| **M-05** | Portfolio doesn't surface RAG pipelines — framing gap | done | 2026-05-18 | 33650b7 |
| **M-06** | MCP integrations not visible in portfolio — framing gap | done | 2026-05-18 | de0f2ee |
| **M-07** | TypeScript absent from Awade card and skills section — framing gap | done | 2026-05-18 | a9c95bc |
| **L-01** | OG tags missing — no social preview cards on any route | done | 2026-05-19 | 2f5236f |
| **L-02** | "London" geo keyword absent — site invisible to UK location queries | done | 2026-05-19 | f893161 |
| **M-08** | Dead imports in PlanacleProject.jsx after H-01 cleanup | done | 2026-05-18 | 38bac8e |
| **M-13** | Portfolio doesn't surface "Generative AI" label — framing gap | done | 2026-05-18 | 5f86046 |
| **M-14** | Genkit never bridged to LangChain/LangGraph in portfolio copy — framing gap | done | 2026-05-18 | 743ab13 |
| **M-15** | Agentforce framing absent — Salesforce ASE role unaddressed | done | 2026-05-18 | b230281 |
| **M-22** | Portfolio doesn't surface "LLM / Large Language Models" — framing gap | done | 2026-05-26 | 67d3fcd |
| **C-04** | `text-slate-300` on Notable text fails WCAG AA in light mode | done | 2026-05-18 | e86c4e6 |
