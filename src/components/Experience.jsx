import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRole } from '../context/RoleContext'
import SectionHeading from './SectionHeading'

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
        company: "CyBlack",
        location: "United Kingdom",
        period: "Oct 2025 - Present",
        description: [
            "Manage end-to-end client engagements from scoping through to remediation guidance",
            "Conduct threat analysis using the MITRE ATT&CK framework to identify emerging attack patterns",
            "Review IAM configurations and API authentication mechanisms across cloud environments",
            "Perform GRC gap assessments against ISO 27001 and PCI DSS, recommending remediation strategies",
            "Translate MITRE ATT&CK-mapped findings into board-level risk summaries for stakeholders"
        ]
    },
    {
        role: "Event Hospitality Team Lead",
        company: "Agencies Across London",
        location: "United Kingdom",
        period: "Oct 2024 - Present",
        description: [
            "Lead hospitality operations across premium event venues including Chelsea FC, Fulham FC, and Royal Ascot",
            "Coordinate service teams in VIP suites and hospitality areas during fast-paced events",
            "Deliver high-standard guest experiences while managing team coordination",
            "Engage directly with VIP guests and stakeholders, applying communication and leadership skills"
        ]
    },
    {
        role: "IT Operations Support",
        company: "Sendmeglobal",
        location: "Lagos, Nigeria",
        period: "Jan 2024 - Sep 2024",
        description: [
            "Provided cross-functional IT support in a logistics environment across hardware, software, and network systems",
            "Led onboarding for new employees, configuring workstations and delivering cybersecurity awareness guidance",
            "Maintained IT asset documentation, supported backup processes, and resolved technical issues",
            "Assisted teams in troubleshooting system and connectivity issues to keep operations running"
        ]
    },
    {
        role: "Sales Executive",
        company: "LIFEPAGE Global",
        location: "Lagos, Nigeria",
        period: "Oct 2022 - Sep 2024",
        description: [
            "Led a cross-functional B2B initiative with development and marketing teams, contributing to 20% revenue growth",
            "Launched a product offering that became the company's best-selling category",
            "Closed over ₦1Bn in annual revenue while managing distributed sales teams",
            "Delivered structured discovery sessions and solution presentations to prospective clients"
        ]
    },
    {
        role: "Founder and Product Lead",
        company: "Leathern by Jyde",
        location: "Lagos, Nigeria",
        period: "Jul 2017 - Oct 2022",
        description: [
            "Conceptualized, launched, and scaled a footwear brand from inception to market",
            "Led product development across design, prototyping, and manufacturing to ensure quality and brand integrity",
            "Built marketing strategies using social media, influencer partnerships, and targeted advertising",
            "Managed the e-commerce platform, improving user experience and digital marketing to grow online sales"
        ]
    }
]

const Experience = () => {
    const { config } = useRole();
    const carouselRef = useRef(null);
    const cardRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const orderedExperiences = useMemo(() => {
        const order = config.experienceOrder || [];
        const rank = new Map(order.map((company, i) => [company, i]));
        return [...experiences].sort((a, b) => {
            const ai = rank.has(a.company) ? rank.get(a.company) : Number.POSITIVE_INFINITY;
            const bi = rank.has(b.company) ? rank.get(b.company) : Number.POSITIVE_INFINITY;
            return ai - bi;
        });
    }, [config.experienceOrder]);

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
        <section id="experience" className="h-auto flex flex-col justify-center py-12 sm:py-20">
            <div className="w-full max-w-7xl mx-auto px-6">
                <SectionHeading
                    kicker="03 · Experience"
                    title="Professional Experience"
                    sub="Security, sales, product, and operations across the UK and Nigeria."
                />

                <div
                    ref={carouselRef}
                    className="relative flex md:flex-col gap-6 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-2 pb-4 md:pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {/* Timeline rule (desktop only) */}
                    <span
                        aria-hidden="true"
                        className="hidden md:block absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/70 via-slate-300 to-transparent dark:via-slate-700"
                    />
                    {orderedExperiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-[85%] md:w-auto max-w-3xl flex-shrink-0 md:flex-shrink bg-white dark:bg-slate-800/50 p-5 rounded-xl border border-gray-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-colors snap-center md:relative md:p-0 md:pl-12 md:bg-transparent md:dark:bg-transparent md:rounded-none md:border-0"
                        >
                            {/* Period marker on the timeline rule (desktop only) */}
                            <span
                                aria-hidden="true"
                                className="hidden md:block absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-cyan-500 bg-gray-50 dark:bg-slate-950"
                            />
                            <div className="flex flex-col mb-3">
                                <div className="flex flex-col sm:flex-row md:flex-col justify-between items-start mb-2 gap-2 md:gap-1">
                                    <span className="order-2 md:order-first text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-900/50 px-2 py-1 rounded border border-gray-300 dark:border-slate-700 whitespace-nowrap self-start sm:self-auto md:self-start md:bg-transparent md:dark:bg-transparent md:border-0 md:px-0 md:py-0 md:font-mono md:uppercase md:tracking-wider md:text-cyan-700 md:dark:text-cyan-400">
                                        {exp.period}
                                    </span>
                                    <h3 className="order-1 md:order-none text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">
                                        {exp.role} <span className="text-cyan-400 block sm:inline"> @ {exp.company}</span>
                                    </h3>
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
                    {orderedExperiences.map((exp, index) => (
                        <button
                            key={exp.company}
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
