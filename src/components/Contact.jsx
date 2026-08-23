import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import { useRole } from '../context/RoleContext'

const Contact = () => {
    const { config } = useRole()
    return (
        <section id="contact" className="py-20 px-6 bg-gray-100/40 dark:bg-slate-900/60 border-t border-gray-200/60 dark:border-slate-800/60">
            <div className="max-w-8xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-10"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span aria-hidden="true" className="h-px w-8 bg-cyan-500/70" />
                        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-400">04 · Contact</span>
                        <span aria-hidden="true" className="h-px w-8 bg-cyan-500/70" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Have a complex product or customer problem?</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-4 text-lg">
                        {config.contactLine}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>London, UK</span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">Open to Skilled Worker sponsorship</p>

                    <div className="flex flex-col items-center gap-6 mb-10">
                        <motion.a
                            whileTap={{ scale: 0.9 }}
                            href="mailto:babajidetgideon@gmail.com"
                            className="flex items-center gap-3 px-5 py-3 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-gray-300 dark:border-slate-700"
                        >
                            <Mail size={20} />
                            <span className="text-sm font-mono">babajidetgideon@gmail.com</span>
                        </motion.a>

                        <div className="flex justify-center gap-4">
                            <motion.a whileTap={{ scale: 0.9 }} href="https://github.com/TolulopeBabajide" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-3 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-gray-300 dark:border-slate-700">
                                <Github size={24} />
                            </motion.a>
                            <motion.a whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/tolulopebabajide/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-3 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-gray-300 dark:border-slate-700">
                                <Linkedin size={24} />
                            </motion.a>
                        </div>
                    </div>

                </motion.div>

                <footer className="mt-20 text-slate-500 dark:text-slate-500 text-sm space-y-1">
                    <p>Built with intention. Designed for reliability.</p>
                    <p>© {new Date().getFullYear()} Tolulope Babajide</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
