import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck, AlertTriangle, TestTube2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRoleHref } from '../context/RoleContext'
import SEO from './SEO'

const SecurityCaseStudy = ({ study }) => {
    const roleHref = useRoleHref()

    return (
        <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-cyan-500/30 dark:bg-slate-950 dark:text-slate-100">
            <SEO title={`${study.productName} Security Case Study | Tolulope Babajide`} description={study.lede} url={study.path} />
            <main className="mx-auto max-w-5xl px-5 py-12 sm:px-6">
                <Link to={roleHref('/#projects')} className="mb-10 inline-flex items-center text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Portfolio
                </Link>

                <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-16">
                    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-400">
                        <ShieldCheck size={20} />
                        Product security case study
                    </div>
                    <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{study.title}</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{study.lede}</p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-y border-gray-200 py-4 font-mono text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                        <span>Review: {study.reviewDate}</span>
                        <span>Scope: {study.scope}</span>
                        <span>Method: source review + focused tests</span>
                    </div>
                </motion.header>

                <div className="space-y-16">
                    <section className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">Security thesis</p>
                            <h2 className="mt-3 text-2xl font-bold">The interface is not the trust boundary.</h2>
                        </div>
                        <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            {study.thesis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-7 text-2xl font-bold">Architecture and trust boundaries</h2>
                        <div className="grid gap-3 md:grid-cols-2">
                            {study.boundaries.map((boundary, index) => (
                                <div key={boundary} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40">
                                    <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400">{String(index + 1).padStart(2, '0')}</span>
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{boundary}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-7 text-2xl font-bold">Verified controls</h2>
                        <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800">
                            {study.controls.map((control) => (
                                <div key={control.area} className="grid gap-2 border-b border-gray-200 bg-white p-5 last:border-b-0 dark:border-slate-800 dark:bg-slate-900/35 md:grid-cols-[0.35fr_1fr] md:gap-8">
                                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{control.area}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{control.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-7 text-2xl font-bold">Threat scenarios</h2>
                        <div className="grid gap-5 md:grid-cols-2">
                            {study.scenarios.map((scenario) => (
                                <article key={scenario.threat} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40">
                                    <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Threat</p>
                                    <h3 className="mb-4 font-bold">{scenario.threat}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{scenario.control}</p>
                                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                                        <CheckCircle size={16} /> {scenario.outcome}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.04] p-6 sm:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <TestTube2 className="text-cyan-700 dark:text-cyan-400" />
                            <h2 className="text-2xl font-bold">Validation evidence</h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {study.validation.map((item) => (
                                <div key={item.label} className="rounded-xl border border-cyan-500/15 bg-white/70 p-5 dark:bg-slate-950/35">
                                    <p className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">{item.value}</p>
                                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="mb-7 flex items-center gap-3">
                            <AlertTriangle className="text-amber-600 dark:text-amber-400" />
                            <h2 className="text-2xl font-bold">Residual risks and limitations</h2>
                        </div>
                        <div className="space-y-4">
                            {study.risks.map((risk) => (
                                <div key={risk.title} className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-5 sm:grid sm:grid-cols-[0.4fr_1fr] sm:gap-8">
                                    <div>
                                        <h3 className="font-semibold">{risk.title}</h3>
                                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-400">{risk.status}</p>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-0">{risk.treatment}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="border-t border-gray-200 pt-10 dark:border-slate-800">
                        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">This public version excludes secrets, production identifiers, real user data, internal prompt details, and actionable exploit reproduction steps.</p>
                        <Link to={roleHref(study.productPath)} className="inline-flex items-center rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white transition-colors hover:bg-cyan-700">
                            View the {study.productName} product case study
                            <ArrowRight size={17} className="ml-2" />
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default SecurityCaseStudy
