import { motion } from 'framer-motion'

const experiences = [
    {
        period: 'Founder & Commercial Background',
        title: 'Ownership and customer-facing execution',
        focus: 'Built operating discipline through direct responsibility for outcomes.',
        highlights: [
            'Owned priority setting, customer communication, and day-to-day delivery decisions.',
            'Balanced speed, quality, and constraints while keeping work tied to business goals.',
            'Built trust with stakeholders by communicating clearly and following through consistently.'
        ]
    },
    {
        period: 'Technical Transition',
        title: 'Full-Stack and AI Product Implementation',
        focus: 'Applied technical depth to problems first understood from the business side.',
        highlights: [
            'Built product experiences across frontend, backend, and data layers with iterative shipping cycles.',
            'Integrated AI workflows with structured outputs, validation, and practical user-facing behavior.',
            'Applied security-aware engineering patterns including access control and defensive implementation choices.'
        ]
    },
    {
        period: 'Current Direction',
        title: 'AI / Solutions / Product-Facing Engineering Roles',
        focus: 'Focused on execution roles that bridge product decisions and technical delivery.',
        highlights: [
            'Translate ambiguous requirements into scoped technical plans and implementation milestones.',
            'Partner with technical and non-technical teams to keep delivery aligned with user and business priorities.',
            'Bring high agency to planning, building, and communication across the delivery lifecycle.'
        ]
    }
]

const Experience = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6" aria-labelledby="experience-heading">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 id="experience-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <p className="text-slate-400 max-w-3xl">
                        A progression from commercial ownership into practical technical delivery for AI-enabled products.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {experiences.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6 md:p-7"
                        >
                            <p className="text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-2">{item.period}</p>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-100 mb-2">{item.title}</h3>
                            <p className="text-slate-300 mb-4">{item.focus}</p>

                            <ul className="space-y-2 pl-5">
                                {item.highlights.map((point) => (
                                    <li key={point} className="text-sm text-slate-400 leading-relaxed list-disc list-outside">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
