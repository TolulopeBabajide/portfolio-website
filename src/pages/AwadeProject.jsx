import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Code, Database, Server, Cpu, Layers, Lock, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import awadeArchitecture from '../assets/awade-architecture.png'

const AwadeProject = () => {
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Full Stack Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Awade</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                        An AI-powered platform empowering African educators with automated lesson planning and resource generation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Code size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                A major challenge in education is bridging the gap between standardized curriculum and the local context of learners, especially in underserved regions. Existing tools often generate generic content that fails to resonate with students, hindering understanding while struggling to maintain strict alignment with required educational standards.
                            </p>
                        </div>
                        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <CheckCircle size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                A human-in-the-loop AI platform that automates the generation of high-quality, structured, contextually relevant and curriculum-aligned teaching resources. This empowers educators to focus on instruction while maintaining control over the final content.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 mb-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Cpu className="mr-3 text-cyan-400" /> Architecture
                            </h2>

                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-12">
                                <img
                                    src={awadeArchitecture}
                                    alt="Awade System Architecture"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                                <p className="text-center text-slate-500 text-sm mt-4 italic">
                                    Comprehensive System Architecture: Hybrid Cloud Deployment with Async Processing & Multi-Model AI
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Multi-Model AI Strategy</h4>
                                        <p className="text-slate-400 text-sm">Engineered a flexible AI core that tier-switches between OpenAI and Google Gemini APIs. This monorepo package handles complex retry logic, prompt caching, and response normalization to maintain strict curriculum alignment.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Async Processing Pipeline</h4>
                                        <p className="text-slate-400 text-sm">Implemented a robust background worker system using Redis and Arq. This offloads heavy AI generation and document exporting (PDF/DOCX) to independent processes, ensuring 100ms API response times for users.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Hybrid Cloud Deployment</h4>
                                        <p className="text-slate-400 text-sm">Architected a distributed system across Vercel (Frontend) and Railway (Backend/Workers/DB). This provides high availability and independent scalability for compute-heavy background tasks.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Administrative RBAC</h4>
                                        <p className="text-slate-400 text-sm">Developed a multi-tenant Role-Based Access Control system. Admins have dedicated routers for moderation, audit logs, and system health monitoring, separated from educator workflows.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="text-slate-500 mb-2">// Multi-Provider AI Implementation</div>
                                    <code className="block">
                                        {`class AICore:
    async def get_response(self, provider="openai"):
        cache_key = self._generate_key(prompt)
        if cached := await cache.get(cache_key):
            return cached
            
        service = OpenAI() if provider == "openai" else Gemini()
        try:
            return await service.generate(...)
        except ProviderError:
            return await self._fallback_provider(...)`}
                                    </code>
                                </div>
                                <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                                    <h4 className="text-slate-200 font-medium mb-2">Data Integrity & Migrations</h4>
                                    <p className="text-slate-400 text-sm">Managed a normalized relational schema in PostgreSQL via SQLAlchemy. Complexity across Users, Plans, and Resources is governed by Alembic-driven migrations, ensuring safe updates to the production system.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Server className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["FastAPI", "React", "PostgreSQL", "Docker", "OpenAI", "SQLAlchemy", "Alembic"].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Layers className="mr-3 text-cyan-400" /> Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    "Awade effectively reduced resource generation time while maintaining 100% curriculum alignment. The implementation of strict validation layers and RBAC ensured a production-ready system capable of supporting institutional scale."
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-800 text-center">
                        <p className="text-slate-500 mb-6">Interested in the code?</p>
                        <a href="https://github.com/TolulopeBabajide/awade" className="inline-flex items-center justify-center px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
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
