"use client";

import { Star, Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Rajesh Kumar",
        company: "BuildTech Constructors",
        role: "Procurement Manager",
        content: "SteelNArt completely transformed our supply chain for fabrication. Their CNC bending precision is unmatched — they deliver ahead of schedule every single time.",
        rating: 5,
        tag: "CNC Bending",
        color: "from-blue-600 to-indigo-600",
        lightColor: "bg-blue-50 text-blue-700",
        avatar: "/avatars/rajesh.png",
    },
    {
        name: "Vikram Singh",
        company: "Industrial Solutions Ltd.",
        role: "Operations Director",
        content: "We've been sourcing mill store items and custom laser-cut parts from them for over 3 years. The quality control is phenomenal. Highly recommended partner.",
        rating: 5,
        tag: "Laser Cutting",
        color: "from-orange-500 to-red-500",
        lightColor: "bg-orange-50 text-orange-700",
        avatar: "/avatars/vikram.png",
    },
    {
        name: "Anita Desai",
        company: "Prime Architecture",
        role: "Project Lead",
        content: "The custom structural fabrication they provided for our commercial project was flawless. The team is highly professional and responsible at every step.",
        rating: 5,
        tag: "Fabrication",
        color: "from-purple-600 to-blue-600",
        lightColor: "bg-purple-50 text-purple-700",
        avatar: "/avatars/anita.png",
    },
    {
        name: "Suresh Nair",
        company: "AgriPack Machinery",
        role: "Technical Head",
        content: "Their conveyor belts and bucket elevator components are pure quality. Fast delivery, perfect fit every time. SteelNArt is our go-to partner for industrial supplies.",
        rating: 5,
        tag: "Conveyor Systems",
        color: "from-teal-600 to-cyan-600",
        lightColor: "bg-teal-50 text-teal-700",
        avatar: "/avatars/suresh.png",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 relative border-b-8 border-b-primary overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Client Reviews</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                        Trusted by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">
                            Industry Leaders
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. See what our long-term partners have to say about quality, precision, and reliable delivery.
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center justify-center gap-12 mt-10 flex-wrap">
                        {[
                            { value: "500+", label: "Happy Clients" },
                            { value: "10+", label: "Years Experience" },
                            { value: "99%", label: "On-Time Delivery" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                                <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <motion.div key={idx} variants={cardVariants}>
                            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group h-full flex flex-col">
                                {/* Top gradient accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${testimonial.color}`} />

                                {/* Quote icon watermark */}
                                <Quote className="h-12 w-12 text-slate-100 absolute top-6 right-6 rotate-180" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Tag */}
                                <span className={`inline-flex text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit ${testimonial.lightColor}`}>
                                    {testimonial.tag}
                                </span>

                                {/* Content */}
                                <p className="text-slate-700 leading-relaxed font-medium text-base flex-1">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-slate-100 ring-offset-2 shadow-md">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={56}
                                            height={56}
                                            unoptimized
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-slate-500">{testimonial.role} · {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
