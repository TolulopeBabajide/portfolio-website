import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex justify-center gap-6 mb-10">
                        <a href="mailto:babajidetoluwalope@gmail.com" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700">
                            <Mail size={24} />
                        </a>
                        <a href="https://github.com/TolulopeBabajide" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/tolulopebabajide/" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700">
                            <Linkedin size={24} />
                        </a>
                    </div>

                    <a href="mailto:babajidetoluwalope@gmail.com" className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold transition-all hover:scale-105">
                        Say Hello
                    </a>
                </motion.div>

                <footer className="mt-20 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Tolulope Babajide. All rights reserved.</p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
