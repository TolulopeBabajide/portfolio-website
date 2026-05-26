import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
}

const experiences = [
    {
        role: "Cybersecurity Analyst",
        company: "Cyblack",
        location: "London, UK",
        period: "2025",
        description: [
            "Conducted APT threat intelligence analysis using OpenCTI and MITRE ATT&CK mapping",
            "Assessed cloud infrastructure risks including IAM misconfigurations and API exposure",
            "Deployed and managed Docker-based security tooling environments",
            "Performed vulnerability assessments and controlled web application testing",
            "Applied threat modeling principles to strengthen secure backend design practices"
        ]
    },
    {
        role: "Co-Founder & Business Lead",
        company: "LIFEPAGE Global",
        location: "Lagos, Nigeria",
        period: "2021 – 2024",
        description: [
            "Built and scaled a proptech platform connecting real estate professionals and buyers across West Africa",
            "Closed over ₦1Bn in annual revenue through direct sales and market expansion",
            "Led go-to-market strategy, partnerships, and revenue operations for the platform",
            "Managed cross-functional teams (product, engineering, sales) to drive growth and user acquisition",
            "Established operations in multiple markets and developed market-specific monetization strategies"
        ]
    },
    {
        role: "IT Support Specialist",
        company: "Send Me Global Logistics",
        location: "Lagos, Nigeria",
        period: "Jan 2024 – Sept 2024",
        description: [
            "Delivered first-line technical support across hardware, software, and network systems",
            "Managed user access control, permissions, and system configurations for secure authentication",
            "Diagnosed and resolved networking issues (LAN/Wi-Fi connectivity) to minimize downtime",
            "Maintained structured documentation of incidents and solutions for knowledge management",
            "Supported secure device setup and endpoint configuration, strengthening security posture"
        ]
    }
]

const Experience = () => {
    const carouselRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

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
        <section className="h-auto flex flex-col justify-center py-10 bg-gray-100/30 dark:bg-slate-900/30">
            <div className="w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Applying security principles in real-world environments.</p>
                </motion.div>

                <div
                    ref={carouselRef}
                    className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-2 pb-4 md:pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-[85%] md:w-auto flex-shrink-0 md:flex-shrink bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-colors snap-center"
                        >
                            <div className="flex flex-col mb-3">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">
                                        {exp.role} <span className="text-cyan-400 block sm:inline"> @ {exp.company}</span>
                                    </h3>
                                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-900/50 px-2 py-1 rounded border border-gray-300 dark:border-slate-700 whitespace-nowrap self-start sm:self-auto">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="flex items-center text-slate-500 dark:text-slate-500 text-xs">
                                    <Briefcase size={12} className="mr-1" />
                                    {exp.location}
                                </div>
                            </div>

                            <motion.ul
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                                }}
                                className="space-y-2 text-slate-600 dark:text-slate-300 text-sm"
                            >
                                {exp.description.map((item, i) => (
                                    <motion.li key={i} variants={listItemVariants} className="flex items-start">
                                        <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                        <span className="leading-relaxed text-xs md:text-sm">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel dot indicators (mobile only) */}
                <div className="flex justify-center gap-2 mt-2 md:hidden" role="tablist" aria-label="Experience carousel">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            type="button"
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-label={`Go to ${exp.role} at ${exp.company}`}
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

export default Experience
