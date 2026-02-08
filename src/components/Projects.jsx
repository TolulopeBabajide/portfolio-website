import { motion } from 'framer-motion'
import { ExternalLink, Github, Lock } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const projects = [
    {
        title: "Awade",
        description: "An AI-powered platform empowering African educators with automated lesson planning and resource generation. Features role-based access control, secure authentication, and a scalable microservices architecture.",
        tags: ["FastAPI", "React", "Docker", "OpenAI", "PostgreSQL"],
        type: "Full Stack",
        link: "/projects/awade",
        github: "https://github.com/TolulopeBabajide/awade",
        liveUrl: "https://awade-test.vercel.app",
        image: "/awade.png"
    },
    {
        title: "Planacle",
        description: "Social planning application designed to streamline group coordination. Integrates real-time location services, dynamic scheduling algorithms, and a responsive mobile-first interface.",
        tags: ["React", "Firebase", "Google Maps API", "Tailwind CSS"],
        type: "Full Stack",
        link: "/projects/planacle",
        github: "https://github.com/TolulopeBabajide/planacle",
        liveUrl: "#",
        image: "/planacle.png"
    },
    {
        title: "BookOrbit",
        description: "A robust library management system handling complex inventory tracking, user management, and fine calculation logic. Built for reliability and data integrity.",
        tags: ["Node.js", "MySQL", "AWS", "Express"],
        type: "Full Stack",
        link: "/projects/bookorbit",
        github: "https://github.com/TolulopeBabajide/LMS",
        liveUrl: "#",
        image: "/bookorbit.png"
    }
]

const cyberLabs = [
    {
        title: "Vulnerability Assessment",
        tool: "Nessus",
        description: "Conducted comprehensive network scans to identify and remediate security posture weaknesses."
    },
    {
        title: "Network Monitoring",
        tool: "Zabbix",
        description: "Implemented real-time infrastructure monitoring to detect anomalies and ensure uptime."
    },
    {
        title: "Web App Penetration Testing",
        tool: "OWASP Juice Shop",
        description: "Demonstrated exploit identification including SQL injection and XSS in a controlled environment."
    },
    {
        title: "Threat Intelligence",
        tool: "APT Analysis",
        description: "Authored detailed threat reports analyzing APT tactics, techniques, and procedures (TTPs)."
    }
]

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400">A selection of technical projects and security research.</p>
                </motion.div>

                {/* Software Dev Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => navigate(project.link)}
                            className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all border border-slate-700/50 group block cursor-pointer"
                        >
                            <div className="h-48 bg-slate-700/50 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-medium text-sm">View Project</span>
                                </div>
                            </div>

                            <div className="block p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1 block">{project.type}</span>
                                        <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-2 text-slate-400">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 hover:text-white cursor-pointer transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 hover:text-white cursor-pointer transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Cybersecurity Section */}
                <Link to="/projects/cybersecurity">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cursor-pointer group"
                    >
                        <div className="flex items-center gap-3 mb-8 group-hover:text-cyan-400 transition-colors">
                            <Lock className="text-cyan-400" size={28} />
                            <h3 className="text-2xl font-bold">Cybersecurity Labs & Research</h3>
                            <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cyberLabs.map((lab, index) => (
                                <motion.div
                                    key={lab.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 transition-colors flex items-start gap-4"
                                >
                                    <div className="mt-1 min-w-[4px] h-full bg-cyan-500/50 rounded-full" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-200">{lab.title}</h4>
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
