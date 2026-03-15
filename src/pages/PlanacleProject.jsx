import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, Zap, Smartphone, ExternalLink, Github, Code, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import planacleArchitecture from '../assets/planacle-architecture.png'
import SEO from '../components/SEO'

const PlanacleProject = () => {
    const planacleSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Planacle",
        "operatingSystem": "Web",
        "applicationCategory": "SocialNetworkingApplication",
        "offers": {
            "@type": "Offer",
            "price": "0"
        },
        "description": "A real-time social planning application that streamlines group coordination through dynamic scheduling, voting, and location-based discovery."
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            <SEO
                title="Planacle: AI-Powered Social Coordination | AI Application Development"
                description="Deep dive into Planacle, an AI application for social planning. Built with a focus on distributed systems and real-time AI processing."
                schema={planacleSchema}
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
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Social Application</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">Planacle</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-12">
                        A real-time social planning application that streamlines group coordination through dynamic scheduling, voting, and location-based discovery.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-slate-900 py-10">
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Project Type</h4>
                            <p className="text-slate-200 text-sm font-medium">Social AI</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Key Stack</h4>
                            <p className="text-slate-200 text-sm font-medium">Firebase, React, Genkit</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Architecture Style</h4>
                            <p className="text-slate-200 text-sm font-medium">Serverless, Event-Driven</p>
                        </div>
                        <div>
                            <h4 className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Core Capability</h4>
                            <p className="text-slate-200 text-sm font-medium">Real-time Group Coordination</p>
                        </div>
                    </div>

                    <div className="space-y-24 mb-16">
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <Users size={18} className="mr-2" /> The Problem
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Group coordination is often fragmented across multiple asynchronous chat apps, making it difficult to maintain a reliable "source of truth" for time, location, and consensus. The technical challenge was architecting a real-time state synchronization system that resolves preference conflicts and prevents participant drop-off caused by planning friction.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center">
                                        <Zap size={18} className="mr-2" /> The Solution
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        A real-time coordination engine built on an event-driven serverless architecture. The system utilizes Google Genkit for agentic preference resolution and semantic discovery, enabling automated itinerary synthesis while ensuring sub-200ms state propagation across all participants via Firestore synchronization.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Smartphone className="mr-3 text-cyan-400" /> Architecture Strategy
                            </h2>
                            <p className="text-slate-400 mb-10 leading-relaxed max-w-3xl text-sm sm:text-base">
                                Planacle leverages a serverless, event-driven architecture built on Firebase to achieve real-time synchronization across collaborative group sessions. By utilizing Firestore’s push-synchronization and Firebase Cloud Functions, the system eliminates traditional polling overhead and enables low-latency propagation of social state. This architecture ensures optimistic UI consistency for high-concurrency voting and planning flows.
                            </p>

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
                                        <p className="text-slate-400 text-sm">Built on a push-based synchronization layer using Firestore listeners to propagate updates in under 200ms. This ensures participants maintain a consistent view of the planning state without managing custom WebSocket infrastructure.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Agentic Planning (Genkit)</h4>
                                        <p className="text-slate-400 text-sm">Integrated Google Genkit to orchestrate multi-step agentic flows for preference resolution. By treating planning as autonomous tool calls, the system transforms unstructured intent into validated itineraries.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Event-Driven AI Triggers</h4>
                                        <p className="text-slate-400 text-sm">Utilized Cloud Functions (v2) to implement a reactive processing layer. Upon state transitions, triggers aggregate participant metadata and execute Gemini-native reasoning to synthesize the final plan.</p>
                                    </div>
                                    <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50">
                                        <h4 className="text-slate-200 font-medium mb-2">Secure-by-Default Architecture</h4>
                                        <p className="text-slate-400 text-sm">Enforced a multi-layered security model using Firestore Security Rules and server-side secret management. Sensitive keys (Gemini, Ticketmaster) are isolated within ephemeral execution environments, minimizing attack surface.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/50">
                                        <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Example: Optimistic UI state synchronization</span>
                                    </div>
                                    <p className="text-slate-400 text-xs mb-6 font-sans leading-relaxed italic">
                                        This pattern solves the problem of perceived latency in real-time collaborative environments. By instantly updating local state and handling background synchronization with Firestore, it provides a seamless user experience even on slower networks.
                                    </p>
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
                                <Code className="mr-3 text-cyan-400" /> Key System Components
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Engineering Challenges</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Managing high-frequency state updates and potential race conditions in a collaborative, real-time group environment.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Orchestrating agentic AI flows to resolve conflicting participant preferences into a cohesive, validated itinerary.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                                    <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono">Solutions</h4>
                                    <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Leveraged Firestore's push-based synchronization and optimistic UI updates to ensure seamless state propagation across concurrent sessions.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-cyan-500 mr-2">•</span>
                                            Utilized Google Genkit to engineer multi-layered agentic chains that semantically analyze preferences and iteratively resolve conflicts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center">
                                <Code size={30} className="mr-3 text-cyan-400" /> Technology Stack
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Firebase Functions', 'Node.js', 'Express'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Vite', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">AI / ML</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Google Genkit', 'Gemini 2.0 Flash'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Data</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Firestore'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Infrastructure</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Firebase Auth', 'Cloud Functions', 'Ticketmaster API', 'Google Maps API'].map((tech) => (
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
                                <CheckCircle size={30} className="mr-3 text-cyan-400" /> Business Outcome
                            </h2>
                            <div className="bg-cyan-500/5 border border-cyan-500/20 p-10 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">&lt;200ms</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">State Sync</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">Serverless</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">Architecture</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-cyan-400">MVP</div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold">In Validation</div>
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed italic border-l-4 border-cyan-500 pl-8 text-lg">
                                    Planacle demonstrates that real-time coordination and agentic AI can meaningfully reduce the friction of group planning. The system is architected for production — serverless, secure-by-default, and optimised for sub-200ms state updates. Currently an MVP undergoing validation before broader rollout.
                                </p>
                            </div>
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
