import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import About from './About'

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
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center z-10 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=""
                >
                    <motion.span variants={itemVariants} className="inline-block max-w-fit py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20">
                        Open to Solutions Engineering and AI Product Design roles
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="bg-cyan-400 bg-clip-text text-transparent">Tolulope Babajide</span>
                    </motion.h1>
                    <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
                        AI Solutions Engineer building high-fidelity systems and production-ready AI products
                    </motion.h2>

                </motion.div>
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="my-6"
                    >
                        <About />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex justify-center gap-4"
                    >
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                            Featured Projects
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" target="_blank" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors border border-slate-700">
                            Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <ArrowDown className="animate-bounce" />
            </motion.div>
        </section>
    )
}

export default Hero
