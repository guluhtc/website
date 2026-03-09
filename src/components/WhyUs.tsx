"use client";

import { motion, type Variants } from "framer-motion";
import { Users, ShieldCheck, TrendingUp, Handshake, CheckSquare, ArrowRight } from "lucide-react";

const values = [
    {
        name: "Team Work",
        description: "A close-knit team of engineers and craftsmen who collaborate to ensure every project is completed with shared expertise and precision.",
        icon: Users,
        color: "from-blue-500 to-indigo-600",
        lightBg: "bg-blue-500/10",
        lightText: "text-blue-400",
        stat: "50+ Team Members",
    },
    {
        name: "Best Quality",
        description: "Uncompromising quality control at every production stage. From raw material selection to final inspection, we accept nothing less than excellence.",
        icon: ShieldCheck,
        color: "from-orange-400 to-red-500",
        lightBg: "bg-orange-400/10",
        lightText: "text-orange-400",
        stat: "ISO 9001:2015",
    },
    {
        name: "Continuous Improvement",
        description: "We constantly invest in newer CNC machinery, processes, and skills. Innovation isn't a choice — it's built into our culture.",
        icon: TrendingUp,
        color: "from-teal-400 to-cyan-500",
        lightBg: "bg-teal-400/10",
        lightText: "text-teal-400",
        stat: "Annual Upskilling",
    },
    {
        name: "Relationships For Life",
        description: "We build long-term partnerships grounded in trust, transparency, and consistent delivery. Our clients don't just hire us — they rely on us.",
        icon: Handshake,
        color: "from-purple-500 to-pink-500",
        lightBg: "bg-purple-500/10",
        lightText: "text-purple-400",
        stat: "500+ Clients",
    },
    {
        name: "Responsibility",
        description: "Committed to safe work environments, sustainable practices, and timely delivery. We take ownership of every commitment we make.",
        icon: CheckSquare,
        color: "from-yellow-400 to-orange-500",
        lightBg: "bg-yellow-400/10",
        lightText: "text-yellow-400",
        stat: "99% On-Time Rate",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-slate-950 text-white relative overflow-hidden border-b-8 border-b-secondary">
            {/* Ambient glare blobs */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Core Values</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Why Choose{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
                            SteelNArt
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        We don't just process steel — we build foundations. Our values define how we operate, how we grow, and how we serve our clients every single day.
                    </p>
                </motion.div>

                {/* Value Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm
                                    hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-default
                                    ${index === 4 ? "lg:col-start-2" : ""}`}
                            >
                                {/* Gradient top bar */}
                                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${value.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

                                {/* Ambient glow on hover */}
                                <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${value.color} blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                <div className="relative z-10 p-8">
                                    {/* Icon + Stat row */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`h-14 w-14 rounded-2xl ${value.lightBg} flex items-center justify-center`}>
                                            <Icon className={`h-7 w-7 ${value.lightText}`} />
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${value.lightBg} ${value.lightText}`}>
                                            {value.stat}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">{value.name}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm font-medium">{value.description}</p>

                                    <div className={`mt-6 flex items-center gap-2 text-sm font-bold ${value.lightText} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
