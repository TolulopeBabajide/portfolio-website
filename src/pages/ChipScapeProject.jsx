import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import chipscapePreview from '../assets/chipscape-preview.jpg'
import { useRoleHref } from '../context/RoleContext'

const responsibilities = [
    {
        title: 'End-to-end software delivery',
        description: 'Lead the ongoing development of ChipScape, translating requirements into designs and implementation, testing changes, supporting deployment work, and continuing to improve the product.',
    },
    {
        title: 'Data ingestion and quality',
        description: 'Develop source ingestion, organisation record matching, and validation workflows to make data processing more reliable and improve consistency across records.',
    },
    {
        title: 'Provenance and review',
        description: 'Build source provenance and review workflows so records can be traced to their origins and contributions can be assessed before they are accepted.',
    },
    {
        title: 'Delivery coordination',
        description: 'Identify needs, track issues and dependencies, document decisions, and communicate progress to keep development connected to operational priorities.',
    },
]

const ChipScapeProject = () => {
    const roleHref = useRoleHref()

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-24 pb-20 px-4 sm:px-6">
            <SEO
                title="ChipScape — UKSC Systems & Data Development | Tolulope Babajide"
                description="Ongoing ChipScape development at the UK Semiconductor Centre, spanning end-to-end software delivery, data ingestion, matching, validation, provenance, and review workflows."
                url="/projects/chipscape"
            />
            <article className="max-w-5xl mx-auto">
                <Link to={roleHref('/#projects')} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-10">
                    <ArrowLeft size={16} /> Back to selected work
                </Link>

                <header className="mb-12">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400 mb-4">Professional work · UK Semiconductor Centre</p>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">ChipScape</h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        Ongoing product development bringing software delivery, data quality, and automation together at the UK Semiconductor Centre (UKSC).
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {['Systems & Data Developer', 'Ongoing development', 'Organisation data'].map(label => (
                            <span key={label} className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-xs font-mono text-cyan-700 dark:text-cyan-400">{label}</span>
                        ))}
                    </div>
                    <a href="https://chipscape.uk" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700">
                        Visit ChipScape <ExternalLink size={16} />
                    </a>
                </header>

                <figure className="mb-12 overflow-hidden rounded-xl border border-gray-200 dark:border-slate-800">
                    <img src={chipscapePreview} alt="ChipScape homepage with UK semiconductor registry search and sourced organisation records" width="1280" height="720" className="w-full h-auto" />
                    <figcaption className="bg-white dark:bg-slate-900/50 px-5 py-3 text-sm text-slate-600 dark:text-slate-400">ChipScape · UK semiconductor registry</figcaption>
                </figure>

                <section className="mb-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold mb-4">The challenge</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Organisation data changes over time and arrives from different sources. Keeping it useful requires consistent ingestion, careful record matching, validation, and a clear account of where information came from. ChipScape development brings these concerns into the product alongside contribution and review workflows.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">My contribution</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {responsibilities.map(item => (
                            <div key={item.title} className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6">
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Development focus</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                        My responsibility spans the development lifecycle: understanding what is needed, building and testing changes, supporting deployment work, and using feedback to guide the next iteration. Reliable data processing, traceable sources, and clear review steps remain central to that ongoing work.
                    </p>
                </section>
            </article>
        </div>
    )
}

export default ChipScapeProject
