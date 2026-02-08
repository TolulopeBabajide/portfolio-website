import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, FileText, CheckCircle, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const CyberProject = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Security Research & Labs</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Cybersecurity Portfolio</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-16">
                        A collection of practical labs and reports demonstrating expertise in vulnerability assessment, network monitoring, and ethical hacking.
                    </p>

                    <div className="space-y-20"> {/* Vertical spacing for project sections */}

                        {/* Lab 1: Nessus */}
                        <section className="relative pl-8 border-l-2 border-slate-800">
                            <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                                <Shield size={12} className="text-cyan-400" />
                            </div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Vulnerability Assessment</h2>
                                <p className="text-slate-400 font-mono text-sm">Tools: Nessus, CVSS Scoring</p>
                            </div>

                            <div className="bg-slate-900/50 p-6 rounded-lg mb-4">
                                <h3 className="font-semibold text-slate-200 mb-2">Objective</h3>
                                <p className="text-slate-400 text-sm mb-4">
                                    Identify security weaknesses in a simulated corporate network environment to propose remediation strategies.
                                </p>
                                <h3 className="font-semibold text-slate-200 mb-2">Key Actions</h3>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start text-sm text-slate-300">
                                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                                        Configured and deployed Nessus Essentials for advanced network scanning.
                                    </li>
                                    <li className="flex items-start text-sm text-slate-300">
                                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                                        Analyzed resulting vulnerabilities affecting critical services (SMB, RDP).
                                    </li>
                                    <li className="flex items-start text-sm text-slate-300">
                                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                                        Prioritized remediation using CVSS scores and exploitability metrics.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Lab 2: Zabbix */}
                        <section className="relative pl-8 border-l-2 border-slate-800">
                            <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                                <Eye size={12} className="text-cyan-400" />
                            </div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Network Monitoring Infrastructure</h2>
                                <p className="text-slate-400 font-mono text-sm">Tools: Zabbix, SNMP</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Deployed a centralized <strong>Zabbix</strong> server to monitor availability and performance of heterogeneous network devices.
                                        Configured SNMP agents on Linux and Windows endpoints to collect telemetry data (CPU load, disk usage, network traffic).
                                    </p>
                                    <p className="text-slate-300 leading-relaxed">
                                        Created custom alerts and dashboards to provide real-time visibility into infrastructure health, reducing Mean Time To Detect (MTTD) for outages.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 bg-slate-800 rounded-lg p-4 flex items-center justify-center border border-slate-700">
                                    <span className="text-slate-500 text-sm">Dashboard Configuration</span>
                                </div>
                            </div>
                        </section>

                        {/* Lab 3: Juice Shop */}
                        <section className="relative pl-8 border-l-2 border-slate-800">
                            <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                                <Lock size={12} className="text-cyan-400" />
                            </div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Web Application Penetration Testing</h2>
                                <p className="text-slate-400 font-mono text-sm">Tools: OWASP Juice Shop, Burp Suite</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-red-950/20 border border-red-900/50 p-4 rounded-lg">
                                    <div className="flex items-center text-red-400 mb-2">
                                        <AlertTriangle size={18} className="mr-2" />
                                        <h3 className="font-bold text-sm">SQL Injection (SQLi)</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm">
                                        Exploited login forms to bypass authentication mechanisms by injecting malicious SQL payloads, gaining administrative access.
                                    </p>
                                </div>
                                <div className="bg-orange-950/20 border border-orange-900/50 p-4 rounded-lg">
                                    <div className="flex items-center text-orange-400 mb-2">
                                        <AlertTriangle size={18} className="mr-2" />
                                        <h3 className="font-bold text-sm">Cross-Site Scripting (XSS)</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm">
                                        Identified and exploited reflected XSS vulnerabilities in search fields to execute arbitrary JavaScript in victim browsers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Lab 4: Threat Intel */}
                        <section className="relative pl-8 border-l-2 border-slate-800">
                            <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center">
                                <FileText size={12} className="text-cyan-400" />
                            </div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Threat Intelligence Reporting</h2>
                                <p className="text-slate-400 font-mono text-sm">Subject: APT Analysis</p>
                            </div>

                            <div className="bg-slate-900/50 p-6 rounded-lg text-slate-300 leading-relaxed">
                                Authored a comprehensive report analyzing the Tactics, Techniques, and Procedures (TTPs) of known Advanced Persistent Threats.
                                Mapped observed behaviors to the <strong>MITRE ATT&CK</strong> framework to develop effective defensive countermeasures.
                            </div>
                        </section>

                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default CyberProject
