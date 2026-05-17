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
                    <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3">About</p>
                    <p className="text-slate-300 text-sm sm:text-base pb-3 sm:pb-5 leading-relaxed">
                        I believe curiosity is one of the most powerful things a person can have. It has taken me from entrepreneurship to sales, from education to technology, and from making products by hand to building digital systems.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-6xl mx-auto mb-2 sm:mb-10 leading-relaxed">
                        Every stage taught me something different, but the common thread has always been the same: understanding problems and trying to build better solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About