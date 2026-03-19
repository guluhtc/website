"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ServicePageTemplateProps {
    title: string;
    description: string;
    imageFolder: string;
    imageFiles: string[];
    details?: string[];
}

export default function ServicePageTemplate({
    title,
    description,
    imageFolder,
    imageFiles,
    details
}: ServicePageTemplateProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className="flex min-h-[100dvh] flex-col bg-slate-50 text-slate-900 selection:bg-primary/20">
            <Navbar />

            <main className="flex-1 pt-24 md:pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="max-w-4xl mb-12">
                        <motion.h1
                            className="text-4xl md:text-6xl font-black mb-6 text-slate-900"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-slate-600 leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {description}
                        </motion.p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
                        {imageFiles.map((file, index) => (
                            <motion.div
                                key={index}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-200 bg-white group shadow-sm hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Image
                                    src={`${imageFolder}/${file}`}
                                    alt={`${title} - image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm font-bold text-white tracking-widest uppercase">Project View {index + 1}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Details / Features */}
                    {details && details.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 border-t border-slate-200 pt-16">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <span className="h-8 w-1 bg-primary rounded-full"></span>
                                    Service Highlights
                                </h2>
                                <ul className="space-y-4">
                                    {details?.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-slate-600">
                                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                                            <span className="text-lg">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us?</h3>
                                <p className="text-slate-600 mb-6 font-medium">
                                    With over 15 years of expertise in high-precision fabrication and interior design, we deliver solutions that blend durability with aesthetics.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="text-primary font-black text-2xl mb-1">100%</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Customization</div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="text-secondary font-black text-2xl mb-1">Premium</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Finishing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
