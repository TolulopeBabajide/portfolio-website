import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Code, Database, Server, Cpu, Layers, Lock, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import awadeArchitecture from '../assets/awade-architecture.png'
import SEO from '../components/SEO'

const AwadeProject = () => {
    const awadeSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Awade",
        "operatingSystem": "Web",
        "applicationCategory": "EducationApplication",
        "offers": {
            "@type": "Offer",
            "price": "0"
        },
        "description": "An AI-powered platform for automated lesson planning and curriculum-aligned resource generation for educators."
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            <SEO
                title="Awade: AI-Powered Lesson Planning | AI Systems Engineering"
                description="Technical case study on Awade, an AI-powered platform for educators. Demonstrating AI systems engineering and scalable backend architecture."
                schema={awadeSchema}
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Full Stack Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Awade</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">
                        An AI-powered platform empowering African educators with automated lesson planning and resource generation.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-slate-900 py-10">
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Project Type</h4>
                            <p className="text-slate-200 text-sm font-medium">EdTech AI</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Key Stack</h4>
                            <p className="text-slate-200 text-sm font-medium">FastAPI, React, OpenAI</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Architecture Style</h4>
                            <p className="text-slate-200 text-sm font-medium">Distributed, Async</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Core Capability</h4>
                            <p className="text-slate-200 text-sm font-medium">Automated Localized Planning</p>
                        </div>
                    </div>

                    <div className="space-y-24 mb-16">
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <Code size={18} className="mr-2" /> The Problem
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Standardized educational tools often fail to serve underserved regions because they generate generic content that ignores local cultural and linguistic contexts. The technical challenge was architecting a system that could maintain strict national curriculum alignment while dynamically adapting resource generation to resonate with African learners—all while remaining performant in low-bandwidth environments.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <CheckCircle size={18} className="mr-2" /> The Solution
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        An intelligent, human-in-the-loop platform that automates the generation of contextually relevant, curriculum-aligned teaching resources. The system employs a multi-model Tier-Switching strategy (OpenAI for complex reasoning, Gemini for high-volume generation) to optimize for both accuracy and cost-efficiency, ensuring educators maintain final editorial control.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Cpu className="mr-3 text-cyan-400" /> Architecture Strategy
                            </h2>
                            <p className="text-slate-400 mb-10 leading-relaxed max-w-3xl text-sm sm:text-base">
                                Awade is built on a distributed, asynchronous architecture designed to handle compute-intensive AI workloads while maintaining high availability. The system decouples the React frontend from a FastAPI-backed processing layer, utilizing a Redis-mediated queue to offload lesson generation and PDF exporting to specialized background workers. This design ensures a sub-100ms API response time regardless of underlying AI latency or document complexity.
                            </p>

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
                                        <p className="text-slate-400 text-sm">Engineered a multi-provider abstraction layer that tier-switches between OpenAI and Google Gemini based on task requirements. This prevents vendor lock-in and implements robust circuit-breaking to maintain 99.9% uptime for AI features.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Async Processing Pipeline</h4>
                                        <p className="text-slate-400 text-sm">Utilized an event-driven queueing system (Redis + Arq) to isolate long-running generation tasks from the request-response cycle. This preserves system responsiveness and allows for independent horizontal scaling of workers.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Hybrid Cloud Deployment</h4>
                                        <p className="text-slate-400 text-sm">Architected a distributed infrastructure across Railway and Vercel to optimize for both static delivery and dynamic compute. This separation ensures that frontend deployments never interfere with stateful backend processes.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Administrative RBAC</h4>
                                        <p className="text-slate-400 text-sm">Implemented a granular Role-Based Access Control system with isolated routers for educators and admins. This security-first design ensures strict data isolation and provides dedicated audit logging for management workflows.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/50">
                                        <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Example: Multi-provider AI fallback logic</span>
                                    </div>
                                    <p className="text-slate-400 text-xs mb-6 font-sans leading-relaxed italic">
                                        This implementation solves the critical problem of provider-side downtime or API rate-limiting by automatically switching to a secondary model. It ensures the application remains functional even if the primary LLM provider experiences a partial service outage.
                                    </p>
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
                                    <p className="text-slate-400 text-sm">Leveraged SQLAlchemy and Alembic to manage a normalized relational schema in PostgreSQL. Every schema change is version-controlled through declarative migrations, ensuring deterministic database state transitions.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Layers className="mr-3 text-cyan-400" /> Key System Components
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Engineering Challenges</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Reducing system latency and maintaining responsiveness during compute-heavy multi-modal AI generation cycles.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Ensuring prompt consistency and output normalization across disparate LLM providers (OpenAI and Gemini).
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Solutions</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Implemented an asynchronous Redis-backed queue to decouple AI processing from the request cycle, ensuring instant UI feedback.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Engineered a centralized normalization middleware to standardize varying provider responses into a deterministic internal format.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Server className="mr-3 text-cyan-400" /> Technology Stack
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['FastAPI', 'Redis', 'Arq'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Framer Motion', 'Lucide React'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">AI / ML</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['OpenAI', 'Google Gemini'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Data</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['PostgreSQL', 'SQLAlchemy', 'Alembic'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Infrastructure</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Docker', 'Vercel', 'Railway'].map((tech) => (
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
                                <Database className="mr-3 text-cyan-400" /> Business Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-10 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">90%</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Time Reduction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">100%</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Curriculum Match</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">500+</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Resources Generated</div>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-8 text-lg">
                                    Awade effectively reduced resource generation time while maintaining 100% curriculum alignment. The implementation of strict validation layers and RBAC ensured a production-ready system capable of supporting institutional scale with high reliability and zero downtime during beta.
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
