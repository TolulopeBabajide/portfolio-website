import { motion } from 'framer-motion'
import { ArrowLeft, Users, Zap, Code, CheckCircle, GitBranch, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRole, useRoleHref } from '../context/RoleContext'

const variants = {
    default: {
        lede: 'A production-grade multi-agent DevOps pipeline that autonomously writes, reviews, tests, and ships code, replacing a full engineering team with a self-healing 3-agent loop.',
        problem: 'Building and maintaining software requires constant coordination across development, code review, and QA. That work is repetitive, context-heavy, and expensive to staff. There was no ready-made framework for wiring autonomous agents into a cohesive, self-healing pipeline that could ship production code without human intervention.',
        solution: 'A 3-agent loop (Dev, Code Review, QA) orchestrated via the Claude Agent SDK, with 22 scheduled tasks and 28 reusable skills. Agents communicate through a shared backlog, audit logs, and health checks. On failure, the pipeline self-diagnoses and retries with no human required.',
        outcome: 'The Agentic Team Template showed that a solo engineer can operate at the output velocity of a full engineering team by delegating the implementation loop to autonomous agents. The system self-heals on test failure, enforces coding standards through automated review, and keeps a complete audit trail, cutting context-switching overhead to near zero.',
    },
    engineering: {
        lede: 'A production-grade multi-agent DevOps pipeline that autonomously writes, reviews, tests, and ships code, replacing a full engineering team with a self-healing 3-agent loop.',
        problem: 'Building and maintaining software requires constant coordination across development, code review, and QA. That work is repetitive, context-heavy, and expensive to staff. There was no ready-made framework for wiring autonomous agents into a cohesive, self-healing pipeline that could ship production code without human intervention.',
        solution: 'A 3-agent loop (Dev, Code Review, QA) orchestrated via the Claude Agent SDK, with 22 scheduled tasks and 28 reusable skills. Agents communicate through a shared backlog, audit logs, and health checks. On failure, the pipeline self-diagnoses and retries with no human required.',
        outcome: 'The Agentic Team Template showed that a solo engineer can operate at the output velocity of a full engineering team by delegating the implementation loop to autonomous agents. The system self-heals on test failure, enforces coding standards through automated review, and keeps a complete audit trail, cutting context-switching overhead to near zero.',
    },
    security: {
        lede: 'An autonomous 3-agent DevOps loop with per-agent permission scoping, blocking review gates, and audit trails baked into the agent contract.',
        problem: 'Autonomous code-writing agents are a security surface in disguise: unscoped credentials, silent merges, and pipelines that bypass human review. Most agent demos wave these risks away. Production systems cannot.',
        solution: 'Per-agent permission scoping via agent-permissions.json (least-privilege by design), a structural code-review agent that blocks merges on critical findings, scheduled QA gates producing auditable verdicts to a review log, and the entire pipeline pinned to a public commit log for traceability.',
        outcome: 'Agents that ship code without bypassing the controls humans rely on. Review, audit, and rollback stay built into the loop rather than added later for compliance week.',
    },
    customer: {
        lede: 'A 3-agent loop that replaces an engineering team, proven by building the products in this portfolio.',
        problem: 'Most engineering teams spend more time on the work around the work (code review, QA, deployment, post-merge babysitting) than on writing actual features. This is invisible cost for the business and slow time-to-customer.',
        solution: 'A 3-agent (Dev, Review, QA) autonomous pipeline that handles the entire engineering loop, self-heals on test failure, and ships continuously. It currently runs on Planacle and Awade: not a demo, a working stack in active development.',
        outcome: 'Single-developer leverage at engineering-team velocity, and a working example of where AI-native software delivery is heading rather than a slide deck about it. Customer-facing teams see the same point: less time spent on engineering plumbing, more spent on the customer.',
    },
}

const AgenticTeamProject = () => {
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">AI Systems Engineering</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">Agentic Team Template</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
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
                                <GitBranch className="mr-3 text-cyan-400" /> Architecture
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Dev Agent</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Runs hourly, reads the shared backlog, selects the highest-priority ready item, and implements it on a feature branch. Enforces idempotency via heartbeat files and a 50-minute window check, so a second invocation within the window is a no-op.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Code Review Agent</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Triggers at :15 after each dev commit. Performs structural review covering JSX correctness, broken links, SEO/meta coverage, and code quality, then writes a verdict to a review log. Blocks merge on critical findings and annotates warnings for human review.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">QA Agent</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Runs at :30, after code review. Validates the full build pipeline: lint, build, href spot-check, title check, meta description, route shells, and resume PDF. Writes a DEPLOY-READY or BLOCKED verdict to the QA log with actionable failure details.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Shared Backlog & Audit Trail</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">All agents operate against a single source of truth: a markdown backlog with priority tiers (Critical → High → Medium → Low) and stage transitions (define → ready → in-progress → done). Every agent action is appended to a structured audit log with timestamps and exit codes.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Permission & Safety System</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Each agent has a declared write manifest. A permission-check script gates every file write, so agents cannot touch files outside their manifest. Combined with idempotency checks and never-force-push rules, the system is safe to run unattended. An input-sanitisation layer (sanitize-input.sh) and a prompt-defense baseline harden the agents against prompt-injection, applying the same LLM red-teaming and AI-safety practices used to validate model output in Planacle and Awade.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">MCP Integration Layer</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Agents communicate with external tools such as GitHub, Figma, Slack, and email via MCP servers wired into the Claude Agent SDK. New integrations are added by registering an MCP server, with no agent code changes required.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="text-slate-500 mb-2">// Idempotency guard (every agent)</div>
                                    <code className="block whitespace-pre">{`./scripts/idempotency-check.sh \\
  "dev-agent" 50
# Exit 0 → safe to run
# Exit 1 → ran within 50 min window
#           → log and stop`}</code>
                                </div>
                                <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                                    <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Hourly Pipeline Cadence</h4>
                                    <p className="text-slate-400 text-sm italic">
                                        :00 Dev Agent implements backlog item → :15 Code Review Agent audits commit → :30 QA Agent validates build → :45 idle / gap analysis.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Settings size={30} className="mr-3 text-cyan-400" /> Scale & Deployment
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {[
                                    { stat: "22", label: "Scheduled tasks" },
                                    { stat: "28", label: "Agent skills" },
                                    { stat: "3", label: "Core agents" },
                                ].map(({ stat, label }) => (
                                    <div key={label} className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-gray-200 dark:border-slate-800 text-center">
                                        <div className="text-3xl font-bold text-cyan-400 mb-1">{stat}</div>
                                        <div className="text-slate-500 dark:text-slate-400 text-sm">{label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Proven on two projects, Planacle (AI social planning app) and Awade (AI education platform), where the pipeline continuously ships backlog items, reviews its own code, and validates builds without human involvement. This mirrors the forward deployed engineering model: embedding AI tooling directly into the product workflow and iterating inside the working codebase.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Code size={30} className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["Claude Agent SDK", "Anthropic API", "Claude Code CLI", "MCP (Model Context Protocol)", "Bash / Shell", "GitHub Actions", "React + Vite"].map(tech => (
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
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    {v.outcome}
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AgenticTeamProject
