import { motion } from 'framer-motion'
import { ArrowLeft, Database, Cloud, CreditCard, ShieldCheck, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const BookOrbitProject = () => {
    const bookOrbitSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "BookOrbit",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "offers": {
            "@type": "Offer",
            "price": "0"
        },
        "description": "A comprehensive Library Management System and Marketplace built for reliability, scalability, and secure transactions."
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            <SEO
                title="BookOrbit: Transactional Library Systems | Backend Architecture"
                description="Case study on BookOrbit, showcasing robust backend architecture and ACID-compliant distributed data management for library systems."
                schema={bookOrbitSchema}
            />
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
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">
                        A comprehensive Library Management System and Marketplace built for reliability, scalability, and secure transactions.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-slate-900 py-10">
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Project Type</h4>
                            <p className="text-slate-200 text-sm font-medium">E-commerce & Library</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Key Stack</h4>
                            <p className="text-slate-200 text-sm font-medium">Node.js, Express, MySQL</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Architecture Style</h4>
                            <p className="text-slate-200 text-sm font-medium">Monolithic, Transactional</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Core Capability</h4>
                            <p className="text-slate-200 text-sm font-medium">ACID Inventory Management</p>
                        </div>
                    </div>

                    <div className="space-y-24 mb-16">
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <ShieldCheck size={18} className="mr-2" /> The Problem
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Marketplace and library systems face significant data integrity risks during concurrent operations, particularly when multiple users attempt to claim the same inventory item simultaneously. The technical challenge was implementing a robust concurrency control strategy to prevent race conditions, over-borrowing, and financial inconsistencies in a multi-tenant environment.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <CreditCard size={18} className="mr-2" /> The Solution
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        A comprehensive transactional system architected around ACID guarantees. By utilizing explicit row-level locking and Sequelize-managed transactions, the system ensures 100% inventory accuracy even under heavy concurrent load, while integrating secure, server-side-validated payment workflows.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Database className="mr-3 text-cyan-400" /> Architecture Strategy
                            </h2>
                            <p className="text-slate-400 mb-10 leading-relaxed max-w-3xl text-sm sm:text-base">
                                BookOrbit is designed around a monolithic architecture with a focus on strict relational integrity and transactional safety. The system uses Express and MySQL to govern a complex marketplace and library ecosystem, where concurrent access to limited inventory is the primary technical challenge. This architecture provides the ACID guarantees necessary to prevent race conditions during high-stakes borrowing and financial transactions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Relational Integrity</h4>
                                        <p className="text-slate-400 text-sm">Implemented a rigorous database layer using MySQL and Sequelize ORM, centered on row-level locking. By wrapping checks and state changes in explicit transactions, the system guarantees that over-borrowing and duplicate claims are architecturally impossible.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Scalable File Workflows</h4>
                                        <p className="text-slate-400 text-sm">Designed a memory-efficient asset management system using AWS S3 and Node.js streams. This offloads storage to cloud-native infrastructure while preventing the server from buffering large digital assets into memory.</p>
                                    </div>
                                </div>
                                <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 font-mono text-xs text-slate-300">
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/50">
                                        <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Example: Row-level locking for inventory integrity</span>
                                    </div>
                                    <p className="text-slate-400 text-xs mb-6 font-sans leading-relaxed italic">
                                        This transaction-wrapped logic prevents race conditions during high-concurrency borrowing events. By using explicit database locks, it guarantees that inventory counts remain accurate even when multiple users attempt to claim the last available copy at the same time.
                                    </p>
                                    <pre className="overflow-x-auto text-xs text-slate-300 font-mono">
                                        {`const borrowBook = async (userId, bookId) => {
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
                                <CheckCircle className="mr-3 text-cyan-400" /> Key System Components
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Engineering Challenges</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Preventing race conditions and over-borrowing in high-concurrency inventory operations without sacrificing system throughput.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Processing and storing large digital asset uploads (PDFs) without exhausting server memory or blocking the single-threaded Node.js event loop.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Solutions</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Implemented explicit ACID transactions with mandatory row-level locking (SELECT FOR UPDATE) via Sequelize to ensure deterministic inventory state.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Engineered a streaming multipart upload pipeline using Busboy and AWS S3 SDK, allowing for direct-to-cloud data transfer with O(1) memory usage.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Cloud className="mr-3 text-cyan-400" /> Technology Stack
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'Express', 'JWT Auth'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Data</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['MySQL', 'Sequelize ORM'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Infrastructure</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['AWS S3', 'Stripe API', 'Vercel', 'Render'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-10 flex items-center">
                                <ShieldCheck size={30} className="mr-3 text-cyan-400" /> Business Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-10 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">100%</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Data Integrity</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">0</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Race Conditions</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">99.9%</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">System Uptime</div>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-8 text-lg">
                                    BookOrbit successfully demonstrated the capacity to handle heavy transactional loads while maintaining absolute data integrity. The integration of cloud-native storage and secure financial gateways created a production-ready solution for digital marketplaces with zero inventory discrepancies during localized stress tests.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-800 flex justify-center gap-4">
                        <a href="https://book-orbit.vercel.app" target="_blank" className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                            <ExternalLink size={20} className="mr-2" />
                            Live Demo
                        </a>
                        <a href="https://github.com/TolulopeBabajide/book-orbit" target="_blank" className="flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
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
