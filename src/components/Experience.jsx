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
            company: "CyBlack",
            location: "United Kingdom",
            period: "Oct 2025 - Present (6 mos)",
            description: [
                "Conduct threat analysis using the MITRE ATT&CK framework to identify emerging attack patterns.",
                "Review IAM configurations and API authentication mechanisms across cloud environments.",
                "Perform GRC gap assessments aligned with ISO 27001 and PCI DSS controls.",
                "Identify compliance gaps, assess associated risks, and recommend remediation strategies.",
                "Contribute to drafting and reviewing security policies aligned with ISO 27001 and PCI DSS requirements.",
                "Translate technical findings into clear risk summaries for business stakeholders."
            ]
        },
        {
            role: "Event Hospitality Team Lead",
            company: "Agencies Across London",
            location: "United Kingdom",
            period: "Oct 2024 - Present (1 yr 6 mos)",
            description: [
                "Lead hospitality operations across premium event venues (Chelsea FC, Fulham FC, Royal Ascot), coordinating service teams in VIP suites.",
                "Deliver high-standard guest experiences while managing team coordination in fast-paced environments.",
                "Engage directly with VIP guests and stakeholders, demonstrating leadership and problem-solving skills."
            ]
        },
        {
            role: "IT Operations Support",
            company: "Sendmeglobal",
            location: "Lagos State, Nigeria",
            period: "Jan 2024 - Sep 2024 (9 mos)",
            description: [
                "Provided cross-functional IT support in a logistics environment, maintaining hardware, software, and network systems.",
                "Led onboarding for new employees, configuring workstations and delivering basic cybersecurity awareness guidance.",
                "Maintained IT asset documentation, supported backup processes, and resolved technical issues.",
                "Assisted teams in troubleshooting system and connectivity issues to ensure operational continuity."
            ]
        },
        {
            role: "Sales Executive",
            company: "LIFEPAGE Global",
            location: "Lagos State, Nigeria",
            period: "Oct 2022 - Sep 2024 (2 yrs)",
            description: [
                "Led a cross-functional B2B initiative with development and marketing teams, contributing to 20% revenue growth.",
                "Launched a product offering that became the company's best-selling category.",
                "Closed over ₦1Bn in annual revenue while managing distributed sales teams.",
                "Delivered structured discovery sessions and solution presentations to prospective clients."
            ]
        },
        {
            role: "Founder and Product Lead",
            company: "Leathern by Jyde",
            location: "Lagos State, Nigeria",
            period: "Jul 2017 - Oct 2022 (5 yrs 4 mos)",
            description: [
                "Conceptualized, launched, and scaled a footwear brand from inception to market.",
                "Led product development efforts, overseeing design, prototyping, and manufacturing processes.",
                "Developed and executed marketing strategies to drive brand awareness and customer engagement.",
                "Managed e-commerce platform, optimizing user experience and implementing digital marketing initiatives."
            ]
        }
    ]

    return (
        <section className="h-auto md:h-[50vh] min-h-[500px] flex flex-col justify-center py-10 md:py-0 bg-slate-900/30">
            <div className="w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
                    <p className="text-slate-400 text-sm">A professional history of building products, leading teams, and securing infrastructures.</p>
                </motion.div>

                <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent px-2">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="min-w-[85vw] md:min-w-[500px] bg-slate-800/50 p-5 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors snap-center"
                        >
                            <div className="flex flex-col mb-3">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                                    <h3 className="text-base md:text-lg font-bold text-slate-100">
                                        {exp.role} <span className="text-cyan-400 block sm:inline"> @ {exp.company}</span>
                                    </h3>
                                    <span className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700 whitespace-nowrap self-start sm:self-auto">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="flex items-center text-slate-500 text-xs">
                                    <Briefcase size={12} className="mr-1" />
                                    {exp.location}
                                </div>
                            </div>

                            <motion.ul
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                                }}
                                className="space-y-2 text-slate-300 text-sm"
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
