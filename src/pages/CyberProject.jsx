import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRoleHref } from '../context/RoleContext'

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
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    "Successfully developed and deployed a multi-layered security framework that improved infrastructure observability and proactively mitigated critical vulnerabilities. The research provided actionable intelligence for enterprise-grade defense strategies."
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
