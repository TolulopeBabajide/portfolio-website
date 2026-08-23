const BeforeAfter = ({ before, after }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-gray-200 dark:border-slate-800">
            <h4 className="text-slate-400 dark:text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">Before</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{before}</p>
        </div>
        <div className="bg-cyan-500/5 p-6 rounded-xl border border-cyan-500/20">
            <h4 className="text-cyan-500 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">After</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{after}</p>
        </div>
    </div>
)

export default BeforeAfter
