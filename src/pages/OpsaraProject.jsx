import { motion } from 'framer-motion'
import { ArrowLeft, Users, Zap, Smartphone, WifiOff, Code, CheckCircle, Briefcase, PenLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import opsaraPreview from '../assets/opsara-preview.jpg'
import opsaraStock from '../assets/opsara-stock.jpg'
import KeyDecisions from '../components/KeyDecisions'
import BeforeAfter from '../components/BeforeAfter'
import { useRole, useRoleHref } from '../context/RoleContext'

const variants = {
    default: {
        kicker: 'Founder Venture · Product Prototype',
        scene: "Friday night rush at a Lagos restaurant. The network drops — again — and the point-of-sale screen freezes on a spinner while orders pile up at the pass. Staff fall back to paper and shouting. Global SaaS calls that an error state. For most Nigerian venues, it's just Tuesday.",
        lede: 'OPSARA is an offline-first hospitality operating system for Nigerian and pan-African SME restaurants, bars, and hotels — built for venues where losing the network is part of a normal week.',
        problem: "African hospitality SMEs run a service on paper tickets, WhatsApp bookings, and disconnected point tools — because the software sold to them was never built for their infrastructure. Global SaaS assumes a live backend, so it fails exactly when the venue needs it most: mid-rush, mid-order, mid-payment. Every failure teaches operators to trust software a little less.",
        solution: 'A unified hospitality OS — POS floor plan, kitchen display, bookings, inventory, and owner analytics — that treats offline as a normal operating mode rather than an error. A sync queue captures every action locally and drains on reconnect, so a dropped network never stops a service. A single state model serves four personas (cashier, server, kitchen, owner) and three property types (restaurant, hotel, bar).',
        before: 'The network drops mid-rush: orders are lost, bills go wrong, and staff fall back to paper.',
        after: 'Every action is captured locally and reconciled on reconnect — the service never stops.',
        outcome: 'A polished prototype that holds its own against funded global hospitality SaaS on design quality — and proof of the offline-first thesis across the full path from problem discovery to interaction design to a working multi-persona build.',
    },
    engineering: {
        kicker: 'Founder Venture · AI / Product Engineering',
        scene: 'Mid-service, the network drops. Most POS software is a thin client over a live API, so the UI blocks, writes fail, and front-of-house and kitchen state quietly diverge. OPSARA answers a different question: what does the system look like when you design for the disconnect instead of against it?',
        lede: 'An offline-first hospitality OS prototype — POS, kitchen display, bookings, and inventory — architected around a sync engine that never blocks on the network and reconciles cleanly on reconnect.',
        problem: "Hospitality venues in emerging markets run on intermittent connectivity, yet most POS software assumes a live backend. Going offline mid-service drops orders and corrupts state across front- and back-of-house. The hard problem isn't any single screen — it's a single coherent app in which every write succeeds locally and the network is an optimization, not a dependency.",
        solution: 'A React 18 single-page architecture with screen modules (POS, KDS, Bookings, Inventory, Owner) that share one root state model and keep cross-dependencies minimal. A simulated IndexedDB-style sync engine queues every mutation locally, drains on reconnect with a visible animation, and shows conflict-free toast notifications — modeling a real offline-sync layer with no backend. Persona and property switching run entirely from state, so one codebase serves cashier, server, kitchen, and owner contexts.',
        before: 'A thin client over a live API: the UI blocks on the network, and a drop mid-order means lost writes.',
        after: 'Every mutation commits to a local queue and drains visibly on reconnect — the network is an optimization, not a dependency.',
        outcome: 'A production-shaped prototype: the module boundaries translate directly to a Next.js page layout, the sync contract is ready to back with real IndexedDB, and a reusable host-aware tweaks panel speeds up stakeholder demos. The offline-sync engine is the engineering highlight.',
    },
    customer: {
        kicker: 'Founder Venture · Customer Discovery',
        scene: "Watch a cashier work a Friday rush in Lagos and you understand why operators distrust software: the last system they paid for stopped working the moment the network did. OPSARA started from that distrust — and is designed to earn its way past it.",
        lede: 'An offline-first hospitality OS prototype for African SME operators, designed from the operator outward — from problem discovery to a working interactive build.',
        problem: "Restaurant, bar, and hotel operators in Nigeria lose revenue to disconnected tools and unreliable connectivity — but the deeper problem is trust. They've been burned by software that ignores how they actually work, so adoption has to be earned operator by operator, workflow by workflow.",
        solution: 'OPSARA is designed from the operator outward. The POS mirrors how a cashier reads a floor at a glance, the offline mode respects the reality of Nigerian infrastructure, and the bookings, stock, and kitchen workflows match how venues actually run a service. Every screen is grounded in how the work happens rather than in software convention.',
        before: 'Operators treat software as a liability — the tool that fails exactly when the venue needs it most.',
        after: 'Every screen maps to how the venue actually runs a service — offline included.',
        outcome: 'A prototype that shows the full range a customer-facing technical role needs: customer empathy, the ability to turn operator pain into product, and an eye for the workflow details that drive real-world adoption.',
    },
}

const decisions = [
    {
        title: 'Offline is the default, not the fallback',
        considered: 'The standard play: build online-first, then bolt on a read-only cache for outages.',
        chose: "A local-first sync queue where every write — orders, payments, table state — commits locally first and drains to the network later. Caching reads doesn't save a service mid-rush; capturing writes does.",
        tradeoff: 'Reconciliation complexity moves into the app. The win: the floor never blocks on a spinner.',
    },
    {
        title: 'One state model, four personas',
        considered: 'Separate apps per role — cashier, server, kitchen, owner — each with a smaller, cleaner scope.',
        chose: 'A single root state model with persona switching. In an SME venue the same person is often cashier at lunch and manager at close, so a state switch beats a re-login — and one source of truth means the floor and the kitchen can never drift apart.',
        tradeoff: 'A heavier root model to design up front. The win: one codebase serving four contexts with zero duplication.',
    },
    {
        title: 'A simulated sync engine before a real backend',
        considered: 'Standing up a real server and database first, then building the screens against it.',
        chose: "Simulating the IndexedDB-style sync engine in-browser and spending the time on operator-facing workflows instead. The risky assumption was never whether a backend could be built — it was whether offline-first workflows would hold up in a real service.",
        tradeoff: 'Sync conflicts are modeled rather than battle-tested. The win: module boundaries and a sync contract that translate directly to a Next.js + IndexedDB build.',
    },
]

const OpsaraProject = () => {
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">{v.kicker}</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">OPSARA</h1>
                    <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mb-6 border-l-4 border-cyan-500 pl-6 italic">
                        {v.scene}
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
                        {v.lede}
                    </p>

                    <div className="bg-gray-100 dark:bg-slate-900/50 p-4 rounded-xl border border-gray-200 dark:border-slate-800 mb-16">
                        <img
                            src={opsaraPreview}
                            alt="OPSARA POS floor plan"
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-4 italic">
                            POS floor plan with live table status, per-seat orders, and at-a-glance service metrics
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Users size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {v.problem}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Zap size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {v.solution}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 mb-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Smartphone className="mr-3 text-cyan-400" /> Product Surface
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">POS Floor Plan</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">A spatial table grid with a Free, Seated, Active, Billing status progression. Each status shows only the actions that apply to it, and a right-rail detail pane keeps everything on one screen.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Kitchen Display (KDS)</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">A dark-themed back-of-house view appropriate for kitchen environments, creating clear product separation between front-of-house and the line.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Bookings & Inventory</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">A chronological reservation timeline with WhatsApp / phone / online channel chips and deposit tracking, plus an on-hand-vs-par stock view whose reorder basket auto-groups by supplier.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Owner Analytics</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">An owner persona with venue-level metrics, switchable across restaurant, hotel, and bar property types from a single state model.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 dark:bg-slate-900/50 p-4 rounded-xl border border-gray-200 dark:border-slate-800">
                                <img
                                    src={opsaraStock}
                                    alt="OPSARA stock and suppliers screen"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                                <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-4 italic">
                                    Stock and suppliers view: on-hand vs par with a supplier-grouped reorder basket
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <WifiOff className="mr-3 text-cyan-400" /> Offline-First Sync
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Most SaaS treats offline as an error. OPSARA treats it as a normal way to operate. A sync queue captures every action locally, then drains on reconnect with a visible animation and conflict-free toasts, modeling a real IndexedDB sync engine without any backend. This is the part operators running on Nigerian infrastructure respond to most.
                                </p>
                            </div>
                        </section>

                        <KeyDecisions decisions={decisions} />

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Code size={30} className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["React 18", "Single-Page Architecture", "Offline Sync Queue", "Multi-Persona State", "Babel (in-browser)", "Component Modules"].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Briefcase size={30} className="mr-3 text-cyan-400" /> Design Approach
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    OPSARA was designed from the operator outward, grounded in how Nigerian hospitality venues actually run a service rather than in software convention. The prototype was built alongside supporting product work: system design, a competitive read of the local market, and the workflow research that shaped each screen. Every interaction maps to a real operational need.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <CheckCircle size={30} className="mr-3 text-cyan-400" /> Outcome
                            </h2>
                            <BeforeAfter before={v.before} after={v.after} />
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    {v.outcome}
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <PenLine size={30} className="mr-3 text-cyan-400" /> Founder&apos;s Note
                            </h2>
                            <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                    OPSARA is my own venture — the project I&apos;d be building even if nobody were hiring. Nigerian
                                    hospitality is run by some of the most resourceful operators anywhere, working around tools that
                                    were never built for their reality. Global software treats African infrastructure as an edge case;
                                    I think it&apos;s a market waiting for someone to take it seriously.
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    The prototype on this page is the first proof. The venture is the long game: a hospitality OS built
                                    for how this market actually works — offline first, operator first.
                                </p>
                                <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm mt-6">— Tolulope Babajide, Founder</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default OpsaraProject
