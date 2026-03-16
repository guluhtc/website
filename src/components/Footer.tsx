import { Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-4 border-primary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6 lg:col-span-1">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="SteelNArt Logo"
                                width={180}
                                height={64}
                                className="object-contain h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Delivering high-precision steel fabrication, laser cutting, and CRC processing with an unwavering commitment to quality and engineering excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide">Quick Links</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Our Services</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Contact Us</Link></li>
                            <li><Link href="/#why-us" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" /> Why Choose Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide">Contact Details</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <div className="pt-1">
                                    <p className="font-medium text-white hover:text-primary transition-colors cursor-pointer"><a href="tel:+919799844214">+91 9799844214</a></p>
                                    <p className="font-medium text-white hover:text-primary transition-colors cursor-pointer mt-1"><a href="tel:+919380342484">+91 9380342484</a></p>
                                    <p className="font-medium text-amber-500 hover:text-amber-400 transition-colors cursor-pointer mt-1"><a href="tel:+918008460659">+91 8008460659</a></p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Globe className="h-4 w-4 text-primary" />
                                </div>
                                <p className="pt-1 font-medium text-white hover:text-primary transition-colors cursor-pointer">www.steelnart.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide">Headquarters</h4>
                        <div className="flex items-start space-x-3 group">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors">
                                <MapPin className="h-4 w-4 text-secondary" />
                            </div>
                            <div className="pt-1 space-y-1 text-sm text-slate-400">
                                <p className="text-white font-medium">SMBV Ashram</p>
                                <p>No. 7/2, 2nd Main Road,</p>
                                <p>Rudrappa Garden, Vittal Nagar,</p>
                                <p>Bengaluru - 560026</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} SteelNArt. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
