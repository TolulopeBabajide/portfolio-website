import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
}

const Hero = () => {
    return (
        <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 pt-4 sm:pt-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center z-10 relative mt-8 sm:mt-0 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=""
                >
                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 tracking-tight">
                        <span className="bg-cyan-400 bg-clip-text text-transparent">Tolulope Babajide</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-base sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-4 sm:mb-6 font-light max-w-2xl mx-auto">
                        AI Systems Engineer — building AI products, backend systems, and multi-agent orchestration pipelines, based in London, UK.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-2 sm:mb-4 font-light max-w-2xl mx-auto leading-relaxed">
                        Curiosity has taken me across entrepreneurship, education, sales, hospitality, and computing — from running a footwear brand and mentoring young learners to leading sales teams and building digital systems.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                        Those experiences shaped how I approach technology today: understand people, understand systems, and build things that create value. I'm now exploring AI-powered applications, backend systems, and cybersecurity.
                    </motion.p>

                </motion.div>
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-0"
                    >
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="px-6 sm:px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors w-full sm:w-auto text-sm sm:text-base">
                            Featured Projects
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" target="_blank" className="px-6 sm:px-8 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-colors border border-gray-300 dark:border-slate-700 w-full sm:w-auto text-sm sm:text-base">
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden sm:block"
            >
                <ArrowDown className="animate-bounce" />
            </motion.div>
        </section>
    )
}

export default Hero
