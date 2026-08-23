import { motion } from 'framer-motion'

// Shared section header: mono kicker with accent rule, display title, optional sub line.
const SectionHeading = ({ kicker, title, sub, center = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`mb-10 sm:mb-16 ${center ? 'text-center' : ''}`}
    >
        <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
            <span aria-hidden="true" className="h-px w-8 bg-cyan-500/70" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-400">
                {kicker}
            </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
        {sub && (
            <p className={`text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl ${center ? 'mx-auto' : ''}`}>
                {sub}
            </p>
        )}
    </motion.div>
)

export default SectionHeading
