import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useRole } from '../context/RoleContext'

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
    const { config } = useRole()
    return (
        <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 pt-16 sm:pt-14 relative overflow-hidden">
            {/* Background depth: faint grid + cyan glow */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
                <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] sm:w-[36rem] sm:h-[36rem] rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto text-center z-10 relative w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-[11px] sm:text-sm font-mono uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-400 mb-5 sm:mb-6">
                        Tolulope Babajide
                    </motion.p>
                    <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.12] max-w-4xl mx-auto">
                        <span className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white bg-clip-text text-transparent">
                            {config.heroHeadline}
                        </span>
                    </motion.h1>
                    {config.heroSubCopy.map((para, i) => (
                        <motion.p
                            key={i}
                            variants={itemVariants}
                            className={`text-sm sm:text-base text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed ${
                                i === config.heroSubCopy.length - 1
                                    ? 'mb-6 sm:mb-10'
                                    : 'mb-2 sm:mb-4'
                            }`}
                        >
                            {para}
                        </motion.p>
                    ))}

                </motion.div>
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                    >
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="px-6 sm:px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-cyan-600/20">
                            Featured Projects
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={config.resumeUrl} target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-colors border border-gray-300 dark:border-slate-700 w-full sm:w-auto text-sm sm:text-base">
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
