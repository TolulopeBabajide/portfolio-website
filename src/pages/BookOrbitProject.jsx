import { motion } from 'framer-motion'
import { ArrowLeft, Database, Cloud, CreditCard, ShieldCheck, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const BookOrbitProject = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/30">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Full Stack Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">BookOrbit</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
                        A comprehensive Library Management System and Marketplace built for reliability, scalability, and secure transactions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <ShieldCheck size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Marketplace and library systems face high data integrity risks during concurrent operations, such as multiple users attempting to claim the same inventory item. Without strict transactional guarantees, this leads to over-borrowing and financial inconsistencies.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <CreditCard size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                A comprehensive transactional system built around ACID guarantees. It ensures 100% inventory accuracy through row-level locking while providing a scalable marketplace experience with secure payment handling.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 mb-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Database className="mr-3 text-cyan-400" /> Architecture
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Relational Integrity</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Utilized a MySQL database with Sequelize ORM. Implemented explicit transactions with row-level locks on critical inventory tables to prevent race conditions during concurrent user actions.</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-slate-900/30 p-6 rounded-xl border border-gray-200 dark:border-slate-800/50">
                                        <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-2">Scalable File Workflows</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Automated digital asset management using AWS S3. Engineered middleware to handle multipart file uploads via streams, significantly reducing memory overhead on the application server.</p>
                                    </div>
                                </div>
                                <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 dark:border-slate-800">
                                    <h3 className="text-xs font-mono text-slate-500 mb-4 uppercase">Infrastructure: Inventory Transaction</h3>
                                    <pre className="overflow-x-auto text-xs text-slate-300 font-mono">
                                        {`// Secure borrowing logic with transaction
const borrowBook = async (userId, bookId) => {
  const t = await sequelize.transaction();
  try {
    const book = await Book.findByPk(bookId, 
      { lock: true, transaction: t });
    if (book.copies < 1) throw new Error('Out of stock');
    
    await book.decrement('copies', { transaction: t });
    await Loan.create({ userId, bookId }, 
      { transaction: t });
    await t.commit();
  } catch (error) {
    await t.rollback();
    throw error;
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Cloud className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["Node.js", "Express", "MySQL", "AWS S3", "Stripe API", "Sequelize ORM", "Sequelize"].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <ShieldCheck size={30} className="mr-3 text-cyan-400" /> Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    "BookOrbit successfully demonstrated the capacity to handle heavy transactional loads while maintaining absolute data integrity. The integration of cloud-native storage and secure financial gateways created a production-ready solution for digital marketplaces."
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 flex justify-center gap-4">
                        <a href="https://book-orbit.vercel.app" target="_blank" className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                            <ExternalLink size={20} className="mr-2" />
                            Live Demo
                        </a>
                        <a href="https://github.com/TolulopeBabajide/book-orbit" target="_blank" className="flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium transition-colors border border-gray-300 dark:border-slate-700">
                            <Github size={20} className="mr-2" />
                            Source Code
                        </a>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default BookOrbitProject
