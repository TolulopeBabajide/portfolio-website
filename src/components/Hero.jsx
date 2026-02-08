import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20">
                        Available for new opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Tolulope Babajide</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
                        Full Stack Developer & Cybersecurity Enthusiast
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build robust, secure, and user-centric applications. My expertise bridges the gap between modern web development and secure infrastructure, ensuring everything I create is both beautiful and bulletproof.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors border border-slate-700">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <ArrowDown className="animate-bounce" />
            </motion.div>
        </section>
    )
}

export default Hero
