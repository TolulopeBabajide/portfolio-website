import { motion } from 'framer-motion'
import { Code, Server, Database, Shield, Rocket, Brain } from 'lucide-react'

const skillCategories = [
    {
        title: "Frontend",
        icon: Code,
        skills: ["React", "TypeScript", "Tailwind CSS", "Pug", "Framer Motion"]
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Python (FastAPI)", "Node.js (Express)", "Firebase Functions"]
    },
    {
        title: "Database",
        icon: Database,
        skills: ["PostgreSQL", "MySQL", "SQLite", "Firestore"]
    },
    {
        title: "Cybersecurity",
        icon: Shield,
        skills: ["Threat Intelligence", "Vuln Assessment (Nessus)", "Network Monitoring (Zabbix)", "Web App Security", "Cryptography"]
    },
    {
        title: "DevOps & Tools",
        icon: Rocket,
        skills: ["Docker", "AWS (S3)", "Git", "Stripe"]
    },
    {
        title: "AI & ML",
        icon: Brain,
        skills: ["OpenAI API", "Google Gemini", "Prompt Engineering"]
    }
]

const Skills = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Tools and practices I use to ship reliable AI-enabled and full-stack products.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-slate-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
