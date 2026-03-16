"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Award, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

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
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-32 md:pb-36 border-b-[12px] border-b-secondary bg-slate-950">
            {/* Professional Cover Image Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/steelnart-cover.png"
                    alt="SteelNArt Professional Industrial Cover"
                    fill
                    className="object-cover opacity-60 transition-transform duration-[10000ms] scale-105 hover:scale-100"
                    priority
                />
                {/* Dark Premium Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
            </div>

            {/* Subtle Grid for Tech Feel */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <motion.div
                className="container relative z-20 mx-auto px-4 md:px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={badgeVariants}>
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-slate-200 shadow-2xl mb-10 hover:border-white/20 transition-colors cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        <span className="mr-2 text-blue-400 font-bold hidden sm:inline-block border-r border-white/10 pr-2 uppercase tracking-tighter">Premium</span>
                        Leading SS Providers: Pipes, Valves & Sheets
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 md:mb-8 text-white mx-auto max-w-6xl leading-[1] md:leading-[0.9] drop-shadow-2xl"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 drop-shadow-sm">Steel</span><span className="text-blue-500">NArt</span>
                    <br />
                    <span className="text-2xl md:text-5xl lg:text-6xl block mt-4 font-bold tracking-tight text-slate-300">
                        Pipes • Valves • Sheets
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 mb-10 md:mb-14 font-medium leading-relaxed drop-shadow-lg px-4 md:px-0"
                >
                    Your trusted partner for high-precision industrial fabrication.
                    Uncompromising quality in every weld, every cut, and every component.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-20 px-4 md:px-0"
                >
                    <a href="/#services" className="w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl font-bold rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:-translate-y-1 transition-all w-full"
                        >
                            Explore Our Services <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                    </a>
                    <a href="https://wa.me/919799844214" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl font-bold rounded-full border-2 border-white hover:border-blue-400 text-white hover:text-white bg-white/10 hover:bg-blue-600/20 backdrop-blur-md transition-all hover:-translate-y-1 shadow-lg w-full"
                        >
                            Get An Estimate
                        </Button>
                    </a>
                </motion.div>

                {/* Trust Strip */}
                <motion.div
                    variants={itemVariants}
                    className="pt-10 mt-2 border-t border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-0"
                >
                    {[
                        { Icon: CheckCircle2, bg: "bg-blue-600/20 text-blue-400", border: "border-blue-500/30", title: "ISO 9001:2015", sub: "Certified Quality" },
                        { Icon: Zap, bg: "bg-orange-600/20 text-orange-400", border: "border-orange-500/30", title: "High Precision", sub: "< 0.1mm Tolerance" },
                        { Icon: Award, bg: "bg-slate-800/40 text-slate-300", border: "border-white/10", title: "10+ Years", sub: "Industry Experience" },
                    ].map(({ Icon, bg, border, title, sub }, i) => (
                        <div key={i} className="flex items-center gap-3 text-left group cursor-default">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${bg} border ${border}`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-lg">{title}</div>
                                <div className="text-sm text-slate-400 font-medium">{sub}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Running text ticker */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-b border-white/5 py-5 sm:py-6 bg-slate-950/50 backdrop-blur-md z-20">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-4 text-xs font-black text-slate-500 uppercase tracking-[0.3em] flex-shrink-0">
                            <span className="h-2 w-2 rounded-full bg-blue-500/50 inline-block"></span>
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
