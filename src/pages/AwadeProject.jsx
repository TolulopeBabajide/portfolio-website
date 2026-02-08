import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Code, Database, Server, Cpu, Layers, Lock, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                            <h3 className="text-slate-400 text-sm font-semibold uppercase mb-4">Tech Stack</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-slate-200"><Code size={16} className="mr-2 text-cyan-500" /> React + TypeScript</li>
                                <li className="flex items-center text-slate-200"><Server size={16} className="mr-2 text-cyan-500" /> FastAPI (Python)</li>
                                <li className="flex items-center text-slate-200"><Database size={16} className="mr-2 text-cyan-500" /> PostgreSQL</li>
                                <li className="flex items-center text-slate-200"><Layers size={16} className="mr-2 text-cyan-500" /> Docker</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 md:col-span-2">
                            <h3 className="text-slate-400 text-sm font-semibold uppercase mb-4">The Challenge</h3>
                            <p className="text-slate-300">
                                Educators often spend disproportionate amounts of time on administrative tasks and lesson planning rather than teaching. The goal was to build a system that could generate high-quality, curriculum-aligned content instantly while maintaining secure data access for institutions.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <Cpu className="mr-3 text-cyan-400" /> Key Technical Implementations
                    </h2>

                    <div className="space-y-12">
                        <section>
                            <h3 className="text-xl font-semibold mb-3 text-slate-200">AI Integration & Prompt Engineering</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Integrated OpenAIs API to generate structured lesson plans. Implemented a sophisticated prompt engineering strategy to ensuring outputs were strictly formatted JSON for frontend rendering, handling edge cases where the AI might hallucinate invalid structures.
                            </p>
                            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
                                <code className="block">
                                    {`# Service Layer Abstraction
class AIService:
    async def generate_lesson_plan(self, topic: str, level: str) -> Dict:
        prompt = self._construct_prompt(topic, level)
        response = await self.client.chat.completions.create(...)
        return self._parse_and_validate(response)`}
                                </code>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold mb-3 text-slate-200 flex items-center">
                                <Lock size={20} className="mr-2 text-cyan-500" />
                                Security & Authentication
                            </h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Implemented a robust JWT-based authentication system with Role-Based Access Control (RBAC).
                                Differentiated between 'Educator' and 'Admin' roles using custom decorators in FastAPI to protect sensitive endpoints.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <li className="flex items-start bg-slate-800/30 p-3 rounded-lg">
                                    <CheckCircle size={18} className="mr-2 text-green-400 mt-1" />
                                    <span className="text-slate-300 text-sm">OAuth2 with Google Integration</span>
                                </li>
                                <li className="flex items-start bg-slate-800/30 p-3 rounded-lg">
                                    <CheckCircle size={18} className="mr-2 text-green-400 mt-1" />
                                    <span className="text-slate-300 text-sm">Automatic Token Refresh Rotation</span>
                                </li>
                                <li className="flex items-start bg-slate-800/30 p-3 rounded-lg">
                                    <CheckCircle size={18} className="mr-2 text-green-400 mt-1" />
                                    <span className="text-slate-300 text-sm">BCrypt Password Hashing</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold mb-3 text-slate-200">Database Architecture</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Designed a normalized relational schema using SQLAlchemy. Managed complex many-to-many relationships between
                                Users, Plans, and Resources. Used Alembic for database migrations to ensure consistent state across development and production environments.
                            </p>
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
