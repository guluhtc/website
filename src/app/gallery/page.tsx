"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
    { src: "Screenshot 2026-03-09 181351.png", title: "Fabrication Facility", category: "Facility" },
    { src: "Screenshot 2026-03-09 181434.png", title: "Steel Structures", category: "Fabrication" },
    { src: "Screenshot 2026-03-09 181451.png", title: "Precision Works", category: "Fabrication" },
    { src: "Screenshot 2026-03-09 181501.png", title: "Workshop Interior", category: "Facility" },
    { src: "Screenshot 2026-03-09 181508.png", title: "CNC Bending", category: "Machinery" },
    { src: "Screenshot 2026-03-09 181515.png", title: "Laser Cutting", category: "Machinery" },
    { src: "Screenshot 2026-03-09 181526.png", title: "Industrial Setup", category: "Facility" },
    { src: "Screenshot 2026-03-09 181538.png", title: "Steel Components", category: "Products" },
    { src: "Screenshot 2026-03-09 181544.png", title: "Conveyor Parts", category: "Products" },
    { src: "Screenshot 2026-03-09 181552.png", title: "Mill Store Items", category: "Products" },
    { src: "Screenshot 2026-03-09 181601.png", title: "Fabrication Works", category: "Fabrication" },
    { src: "Screenshot 2026-03-09 181611.png", title: "Engineering Project", category: "Fabrication" },
    { src: "Screenshot 2026-03-09 181620.png", title: "Structural Steel", category: "Products" },
    { src: "Screenshot 2026-03-09 181627.png", title: "Heavy Equipment", category: "Machinery" },
    { src: "Screenshot 2026-03-09 181636.png", title: "Completed Project", category: "Fabrication" },
];

const categories = ["All", "Facility", "Fabrication", "Machinery", "Products"];

export default function GalleryPage() {
    const [selected, setSelected] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory);

    return (
        <div className="flex min-h-[100dvh] flex-col bg-white">
            <Navbar />

            {/* Header */}
            <section className="relative pt-24 md:pt-28 bg-gradient-to-br from-blue-950 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
                    <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block">Our Work</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-400">Gallery</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl">
                        Explore our state-of-the-art facilities, precision machinery, and completed fabrication projects.
                    </p>
                </div>
                <div className="h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
            </section>

            {/* Filter Bar */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all border-2 ${activeCategory === cat
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map((img, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 hover:border-primary/50 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                onClick={() => setSelected(img.src)}
                            >
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={`/images/${img.src}`}
                                        alt={img.title}
                                        fill
                                        unoptimized
                                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="text-white font-bold text-sm">{img.title}</p>
                                        <span className="text-xs text-white/70 bg-white/20 px-2 py-0.5 rounded-full mt-1 inline-block">{img.category}</span>
                                    </div>
                                    <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ZoomIn className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-24 text-slate-400 font-medium text-lg">
                            No images in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selected && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
                    onClick={() => setSelected(null)}
                >
                    <button
                        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        onClick={() => setSelected(null)}
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`/images/${selected}`}
                            alt="Gallery Image"
                            width={1200}
                            height={800}
                            unoptimized
                            className="object-contain w-full h-full max-h-[85vh]"
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
