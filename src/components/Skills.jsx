import { motion } from 'framer-motion'
import {
    Code,
    Server,
    Shield,
    Brain,
    Layout,
    GitBranch,
    CheckCircle,
    Search,
    PenTool
} from 'lucide-react'

const approachCategories = [
    {
        title: "Designing AI-powered applications",
        points: [
            "Defining the user problem clearly",
            "Designing system architecture around APIs and services",
            "Structuring AI workflows to produce reliable outputs",
            "Ensuring the solution integrates naturally into real user workflows",
            "Designing autonomous, self-healing agent pipelines"
        ]
    },
    {
        title: "Solutions Engineering",
        items: [
            { label: "Technical discovery", detail: "Understanding user problems and system requirements." },
            { label: "Solution design", detail: "Mapping business needs to AI-powered workflows and system architectures." },
            { label: "Technical communication", detail: "Explaining backend systems, APIs, and AI models clearly to stakeholders." },
            { label: "Product demonstrations", detail: "Showcasing technical solutions and system capabilities through structured demos." },
            { label: "Agentic workflow design", detail: "Designing enterprise-grade agentic pipelines (Agentforce-equivalent) using multi-agent orchestration frameworks." }
        ]
    }
]

const skillCategories = [
    {
        title: "AI & Data Systems",
        icon: Brain,
        skills: ["LLM / Large Language Models", "Generative AI", "Google Gemini", "OpenAI API", "Google Genkit (LangChain-equivalent)", "RAG Pipelines", "MCP Integrations", "Pinecone (Vector DB)", "PostgreSQL", "Firestore"]
    },
    {
        title: "Product Delivery",
        icon: Layout,
        skills: ["Technical Discovery", "Solution Design", "Agile (Scrum)", "System Integrations", "Stakeholder Management"]
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
        skills: ["E2E Testing (Playwright)", "ESLint", "Lighthouse", "Threat Intelligence", "Vulnerability Assessment"]
    },
    {
        title: "Cloud & Infrastructure",
        icon: GitBranch,
        skills: ["Firebase v2", "AWS (S3)", "Vercel", "Railway", "CI/CD (GitHub Actions)"]
    },
    {
        title: "Agent Orchestration",
        icon: Code,
        skills: ["Multi-Agent Systems", "Scheduled Pipelines", "Prompt Engineering at Scale", "Claude Agent SDK"]
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
    return (
        <section className="py-12 sm:py-24 px-4 sm:px-6 bg-gray-100/40 dark:bg-slate-900/40 border-y border-gray-200/60 dark:border-slate-800/60">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-20 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Solutions & Core Capabilities</h2>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Bridging the gap between complex technology and practical business outcomes.</p>
                </motion.div>

                {/* Strategy/Approach Section (From User Images) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {approachCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-100/60 dark:bg-slate-800/20 border border-gray-300/50 dark:border-slate-700/50 p-5 sm:p-8 rounded-2xl"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6">{category.title}</h3>
                            {category.points ? (
                                <ul className="space-y-3 sm:space-y-4">
                                    {category.points.map(point => (
                                        <li key={point} className="flex items-start gap-3 sm:gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="space-y-4 sm:space-y-6">
                                    {category.items.map(item => (
                                        <div key={item.label}>
                                            <h4 className="text-xs sm:text-sm font-bold text-cyan-400 mb-1">{item.label}</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-[10px] sm:text-xs leading-relaxed">{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Technical Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="bg-white dark:bg-slate-800/40 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-slate-800 hover:border-cyan-500/20 transition-all group"
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
            </div>
        </section>
    )
}

export default Skills
