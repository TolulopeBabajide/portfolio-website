import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6" aria-labelledby="contact-heading">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-700 shadow-2xl"
                >
                    <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold mb-4">Interested in hiring or collaborating?</h2>
                    <p className="text-slate-400 mb-3 text-base sm:text-lg">
                        I’m currently open to AI, solutions engineering, and technical product-facing opportunities.
                    </p>
                    <p className="text-slate-500 mb-8 text-sm">
                        Best contact:{' '}
                        <a className="underline decoration-slate-600 hover:decoration-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded" href="mailto:babajidetoluwalope@gmail.com">
                            babajidetoluwalope@gmail.com
                        </a>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                        <a href="mailto:babajidetoluwalope@gmail.com" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Email Tolulope Babajide">
                            <Mail size={24} />
                        </a>
                        <a href="https://github.com/TolulopeBabajide" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Tolulope Babajide GitHub profile (opens in a new tab)" target="_blank" rel="noopener noreferrer">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/tolulopebabajide/" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Tolulope Babajide LinkedIn profile (opens in a new tab)" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        <a href="mailto:babajidetoluwalope@gmail.com" className="w-full sm:w-auto inline-block px-7 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                            Email Me About Roles
                        </a>
                        <a href="https://www.linkedin.com/in/tolulopebabajide/" className="w-full sm:w-auto inline-block px-7 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg font-bold transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" target="_blank" rel="noopener noreferrer">
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>

                <footer className="mt-20 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Tolulope Babajide. All rights reserved.</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
