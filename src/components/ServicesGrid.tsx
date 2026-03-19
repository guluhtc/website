"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LayoutGrid, Armchair, SquareCode, Box, DoorOpen, Grid3X3, Layers } from "lucide-react";

const servicesList = [
    {
        title: "Modular Interior",
        description: "Bespoke kitchens and wardrobes designed for modern luxury.",
        href: "/services/modular-interior",
        image: "/images/modular-kitchen.png",
        icon: <LayoutGrid className="w-6 h-6" />
    },
    {
        title: "Furniture",
        description: "Exquisite handcrafted wooden and metal furniture pieces.",
        href: "/services/furniture",
        image: "/services/sofa/IMG-20260318-WA0007.jpg",
        icon: <Armchair className="w-6 h-6" />
    },
    {
        title: "Glass Railing",
        description: "Transparent, safe, and elegant railing solutions.",
        href: "/services/glass-railing",
        image: "/services/glass railing/IMG-20260318-WA0045.jpg",
        icon: <SquareCode className="w-6 h-6" />
    },
    {
        title: "Sofa",
        description: "Luxury seating solutions with premium upholstery.",
        href: "/services/sofa",
        image: "/services/sofa/IMG-20260318-WA0014.jpg",
        icon: <Box className="w-6 h-6" />
    },
    {
        title: "SS Doors",
        description: "High-security and stylish stainless steel doors.",
        href: "/services/ss-doors",
        image: "/services/ss doors/IMG-20260318-WA0037.jpg",
        icon: <DoorOpen className="w-6 h-6" />
    },
    {
        title: "SS Grill",
        description: "Durable and aesthetic security grills for windows.",
        href: "/services/ss-grill",
        image: "/services/ss grill/IMG-20260318-WA0019.jpg",
        icon: <Grid3X3 className="w-6 h-6" />
    },
    {
        title: "SS Railing",
        description: "Seamless and sturdy SS railing for stairs and balconies.",
        href: "/services/ss-railing",
        image: "/services/ss railing/IMG-20260318-WA0055.jpg",
        icon: <Layers className="w-6 h-6" />
    }
];

export default function ServicesGrid({
    title = "Our Services",
    description = "Precision-engineered solutions for every space.",
    showButton = true
}) {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.span
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl font-black mb-6 text-slate-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium">
                        {description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={service.href}
                                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute top-4 left-4 p-2.5 bg-white/80 backdrop-blur-md rounded-xl text-primary border border-slate-200">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                                        {service.title} <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                {showButton && (
                    <div className="mt-16 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-900 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                        >
                            Explore All Services <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
