import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, Zap, Smartphone, ExternalLink, Github, Code, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import planacleArchitecture from '../assets/planacle-architecture.png'

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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">AI Product</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Planacle</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                        A real-time social planning application that streamlines group coordination through dynamic scheduling, voting, and location-based discovery.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Users size={18} className="mr-2" /> Problem
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Group coordination is often fragmented across multiple chat apps, causing critical details like time, location, and votes to be lost in conversation history. This fragmentation leads to planning friction and participant drop-off.
                            </p>
                        </div>
                        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                            <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center">
                                <Zap size={18} className="mr-2" /> Solution
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                A real-time coordination system that centralizes the entire planning workflow. From venue discovery to optimistic voting, it ensures every participant has an instant, unified view of the event's current state.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 mb-16">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Smartphone className="mr-3 text-cyan-400" /> Architecture
                            </h2>

                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-12">
                                <img
                                    src={planacleArchitecture}
                                    alt="Planacle System Architecture"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                                <p className="text-center text-slate-500 text-sm mt-4 italic">
                                    Serverless Architecture: Real-time Firebase Backend with Google Gemini AI & Agentic Flows
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Real-time Coordination Engine</h4>
                                        <p className="text-slate-400 text-sm">Built on a serverless Firebase architecture using Firestore's push-based synchronization. State updates (votes, availability, venue likes) propagate to all participants in under 200ms, creating a live collaborative environment.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Agentic Planning (Genkit)</h4>
                                        <p className="text-slate-400 text-sm">Implemented advanced solo-planning modes using Google Genkit. This enables agentic flows that can autonomously query location APIs, resolve preference conflicts, and synthesize a cohesive itinerary based on natural language prompts.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Schulze Voting Algorithm</h4>
                                        <p className="text-slate-400 text-sm">Implemented the Schulze method (Condorcet voting) from scratch for group preference ranking. When participants vote across multiple venue candidates, the algorithm resolves pairwise preference cycles and surfaces the Condorcet winner — the option most participants genuinely prefer.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Event-Driven AI Triggers</h4>
                                        <p className="text-slate-400 text-sm">Utilized Firebase Cloud Functions (v2) to automate complex computations. When event status reaches "Finalizing", backend triggers autonomously aggregate all participant data and call Gemini 2.0 Flash to generate the final plan.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Secure-by-Default Architecture</h4>
                                        <p className="text-slate-400 text-sm">Governed by rigorous Firestore Security Rules and custom RBAC. Sensitive logic and API secrets (Gemini, Ticketmaster) are isolated within Cloud Functions, never exposing keys to the client SPA.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Gale-Shapley Stable Matching</h4>
                                        <p className="text-slate-400 text-sm">Built the Gale-Shapley stable matching algorithm from scratch for optimal participant-venue assignment. The algorithm guarantees a stable pairing where no participant-venue pair would mutually prefer each other over their current assignment, eliminating coordination regret.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="text-slate-500 mb-2">// Optimistic UI State Management</div>
                                    <code className="block">
                                        {`const submitVote = async (venueId) => {
  // 1. Instantly update local state
  optimisticUpdate(venueId);
  
  try {
    // 2. Push to Firestore in background
    await firestore.doc(\`events/\${id}\`).update({
      [\`votes.\${venueId}\`]: increment(1)
    });
  } catch (err) {
    // 3. Revert on failure
    revertLocalState();
  }`}
                                    </code>
                                </div>
                                <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                                    <h4 className="text-slate-200 font-medium mb-2">Data Flow: Collaborative to AI</h4>
                                    <p className="text-slate-400 text-sm italic">
                                        Participant Input → Aggregator Function → preferenceMatrix → Gemini 2.0 Flash → Final Itinerary JSON → Firestore Real-time Sync.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Code size={30} className="mr-3 text-cyan-400" /> Technology
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {["React 19", "Firebase (v2 functions)", "Google Gemini 2.0 Flash", "Google Genkit", "Google Maps/Places API", "Ticketmaster API", "TypeScript"].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 text-sm font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <CheckCircle size={30} className="mr-3 text-cyan-400" /> Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-8 rounded-xl">
                                <p className="text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-6">
                                    Planacle successfully resolved the fragmentation issues inherent in group planning by merging real-time coordination with agentic AI. The system delivered a production-grade experience for 100+ beta testers, demonstrating that automated preference resolution and semantic discovery can eliminate the friction of social coordination.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-800 flex justify-center gap-4">
                        <a href="https://github.com/TolulopeBabajide/planacle" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
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
