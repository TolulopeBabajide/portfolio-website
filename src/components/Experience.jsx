import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
}

const Experience = () => {
    const experiences = [
        {
            role: "Cybersecurity Analyst",
            company: "Cyblack",
            location: "London, UK",
            period: "2025",
            description: [
                "Conducted APT threat intelligence analysis using OpenCTI and MITRE ATT&CK mapping",
                "Assessed cloud infrastructure risks including IAM misconfigurations and API exposure",
                "Deployed and managed Docker-based security tooling environments",
                "Performed vulnerability assessments and controlled web application testing",
                "Applied threat modeling principles to strengthen secure backend design practices"
            ]
        },
        {
            role: "IT Support Specialist",
            company: "Send Me Global Logistics",
            location: "Lagos, Nigeria",
            period: "Jan 2024 – Sept 2024",
            description: [
                "Delivered first-line technical support across hardware, software, and network systems",
                "Managed user access control, permissions, and system configurations for secure authentication",
                "Diagnosed and resolved networking issues (LAN/Wi-Fi connectivity) to minimize downtime",
                "Maintained structured documentation of incidents and solutions for knowledge management",
                "Supported secure device setup and endpoint configuration, strengthening security posture"
            ]
        }
    ]

    return (
        <section className="h-auto md:h-[50vh] min-h-[500px] flex flex-col justify-center py-10 md:py-0 bg-gray-100/30 dark:bg-slate-900/30">
            <div className="w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Applying security principles in real-world environments.</p>
                </motion.div>

                <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent px-2">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="min-w-[85vw] md:min-w-[500px] bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-colors snap-center"
                        >
                            <div className="flex flex-col mb-3">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">
                                        {exp.role} <span className="text-cyan-400 block sm:inline"> @ {exp.company}</span>
                                    </h3>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-900/50 px-2 py-1 rounded border border-gray-300 dark:border-slate-700 whitespace-nowrap self-start sm:self-auto">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="flex items-center text-slate-500 dark:text-slate-500 text-xs">
                                    <Briefcase size={12} className="mr-1" />
                                    {exp.location}
                                </div>
                            </div>

                            <motion.ul
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                                }}
                                className="space-y-2 text-slate-600 dark:text-slate-300 text-sm"
                            >
                                {exp.description.map((item, i) => (
                                    <motion.li key={i} variants={listItemVariants} className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                        <span className="leading-relaxed text-xs md:text-sm">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
