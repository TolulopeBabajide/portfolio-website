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
            "Ensuring the solution integrates naturally into real user workflows"
        ]
    },
    {
        title: "Solutions Engineering",
        items: [
            { label: "Technical discovery", detail: "Understanding user problems and system requirements." },
            { label: "Solution design", detail: "Mapping business needs to AI-powered workflows and system architectures." },
            { label: "Technical communication", detail: "Explaining backend systems, APIs, and AI models clearly to stakeholders." },
            { label: "Product demonstrations", detail: "Showcasing technical solutions and system capabilities through structured demos." }
        ]
    }
]

const skillCategories = [
    {
        title: "AI & Data Systems",
        icon: Brain,
        skills: ["Google Gemini", "OpenAI API", "Google Genkit", "Pinecone (Vector DB)", "PostgreSQL", "Firestore"]
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
        <section className="py-24 px-6 bg-slate-900/40 border-y border-slate-800/60">
            <div className="max-w-6xl mx-auto w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions & Core Capabilities</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Bridging the gap between complex technology and practical business outcomes.</p>
                </motion.div>

                {/* Strategy/Approach Section (From User Images) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {approachCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/20 border border-slate-700/50 p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold text-slate-100 mb-6">{category.title}</h3>
                            {category.points ? (
                                <ul className="space-y-4">
                                    {category.points.map(point => (
                                        <li key={point} className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                                            <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="space-y-6">
                                    {category.items.map(item => (
                                        <div key={item.label}>
                                            <h4 className="text-sm font-bold text-cyan-400 mb-1">{item.label}</h4>
                                            <p className="text-slate-400 text-xs leading-relaxed">{item.detail}</p>
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/20 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <category.icon size={20} />
                                </div>
                                <h3 className="text-base font-bold text-slate-100">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-2.5 py-1 bg-slate-900/60 rounded text-[11px] font-medium text-slate-400 border border-slate-700/50">
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
