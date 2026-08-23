import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Code, Server, Cpu, Layers, Github, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import awadeArchitecture from '../assets/awade-architecture.png'
import KeyDecisions from '../components/KeyDecisions'
import BeforeAfter from '../components/BeforeAfter'
import { useRole, useRoleHref } from '../context/RoleContext'

const variants = {
    default: {
        scene: "A parent opens their child's homework and freezes: a topic they last saw fifteen years ago, taught a different way. Awade began as a lesson-planning tool for teachers — until user discovery kept surfacing the same person doing unsupported teaching every night: the parent at the kitchen table.",
        before: 'Parents guessing at homework help — or generic AI answers aligned to no curriculum.',
        after: 'A step-by-step, curriculum-matched guide a parent can follow, with the adult — not the AI — leading the child.',
        lede: 'An AI platform that gives African parents curriculum-matched guides to support their child\'s learning at home — repositioned from a teacher-facing lesson planner after discovery reshaped the product.',
        problem: 'Parents want to help with homework, but curricula have moved on since they studied, and generic AI tools answer questions without matching what the child is actually being taught. The teacher-facing original solved resource creation — but the sharper unmet need sat at home, where parents do unsupported teaching every night with no tools built for them.',
        solution: 'Curriculum-matched, step-by-step learning guides from a human-in-the-loop generation pipeline grounded in a structured curriculum database, so a parent can follow them without teaching experience. The generation core built for teachers carried over; the product around it was redesigned for the home.',
        outcome: 'Repositioning from teachers to parents kept the entire generation core — provider abstraction, validation layers, RBAC — while opening a far larger, higher-frequency audience. The product changed audience without a rebuild because the architecture never assumed one.',
    },
    engineering: {
        scene: "Every AI product hits the same fork: call the model in the request path and let its latency leak into every response, or design the system around the model's slowness. Awade chose the second — and that choice later paid for a full audience pivot.",
        before: 'AI calls in the request path hold every API response hostage to model latency.',
        after: 'Generation and document export run in background workers — the API answers in 100ms while the heavy work happens elsewhere.',
        lede: 'An AI platform serving curriculum-matched learning guides — with an architecture that survived a full audience pivot, from teachers to parents, without a rebuild.',
        problem: 'The system had to generate curriculum-matched content without leaking model latency into the request path — and then, when discovery pushed the product from teachers to parents, change its audience without changing its bones.',
        solution: 'A human-in-the-loop generation core behind clean boundaries: multi-model provider switching, Redis + Arq background workers for generation and export, and RBAC at the API boundary. Because the core never assumed its audience, the teacher-to-parent pivot was a repackaging job, not a rewrite.',
        outcome: 'Generation, validation, and export pipelines carried through the teacher-to-parent pivot untouched — evidence the module boundaries were drawn right. API responses held at 100ms throughout.',
    },
    security: {
        scene: 'An education platform holds data neither institutions nor families can afford to leak — and, after its pivot to parents, data about children. Awade was built as if a security review were coming, because for this audience one always should be.',
        before: 'Tenant isolation, moderation, and auditability bolted on after launch — the pattern security reviews keep finding.',
        after: 'RBAC enforced at the API boundary, dedicated admin routers, and audit logging designed in from the first migration.',
        lede: 'An AI education platform serving families, built with multi-tenant RBAC, audit logging, and hardened data integrity from the start.',
        problem: 'Education platforms need strict tenant isolation, immutable audit trails for moderation, and safe schema evolution over a normalized relational store — obligations that only sharpened when the audience shifted from institutions to families with children. All of it without slowing AI-heavy workflows or leaking generated content across tenants.',
        solution: 'Dedicated admin routers separated from user workflows, role-based access enforced at the API boundary, Alembic-driven migrations for safe schema changes, and async processing isolation so heavy AI work never blocks the authenticated request path.',
        outcome: 'Production-ready RBAC and validation layers held through the audience pivot while keeping 100ms API responsiveness. This is the kind of foundation a security review signs off on.',
    },
    customer: {
        scene: "Awade started as a tool for teachers. Then discovery kept surfacing someone else: the parent re-learning long division at 9pm to help their child. The customer the product needed wasn't in the classroom — it was at the kitchen table.",
        before: 'A product aimed at teachers, competing for school procurement attention.',
        after: 'A parent-facing product with nightly demand built in — and the technical core unchanged.',
        lede: 'A product repositioned from teacher lesson-planning to parent homework support — because listening to users beat defending the original spec.',
        problem: 'Teachers were a hard wedge: procurement cycles, school-level adoption, crowded tooling. Parents had the same underlying problem — bridging curriculum and understanding — with urgent nightly demand and no tools built for them.',
        solution: 'The same human-in-the-loop generation core, repackaged around the parent: curriculum-matched guides in plain language, free to start, and designed for a nightly homework routine rather than a classroom workflow.',
        outcome: 'The teacher-to-parent pivot is the customer-facing skill in action: run discovery, hear the real need, and reposition the product without burning the build.',
    },
}

const decisions = [
    {
        title: 'Reposition from teachers to parents',
        considered: 'Staying the course with the teacher-facing lesson planner the product was originally specced as.',
        chose: 'Following discovery to the sharper need: parents supporting homework at home. The generation core stayed; the packaging, tone, and workflows were rebuilt around the parent.',
        tradeoff: 'Teacher-facing UX work set aside. The win: an audience with nightly demand and no procurement cycle — and proof the architecture never assumed its audience.',
    },
    {
        title: 'Human-in-the-loop, not full automation',
        considered: 'A fully automated generator that hands finished answers straight to the child.',
        chose: 'AI drafts the structured, curriculum-matched guide; the adult reviews and leads the session. Trust and judgment stay with the person who knows the child.',
        tradeoff: 'An extra step in every session. The win: adoption — families use a tool that keeps the parent in charge of the learning.',
    },
    {
        title: 'A multi-model AI core instead of one provider',
        considered: 'Binding the platform to a single model API and keeping the integration simple.',
        chose: 'A provider abstraction with OpenAI and Gemini implementations behind one interface, plus per-call model tiers, prompt caching, and a mock provider that keeps tests and local dev off the network.',
        tradeoff: 'An abstraction layer to maintain. The win: switching providers is configuration, not a rewrite — no single vendor owns the product.',
    },
    {
        title: 'Background workers for everything heavy',
        considered: 'Calling the model and generating PDF/DOCX exports inline in the request path.',
        chose: 'A Redis + Arq worker pipeline that offloads AI generation and document export to independent processes.',
        tradeoff: 'Job-state plumbing and a second deployment surface. The win: 100ms API responses regardless of how long the model takes.',
    },
]

const AwadeProject = () => {
    const { role } = useRole()
    const roleHref = useRoleHref()
    const v = variants[role] || variants.default
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/30">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link to={roleHref("/")} className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Full Stack Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">Awade</h1>
                    <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mb-6 border-l-4 border-cyan-500 pl-6 italic">
                        {v.scene}
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
                        {v.lede}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Code size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {v.problem}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <CheckCircle size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {v.solution}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 mb-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Cpu className="mr-3 text-cyan-400" /> Architecture
                            </h2>

                            <div className="bg-gray-100 dark:bg-slate-900/50 p-4 rounded-xl border border-gray-200 dark:border-slate-800 mb-12">
                                <img
                                    src={awadeArchitecture}
                                    alt="Awade System Architecture"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                                <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-4 italic">
                                    Comprehensive System Architecture: Hybrid Cloud Deployment with Async Processing & Multi-Model AI
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Multi-Model AI Strategy</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Engineered a flexible AI core with OpenAI and Google Gemini providers behind a single interface, selected by configuration with per-call model tiers. This monorepo package handles prompt caching, input sanitisation, content-safety checks, and response normalization to maintain curriculum alignment.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Async Processing Pipeline</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Implemented a background worker system using Redis and Arq. This offloads heavy AI generation and document exporting (PDF/DOCX) to independent processes, ensuring 100ms API response times for users.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Hybrid Cloud Deployment</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Architected a distributed system across Vercel (Frontend) and Railway (Backend/Workers/DB). This provides high availability and independent scalability for compute-heavy background tasks.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Administrative RBAC</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Developed a multi-tenant Role-Based Access Control system. Admins have dedicated routers for moderation, audit logs, and system health monitoring, separated from user-facing workflows.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="text-slate-500 mb-2">// Provider dispatch: mock → cache → live provider</div>
                                    <code className="block">
                                        {`class AwadeGPTService:
    def _make_api_call(self, prompt, config, temperature=None):
        if not self.provider:
            # mock keeps tests and local dev off the network
            return self._generate_mock_response(prompt, ...)

        cached = self._get_cached_response(
            config["prompt_metadata"], config["model_tier"]
        )
        if cached:
            return cached

        return self._call_provider_with_cache(prompt, config, temp)`}
                                    </code>
                                </div>
                                <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                                    <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Data Integrity & Migrations</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Managed a normalized relational schema in PostgreSQL via SQLAlchemy. Complexity across Users, Plans, and Resources is governed by Alembic-driven migrations, ensuring safe updates to the production system.</p>
                                </div>
                            </div>
                        </section>

                        <section id="security-case-study" className="scroll-mt-24 rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.04] p-6 sm:p-8">
                            <div className="mb-6 flex items-start gap-4">
                                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-700 dark:text-cyan-400">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-400">Published security review</p>
                                    <h2 className="text-2xl font-bold">Identity, child data, and AI boundaries</h2>
                                </div>
                            </div>
                            <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
                                I traced Awade’s security boundaries from the React client through FastAPI, PostgreSQL, Redis, and its OpenAI/Gemini provider layer. The review covers JWT and HttpOnly-cookie sessions, role and child-record ownership checks, token revocation, abuse controls, prompt-injection defences, structured model-output validation, and secure PDF generation.
                            </p>
                            <div className="mb-7 grid gap-3 sm:grid-cols-2">
                                {["166 backend security tests passed", "16 frontend sanitizer/API tests passed", "No new Critical or High findings", "Residual risks documented, not hidden"].map((item) => (
                                    <div key={item} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white/70 p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">
                                        <CheckCircle size={16} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to={roleHref('/projects/awade-security')} className="inline-flex items-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700">Read the full Awade security case study</Link>
                        </section>

                        <KeyDecisions decisions={decisions} />

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Server className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["FastAPI", "React", "PostgreSQL", "Docker", "OpenAI", "SQLAlchemy", "Alembic"].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Layers className="mr-3 text-cyan-400" /> Outcome
                            </h2>
                            <BeforeAfter before={v.before} after={v.after} />
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    {v.outcome}
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 text-center">
                        <p className="text-slate-400 dark:text-slate-500 mb-6">Interested in the code?</p>
                        <a href="https://github.com/TolulopeBabajide/awade" className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium transition-colors border border-gray-300 dark:border-slate-700">
                            <Github size={20} className="mr-2" />
                            View Repository
                        </a>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default AwadeProject
