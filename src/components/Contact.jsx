import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-8xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="p-10"
                >
                    <h2 className="text-3xl font-bold mb-6">Hiring or looking to collaborate?</h2>
                    <p className="text-slate-400 mb-4 text-lg">
                        I&apos;m currently open to AI, solutions engineering, and technical product-facing opportunities.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
                        <MapPin size={16} className="text-cyan-400" />
                        <span>London, UK</span>
                    </div>

                    <p className="text-slate-500 text-sm mb-8">Open to Skilled Worker sponsorship</p>

                    <div className="flex flex-col items-center gap-6 mb-10">
                        <motion.a
                            whileTap={{ scale: 0.9 }}
                            href="mailto:babajidetoluwalope@gmail.com"
                            className="flex items-center gap-3 px-5 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700"
                        >
                            <Mail size={20} />
                            <span className="text-sm font-mono">babajidetoluwalope@gmail.com</span>
                        </motion.a>

                        <div className="flex justify-center gap-4">
                            <motion.a whileTap={{ scale: 0.9 }} href="https://github.com/TolulopeBabajide" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700">
                                <Github size={24} />
                            </motion.a>
                            <motion.a whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/tolulopebabajide/" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700">
                                <Linkedin size={24} />
                            </motion.a>
                        </div>
                    </div>

                </motion.div>

                <footer className="mt-20 text-slate-500 text-sm">
                    <p>Built with intention. Designed for reliability.</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
