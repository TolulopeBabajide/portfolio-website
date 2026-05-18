import { motion } from 'framer-motion'
import { ExternalLink, Github, Lock, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

// Import project previews
import awadePreview from '../assets/awade-preview.png'
import planaclePreview from '../assets/planacle-preview.png'
import bookorbitPreview from '../assets/bookorbit-preview.png'

// Note: Ensure images exist in src/assets or public/assets
const projects = [
    {
        title: "Awade",
        category: "AI PRODUCT",
        subtitle: "Education · Teachers and school teams",
        problemDetail: "Planning quality lesson resources quickly and consistently.",
        solutionDetail: "RAG-based lesson content generation with role-based access and structured outputs.",
        notable: "Designed for practical classroom workflows, not one-off prompts.",
        tags: ["FastAPI", "React", "TypeScript", "Docker", "OpenAI", "PostgreSQL"],
        link: "/projects/awade",
        github: "https://github.com/TolulopeBabajide/awade",
        liveUrl: "https://awade-test.vercel.app",
        image: awadePreview
    },
    {
        title: "Planacle",
        category: "AI PRODUCT",
        subtitle: "Consumer Utility · Groups planning events and meetups",
        problemDetail: "Coordination breaks across chats, schedules, and map tools.",
        solutionDetail: "Real-time AI planning with generative AI synthesis via Gemini-powered itinerary generation, Genkit agentic flows, voting, and location discovery.",
        notable: "Schulze and Gale-Shapley algorithms built from scratch for preference ranking and optimal venue matching.",
        tags: ["React", "Firebase", "Gemini", "Genkit", "Google Maps API", "Tailwind CSS"],
        link: "/projects/planacle",
        github: "https://github.com/TolulopeBabajide/planacle",
        liveUrl: null,
        image: planaclePreview
    },
    {
        title: "BookOrbit",
        category: "CLOUD / SECURE SYSTEMS",
        subtitle: "Operations · Libraries and readers",
        problemDetail: "Reliable inventory and payments across transactional flows.",
        solutionDetail: "Full-stack management and marketplace system with cloud storage and payments.",
        notable: "Used ACID transactions and backend hardening for safer operations.",
        tags: ["Node.js", "Express", "MySQL", "AWS S3", "Stripe"],
        link: "/projects/bookorbit",
        github: null,
        liveUrl: null,
        image: bookorbitPreview
    },
    {
        id: "agentic-team",
        title: "Agentic Team Template",
        category: "AI SYSTEMS ENGINEERING",
        subtitle: "DevOps · Autonomous multi-agent pipeline",
        problemDetail: "Needed a self-healing autonomous DevOps pipeline that could write, test, and ship code without human intervention.",
        solutionDetail: "Built a 3-agent loop (dev / code-review / QA) with 22 scheduled tasks and 28 skills, battle-tested on Planacle and Awade.",
        notable: "Replaces a full engineering team; agents self-heal on test failure.",
        tags: ["Claude SDK", "Multi-Agent", "Prompt Engineering", "CI/CD", "MCP"],
        link: "/projects/agentic-team",
        github: null,
        liveUrl: null,
        image: null
    }
]

const cyberLabs = [
    {
        title: "Vulnerability Assessment",
        tool: "Nessus",
        description: "Assessed host and network risk, then prioritized remediation using CVSS-based triage."
    },
    {
        title: "Network Monitoring",
        tool: "Zabbix",
        description: "Configured operational monitoring and alerting to improve infrastructure visibility and uptime response."
    },
    {
        title: "Web App Penetration Testing",
        tool: "OWASP Juice Shop",
        description: "Documented SQL injection and XSS paths in a controlled lab to strengthen secure coding awareness."
    },
    {
        title: "Threat Intelligence",
        tool: "APT Analysis",
        description: "Mapped attacker behavior and TTPs into practical defensive reporting for security decision support."
    }
]

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id="projects" className="py-12 sm:py-20 mt-8 sm:mt-12 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-8 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">Production-minded systems designed with security, scalability, and architectural clarity.</p>
                </motion.div>

                {/* Software Dev Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex flex-col h-full bg-gray-100/60 dark:bg-[#111827]/40 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800/60 hover:border-gray-300 dark:hover:border-slate-700 transition-all hover:bg-gray-100 dark:hover:bg-[#111827]/60 group"
                        >
                            {/* Preview Window Style */}
                            <div className="aspect-[1.8/1] bg-gray-200/60 dark:bg-slate-900/50 border-b border-gray-200 dark:border-slate-800/80 p-3 sm:p-4 relative overflow-hidden flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="w-full h-full object-cover rounded-lg shadow-xl shadow-black/20"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-900/30 to-slate-900/60 border border-cyan-500/10">
                                        <span className="text-2xl font-bold text-cyan-400/40 tracking-wider font-mono">{project.title}</span>
                                    </div>
                                )}
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 font-medium bg-white/80 dark:bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                                    {project.title} preview
                                </div>
                            </div>

                            <div className="p-5 sm:p-7 flex flex-col flex-grow">
                                {/* Header Section */}
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-3 sm:gap-4 text-slate-400 dark:text-slate-500">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{project.title}</h3>
                                <p className="text-xs text-slate-600 dark:text-slate-500 mb-4 sm:mb-6">{project.subtitle}</p>

                                {/* Points Section */}
                                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                                    <div>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            <span className="font-bold text-slate-800 dark:text-slate-200">Problem:</span> {project.problemDetail}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                            <span className="font-bold text-slate-800 dark:text-slate-200">Solution:</span> {project.solutionDetail}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                            <span className="font-bold text-slate-800 dark:text-slate-200 not-italic">Notable:</span> {project.notable}
                                        </p>
                                    </div>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-gray-300 dark:border-slate-800 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action */}
                                <button
                                    onClick={() => navigate(project.link)}
                                    className="mt-auto group/btn flex items-center text-xs sm:text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Read case study
                                    <ArrowRight size={14} className="ml-1.5 sm:ml-2 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Link to="/projects/cybersecurity">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group border-t border-gray-200 dark:border-slate-800/60 pt-10 sm:pt-16"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-10 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <Lock size={24} className="sm:w-7 sm:h-7" />
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Security Labs & Research</h3>
                            <ExternalLink size={18} className="ml-1 sm:w-5 sm:h-5" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {cyberLabs.map((lab) => (
                                <div
                                    key={lab.title}
                                    className="bg-gray-100/50 dark:bg-[#111827]/30 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-slate-800/80 flex items-start gap-4 sm:gap-6 hover:border-gray-300 dark:hover:border-slate-700 transition-all duration-300 group/lab"
                                >
                                    <div className="w-[3px] h-10 sm:h-12 bg-cyan-500/40 rounded-full mt-1 flex-shrink-0 group-hover/lab:bg-cyan-500 transition-colors" />
                                    <div className="flex flex-col">
                                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">{lab.title}</h4>
                                        <span className="text-[10px] sm:text-xs font-mono text-cyan-500/80 mb-2 sm:mb-3">{lab.tool}</span>
                                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">{lab.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    )
}

export default Projects
