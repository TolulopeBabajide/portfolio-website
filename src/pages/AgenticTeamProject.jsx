import { motion } from 'framer-motion'
import { ArrowLeft, Users, Zap, Code, CheckCircle, GitBranch, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import KeyDecisions from '../components/KeyDecisions'
import BeforeAfter from '../components/BeforeAfter'
import { useRole, useRoleHref } from '../context/RoleContext'

const variants = {
    default: {
        scene: 'At :00 an agent picks a ready backlog item. At :15 a second reviews the change. At :30 a third validates the build. Permission boundaries, blocking gates, and audit logs keep the automation accountable.',
        before: 'One engineer context-switching between development, review, QA, and deployment all day.',
        after: 'A self-healing hourly loop that implements, reviews, and validates — with a complete audit trail.',
        lede: 'A governed multi-agent engineering pipeline that automates implementation, review, and validation within explicit permission, test, audit, and human-oversight boundaries.',
        problem: 'Building software requires repeated coordination across development, review, and QA. Automating that work without clear permissions and failure gates creates more risk than leverage.',
        solution: 'A 3-agent loop orchestrated through the Claude Agent SDK. Agents share a backlog, operate within write manifests, produce audit logs, and stop or redirect work when blocking checks fail.',
        outcome: 'The template reduces repetitive coordination while retaining visible decisions, review gates, and human control. It supports the implementation workflow across Planacle and Awade without presenting automation as unbounded autonomy.',
    },
    engineering: {
        scene: 'Autonomous agents are easy to demo and hard to trust: they double-run, drift outside their lane, and fail silently at 3am. The engineering here is the unglamorous part done right — idempotency guards, write manifests, blocking gates.',
        before: 'Agent pipelines that fall over on double-runs and fail without a trace.',
        after: 'Heartbeat-enforced idempotency, per-agent permission manifests, and verdicts logged on every run — safe to leave unattended.',
        lede: 'A governed multi-agent pipeline with idempotency, scoped write access, blocking reviews, automated tests, and traceable verdicts.',
        problem: 'Agent pipelines can double-run, drift outside their scope, or fail silently. The engineering challenge is controlling those failure modes, not merely demonstrating generated code.',
        solution: 'Dev, Review, and QA agents coordinate through a shared backlog while manifests constrain writes and blocking checks determine whether work can proceed.',
        outcome: 'The result is an auditable implementation loop that reduces context switching while preserving explicit engineering and human-governance boundaries.',
    },
    security: {
        scene: "Give an agent your repo and your credentials and you have created a new kind of insider. The question isn't whether agents can ship code — it's whether they can do it without bypassing the controls humans rely on.",
        before: 'Autonomous agents as unscoped insiders with silent merge rights.',
        after: 'Least-privilege write manifests, blocking review gates, and auditable verdicts baked into the agent contract.',
        lede: 'An autonomous 3-agent DevOps loop with per-agent permission scoping, blocking review gates, and audit trails baked into the agent contract.',
        problem: 'Autonomous code-writing agents are a security surface in disguise: unscoped credentials, silent merges, and pipelines that bypass human review. Most agent demos wave these risks away. Production systems cannot.',
        solution: 'Per-agent permission scoping via agent-permissions.json (least-privilege by design), a structural code-review agent that blocks merges on critical findings, scheduled QA gates producing auditable verdicts to a review log, and the entire pipeline pinned to a public commit log for traceability.',
        outcome: 'Agents that ship code without bypassing the controls humans rely on. Review, audit, and rollback stay built into the loop rather than added later for compliance week.',
    },
    customer: {
        scene: "A three-agent workflow handles repeatable implementation, review, and QA steps so its human owner can focus attention on product decisions and customers.",
        before: 'Engineering time consumed by the work around the work: review, QA, deployment, babysitting.',
        after: 'The plumbing runs itself; human attention goes to the product and the customer.',
        lede: 'A governed 3-agent workflow that supports the dev → review → QA cycle across products in this portfolio.',
        problem: 'Most engineering teams spend more time on the work around the work (code review, QA, deployment, post-merge babysitting) than on writing actual features. This is invisible cost for the business and slow time-to-customer.',
        solution: 'A Dev, Review, and QA workflow handles repeatable steps, records decisions, and routes failed checks back through controlled remediation. It supports active work on Planacle and Awade.',
        outcome: 'Less attention spent on engineering coordination and more available for product and customer decisions, with human control and auditability kept visible.',
    },
}

const decisions = [
    {
        title: 'A markdown backlog as the source of truth',
        considered: 'A proper orchestration service — job queue, scheduler, state machine.',
        chose: 'A human-readable markdown backlog with priority tiers and stage transitions, shared by every agent. Humans and agents read the same file, and the full history is just the git log.',
        tradeoff: 'No rich scheduling semantics. The win: total transparency — anyone can audit what the team decided and why with a text editor.',
    },
    {
        title: 'Agents review agents — with blocking power',
        considered: 'Letting the dev agent merge its own work; it wrote the code, it ran the tests.',
        chose: 'A separate review agent that blocks merges on critical findings, and a QA agent that issues an explicit DEPLOY-READY or BLOCKED verdict every cycle.',
        tradeoff: 'A slower pipeline with more moving parts. The win: agent-authored code faces the same gates human code does — no exceptions for the machines.',
    },
    {
        title: 'Least privilege before autonomy',
        considered: 'Running agents with full repository access — simpler, and what most demos do.',
        chose: 'Per-agent write manifests with a permission-check script gating every file write, plus idempotency heartbeats and a never-force-push rule.',
        tradeoff: 'Upfront configuration friction for every new agent. The win: the pipeline is safe to run unattended, which is the entire point.',
    },
]

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
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Runs at :30, after code review. Validates the full build pipeline: lint, build, href spot-check, title check, meta description, route shells, and resume PDF. Writes a DEPLOY-READY or BLOCKED verdict to the QA log with actionable failure details. Together the review and QA agents form a continuous LLM evaluation and observability loop, scoring every agent-authored change against structural and build criteria and logging traceable verdicts before merge.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Shared Backlog & Audit Trail</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">All agents operate against a single source of truth: a markdown backlog with priority tiers (Critical → High → Medium → Low) and stage transitions (define → ready → in-progress → done). Every agent action is appended to a structured audit log with timestamps and exit codes.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Permission & Safety System</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Each agent has a declared write manifest. A permission-check script gates every file write, so agents cannot touch files outside their manifest. Combined with idempotency checks and never-force-push rules, the system is safe to run unattended. An input-sanitisation layer and a prompt-defense baseline harden the agents against prompt-injection, applying the same LLM red-teaming and AI-safety practices used to validate model output in Planacle and Awade.</p>
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
                                    { stat: "33", label: "Skills per runtime" },
                                    { stat: "11", label: "Infrastructure scripts" },
                                    { stat: "7", label: "Behavioural test suites" },
                                ].map(({ stat, label }) => (
                                    <div key={label} className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-gray-200 dark:border-slate-800 text-center">
                                        <div className="text-3xl font-bold text-cyan-400 mb-1">{stat}</div>
                                        <div className="text-slate-500 dark:text-slate-400 text-sm">{label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Used across Planacle and Awade to implement selected backlog items, review changes, and validate builds within repository permissions and quality gates. Human ownership remains explicit for priorities, exceptions, and release decisions.
                            </p>
                        </section>

                        <KeyDecisions decisions={decisions} />

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
                            <BeforeAfter before={v.before} after={v.after} />
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
