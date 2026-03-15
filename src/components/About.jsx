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
                        Started in founder and sales environments, solving commercial problems before writing a line of code. That shaped how I build: understand the user first, then design systems around what they actually need.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-6xl mx-auto mb-2 sm:mb-10 leading-relaxed">
                        Now I design and build AI-powered applications, backend workflows, and system integrations — focused on the gap between what AI can do and what's actually usable in the real world.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About