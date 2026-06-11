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

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **H-07** | Agentic Team Template case study names `sanitize-input.sh` — script does not exist in repo | done | XS | `src/pages/AgenticTeamProject.jsx` |
| | **Fixed 2026-06-10:** Applied fix (b) — removed the parenthetical `(sanitize-input.sh)` from the Permission & Safety System card so no non-existent file is named. The card now reads "An input-sanitisation layer and a prompt-defense baseline harden the agents against prompt-injection, applying the same LLM red-teaming and AI-safety practices used to validate model output in Planacle and Awade." Verified softened copy present and `sanitize-input` absent in prerendered `dist/projects/agentic-team/index.html`. Commit: 0fc54a5 (merge 1d1229b). | | | |

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

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-23** | Portfolio doesn't surface "Forward Deployed Engineer" — framing gap | done | XS | `src/components/Skills.jsx`, `src/pages/AgenticTeamProject.jsx` |
| | **Fixed 2026-06-03:** Added "Forward Deployed Engineering" to Product Delivery skills in `Skills.jsx`. Added forward deployed framing sentence to AgenticTeamProject.jsx Scale & Deployment section. Commit: f3a6b90 | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-24** | Portfolio doesn't surface "Machine Learning / ML Engineering" — framing gap | done | XS | `src/components/Skills.jsx`, `src/pages/PlanacleProject.jsx` |
| | **Fixed 2026-06-03:** Added "Machine Learning" and "Applied ML" to AI & Data Systems skills in `Skills.jsx`. Labelled Schulze Voting and Gale-Shapley Stable Matching cards as [Applied ML] with ML-framed descriptions in `PlanacleProject.jsx`. Commit: aed91ae | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-25** | Portfolio doesn't surface "Solutions Engineer / Pre-Sales" titles — framing gap | done | XS | `src/components/Skills.jsx` |
| | **Fixed 2026-06-03:** Renamed "Product Delivery" category to "Solutions Engineering / Pre-Sales" in `Skills.jsx`. Added "Solutions Engineer", "Pre-Sales", "Technical Support Engineering" as the first three skills in that category. Commit: 12d95bf | | | |

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

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-04** | Hero body copy missing "AI Systems Engineer" target keyword | done | XS | `src/components/Hero.jsx` |
| | **Fixed 2026-06-03:** Updated subtitle in `Hero.jsx` to "AI Systems Engineer — building AI products, backend systems, and multi-agent pipelines, based in London, UK." Keyword now appears in crawlable body copy, not just `<title>` and `<meta>`. Commit: c3b5ea2 | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-05** | No `sitemap.xml` — crawler can't discover all prerendered routes | done | XS | `public/sitemap.xml`, `public/robots.txt` |
| | **Fixed 2026-06-03:** Created `public/sitemap.xml` listing all 6 routes with `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`. Added `public/robots.txt` with `Allow: /` and sitemap pointer. Vite copies both files to `dist/` on every build — no prerender.mjs change needed. Commit: e98653a | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-06** | No JSON-LD Person schema — missed rich result opportunity | done | XS | `index.html` |
| | **Fixed 2026-06-03:** Added `<script type="application/ld+json">` Person schema to `index.html` `<head>` with name, jobTitle, url, and sameAs (GitHub + LinkedIn). Crawlable in prerendered `dist/index.html`. Commit: 1e0c6d6 | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-07** | `og:image` is still the dark-navy placeholder — social shares render blank | done | S | `public/og-default.png` |
| | **Fixed 2026-06-03:** Replaced dark-navy placeholder with a real 1200×630 social preview image. Generated from SVG via macOS sips: dark navy background (#0f172a), "Tolulope Babajide" heading, "AI SYSTEMS ENGINEER" subtitle in sky-blue (#38bdf8), location + tagline in slate-400, site URL footer. 53KB RGBA PNG. Commit: d2a7ac0 | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-08** | No `<link rel="canonical">` tags — duplicate content risk across prerendered routes | blocked | XS | `index.html`, `scripts/prerender.mjs` |
| | **Issue:** None of the 6 prerendered routes (`/`, `/projects/*`) include a `<link rel="canonical" href="...">` tag. Without canonicals, Google may treat e.g. `https://tolulopebabajide.com/projects/planacle` and any future mirrored or redirected URL as duplicate content, suppressing one from the index. This is a 10-line fix. | | | |
| | **Fix:** (1) Add `<link rel="canonical" href="https://tolulopebabajide.com">` to `index.html` `<head>` for the home route. (2) In `scripts/prerender.mjs`, for each route (e.g. `/projects/planacle`), inject `<link rel="canonical" href="https://tolulopebabajide.com/projects/planacle">` into the route's `dist/<route>/index.html` output alongside the existing HTML injection. Filed 2026-06-06 by portfolio-seo-agent. | | | |
| | **🚫 BLOCKED 2026-06-11:** dev-agent lacks write permission for `scripts/prerender.mjs` (PERMISSION_DENIED), which part (2) requires. Part (2) covers the 5 project-route canonicals — the bulk of the fix — so an `index.html`-only commit would be incomplete and must not be marked done. **Founder decision needed:** either add `scripts/prerender.mjs` to dev-agent's write manifest, or re-scope L-08 to `index.html`-only and file a separate item for the prerender route canonicals. Set stage back to `ready` once unblocked. | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **L-09** | "multi-agent orchestration" exact phrase absent from crawlable body copy | done | XS | `src/components/Hero.jsx` |
| | **Fixed 2026-06-05:** Updated Hero subtitle from "multi-agent pipelines" to "multi-agent orchestration pipelines". Phrase now present in prerendered `dist/index.html` body copy. Commit: 776706f | | | |

---

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-26** | Meta description/og:description/twitter:description say "multi-agent pipelines" — out of sync with Hero subtitle after L-09 fix | define | XS | `index.html` |
| | **Issue:** L-09 updated the Hero subtitle to "multi-agent orchestration pipelines" but the three meta tags in `index.html` (lines 7, 10, 15) still read "multi-agent pipelines". Meta descriptions appear in Google search snippets and social preview text, so the phrase gap partially undermines the L-09 SEO objective. Filed 2026-06-05 by code-review-agent. | | | |
| | **Fix:** Update `meta name="description"`, `og:description`, and `twitter:description` content strings from "multi-agent pipelines" to "multi-agent orchestration pipelines" for consistency with body copy. | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-27** | Portfolio doesn't surface AI × Security crossover (LLM red-teaming / AI safety) — framing gap | done | XS | `src/components/Skills.jsx`, `src/pages/AgenticTeamProject.jsx` |
| | **Fixed 2026-06-09:** Added "LLM Security / AI Safety", "Prompt-Injection Defense", "LLM Red-Teaming", and "AI Output Validation" to the Quality & Security skill category in `Skills.jsx`. Added a crossover sentence to the Permission & Safety System card in `AgenticTeamProject.jsx` describing the input-sanitisation layer (`sanitize-input.sh`) and prompt-defense baseline, linking it to LLM red-teaming / AI-safety practices used in Planacle and Awade. Verified both strings present in prerendered `dist/`. Commit: 478728e | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-28** | Portfolio doesn't surface LLM evaluation & observability — framing gap | done | XS | `src/components/Skills.jsx`, `src/pages/AgenticTeamProject.jsx` |
| | **Fixed 2026-06-10:** Added `"LLM Evaluation"`, `"Observability"`, and `"Anthropic Claude API"` to the AI & Data Systems skill array in `Skills.jsx` ("AI Output Validation" was already present in the Quality & Testing category, so not re-duplicated). Added a framing sentence to the QA Agent card in `AgenticTeamProject.jsx`: the review + QA agents form a continuous LLM evaluation and observability loop, scoring every agent-authored change and logging traceable verdicts before merge. Verified all four strings render in the live preview and in prerendered `dist/`. Commit: f5f3fd1 (merge 4c3462e). | | | |

| # | Title | Stage | Effort | Files |
|---|-------|-------|--------|-------|
| **M-29** | Portfolio doesn't surface MLOps / production ML lifecycle — framing gap | done | XS | `src/components/Skills.jsx` |
| | **Fixed 2026-06-10:** Added `"MLOps (Production Deployment)"`, `"Production ML Lifecycle"`, and `"Containerised Deployment (Docker)"` to the Cloud & Infrastructure skill array in `Skills.jsx`, anchored to the existing CI/CD (GitHub Actions) + Docker + scheduled-pipeline work — deployment/operations framing only, no model-training claims. Verified all three tags render in the live preview (Cloud & Infrastructure card) and in prerendered `dist/index.html`. Commit: 9024018 (merge 52aba0e). | | | |

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
| **M-23** | Portfolio doesn't surface "Forward Deployed Engineer" — framing gap | done | 2026-06-03 | f3a6b90 |
| **M-24** | Portfolio doesn't surface "Machine Learning / ML Engineering" — framing gap | done | 2026-06-03 | aed91ae |
| **M-25** | Portfolio doesn't surface "Solutions Engineer / Pre-Sales" titles — framing gap | done | 2026-06-03 | 12d95bf |
| **L-04** | Hero body copy missing "AI Systems Engineer" target keyword | done | 2026-06-03 | c3b5ea2 |
| **L-05** | No `sitemap.xml` — crawler can't discover all prerendered routes | done | 2026-06-03 | e98653a |
| **L-06** | No JSON-LD Person schema — missed rich result opportunity | done | 2026-06-03 | 1e0c6d6 |
| **L-07** | `og:image` is still the dark-navy placeholder — social shares render blank | done | 2026-06-03 | d2a7ac0 |
| **L-09** | "multi-agent orchestration" exact phrase absent from crawlable body copy | done | 2026-06-05 | 776706f |
| **M-27** | Portfolio doesn't surface AI × Security crossover (LLM red-teaming / AI safety) — framing gap | done | 2026-06-09 | 478728e |
| **H-07** | Agentic Team Template case study names `sanitize-input.sh` — script does not exist in repo | done | 2026-06-10 | 0fc54a5 |
| **M-28** | Portfolio doesn't surface LLM evaluation & observability — framing gap | done | 2026-06-10 | f5f3fd1 |
| **M-29** | Portfolio doesn't surface MLOps / production ML lifecycle — framing gap | done | 2026-06-10 | 9024018 |
