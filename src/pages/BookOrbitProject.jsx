import { motion } from 'framer-motion'
import { ArrowLeft, Database, Cloud, CreditCard, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const BookOrbitProject = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Full Stack Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">BookOrbit</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                        A comprehensive Library Management System and Marketplace built for reliability, scalability, and secure transactions.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-16">
                        {["Node.js", "Express", "MySQL", "AWS S3", "Stripe", "Sequelize ORM"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-slate-300 text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold mb-8 text-slate-100">System Architecture</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center mb-4 text-cyan-400">
                                <Database className="mr-3" size={24} />
                                <h3 className="text-lg font-bold text-slate-100">Data Integrity</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Utilized <strong>ACID-compliant transactions</strong> in MySQL to ensure consistency during critical operations like book borrowing and inventory updates.
                                Strict data modeling with <strong>Sequelize</strong> to enforce foreign key constraints and validations.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center mb-4 text-cyan-400">
                                <Cloud className="mr-3" size={24} />
                                <h3 className="text-lg font-bold text-slate-100">Cloud Storage</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Integrated <strong>AWS S3</strong> for scalable storage of book covers and digital assets. Implemented middleware to handle multipart file uploads via streams, minimizing memory usage on the verified server.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center mb-4 text-cyan-400">
                                <CreditCard className="mr-3" size={24} />
                                <h3 className="text-lg font-bold text-slate-100">Payments</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Secure integration with <strong>Stripe API</strong> to handle fine payments and book purchases. Webhook implementation to listen for payment success events and trigger automated inventory releases.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <div className="flex items-center mb-4 text-cyan-400">
                                <ShieldCheck className="mr-3" size={24} />
                                <h3 className="text-lg font-bold text-slate-100">Security Layers</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Applied <code>helmet</code> for HTTP header hardening, <code>express-rate-limit</code> to prevent brute-force attacks, and rigorous input validation/sanitization using <code>express-validator</code>.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                        <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase">Code Snippet: Inventory Transaction</h3>
                        <pre className="overflow-x-auto text-xs text-slate-300 font-mono">
                            {`// Secure borrowing logic with transaction
const borrowBook = async (userId, bookId) => {
  const t = await sequelize.transaction();
  
  try {
    const book = await Book.findByPk(bookId, { lock: true, transaction: t });
    if (book.copies < 1) throw new Error('Out of stock');
    
    await book.decrement('copies', { transaction: t });
    await Loan.create({ userId, bookId }, { transaction: t });
    
    await t.commit();
  } catch (error) {
    await t.rollback();
    throw error;
  }
}`}
                        </pre>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default BookOrbitProject
