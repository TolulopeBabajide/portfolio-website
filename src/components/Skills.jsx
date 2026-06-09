import { motion } from 'framer-motion'
import {
    Code,
    Server,
    Brain,
    Layout,
    GitBranch,
    CheckCircle,
    PenTool
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRole } from '../context/RoleContext'

const skillCategories = [
    {
        title: "AI & Data Systems",
        icon: Brain,
        skills: ["Machine Learning", "Applied ML", "LLM / Large Language Models", "Generative AI", "Google Gemini", "OpenAI API", "Google Genkit (LangChain-equivalent)", "RAG Pipelines", "MCP Integrations", "Pinecone (Vector DB)", "PostgreSQL", "Firestore"]
    },
    {
        title: "Solutions Engineering / Pre-Sales",
        icon: Layout,
        skills: ["Solutions Engineer", "Pre-Sales", "Technical Support Engineering", "Forward Deployed Engineering", "Technical Discovery", "Solution Design", "Technical Communication", "Product Demonstrations", "Agile (Scrum)", "System Integrations", "Stakeholder Management"]
    },
    {
        title: "Systems Dev",
        icon: Server,
        skills: ["Python (FastAPI)", "TypeScript (React)", "Node.js (Express)", "Firebase Functions", "Docker"]
    },
    {
        title: "Design & Logic",
        icon: PenTool,
        skills: ["UML Diagramming", "Mermaid.js", "System Architecture", "API Design", "PWA Design"]
    },
    {
        title: "Quality & Security",
        icon: CheckCircle,
        skills: ["E2E Testing (Playwright)", "ESLint", "Lighthouse", "Threat Intelligence", "Vulnerability Assessment", "LLM Security / AI Safety", "Prompt-Injection Defense", "LLM Red-Teaming", "AI Output Validation"]
    },
    {
        title: "Cloud & Infrastructure",
        icon: GitBranch,
        skills: ["Firebase v2", "AWS (S3)", "Vercel", "Railway", "CI/CD (GitHub Actions)"]
    },
    {
        title: "Agent Orchestration",
        icon: Code,
        skills: ["Multi-Agent Systems", "Agentic Workflow Design", "Scheduled Pipelines", "Prompt Engineering at Scale", "Claude Agent SDK"]
    }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
}

const Skills = () => {
    const { config } = useRole();
    const carouselRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const orderedCategories = useMemo(() => {
        const order = config.skillsOrder;
        const rank = new Map(order.map((title, i) => [title, i]));
        return [...skillCategories].sort((a, b) => {
            const ai = rank.has(a.title) ? rank.get(a.title) : Number.POSITIVE_INFINITY;
            const bi = rank.has(b.title) ? rank.get(b.title) : Number.POSITIVE_INFINITY;
            return ai - bi;
        });
    }, [config.skillsOrder]);

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
    }, []);

    const scrollToIndex = (idx) => {
        const el = cardRefs.current[idx];
        if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    };

    return (
        <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gray-100/40 dark:bg-slate-900/40 border-y border-gray-200/60 dark:border-slate-800/60">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-20 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Skills & Core Capabilities</h2>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Bridging the gap between complex technology and practical business outcomes.</p>
                </motion.div>

                {/* Technical Skills: carousel on mobile, grid on md+ */}
                <motion.div
                    ref={carouselRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {orderedCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            variants={itemVariants}
                            className="w-[85%] md:w-auto flex-shrink-0 md:flex-shrink snap-center bg-white dark:bg-slate-800/40 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-slate-800 hover:border-cyan-500/20 transition-all group"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <category.icon size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 dark:bg-slate-900/60 rounded text-[9px] sm:text-[11px] font-medium text-slate-600 dark:text-slate-400 border border-gray-300/50 dark:border-slate-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Carousel dot indicators (mobile only) */}
                <div className="flex justify-center gap-2 mt-4 md:hidden" role="tablist" aria-label="Skills carousel">
                    {orderedCategories.map((category, index) => (
                        <button
                            key={category.title}
                            type="button"
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-label={`Go to ${category.title}`}
                            onClick={() => scrollToIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                                activeIndex === index
                                    ? 'w-6 bg-cyan-400'
                                    : 'w-2 bg-gray-300 dark:bg-slate-700'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
