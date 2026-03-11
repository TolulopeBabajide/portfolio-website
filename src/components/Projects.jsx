import { motion } from 'framer-motion'
import { ExternalLink, Github, Lock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'Awade',
        type: 'AI Product',
        label: 'Education',
        audience: 'Teachers and school teams',
        problem: 'Planning quality lesson resources quickly and consistently.',
        solution: 'AI-powered generation with role-based access and structured outputs.',
        notable: 'Designed for practical classroom workflows, not one-off prompts.',
        tags: ['FastAPI', 'React', 'Docker', 'OpenAI', 'PostgreSQL'],
        link: '/projects/awade',
        github: 'https://github.com/TolulopeBabajide/awade',
        liveUrl: 'https://awade-test.vercel.app',
        image: '/awade.png'
    },
    {
        title: 'Planacle',
        type: 'Social Coordination',
        label: 'Consumer Utility',
        audience: 'Groups planning events and meetups',
        problem: 'Coordination breaks across chats, schedules, and map tools.',
        solution: 'Real-time planning with voting, scheduling, and place discovery.',
        notable: 'Optimized for mobile-first use and faster group decision-making.',
        tags: ['React', 'Firebase', 'Google Maps API', 'Tailwind CSS'],
        link: '/projects/planacle',
        github: 'https://github.com/TolulopeBabajide/planacle',
        liveUrl: '#',
        image: '/planacle.png'
    },
    {
        title: 'BookOrbit',
        type: 'Cloud / Secure Systems',
        label: 'Operations',
        audience: 'Libraries and readers',
        problem: 'Reliable inventory and payments across transactional flows.',
        solution: 'Full-stack management and marketplace system with cloud storage and payments.',
        notable: 'Used ACID transactions and backend hardening for safer operations.',
        tags: ['Node.js', 'Express', 'MySQL', 'AWS S3', 'Stripe'],
        link: '/projects/bookorbit',
        github: 'https://github.com/TolulopeBabajide/LMS',
        liveUrl: '#',
        image: '/bookorbit.png'
    }
]

const cyberLabs = [
    {
        title: 'Vulnerability Assessment',
        tool: 'Nessus',
        description: 'Assessed host and network risk, then prioritized remediation using CVSS-based triage.'
    },
    {
        title: 'Network Monitoring',
        tool: 'Zabbix',
        description: 'Configured operational monitoring and alerting to improve infrastructure visibility and uptime response.'
    },
    {
        title: 'Web App Penetration Testing',
        tool: 'OWASP Juice Shop',
        description: 'Documented SQL injection and XSS paths in a controlled lab to strengthen secure coding awareness.'
    },
    {
        title: 'Threat Intelligence',
        tool: 'APT Analysis',
        description: 'Mapped attacker behavior and TTPs into practical defensive reporting for security decision support.'
    }
]

const Projects = () => {
    return (
        <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6" aria-labelledby="projects-heading">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-12"
                >
                    <h2 id="projects-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400 max-w-3xl">Each project highlights the user context, problem, solution, and technical stack for quick recruiter review.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {projects.map((project, index) => {
                        const hasLiveUrl = project.liveUrl && project.liveUrl !== '#'

                        return (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all border border-slate-700/50 group"
                            >
                                <div className="h-40 sm:h-44 bg-slate-700/50 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="block p-5 sm:p-6">
                                    <div className="flex justify-between items-start gap-3 mb-3">
                                        <div>
                                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 block">{project.type}</span>
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-100">{project.title}</h3>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{project.label} · {project.audience}</p>
                                        </div>
                                        <div className="flex gap-2 text-slate-400">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                                                aria-label={`${project.title} GitHub repository (opens in a new tab)`}
                                            >
                                                <Github size={20} />
                                            </a>
                                            {hasLiveUrl ? (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                                                    aria-label={`${project.title} live link (opens in a new tab)`}
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            ) : (
                                                <span className="p-1 text-slate-600" aria-label={`${project.title} live link unavailable`}>
                                                    <ExternalLink size={20} />
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 mb-5 text-xs sm:text-sm text-slate-400">
                                        <p><span className="text-slate-200 font-medium">Problem:</span> {project.problem}</p>
                                        <p><span className="text-slate-200 font-medium">Solution:</span> {project.solution}</p>
                                        <p><span className="text-slate-200 font-medium">Notable:</span> {project.notable}</p>
                                    </div>

                                    <ul className="flex flex-wrap gap-2 mb-5" aria-label={`${project.title} technology stack`}>
                                        {project.tags.map((tag) => (
                                            <li key={tag} className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                                        aria-label={`Read ${project.title} case study`}
                                    >
                                        Read case study <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </motion.article>
                        )
                    })}
                </div>

                <Link to="/projects/cybersecurity" aria-label="Open cybersecurity labs and research page">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cursor-pointer group"
                    >
                        <div className="flex items-center gap-3 mb-8 group-hover:text-cyan-400 transition-colors">
                            <Lock className="text-cyan-400" size={28} aria-hidden="true" />
                            <h3 className="text-xl sm:text-2xl font-bold">Security Labs & Research</h3>
                            <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {cyberLabs.map((lab, index) => (
                                <motion.div
                                    key={lab.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-900/50 p-5 sm:p-6 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 transition-colors flex items-start gap-3 sm:gap-4"
                                >
                                    <div className="mt-1 min-w-[4px] h-full bg-cyan-500/50 rounded-full" aria-hidden="true" />
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-slate-200">{lab.title}</h4>
                                        <span className="text-xs font-mono text-cyan-500 mb-2 block">{lab.tool}</span>
                                        <p className="text-sm text-slate-400">{lab.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    )
}

export default Projects
