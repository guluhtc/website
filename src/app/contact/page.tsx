import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Globe, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-white">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-24 md:pt-28 bg-gradient-to-br from-blue-950 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-400">Us</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Have a project in mind or need a quote? Our team is ready to assist you. Reach out through any of the channels below and we'll respond promptly.
                        </p>
                    </div>
                </div>
                <div className="h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
            </section>

            {/* Services Banner Image */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100 bg-slate-50">
                        <Image
                            src="/services-banner.png"
                            alt="SteelNArt Services and Contact"
                            width={900}
                            height={500}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 900px"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Contact Cards + Map */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Contact Details</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                            We'd Love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Hear From You</span>
                        </h2>
                        <p className="text-slate-600 max-w-xl mx-auto text-lg">
                            Reach us by phone, email, or visit us at our Bengaluru facility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                icon: Phone,
                                label: "Phone",
                                lines: ["Pankaj: +91 9799844214", "Arjun: +91 9380342484", "Helpline: +91 6361990388"],
                                color: "bg-blue-50 text-blue-600",
                                href: "tel:+916361990388",
                            },
                            {
                                icon: Globe,
                                label: "Website",
                                lines: ["www.steelnart.com"],
                                color: "bg-indigo-50 text-indigo-600",
                                href: "http://www.steelnart.com",
                            },
                            {
                                icon: MessageCircle,
                                label: "WhatsApp",
                                lines: ["+91 6361990388", "Helpline - 24/7 Service"],
                                color: "bg-green-50 text-green-600",
                                href: "https://wa.me/916361990388",
                            },
                            {
                                icon: MapPin,
                                label: "Address",
                                lines: ["No. 7/2, SMBV Ashram,", "2nd Main Road, Rudrappa Garden,", "Vittal Nagar, Bengaluru - 560026"],
                                color: "bg-orange-50 text-orange-600",
                                href: "https://maps.google.com/?q=Rudrappa+Garden+Vittal+Nagar+Bengaluru+560026",
                            },
                        ].map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <a
                                    key={i}
                                    href={card.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col gap-4"
                                >
                                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 mb-2">{card.label}</div>
                                        {card.lines.map((line, j) => (
                                            <p key={j} className="text-slate-600 text-sm leading-relaxed">{line}</p>
                                        ))}
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Business Info Strip */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">Business Hours</div>
                                <div className="text-slate-400 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</div>
                                <div className="text-slate-400 text-sm">Sunday: Closed</div>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="font-bold text-lg mb-1">Quick Response Guarantee</div>
                            <div className="text-slate-400 text-sm">We respond to all inquiries within 2 business hours.</div>
                        </div>
                        <div className="flex flex-col sm:row gap-3">
                            <a href="tel:+919799844214">
                                <Button size="lg" className="rounded-full px-6 font-bold w-full">
                                    <Phone className="h-4 w-4 mr-2" /> Call Now
                                </Button>
                            </a>
                            <a href="https://wa.me/919799844214" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="rounded-full px-6 font-bold border-white text-white hover:bg-white hover:text-slate-900 w-full">
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="pb-16 bg-blue-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[480px] border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.147!2d77.5752!3d12.9618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzQyLjUiTiA3N8KwMzQnMzAuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SteelNArt Location"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
