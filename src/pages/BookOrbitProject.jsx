import { motion } from 'framer-motion'
import { ArrowLeft, Database, Cloud, CreditCard, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import KeyDecisions from '../components/KeyDecisions'
import BeforeAfter from '../components/BeforeAfter'
import { useRole, useRoleHref } from '../context/RoleContext'

const variants = {
    default: {
        scene: "Two readers tap 'borrow' on the last copy at the same instant. Without transactional guarantees, both succeed — and the inventory is now a lie that surfaces weeks later as a billing dispute. BookOrbit was built so that moment cannot happen.",
        before: 'Concurrent claims on the same item quietly produce over-borrowing and billing inconsistencies.',
        after: 'Row-level locks and ACID transactions make every inventory count and every payment exact.',
        lede: 'A comprehensive Library Management System and Marketplace built for reliability, scalability, and secure transactions.',
        problem: 'Marketplace and library systems face high data integrity risks during concurrent operations, such as multiple users attempting to claim the same inventory item. Without strict transactional guarantees, this leads to over-borrowing and financial inconsistencies.',
        solution: 'A comprehensive transactional system built around ACID guarantees. It ensures 100% inventory accuracy through row-level locking while providing a scalable marketplace experience with secure payment handling.',
        outcome: 'BookOrbit successfully demonstrated the capacity to handle heavy transactional loads while maintaining absolute data integrity. The integration of cloud-native storage and secure financial gateways created a production-ready solution for digital marketplaces.',
    },
    engineering: {
        scene: "Concurrency bugs in inventory systems don't crash — they corrupt. Two simultaneous borrows of the last copy, a payment that lands after a rollback: BookOrbit's architecture starts from the race conditions and works outward.",
        before: 'Race conditions in the borrow path corrupt inventory state without ever throwing an error.',
        after: 'Every inventory mutation runs inside an explicit transaction with a row-level lock — correct under contention, not just on the happy path.',
        lede: 'A comprehensive Library Management System and Marketplace built for reliability, scalability, and secure transactions.',
        problem: 'Marketplace and library systems face high data integrity risks during concurrent operations, such as multiple users attempting to claim the same inventory item. Without strict transactional guarantees, this leads to over-borrowing and financial inconsistencies.',
        solution: 'A comprehensive transactional system built around ACID guarantees. It ensures 100% inventory accuracy through row-level locking while providing a scalable marketplace experience with secure payment handling.',
        outcome: 'BookOrbit successfully demonstrated the capacity to handle heavy transactional loads while maintaining absolute data integrity. The integration of cloud-native storage and secure financial gateways created a production-ready solution for digital marketplaces.',
    },
    security: {
        scene: "The worst failures in payment-adjacent systems aren't breaches — they're silent inconsistencies that surface as a customer's wrong bill. BookOrbit treats every path that touches inventory, payments, or files as a boundary to harden.",
        before: 'Race conditions and implicit trust between layers, patched in production after a reconciliation dispute.',
        after: 'ACID guarantees and explicit auth checks at every external boundary — the chargeback investigation never happens.',
        lede: 'Full-stack inventory and payments, designed around ACID guarantees, row-level locking, and backend hardening at every external boundary.',
        problem: 'Systems that touch inventory, payments, and user data at the same time sit in a category where partial failures and race conditions turn into customer-visible bills and missing stock. Most marketplaces patch this in production. A security review wants it designed in.',
        solution: 'ACID transactions wrapping every inventory and payment path, row-level locking against concurrent claims, explicit auth checks at each service boundary (Stripe webhooks, S3 uploads, MySQL writes), and a backend-hardened API surface rather than implicit trust between layers.',
        outcome: 'Transactional integrity held across cloud storage, payment processing, and inventory. This is the unglamorous infrastructure work that keeps reconciliation discussions and chargeback investigations from happening in the first place.',
    },
}

const decisions = [
    {
        title: 'Pessimistic locking over optimistic retries',
        considered: 'Optimistic concurrency — detect the conflict after the fact and retry the transaction.',
        chose: 'Explicit transactions with row-level locks on critical inventory tables. A borrow or purchase must be right the first time, not eventually.',
        tradeoff: 'Lower throughput under heavy contention. The win: 100% inventory accuracy with no reconciliation debt.',
    },
    {
        title: 'Streaming uploads instead of buffering',
        considered: 'Buffering multipart uploads in application memory before pushing to storage — the default in most tutorials.',
        chose: 'Stream-based middleware that pipes file uploads to AWS S3 without holding them in memory.',
        tradeoff: 'Trickier middleware and error handling. The win: a flat memory profile on the app server no matter how large the file.',
    },
    {
        title: 'Hardening the backend, not trusting the layers',
        considered: 'Implicit trust between application layers — the pattern most marketplaces run with until it bites.',
        chose: 'Explicit auth checks at every external boundary: Stripe webhooks, S3 uploads, MySQL writes.',
        tradeoff: 'More verification code at every seam. The win: no single compromised layer can reach the data behind it.',
    },
]

const BookOrbitProject = () => {
    const { role } = useRole()
    const roleHref = useRoleHref()
    const v = variants[role] || variants.default
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/30">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link to={roleHref("/")} className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
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
                    <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mb-6 border-l-4 border-cyan-500 pl-6 italic">
                        {v.scene}
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-10">
                        {v.lede}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <ShieldCheck size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {v.problem}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <CreditCard size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {v.solution}
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

                        <KeyDecisions decisions={decisions} />

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
                            <BeforeAfter before={v.before} after={v.after} />
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    {v.outcome}
                                </p>
                            </div>
                        </section>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default BookOrbitProject
