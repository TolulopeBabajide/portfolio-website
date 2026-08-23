import { GitBranch } from 'lucide-react'

const KeyDecisions = ({ decisions }) => (
    <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
            <GitBranch size={30} className="mr-3 text-cyan-400" /> Key Decisions
        </h2>
        <div className="space-y-6">
            {decisions.map((d, i) => (
                <div key={d.title} className="bg-white dark:bg-slate-900/50 p-8 rounded-xl border border-gray-200 dark:border-slate-800">
                    <h4 className="text-slate-800 dark:text-slate-200 font-medium mb-4">
                        <span className="text-cyan-500 dark:text-cyan-400 font-mono mr-3">{String(i + 1).padStart(2, '0')}</span>
                        {d.title}
                    </h4>
                    <div className="space-y-3 text-sm leading-relaxed">
                        <p className="text-slate-500 dark:text-slate-400">
                            <span className="text-slate-400 dark:text-slate-500 font-mono text-xs uppercase tracking-wider mr-2">Considered</span>
                            {d.considered}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300">
                            <span className="text-cyan-500 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mr-2">Chose</span>
                            {d.chose}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400">
                            <span className="text-slate-400 dark:text-slate-500 font-mono text-xs uppercase tracking-wider mr-2">Trade-off</span>
                            {d.tradeoff}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default KeyDecisions
