import { motion } from 'framer-motion'
import { ArrowLeft, Users, Zap, Smartphone, Github, Code, CheckCircle, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import planacleArchitecture from '../assets/planacle-architecture.png'
import KeyDecisions from '../components/KeyDecisions'
import BeforeAfter from '../components/BeforeAfter'
import { useRole, useRoleHref } from '../context/RoleContext'

const variants = {
    default: {
        scene: '"Where should we meet?" Eleven messages in, someone drops a map pin. Thirty messages in, the date is still unconfirmed and half the group has stopped reading. Most plans don\'t get decided — they dissolve.',
        before: 'Plans scattered across chat threads, map links, and polls nobody tallies.',
        after: 'One live view of the plan — votes, venues, timing — synced to every participant in under 200ms.',
        lede: 'A real-time social planning application that streamlines group coordination through dynamic scheduling, voting, and location-based discovery.',
        problem: 'Group coordination is often fragmented across multiple chat apps, causing critical details like time, location, and votes to be lost in conversation history. This fragmentation leads to planning friction and participant drop-off.',
        solution: "A real-time coordination system that centralizes the entire planning workflow. From venue discovery to optimistic voting, it ensures every participant has an instant, unified view of the event's current state.",
        outcome: 'Planacle successfully resolved the fragmentation issues inherent in group planning by merging real-time coordination with agentic AI. The system delivered a production-grade experience for 100+ beta testers, demonstrating that automated preference resolution and location discovery can eliminate the friction of social coordination.',
    },
    engineering: {
        scene: 'A group plan is a distributed-systems problem wearing a social mask: concurrent votes, conflicting preferences, and state scattered across a dozen phones. Planacle treats it as exactly that — real-time sync, preference algorithms implemented from scratch, and an agentic loop that closes the plan.',
        before: 'Group state scattered across a dozen clients with no source of truth.',
        after: 'Push-based Firestore sync plus Schulze voting and Gale-Shapley matching, converging on the plan the group genuinely prefers.',
        lede: 'A real-time social planning application that streamlines group coordination through dynamic scheduling, voting, and location-based discovery.',
        problem: 'Group coordination is often fragmented across multiple chat apps, causing critical details like time, location, and votes to be lost in conversation history. This fragmentation leads to planning friction and participant drop-off.',
        solution: "A real-time coordination system that centralizes the entire planning workflow. From venue discovery to optimistic voting, it ensures every participant has an instant, unified view of the event's current state.",
        outcome: 'Planacle successfully resolved the fragmentation issues inherent in group planning by merging real-time coordination with agentic AI. The system delivered a production-grade experience for 100+ beta testers, demonstrating that automated preference resolution and location discovery can eliminate the friction of social coordination.',
    },
    security: {
        scene: 'Every real-time collaborative app shares a quiet failure mode: a Firestore rule that is one missing null check away from becoming a public endpoint. Planacle\'s rules were written with the threat model in the margin — literally.',
        before: 'Permissive read paths and race conditions discovered in an incident postmortem.',
        after: 'Lifecycle-gated reads, null-safe rules, automated rules tests, and a documented threat model per line.',
        lede: 'Real-time AI event planning, with Firestore security rules that document their own threat models.',
        problem: 'Real-time collaborative apps leak data through their write paths: overly-broad Firestore reads, race conditions in invite previews, and null-token edge cases that quietly turn a permissive rule into a public endpoint. Most teams find these in incident postmortems.',
        solution: 'Firestore rules built with explicit threat modeling. Read access is lifecycle-gated (pre-generated docs preview, finalized plans stay participant-only), path interpolation is null-safe against stale auth tokens, list operations are restricted to event hosts, and an accepted-tradeoff doc covers the 128-bit UUID-bounded exploitability of invite links. API secrets live only inside Cloud Functions, so the SPA never touches a key. A rules-level test suite and quarterly SBOM snapshots cover supply-chain visibility.',
        outcome: 'Production Firestore rules with line-by-line threat documentation, automated rules tests, and supply-chain monitoring on a recurring cadence. This is the evidence a security review asks for rather than a checkbox.',
    },
    customer: {
        scene: 'The group chat has 47 unread messages and still no dinner plan. Planacle turns that thread into a confirmed itinerary — venue, time, and votes included — while the group is still arguing.',
        before: '47 unread messages, no decision, half the group checked out.',
        after: 'A confirmed plan everyone actually agreed on — in minutes, in one place.',
        lede: 'Real-time AI event planning that turns "where should we meet?" into a confirmed plan in minutes.',
        problem: 'Planning a group meetup falls apart across chat threads, calendar apps, and map searches. By the time the group converges on a place, half the people have lost interest.',
        solution: 'Real-time AI itinerary generation, voting, and location discovery. Group preferences go in, an optimal plan comes out, complete with venue and timing recommendations everyone agreed on without realizing it.',
        outcome: 'A planning experience that feels like a single conversation instead of a tab-juggling chore, backed by preference-ranking and stable-matching algorithms built from scratch so the AI surfaces the option the group genuinely wants.',
    },
}

const decisions = [
    {
        title: 'Condorcet voting instead of counting hands',
        considered: 'A simple tally: most votes wins. Easy to build, easy to explain.',
        chose: 'Implementing the Schulze method from scratch, plus Gale-Shapley stable matching for participant-venue assignment. Plurality surfaces the loudest option; pairwise preference resolution surfaces the one the group genuinely prefers.',
        tradeoff: 'Real algorithmic complexity — preference cycles, pairwise matrices. The win: a result no subgroup regrets, which is the whole product.',
    },
    {
        title: 'Serverless real-time over a custom backend',
        considered: 'A Node + WebSocket server with full control over the sync protocol.',
        chose: "Firebase's push-based Firestore synchronization: sub-200ms propagation of votes, availability, and venue likes with no server fleet to operate.",
        tradeoff: 'The security burden moves into Firestore rules — which is why every rule was threat-modeled and covered by a rules-level test suite.',
    },
    {
        title: 'Optimistic UI with rollback',
        considered: 'Waiting for server confirmation before reflecting each vote — simple, always consistent, visibly laggy.',
        chose: 'Instant local updates pushed to Firestore in the background, with state reverted on failure.',
        tradeoff: 'Rollback paths to design and test. The win: an interface that feels live, which is what keeps a whole group engaged.',
    },
]

const PlanacleProject = () => {
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">AI Product</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">Planacle</h1>
                    <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mb-6 border-l-4 border-cyan-500 pl-6 italic">
                        {v.scene}
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
                        {v.lede}
                    </p>

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
                                <Smartphone className="mr-3 text-cyan-400" /> Architecture
                            </h2>

                            <div className="bg-gray-100 dark:bg-slate-900/50 p-4 rounded-xl border border-gray-200 dark:border-slate-800 mb-12">
                                <img
                                    src={planacleArchitecture}
                                    alt="Planacle System Architecture"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                                <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-4 italic">
                                    Serverless Architecture: Real-time Firebase Backend with Google Gemini AI & Agentic Flows
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Real-time Coordination Engine</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Built on a serverless Firebase architecture using Firestore's push-based synchronization. State updates (votes, availability, venue likes) propagate to all participants in under 200ms, creating a live collaborative environment.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Agentic Planning (Genkit)</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Implemented advanced solo-planning modes using Google Genkit. This enables agentic flows that can autonomously query location APIs, resolve preference conflicts, and synthesize a cohesive itinerary based on natural language prompts. The Gemini pipeline follows a retrieval-augmented planning flow: external APIs supply place and event context, which is injected into the model's prompt to ground itinerary synthesis in real-world data. Genkit is a Google-first orchestration framework equivalent to LangChain/LangGraph.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Schulze Voting Algorithm <span className="text-cyan-400 text-xs font-mono ml-1">[Applied ML]</span></h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Implemented the Schulze method (Condorcet voting) from scratch, an applied machine learning-adjacent algorithm for group preference ranking. When participants vote across multiple venue candidates, the algorithm resolves pairwise preference cycles and surfaces the Condorcet winner, the option most participants genuinely prefer.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Event-Driven AI Triggers</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Utilized Firebase Cloud Functions (v2) to automate complex computations. When event status reaches "Finalizing", backend triggers autonomously aggregate all participant data and call Gemini 2.0 Flash to generate the final plan.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Secure-by-Default Architecture</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Governed by rigorous Firestore Security Rules and custom RBAC. Sensitive logic and API secrets (Gemini, Ticketmaster) are isolated within Cloud Functions, never exposing keys to the client SPA.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Gale-Shapley Stable Matching <span className="text-cyan-400 text-xs font-mono ml-1">[Applied ML]</span></h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Built the Gale-Shapley stable matching algorithm from scratch, a classical applied ML and combinatorial optimisation algorithm for optimal participant-venue assignment. It guarantees a stable pairing where no participant-venue pair would mutually prefer each other over their current assignment, removing coordination regret.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="text-slate-500 mb-2">// Optimistic UI State Management</div>
                                    <code className="block">
                                        {`const submitVote = async (venueId) => {
  // 1. Instantly update local state
  optimisticUpdate(venueId);
  
  try {
    // 2. Push to Firestore in background
    await firestore.doc(\`events/\${id}\`).update({
      [\`votes.\${venueId}\`]: increment(1)
    });
  } catch (err) {
    // 3. Revert on failure
    revertLocalState();
  }`}
                                    </code>
                                </div>
                                <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                                    <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Data Flow: Collaborative to AI</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm italic">
                                        Participant Input → Aggregator Function → preferenceMatrix → Gemini 2.0 Flash → Final Itinerary JSON → Firestore Real-time Sync.
                                    </p>
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
                                    <h2 className="text-2xl font-bold">Cloud authorization and AI consumption controls</h2>
                                </div>
                            </div>
                            <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
                                I reviewed Planacle’s event lifecycle across Firebase Authentication, Firestore and Storage rules, authenticated Cloud Functions, ranked voting, and the Gemini planning pipeline. The case study shows how membership, destructive actions, ballot integrity, rate limits, concurrency, timeouts, sanitisation, and structured output controls are enforced at the real trust boundaries.
                            </p>
                            <div className="mb-7 grid gap-3 sm:grid-cols-2">
                                {["Transactional, server-controlled event joining", "Host-only destructive actions", "Participant-authorized, bounded AI execution", "Known and accepted risks recorded openly"].map((item) => (
                                    <div key={item} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white/70 p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">
                                        <CheckCircle size={16} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to={roleHref('/projects/planacle-security')} className="inline-flex items-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700">Read the full Planacle security case study</Link>
                        </section>

                        <KeyDecisions decisions={decisions} />

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Code size={30} className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["React 19", "Firebase (v2 functions)", "Google Gemini 2.0 Flash", "Google Genkit", "Google Maps/Places API", "Ticketmaster API", "TypeScript"].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
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
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 flex justify-center gap-4">
                        <a href="https://github.com/TolulopeBabajide/planacle" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium transition-colors border border-gray-300 dark:border-slate-700">
                            <Github size={20} className="mr-2" />
                            Source Code
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PlanacleProject
