"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
    Building2,
    Armchair,
    MonitorPlay,
    LayoutGrid,
    BedDouble,
    MapPin,
    Globe,
    Phone,
    Wrench,
    Paintbrush,
    CheckCircle2,
    Hammer,
    Zap
} from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ModularInterior() {
    return (
        <section className="relative overflow-hidden bg-[#0A0A0A] text-amber-50 py-16 md:py-20 border-b-[8px] border-b-amber-600">
            {/* Premium Texture Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
                {/* Subtle radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">

                {/* Title Section */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700 drop-shadow-md">
                        Modular Interior
                        <br />
                        <span className="text-2xl md:text-4xl lg:text-5xl flex items-center justify-center gap-6 mt-3">
                            <span className="h-1 flex-1 bg-gradient-to-r from-transparent to-amber-600 max-w-[80px]"></span>
                            Furniture
                            <span className="h-1 flex-1 bg-gradient-to-l from-transparent to-amber-600 max-w-[80px]"></span>
                        </span>
                    </h2>
                </motion.div>

                {/* Image Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-16 border-4 border-amber-600/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.15)] p-2 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/images/modular-kitchen.png"
                            alt="Premium Modular Kitchen"
                            fill
                            className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 drop-shadow-lg mb-2">Luxury Kitchens</h3>
                            <p className="text-sm md:text-base text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">Bespoke modular designs tailored for elegance and utility.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden group border-t-2 lg:border-t-0 lg:border-l-2 border-amber-600/30"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/images/modular-wardrobe.png"
                            alt="Luxury Walk-in Wardrobe"
                            fill
                            className="object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 drop-shadow-lg mb-2">Bespoke Wardrobes</h3>
                            <p className="text-sm md:text-base text-slate-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">Modern storage solutions combining luxury wood finishes and ambient lighting.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Comprehensive Solutions Section */}
                <motion.div
                    className="flex flex-col gap-10 border-y border-amber-600/20 py-12 mb-12 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Column 1: Modular Services */}
                        <div className="flex flex-col gap-5 bg-black/30 p-6 rounded-xl border border-amber-600/10 hover:border-amber-600/30 transition-colors">
                            <h4 className="text-lg font-bold text-amber-500 mb-2 border-b border-amber-600/30 pb-3 uppercase tracking-wider flex items-center gap-2">
                                <LayoutGrid className="w-5 h-5" /> Modular Solutions
                            </h4>
                            {[
                                { title: "Modular Kitchens" },
                                { title: "Wardrobes & TV Units" },
                                { title: "Shoe Racks" },
                                { title: "All Kinds of Wood Work (Modular Concept)" }
                            ].map((service, idx) => (
                                <motion.div key={idx} className="flex items-start gap-3" variants={itemVariants}>
                                    <span className="text-amber-600 mt-1 shrink-0">❖</span>
                                    <p className="text-slate-200 font-medium leading-snug">{service.title}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 2: Civil & Interior */}
                        <div className="flex flex-col gap-5 bg-black/30 p-6 rounded-xl border border-amber-600/10 hover:border-amber-600/30 transition-colors">
                            <h4 className="text-lg font-bold text-amber-500 mb-2 border-b border-amber-600/30 pb-3 uppercase tracking-wider flex items-center gap-2">
                                <Hammer className="w-5 h-5" /> Interior & Civil
                            </h4>
                            {[
                                { title: "Tiles, Marbles & Granite Fixing Work" },
                                { title: "False Ceiling, Carpentry & Civil Work" },
                                { title: "Painting, Polishing & Interior Work" },
                                { title: "Electrical Work & Plumbing" },
                            ].map((service, idx) => (
                                <motion.div key={idx} className="flex items-start gap-3" variants={itemVariants}>
                                    <span className="text-amber-600 mt-1 shrink-0">❖</span>
                                    <p className="text-slate-200 font-medium leading-snug">{service.title}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 3: The Promise */}
                        <div className="flex flex-col gap-5 bg-black/30 p-6 rounded-xl border border-amber-600/10 hover:border-amber-600/30 transition-colors">
                            <h4 className="text-lg font-bold text-amber-500 mb-2 border-b border-amber-600/30 pb-3 uppercase tracking-wider flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" /> Our Commitment
                            </h4>
                            {[
                                "Free site visit with complete interior solutions from a single reliable end.",
                                "50+ member expert team providing economical, varied product solutions suitable to budget.",
                                "Space-based customization. Quality & Satisfaction is our primary aim.",
                                "100% competitive pricing with functional accessories suitable for your budget."
                            ].map((text, idx) => (
                                <motion.div key={idx} className="flex items-start gap-3" variants={itemVariants}>
                                    <span className="text-green-500 mt-1 shrink-0 text-sm">✔</span>
                                    <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Brands */}
                    <div className="flex flex-col items-center justify-center pt-8 border-t border-amber-600/20">
                        <motion.div variants={itemVariants} className="w-full text-center">
                            <h4 className="text-slate-400 font-serif text-sm tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-4">
                                <span className="w-6 h-px bg-amber-600/50"></span>
                                Top Quality Materials We Use
                                <span className="w-6 h-px bg-amber-600/50"></span>
                            </h4>

                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
                                <div className="text-xl md:text-2xl font-bold italic tracking-tight text-green-500 drop-shadow-lg flex items-center">
                                    <span className="text-2xl mr-1 text-green-600">🍃</span>
                                    Greenply
                                </div>
                                <div className="text-xl md:text-2xl font-black italic tracking-tighter text-slate-200">blum<span className="text-amber-500 text-sm">®</span></div>
                                <div className="text-xl md:text-2xl font-serif text-slate-200 italic font-bold">Century</div>
                                <div className="text-xl md:text-2xl font-semibold tracking-tight text-slate-200 flex items-center">
                                    <span className="w-3 h-3 bg-slate-400 mr-2 skew-x-12 inline-block"></span>
                                    Hettich
                                </div>
                                <div className="text-xl md:text-2xl font-black tracking-widest text-slate-400">HÄFELE</div>
                                <div className="text-xl md:text-2xl font-black text-rose-600 flex items-center gap-1">
                                    <span className="text-amber-700 text-xl font-light">{"</>"}</span>
                                    Uniply
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Contact Strip */}
                <motion.div
                    className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 pb-4 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Decorative Top Arrow/Line */}
                    <div className="w-full mb-4 flex flex-col items-center justify-center relative">
                        <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-amber-600/80 to-transparent"></div>
                        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-amber-600/80 absolute top-[1px]"></div>
                    </div>

                    {/* Phone Numbers */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 justify-center">
                        <div className="flex items-center gap-4 text-base md:text-lg font-serif tracking-wide">
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Pankaj:</span>
                                <a href="tel:+919799844214" className="text-[#e2c180] hover:text-white transition-colors">+91 9799844214</a>
                            </div>
                            <span className="hidden md:inline text-slate-500/80 font-light">|</span>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Arjun:</span>
                                <a href="tel:+919380342484" className="text-[#e2c180] hover:text-white transition-colors">+91 9380342484</a>
                            </div>
                            <span className="hidden md:inline text-slate-500/80 font-light">|</span>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400 font-bold text-amber-500">Helpline:</span>
                                <a href="tel:+916361990388" className="text-white hover:text-amber-400 transition-colors">+91 6361990388</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Website */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 justify-center mt-1 w-full text-left pl-2 md:pl-[2.75rem]">
                        <div className="flex w-full max-w-sm mx-auto justify-start items-center">
                            <Globe className="w-5 h-5 text-[#d2a353] shrink-0" />
                            <a href="https://www.steelnart.com" className="ml-4 text-lg md:text-xl font-serif text-[#e2c180] hover:text-white transition-colors tracking-wide">
                                www.steelnart.com
                            </a>
                        </div>
                    </motion.div>

                    {/* Address */}
                    <motion.div variants={itemVariants} className="flex items-start gap-3 mt-1 w-full text-left pl-2 md:pl-[2.75rem]">
                        <div className="flex w-full max-w-sm mx-auto justify-start items-start">
                            <MapPin className="w-5 h-5 text-[#d2a353] mt-1 shrink-0" />
                            <p className="ml-4 text-base md:text-lg font-serif text-[#e2c180] leading-relaxed">
                                No. 7/2, SMBV Ashram, 2<sup className="text-xs">nd</sup> Main Road,<br />
                                Rudrappa Garden, Vittal Nagar, Bengalou - 560026
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
