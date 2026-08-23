import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import KeyDecisions from '../components/KeyDecisions'
import BeforeAfter from '../components/BeforeAfter'
import { useRoleHref } from '../context/RoleContext'

const scene = "Most breaches aren't zero-days. They're known vulnerabilities nobody patched, on infrastructure nobody was watching, exploited by adversaries whose playbooks were already documented. This lab portfolio works that reality from both sides: run the attacks, then build the visibility that catches them."

const decisions = [
    {
        title: 'Learn offense to build defense',
        considered: 'A purely defensive track — monitoring, patching, and policy without ever running an attack.',
        chose: 'Pairing controlled penetration testing (SQLi and XSS against OWASP targets) with the remediation playbooks that follow. You defend better against attacks you have personally executed.',
        tradeoff: "Lab scope must stay strictly controlled. The win: remediation guidance written from the attacker's side of the exploit.",
    },
    {
        title: 'Prioritize by risk, not by list order',
        considered: 'Treating every scanner finding as equally urgent — the default posture that buries teams.',
        chose: 'CVSS 3.1-scored prioritization of Nessus findings, so remediation effort lands on the highest-risk exposure first.',
        tradeoff: 'Lower-severity findings wait their turn. The win: finite security hours close the most dangerous gaps first — the way real teams have to operate.',
    },
    {
        title: 'Map intelligence to a shared framework',
        considered: 'Keeping threat research as ad-hoc notes on APT campaigns.',
        chose: 'Mapping observed TTPs to MITRE ATT&CK, turning raw observations into named techniques a defense can be tested against.',
        tradeoff: 'Framework discipline takes longer than free-form notes. The win: intelligence that translates directly into defensive coverage checks.',
    },
]

const evidenceAreas = [
    {
        title: 'Threat intelligence & SecOps',
        detail: 'Investigated suspicious domains and malware samples, extracted indicators, correlated reputation and sandbox evidence, and mapped observed behaviour to MITRE ATT&CK for technical and executive reporting.',
        proof: 'Mirai analysis · Carbon Black alert investigation · ransomware, RAT and stealer triage',
    },
    {
        title: 'Cloud security implementation',
        detail: 'Designed and validated an Azure network segmented with VNets, NSGs and application security groups, using role-based traffic rules and an implicit-deny posture.',
        proof: 'Three access-path validation scenarios passed · production-hardening roadmap documented',
    },
    {
        title: 'Application & API security',
        detail: 'Tested a controlled banking application through API enumeration, authentication analysis, JWT inspection and authorization checks, then documented an evidence-backed attack chain and remediation path.',
        proof: 'Burp Suite · Swagger · JWT analysis · broken authorization testing',
    },
    {
        title: 'IAM, governance & compliance',
        detail: 'Contributed to least-privilege and audit-log assessments, authored an AI governance policy aligned to ISO/IEC 27002:2022, and supported a PCI DSS v4.0.1 gap-assessment workflow.',
        proof: 'RBAC · PAM · audit coverage · AI governance · PCI DSS',
    },
]

const CyberProject = () => {
    const roleHref = useRoleHref()
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Security Research & Labs</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">Cybersecurity Portfolio</h1>
                    <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mb-10 border-l-4 border-cyan-500 pl-6 italic">
                        {scene}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <AlertTriangle size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Modern enterprise environments face increasing risks from unpatched vulnerabilities, lack of real-time infrastructure visibility, and sophisticated APT actors. Without a structured defensive framework, organizations remain reactive and exposed.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Shield size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                A holistic cybersecurity research system that combines proactive vulnerability management, real-time telemetry, and strategic threat intelligence. This approach shifts security from reactive to predictive.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 mb-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <FileText className="mr-3 text-cyan-400" /> Evidence across the security lifecycle
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {evidenceAreas.map((area) => (
                                    <article key={area.title} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40">
                                        <h3 className="mb-3 font-bold text-slate-900 dark:text-slate-100">{area.title}</h3>
                                        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{area.detail}</p>
                                        <p className="font-mono text-xs leading-relaxed text-cyan-700 dark:text-cyan-400">{area.proof}</p>
                                    </article>
                                ))}
                            </div>
                            <p className="mt-5 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                                Public summaries intentionally omit client identities, infrastructure details, indicators of compromise, and confidential findings. Controlled labs and professional engagement contributions are labelled separately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Lock className="mr-3 text-cyan-400" /> Architecture
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-1">Proactive Assessment Layer</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Conducted structured vulnerability assessments using Nessus to identify misconfigurations and prioritize remediation paths based on CVSS scoring.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/10 px-2 py-1 rounded w-fit">Nessus • CVSS 3.1</div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-1">Infrastructure Observability</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Implemented real-time monitoring infrastructure using Zabbix and SNMP to detect performance anomalies and ensure critical service availability.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/10 px-2 py-1 rounded w-fit">Zabbix • SNMP</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-1">Offensive Security Testing</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Performed controlled penetration testing on web applications, documenting SQLi and XSS vectors to develop secure coding remediation playbooks.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/10 px-2 py-1 rounded w-fit">OWASP • Burp Suite</div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-1">Threat Intelligence</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">Analyzed APT Tactics, Techniques, and Procedures (TTPs), mapping observations to the MITRE ATT&CK framework to improve defensive awareness.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/10 px-2 py-1 rounded w-fit">MITRE ATT&CK • TTPs</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <KeyDecisions decisions={decisions} />

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <FileText className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["Nessus", "Zabbix", "SNMP", "Burp Suite", "MITRE ATT&CK", "OWASP Juice Shop", "Linux/Windows Security"].map(tech => (
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
                            <BeforeAfter
                                before="A reactive posture: unpatched vulnerabilities, no telemetry, and adversary behavior understood only after the incident."
                                after="A predictive posture: risk-ranked remediation, real-time observability, and threats mapped to ATT&CK before they are needed."
                            />
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    These controlled labs produced risk-ranked remediation notes, monitoring configurations, attack-path documentation, and ATT&CK-mapped threat analysis. Professional client engagements are represented separately and without confidential details.
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default CyberProject
