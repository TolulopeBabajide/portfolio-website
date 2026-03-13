import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-2 sm:py-10 px-2 sm:px-6 text-start border-slate-800/80 bg-slate-950/40" aria-labelledby="about-heading">
            <div className=" mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 sm:mb-10"
                >
                    <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3">About Me</p>
                    <p className="text-slate-300 text-sm sm:text-base pb-3 sm:pb-5 leading-relaxed">
                        Started as a founder navigating complex product and commercial challenges. This experience forged a core engineering philosophy: build systems that deliver real-world value. Today, that product intuition translates into rigorous AI systems engineering.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-6xl mx-auto mb-2 sm:mb-10 leading-relaxed">
                        Architecting scalable backend architectures and integrating AI models into distributed systems. My focus in AI application development lies in practical system design—engineering resilient workflows, clean APIs, and performant architectures to solve complex technical problems.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About