import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-14 sm:pb-16 relative" aria-labelledby="hero-heading">
            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center py-1.5 px-3 rounded-full bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-6 border border-cyan-500/20 text-center leading-relaxed max-w-full">
                        Open to AI, Solutions Engineering, and Technical Product roles
                    </span>

                    <h1 id="hero-heading" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight leading-tight">
                        AI-enabled product builder with
                        <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">founder ownership and engineering execution.</span>
                    </h1>

                    <p className="text-base sm:text-xl md:text-2xl text-slate-300 mb-6 font-medium max-w-3xl mx-auto leading-relaxed">
                        I'm Tolulope Babajide. I turn business problems into practical software through product thinking, full-stack delivery, and structured AI workflows.
                    </p>

                    <p className="text-sm sm:text-lg text-slate-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                        My focus is clear scoping, reliable implementation, and collaboration across technical and non-technical stakeholders from idea to release.
                    </p>

                    <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-xs sm:text-sm" aria-label="Core strengths">
                        <li className="px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/70 text-slate-300">AI Workflow Design</li>
                        <li className="px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/70 text-slate-300">Product-Minded Delivery</li>
                        <li className="px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/70 text-slate-300">Security-Aware Systems</li>
                    </ul>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-cyan-600 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 text-white rounded-lg font-semibold transition-colors"
                        >
                            Review Featured Projects
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-slate-800 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 text-slate-100 rounded-lg font-semibold transition-colors border border-slate-700"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
                aria-hidden="true"
            >
                <ArrowDown className="animate-bounce" />
            </motion.div>
        </section>
    )
}

export default Hero
