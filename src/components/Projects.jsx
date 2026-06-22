import { motion } from 'framer-motion'
import { ExternalLink, Github, Lock, ArrowRight, Star } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRole, useRoleHref } from '../context/RoleContext'
import SectionHeading from './SectionHeading'

// Import project previews
import awadePreview from '../assets/awade-preview.png'
import planaclePreview from '../assets/planacle-preview.png'
import bookorbitPreview from '../assets/bookorbit-preview.png'
import opsaraPreview from '../assets/opsara-preview.jpg'
import agentPreview from '../assets/agent-preview.png'
import securityPreview from '../assets/security-preview.svg'

// Note: Ensure images exist in src/assets or public/assets
const projects = [
    {
        title: "Cyber Threat Intelligence & GRC",
        category: "SECURITY · CYBLACK",
        subtitle: "Security · Enterprise client engagements",
        problemDetail: "Enterprise clients need attacker behaviour mapped to defensible controls, and compliance gaps surfaced before auditors or adversaries find them.",
        solutionDetail: "Threat analysis with the MITRE ATT&CK framework, IAM and API authentication review across cloud environments, and GRC gap assessments against ISO 27001 and PCI DSS, with findings translated into board-level risk summaries.",
        notable: "Manage end-to-end client engagements from scoping through remediation guidance, owning the consultative relationship alongside the technical analysis.",
        tags: ["MITRE ATT&CK", "Threat Intelligence", "ISO 27001", "PCI DSS", "IAM Review"],
        link: "/projects/cybersecurity",
        github: null,
        liveUrl: null,
        image: securityPreview
    },
    {
        title: "OPSARA",
        category: "PRODUCT PROTOTYPE",
        subtitle: "Hospitality · Nigerian & pan-African SME restaurants, bars, hotels",
        problemDetail: "African hospitality SMEs run on paper, WhatsApp, and disconnected tools. No operating software is built for the unreliable connectivity they work under.",
        solutionDetail: "An offline-first hospitality OS prototype covering POS floor plan, kitchen display, bookings, inventory, and owner analytics. The sync engine keeps working through offline periods instead of failing when the network drops.",
        notable: "End-to-end product prototype, from problem discovery through interaction design to a working multi-persona, multi-property build.",
        tags: ["React", "Offline-First", "Product Design", "POS / KDS", "Hospitality"],
        link: "/projects/opsara",
        github: null,
        liveUrl: "https://scintillating-praline-b0342f.netlify.app/",
        image: opsaraPreview
    },
    {
        title: "Awade",
        category: "AI PRODUCT",
        subtitle: "Education · Teachers and school teams",
        problemDetail: "Planning quality lesson resources quickly and consistently.",
        solutionDetail: "FastAPI-powered (Python) LLM-based lesson content generation with role-based access and structured outputs.",
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
        solutionDetail: "Real-time AI planning with LLM-powered generative AI synthesis via Gemini-powered itinerary generation, Genkit agentic flows, voting, and location discovery.",
        notable: "Schulze and Gale-Shapley algorithms built from scratch for preference ranking and optimal venue matching.",
        tags: ["React", "Firebase", "Gemini", "Genkit", "Google Maps API", "Tailwind CSS"],
        link: "/projects/planacle",
        github: "https://github.com/TolulopeBabajide/planacle",
        liveUrl: "https://planacle.com",
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
        solutionDetail: "Built a 3-agent loop (dev / code-review / QA) with 22 scheduled tasks and 28 skills, proven on Planacle and Awade.",
        notable: "Replaces a full engineering team; agents self-heal on test failure.",
        tags: ["Claude SDK", "Multi-Agent", "Prompt Engineering", "CI/CD", "MCP"],
        link: "/projects/agentic-team",
        github: null,
        liveUrl: null,
        image: agentPreview
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
    const { config } = useRole();
    const roleHref = useRoleHref();
    const carouselRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleProjects = useMemo(() => {
        const order = config.projectOrder;
        const byTitle = new Map(projects.map((p) => [p.title, p]));
        return order.map((title) => byTitle.get(title)).filter(Boolean);
    }, [config.projectOrder]);

    // The role's top-priority project gets a full-width featured treatment.
    const featured = visibleProjects[0];
    const gridProjects = visibleProjects.slice(1);

    useEffect(() => {
        const root = carouselRef.current;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                        const idx = Number(entry.target.dataset.index);
                        if (!Number.isNaN(idx)) setActiveIndex(idx);
                    }
                });
            },
            { root, threshold: [0.6] }
        );

        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [gridProjects.length]);

    const scrollToIndex = (idx) => {
        const el = cardRefs.current[idx];
        if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    };

    return (
        <section id="projects" className="py-12 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    kicker="01 · Work"
                    title="Featured Projects"
                    sub="Production-minded systems designed with security, scalability, and architectural clarity."
                />

                {/* Flagship project: full-width feature card */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="mb-10 sm:mb-16 rounded-2xl overflow-hidden border border-cyan-500/25 dark:border-cyan-500/20 bg-gray-100/60 dark:bg-[#111827]/40 shadow-[0_0_80px_-30px_rgba(34,211,238,0.3)] md:grid md:grid-cols-5 group"
                    >
                        <div className="md:col-span-3 bg-gray-200/60 dark:bg-slate-900/50 border-b md:border-b-0 md:border-r border-gray-200 dark:border-slate-800/80 p-3 sm:p-5 flex items-center justify-center relative">
                            {featured.image ? (
                                <img
                                    src={featured.image}
                                    alt={`${featured.title} preview`}
                                    className="w-full h-full object-cover rounded-lg shadow-xl shadow-black/20"
                                />
                            ) : (
                                <div className="w-full aspect-[1.8/1] flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-900/30 to-slate-900/60 border border-cyan-500/10">
                                    <span className="text-2xl font-bold text-cyan-400/40 tracking-wider font-mono">{featured.title}</span>
                                </div>
                            )}
                        </div>

                        <div className="md:col-span-2 p-5 sm:p-8 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-[0.18em]">
                                    <Star size={11} />
                                    Featured · {featured.category}
                                </span>
                                <div className="flex gap-3 text-slate-400 dark:text-slate-500">
                                    {featured.github && (
                                        <a href={featured.github} target="_blank" rel="noopener noreferrer" aria-label={`${featured.title} on GitHub`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {featured.liveUrl && (
                                        <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${featured.title} live demo`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">{featured.title}</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-500 mb-4 sm:mb-5">{featured.subtitle}</p>

                            <div className="space-y-3 mb-5 sm:mb-6 flex-grow">
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <span className="font-bold text-slate-800 dark:text-slate-200">Problem:</span> {featured.problemDetail}
                                </p>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <span className="font-bold text-slate-800 dark:text-slate-200">Solution:</span> {featured.solutionDetail}
                                </p>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                    <span className="font-bold text-slate-800 dark:text-slate-200 not-italic">Notable:</span> {featured.notable}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                                {featured.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-gray-300 dark:border-slate-800 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => navigate(roleHref(featured.link))}
                                className="mt-auto self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm font-medium transition-colors group/btn"
                            >
                                Read case study
                                <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Remaining projects: carousel on mobile, grid on md+ */}
                <div
                    ref={carouselRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 md:mb-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 scroll-px-4 pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {gridProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex flex-col h-auto md:h-full w-[85%] md:w-auto flex-shrink-0 md:flex-shrink snap-center bg-gray-100/60 dark:bg-[#111827]/40 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800/60 hover:border-gray-300 dark:hover:border-slate-700 transition-all hover:bg-gray-100 dark:hover:bg-[#111827]/60 group"
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
                                    onClick={() => navigate(roleHref(project.link))}
                                    className="mt-auto group/btn flex items-center text-xs sm:text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    Read case study
                                    <ArrowRight size={14} className="ml-1.5 sm:ml-2 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel dot indicators (mobile only) */}
                <div className="flex justify-center gap-2 mb-12 md:hidden" role="tablist" aria-label="Projects carousel">
                    {gridProjects.map((project, index) => (
                        <button
                            key={project.title}
                            type="button"
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-label={`Go to ${project.title}`}
                            onClick={() => scrollToIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                                activeIndex === index
                                    ? 'w-6 bg-cyan-400'
                                    : 'w-2 bg-gray-300 dark:bg-slate-700'
                            }`}
                        />
                    ))}
                </div>

                {config.showCyberLabs && (
                <Link to={roleHref("/projects/cybersecurity")}>
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
                )}
            </div>
        </section>
    )
}

export default Projects
