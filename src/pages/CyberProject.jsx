import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const CyberProject = () => {
    const cyberSchema = {
        "@context": "https://schema.org",
        "@type": "ResearchProject",
        "name": "Cybersecurity Portfolio",
        "description": "A project suite showcasing proactive infrastructure defense through real-time telemetry, vulnerability management, and threat intelligence.",
        "author": {
            "@type": "Person",
            "name": "Tolulope Babajide"
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            <SEO
                title="Cybersecurity Portfolio | Proactive Infrastructure Defense"
                description="Research on proactive infrastructure defense and vulnerability management. Showcasing security research and distributed systems monitoring."
                schema={cyberSchema}
            />
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Cybersecurity Portfolio</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">
                        A project suite showcasing proactive infrastructure defense through real-time telemetry, vulnerability management, and threat intelligence.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-slate-900 py-10">
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Project Type</h4>
                            <p className="text-slate-200 text-sm font-medium">Cybersecurity</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Key Stack</h4>
                            <p className="text-slate-200 text-sm font-medium">Zabbix, SNMP, PFsense</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Architecture Style</h4>
                            <p className="text-slate-200 text-sm font-medium">Unified Telemetry</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Core Capability</h4>
                            <p className="text-slate-200 text-sm font-medium">Proactive Defense</p>
                        </div>
                    </div>

                    <div className="space-y-24 mb-16">
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <AlertTriangle size={18} className="mr-2" /> The Problem
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Modern enterprise environments face critical risks from unpatched vulnerabilities and lateral movement by sophisticated actors. Without real-time infrastructure visibility and a structured defensive framework, organizations remain reactive, leaving high-value assets exposed to preventable exploits.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <Shield size={18} className="mr-2" /> The Solution
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        A multi-layered defensive system combining proactive vulnerability management, real-time telemetry via Zabbix/SNMP, and strategic threat intelligence mapping. This holistic approach utilizes the MITRE ATT&CK framework to shift security posture from reactive patching to predictive, observability-driven defense.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Lock className="mr-3 text-cyan-400" /> Architecture Strategy
                            </h2>
                            <p className="text-slate-400 mb-10 leading-relaxed max-w-3xl text-sm sm:text-base">
                                The research environment is built on a unified telemetry architecture designed to bridge the visibility gap between disparate network components. By standardizing on SNMP and Syslog-ng for data ingestion into a centralized Zabbix hub, the system achieves sub-5-minute detection of performance anomalies and security triggers.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-1">Proactive Assessment Layer</h4>
                                        <p className="text-slate-400 text-sm mb-3">Conducted structured vulnerability assessments using Nessus to identify misconfigurations and prioritize remediation paths based on CVSS scoring.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded w-fit">Nessus • CVSS 3.1</div>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-1">Infrastructure Observability</h4>
                                        <p className="text-slate-400 text-sm mb-3">Implemented real-time monitoring infrastructure using Zabbix and SNMP to detect performance anomalies and ensure critical service availability.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded w-fit">Zabbix • SNMP</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-1">Offensive Security Testing</h4>
                                        <p className="text-slate-400 text-sm mb-3">Performed controlled penetration testing on web applications, documenting SQLi and XSS vectors to develop secure coding remediation playbooks.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded w-fit">OWASP • Burp Suite</div>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-1">Threat Intelligence</h4>
                                        <p className="text-slate-400 text-sm mb-3">Analyzed APT Tactics, Techniques, and Procedures (TTPs), mapping observations to the MITRE ATT&CK framework to improve defensive awareness.</p>
                                        <div className="flex items-center text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded w-fit">MITRE ATT&CK • TTPs</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <FileText className="mr-3 text-cyan-400" /> Key System Components
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Engineering Challenges</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Bridging infrastructure visibility gaps across disparate network components without introducing performance overhead.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Prioritizing remediation efforts across a high volume of vulnerability telemetry in complex systems.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Solutions</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Developed a unified telemetry layer using SNMP and Zabbix agents to provide real-time, non-intrusive infrastructure observability.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Implemented a risk-based prioritization heuristic mapped to the MITRE ATT&CK framework and CVSS 3.1 severity scores.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Shield className="mr-3 text-cyan-400" /> Technology Stack
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Infrastructure</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['PFsense', 'Ubuntu Server', 'Windows Server', 'Zabbix'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Data & Telemetry</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['SNMP', 'Syslog-ng', 'MySQL (Zabbix DB)'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Analysis</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['MITRE ATT&CK', 'CVSS 3.1', 'NMAP', 'Metasploit'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-10 flex items-center">
                                <CheckCircle size={30} className="mr-3 text-cyan-400" /> Business Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-10 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">40+</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">CVEs Identified</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">100%</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Infrastructure Visibility</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">&lt;5min</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Incident Detection</div>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-8 text-lg">
                                    "Successfully developed and deployed a multi-layered security framework that improved infrastructure observability and proactively mitigated critical vulnerabilities. The research provided actionable intelligence for enterprise-grade defense strategies with zero critical exploit successes during red-team exercises."
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
