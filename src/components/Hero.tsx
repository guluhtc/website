"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Words to cycle through in the animated headline
const cycleWords = ["Engineering", "Precision", "Innovation", "Excellence"];

function AnimatedWord() {
    return (
        <span className="relative inline-block overflow-hidden align-bottom h-[1em]">
            <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-blue-400 inline-block"
                key="word-engineering"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            >
                Engineering
            </motion.span>
        </span>
    );
}

// Ticker / marquee strip
const tickerItems = [
    "Laser Cutting",
    "CNC Bending",
    "PEB Structures",
    "Conveyor Systems",
    "IBR Parts",
    "Pneumatic Components",
    "Motors & Gearboxes",
    "Industrial Buckets",
    "Electrical & Automation",
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-36 border-b-[12px] border-b-secondary">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-primary to-orange-400 rounded-full blur-[120px] opacity-20"></div>
            </div>

            <motion.div
                className="container relative z-10 mx-auto px-4 md:px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={badgeVariants}>
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm mb-8 hover:border-slate-300 transition-colors cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        <span className="mr-2 text-primary font-bold hidden sm:inline-block border-r border-slate-300 pr-2">NEW</span>
                        Advanced Precision Fabrication Facility Now Open
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-slate-900 mx-auto max-w-5xl leading-[1.1]"
                >
                    Where{" "}
                    <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                        Steel
                    </motion.span>{" "}
                    Meets{" "}
                    <br className="hidden md:block" />
                    Precision{" "}
                    <motion.span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-blue-400 inline-block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    >
                        Engineering
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-600 mb-12 font-medium leading-relaxed"
                >
                    Elevating industrial manufacturing through state-of-the-art laser cutting,
                    CNC bending, and architectural fabrication.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a href="/#services">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg font-bold rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto"
                        >
                            Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </a>
                    <a href="https://wa.me/919799844214" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-lg font-bold rounded-full border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary hover:bg-blue-50 transition-all hover:-translate-y-1 w-full sm:w-auto"
                        >
                            Get An Estimate
                        </Button>
                    </a>
                </motion.div>

                {/* Trust Strip */}
                <motion.div
                    variants={itemVariants}
                    className="pt-10 mt-2 border-t border-slate-100 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-4"
                >
                    {[
                        { Icon: CheckCircle2, bg: "bg-blue-50 text-blue-600", title: "ISO 9001:2015", sub: "Certified Quality" },
                        { Icon: Zap, bg: "bg-orange-50 text-orange-600", title: "High Precision", sub: "< 0.1mm Tolerance" },
                        { Icon: Award, bg: "bg-slate-50 text-slate-600 border border-slate-100", title: "10+ Years", sub: "Industry Experience" },
                    ].map(({ Icon, bg, title, sub }, i) => (
                        <div key={i} className="flex items-center gap-3 text-left group cursor-default">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${bg}`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-lg">{title}</div>
                                <div className="text-sm text-slate-500 font-medium">{sub}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Running text ticker */}
            <div className="mt-16 w-full overflow-hidden border-t border-b border-slate-100 py-4 bg-white/60 backdrop-blur-sm">
                <motion.div
                    className="flex gap-10 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest flex-shrink-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"></span>
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
