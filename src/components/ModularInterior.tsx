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
    Zap,
    ArrowUpRight
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
        <section className="relative overflow-hidden bg-slate-100 text-slate-900 py-16 md:py-20 border-b-[8px] border-b-primary selection:bg-primary/20">
            {/* Premium Multi-layered Mid-tone Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Base Metallic Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                {/* Advanced Silver/Slate Gradient Mesh */}
                <div className="absolute inset-0 bg-slate-100">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-300/50 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-slate-200/50 rounded-full blur-[100px]"></div>
                </div>

                {/* Subtle Industrial Mid-tone Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]"></div>

                {/* High-end Metallic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-200/80 via-transparent to-slate-300/80"></div>
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
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider uppercase text-slate-900 drop-shadow-sm">
                        Modular Interior
                        <br />
                        <span className="text-2xl md:text-4xl lg:text-5xl flex items-center justify-center gap-6 mt-3">
                            <span className="h-1 flex-1 bg-gradient-to-r from-transparent to-primary max-w-[80px]"></span>
                            <span className="text-primary">Sofa</span>
                            <span className="h-1 flex-1 bg-gradient-to-l from-transparent to-primary max-w-[80px]"></span>
                        </span>
                    </h2>
                </motion.div>

                {/* Image Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16 border border-slate-300 rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-3 bg-white/40 backdrop-blur-2xl group/grid">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">Luxury Kitchens</h3>
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">Luxury Wardrobes</h3>
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
                        <div className="flex flex-col gap-5 bg-white/40 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors shadow-md">
                            <h4 className="text-lg font-bold text-primary mb-2 border-b border-primary/30 pb-3 uppercase tracking-wider flex items-center gap-2">
                                <Armchair className="w-5 h-5" /> Modular Concept
                            </h4>
                            {[
                                { title: "Modular Kitchens" },
                                { title: "Wardrobes & TV Units" },
                                { title: "Shoe Racks" },
                                { title: "All Kinds of Wood Work (Modular Concept)" }
                            ].map((service, idx) => (
                                <motion.div key={idx} className="flex items-start gap-3" variants={itemVariants}>
                                    <span className="text-primary mt-1 shrink-0">❖</span>
                                    <p className="text-slate-800 font-bold leading-snug">{service.title}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 2: Civil & Interior */}
                        <div className="flex flex-col gap-5 bg-white/40 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors shadow-md">
                            <h4 className="text-lg font-bold text-primary mb-2 border-b border-primary/30 pb-3 uppercase tracking-wider flex items-center gap-2">
                                <Hammer className="w-5 h-5" /> Interior & Civil
                            </h4>
                            {[
                                { title: "Tiles, Marbles & Granite Fixing Work" },
                                { title: "False Ceiling, Carpentry & Civil Work" },
                                { title: "Painting, Polishing & Interior Work" },
                                { title: "Electrical Work & Plumbing" },
                            ].map((service, idx) => (
                                <motion.div key={idx} className="flex items-start gap-3" variants={itemVariants}>
                                    <span className="text-primary mt-1 shrink-0">❖</span>
                                    <p className="text-slate-800 font-bold leading-snug">{service.title}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 3: The Promise */}
                        <div className="flex flex-col gap-5 bg-white/40 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors shadow-md">
                            <h4 className="text-lg font-bold text-primary mb-2 border-b border-primary/30 pb-3 uppercase tracking-wider flex items-center gap-2">
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
                                    <p className="text-slate-800 font-bold leading-relaxed">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Brands */}
                    <div className="flex flex-col items-center justify-center pt-8 border-t border-slate-200">
                        <motion.div variants={itemVariants} className="w-full text-center">
                            <h4 className="text-slate-500 font-serif text-sm tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-4">
                                <span className="w-6 h-px bg-primary/20"></span>
                                Top Quality Materials We Use
                                <span className="w-6 h-px bg-primary/20"></span>
                            </h4>

                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
                                <div className="text-xl md:text-2xl font-bold italic tracking-tight text-green-600 drop-shadow-sm flex items-center">
                                    <span className="text-2xl mr-1 text-green-700">🍃</span>
                                    Greenply
                                </div>
                                <div className="text-xl md:text-2xl font-black italic tracking-tighter text-slate-800">blum<span className="text-primary text-sm">®</span></div>
                                <div className="text-xl md:text-2xl font-serif text-slate-800 italic font-bold">Century</div>
                                <div className="text-xl md:text-2xl font-semibold tracking-tight text-slate-600 flex items-center">
                                    <span className="w-3 h-3 bg-slate-400 mr-2 skew-x-12 inline-block"></span>
                                    Hettich
                                </div>
                                <div className="text-xl md:text-2xl font-black tracking-widest text-slate-400">HÄFELE</div>
                                <div className="text-xl md:text-2xl font-black text-rose-600 flex items-center gap-1">
                                    <span className="text-rose-700 text-xl font-light">{"</>"}</span>
                                    Uniply
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Ultra-Premium Contact & Info Card */}
                <motion.div
                    className="max-w-5xl mx-auto mt-24 relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Floating Background Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-700"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/50 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 bg-gradient-to-br from-blue-50/90 via-slate-50/95 to-slate-100/90 backdrop-blur-3xl border border-primary/20 shadow-[0_45px_100px_-25px_rgba(37,99,235,0.15)] rounded-[3rem] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* Left: Contact Info Section */}
                            <div className="lg:col-span-7 p-10 md:p-14 space-y-12">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                                        <Phone className="w-4 h-4 text-primary animate-pulse" />
                                        <span className="text-xs font-black uppercase tracking-widest text-primary">Direct Lines</span>
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tight">Connect With Our Team</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {[
                                        { label: "Pankaj", role: "CEO & Founder", num: "+91 9799844214", link: "tel:+919799844214" },
                                        { label: "Arjun", role: "Managing Director", num: "+91 9380342484", link: "tel:+919380342484" },
                                        { label: "Helpline", role: "24/7 Priority Support", num: "+91 6361990388", link: "tel:+916361990388", primary: true }
                                    ].map((contact, i) => (
                                        <div key={i} className={`space-y-3 group/item ${contact.primary ? 'md:col-span-2 p-6 bg-white/60 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all shadow-sm' : ''}`}>
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg ${contact.primary ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white'} transition-colors`}>
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black uppercase tracking-tighter text-primary">{contact.label}</p>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{contact.role}</p>
                                                </div>
                                            </div>
                                            <a
                                                href={contact.link}
                                                className={`block text-2xl font-black tracking-tighter transition-all hover:scale-105 origin-left ${contact.primary ? 'text-primary' : 'text-slate-900 hover:text-primary'}`}
                                            >
                                                {contact.num}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Location & Web (Metallic/Industrial accent) */}
                            <div className="lg:col-span-5 bg-white/30 border-l border-primary/10 p-10 md:p-14 space-y-12 flex flex-col justify-center">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
                                            <Globe className="w-4 h-4" /> Global Presence
                                        </div>
                                        <a
                                            href="https://www.steelnart.com"
                                            className="text-3xl font-black text-slate-900 group/link inline-flex items-center gap-3 hover:text-primary transition-colors"
                                        >
                                            steelnart.com
                                            <ArrowUpRight className="w-6 h-6 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    </div>

                                    <div className="h-px w-24 bg-primary/20"></div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
                                            <MapPin className="w-4 h-4" /> Head Office
                                        </div>
                                        <address className="not-italic">
                                            <p className="text-xl font-bold text-slate-700 leading-tight">
                                                No. 7/2, SMBV Ashram,<br />
                                                2nd Main Road,<br />
                                                Rudrappa Garden, Vittal Nagar,<br />
                                                Bengaluru - 560026
                                            </p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
