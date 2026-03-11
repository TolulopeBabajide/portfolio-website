import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 border-y border-slate-800/80 bg-slate-950/40" aria-labelledby="about-heading">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">About</p>
                    <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 mb-5">Non-traditional path, practical delivery mindset.</h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
                        I started by solving commercial problems in founder and sales environments. That shaped how I work: understand users,
                        align stakeholders, and deliver outcomes that are useful in real operating contexts.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                        <h3 className="text-slate-100 font-semibold mb-3">Commercial context to technical solutions</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            I moved into computing and AI to build at greater scale, from requirements and architecture through implementation and iteration.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                        <h3 className="text-slate-100 font-semibold mb-3">Cross-functional by default</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            I work comfortably across technical and business conversations, with emphasis on clear communication, secure defaults,
                            and dependable delivery.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
