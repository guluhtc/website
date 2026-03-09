import Image from "next/image";
import Link from "next/link";
import { Users, ShieldCheck, TrendingUp, Handshake, CheckSquare, ArrowRight, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
    { name: "Team Work", desc: "Collaborative excellence in every project, from design to delivery.", icon: Users },
    { name: "Best Quality", desc: "Uncompromising standards — ISO-certified processes, every time.", icon: ShieldCheck },
    { name: "Continuous Improvement", desc: "Constant investment in machinery and skills to stay at the frontier.", icon: TrendingUp },
    { name: "Relationships For Life", desc: "Long-term partnerships built on trust, honesty, and results.", icon: Handshake },
    { name: "Responsibility", desc: "Safe work environments, on-time delivery, and accountable operations.", icon: CheckSquare },
];

export default function AboutPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-white">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-24 md:pt-28 bg-gradient-to-br from-blue-950 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-400">SteelNArt</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            SteelNArt is a premium steel fabrication and industrial supply company, headquartered in Bengaluru. We deliver precision engineering with an artistic touch — turning raw steel into reliable structures, components, and systems.
                        </p>
                    </div>
                </div>
                {/* Decorative diagonal cut */}
                <div className="h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
            </section>

            {/* Services Banner Image */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 bg-slate-50">
                        <Image
                            src="/services-banner.png"
                            alt="SteelNArt Services - Laser Cutting, Bending, Fabrication, Mill Store"
                            width={900}
                            height={500}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 900px"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                                Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Precision</span> & Purpose
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                With over 10 years of experience, SteelNArt has established itself as a trusted partner for industries across South India. Our journey began with a simple mission: to deliver steel fabrication of the highest quality at competitive prices.
                            </p>
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                Today, we serve 500+ clients across construction, manufacturing, food processing, and industrial automation — offering everything from laser-cut metal sheets to complete conveyor systems, IBR piping, pneumatic components, and beyond.
                            </p>
                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                                {[
                                    { val: "10+", label: "Years Experience" },
                                    { val: "500+", label: "Happy Clients" },
                                    { val: "9+", label: "Product Categories" },
                                ].map((s, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-primary">{s.val}</div>
                                        <div className="text-sm text-slate-500 font-medium mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                                        <Factory className="h-8 w-8 text-primary mx-auto mb-3" />
                                        <div className="font-bold text-slate-900 text-sm">
                                            {["Laser Cutting", "CNC Bending", "PEB Structures", "Mill Store"][i - 1]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block">Our DNA</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div key={i} className="text-center group">
                                    <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2 text-sm">{v.name}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Work With Us?</h2>
                    <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">Get in touch with our team today for a quote or to discuss your project requirements.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="rounded-full px-8 font-bold">
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/#services">
                            <Button size="lg" variant="outline" className="rounded-full px-8 font-bold border-white text-white hover:bg-white hover:text-primary">
                                View Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
