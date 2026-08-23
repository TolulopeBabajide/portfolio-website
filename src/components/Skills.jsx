import { motion } from 'framer-motion'
import {
    Server,
    Layout,
    ShieldCheck
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRole } from '../context/RoleContext'
import SectionHeading from './SectionHeading'

const skillCategories = [
    {
        title: "Product & Systems Engineering",
        icon: Server,
        skills: ["FastAPI", "React & TypeScript", "PostgreSQL", "API Design", "AI Integration", "Evaluation & Testing"]
    },
    {
        title: "Solution Architecture & Delivery",
        icon: Layout,
        skills: ["Technical Discovery", "System Architecture", "API Design", "Product Demonstrations", "Stakeholder Communication", "Offline-First Design"]
    },
    {
        title: "Secure & Reliable Systems",
        icon: ShieldCheck,
        skills: ["Authentication & RBAC", "Ownership Controls", "AI Safety Boundaries", "Threat Modelling", "Automated QA", "CI/CD & Auditability"]
    }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35 }
    }
}

const Skills = () => {
    const { config } = useRole();
    const carouselRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const orderedCategories = useMemo(() => {
        const order = config.skillsOrder;
        const rank = new Map(order.map((title, i) => [title, i]));
        return [...skillCategories].sort((a, b) => {
            const ai = rank.has(a.title) ? rank.get(a.title) : Number.POSITIVE_INFINITY;
            const bi = rank.has(b.title) ? rank.get(b.title) : Number.POSITIVE_INFINITY;
            return ai - bi;
        });
    }, [config.skillsOrder]);

    useEffect(() => {
        const root = carouselRef.current;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                        const idx = Number(entry.target.dataset.index);
                        if (!Number.isNaN(idx)) setActiveIndex(idx);
                    }
                });
            },
            { root, threshold: [0.6] }
        );

        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollToIndex = (idx) => {
        const el = cardRefs.current[idx];
        if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    };

    return (
        <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-100/40 dark:bg-slate-900/60 border-y border-gray-200/60 dark:border-slate-800/60">
            <div className="max-w-6xl mx-auto w-full">
                <SectionHeading
                    kicker="02 · Capabilities"
                    title="How I create value"
                    sub="Three connected capabilities, demonstrated through the products and engagements above."
                />

                {/* Technical Skills: carousel on mobile, grid on md+ */}
                <motion.div
                    ref={carouselRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex md:block md:columns-2 lg:columns-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {orderedCategories.map((category, index) => {
                        // Top 3 categories for the active role (orderedCategories is
                        // already sorted by config.skillsOrder) get an accent border.
                        const isPriority = index < 3;
                        return (
                        <motion.div
                            key={category.title}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            variants={itemVariants}
                            className={`w-[85%] md:w-full flex-shrink-0 md:flex-shrink snap-center md:break-inside-avoid md:mb-4 bg-white dark:bg-slate-800/40 p-4 sm:p-5 rounded-xl border transition-all group ${
                                isPriority
                                    ? 'border-cyan-600/30 dark:border-cyan-400/25 hover:border-cyan-600/50 dark:hover:border-cyan-400/40'
                                    : 'border-gray-200 dark:border-slate-800 hover:border-cyan-500/20'
                            }`}
                        >
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <category.icon size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-slate-900/60 rounded text-[9px] sm:text-[10px] font-medium text-slate-600 dark:text-slate-400 border border-gray-300/50 dark:border-slate-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        );
                    })}
                </motion.div>

                {/* Carousel dot indicators (mobile only) */}
                <div className="flex justify-center gap-2 mt-4 md:hidden" role="tablist" aria-label="Skills carousel">
                    {orderedCategories.map((category, index) => (
                        <button
                            key={category.title}
                            type="button"
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-label={`Go to ${category.title}`}
                            onClick={() => scrollToIndex(index)}
                            className={`h-2 rounded-full transition-all ${
                                activeIndex === index
                                    ? 'w-6 bg-cyan-400'
                                    : 'w-2 bg-gray-300 dark:bg-slate-700'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
