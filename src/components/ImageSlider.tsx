"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
    { src: "Screenshot 2026-03-09 181351.png", label: "Fabrication Facility" },
    { src: "Screenshot 2026-03-09 181434.png", label: "Steel Structures" },
    { src: "Screenshot 2026-03-09 181451.png", label: "Precision Works" },
    { src: "Screenshot 2026-03-09 181501.png", label: "Workshop Interior" },
    { src: "Screenshot 2026-03-09 181508.png", label: "CNC Bending" },
    { src: "Screenshot 2026-03-09 181515.png", label: "Laser Cutting" },
    { src: "Screenshot 2026-03-09 181526.png", label: "Industrial Setup" },
    { src: "Screenshot 2026-03-09 181538.png", label: "Steel Components" },
    { src: "Screenshot 2026-03-09 181544.png", label: "Conveyor Parts" },
    { src: "Screenshot 2026-03-09 181552.png", label: "Mill Store Items" },
    { src: "Screenshot 2026-03-09 181601.png", label: "Fabrication Works" },
    { src: "Screenshot 2026-03-09 181611.png", label: "Engineering Project" },
    { src: "Screenshot 2026-03-09 181620.png", label: "Structural Steel" },
    { src: "Screenshot 2026-03-09 181627.png", label: "Heavy Equipment" },
    { src: "Screenshot 2026-03-09 181636.png", label: "Completed Project" },
];

export default function ImageSlider() {
    const plugin = React.useRef(
        Autoplay({ delay: 3200, stopOnInteraction: true })
    );

    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-white to-orange-50 relative border-b-8 border-b-primary overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Our Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                        State-of-the-Art{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Facilities
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our premium engineering projects and modern steel fabrication infrastructure.
                    </p>
                </motion.div>

                {/* Slider */}
                <div className="mx-auto max-w-5xl relative">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{ align: "center", loop: true }}
                    >
                        <CarouselContent className="items-stretch -ml-3 md:-ml-4">
                            {images.map((img, index) => (
                                <CarouselItem key={index} className="pl-3 md:pl-4 basis-[85%] sm:basis-[75%] md:basis-[65%] lg:basis-[60%]">
                                    <div className="group relative h-full rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500">
                                        {/* Image */}
                                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gradient-to-br from-slate-50 to-slate-100">
                                            <Image
                                                src={`/images/${img.src}`}
                                                alt={img.label}
                                                fill
                                                unoptimized
                                                className="object-contain p-3 md:p-4 transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 65vw, 55vw"
                                            />
                                        </div>

                                        {/* Gradient overlay label */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-4 md:p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-bold text-sm md:text-base drop-shadow">{img.label}</span>
                                                <span className="text-xs text-white/70 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                                    {index + 1}/{images.length}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Arrows */}
                        <CarouselPrevious className="hidden sm:flex -left-5 md:-left-6 bg-white border-2 border-slate-200 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-lg transition-all h-10 w-10 md:h-12 md:w-12" />
                        <CarouselNext className="hidden sm:flex -right-5 md:-right-6 bg-white border-2 border-slate-200 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-lg transition-all h-10 w-10 md:h-12 md:w-12" />
                    </Carousel>

                    {/* Dot-style indicator strip */}
                    <div className="flex justify-center gap-1.5 mt-6">
                        {images.map((_, i) => (
                            <div key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-primary" : "w-1.5 bg-slate-300"}`} />
                        ))}
                    </div>
                </div>

                {/* View Gallery CTA */}
                <div className="text-center mt-10">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm md:text-base"
                    >
                        View Full Gallery →
                    </Link>
                </div>
            </div>
        </section>
    );
}
