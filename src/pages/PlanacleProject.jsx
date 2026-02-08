import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, Zap, Smartphone, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const PlanacleProject = () => {
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Social Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Planacle</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                        A real-time social planning application that streamlines group coordination through dynamic scheduling, voting, and location-based discovery.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { label: "Frontend", value: "React" },
                            { label: "Backend", value: "Firebase" },
                            { label: "Maps", value: "Google Maps API" },
                            { label: "Styling", value: "Tailwind CSS" }
                        ].map((item) => (
                            <div key={item.label} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-center">
                                <div className="text-slate-500 text-xs uppercase font-bold mb-1">{item.label}</div>
                                <div className="text-slate-200 font-semibold">{item.value}</div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold mb-8 text-slate-100">Core Features & Architecture</h2>

                    <div className="space-y-12">
                        <section className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <div className="flex items-center mb-4 text-cyan-400">
                                    <Zap className="mr-2" size={24} />
                                    <h3 className="text-xl font-bold text-slate-200">Real-Time Coordination</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    Leveraged <strong>Firestore's real-time listeners</strong> to create an instant-sync experience.
                                    When one user votes on a time or location, the change propagates immediately to all group members without a page refresh.
                                    Implemented <strong>Optimistic UI</strong> updates to ensure the interface feels snappy even on slower networks.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 bg-slate-900 rounded-lg p-4 border border-slate-800">
                                <div className="text-xs font-mono text-slate-500 mb-2">// Optimistic Update Pattern</div>
                                <code className="text-xs text-green-400 font-mono block">
                                    {`const vote = (id) => {
  // Update local state immediately
  setVotes(prev => ({...prev, [id]: true}));
  
  // Sync to backend
  api.submitVote(id).catch(revert);
}`}
                                </code>
                            </div>
                        </section>

                        <section className="flex flex-col md:flex-row-reverse gap-8 items-start">
                            <div className="flex-1">
                                <div className="flex items-center mb-4 text-cyan-400">
                                    <MapPin className="mr-2" size={24} />
                                    <h3 className="text-xl font-bold text-slate-200">Geolocation & Discovery</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    Integrated the <strong>Google Maps Javascript API</strong> to provide interactive venue searching.
                                    Built custom markers and info windows to display rich place data (ratings, photos, open status).
                                    Implemented "Search in this area" functionality that queries the Places API based on the visible map bounds.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 h-40 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                <span className="text-slate-500">Map Interface Placeholder</span>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center mb-4 text-cyan-400">
                                <Smartphone className="mr-2" size={24} />
                                <h3 className="text-xl font-bold text-slate-200">Mobile-First Experience</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Designed from the ground up for mobile devices using <strong>Tailwind's</strong> responsive utility classes.
                                Key interactions (swiping, tapping) were prioritized over hover states.
                                Implemented a bottom-sheet navigation pattern for easy thumb-reachability on smartphones.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-800 flex justify-center gap-4">
                        <a href="#" className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                            <ExternalLink size={20} className="mr-2" />
                            Live Demo
                        </a>
                        <a href="#" className="flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
                            <Github size={20} className="mr-2" />
                            Source Code
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PlanacleProject
