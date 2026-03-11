import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-4 sm:py-20 px-4 sm:px-6 text-start  border-slate-800/80 bg-slate-950/40" aria-labelledby="about-heading">
            <div className=" mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">About Me</p>
                    <p className="text-slate-300 text-base pb-5 sm:text-lg leading-relaxed">
                        Started by solving commercial problems in founder and sales environments. That shaped my approach to solving problems: understand users,
                    align stakeholders, and deliver outcomes that are useful in real operating contexts.
                    </p>
                    <p className="text-lg text-slate-300 max-w-6xl mx-auto mb-10 leading-relaxed">
                        Now, designing AI-powered applications, backend workflows, and system integrations while translating complex technology into real-world solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About