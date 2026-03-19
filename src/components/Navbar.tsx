"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-3 px-3 md:pt-4 md:px-4 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-7xl">
                {/* Main Nav Bar */}
                <nav className="w-full rounded-full border border-white/10 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 shadow-2xl shadow-blue-900/40 backdrop-blur-md">
                    <div className="flex h-14 md:h-20 items-center justify-between px-4 md:px-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="SteelNArt Logo"
                                width={140}
                                height={50}
                                className="object-contain h-10 md:h-14 w-auto group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-200">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Right */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="tel:+916361990388" className="hidden lg:flex items-center space-x-2 text-slate-300 hover:text-white transition-colors font-medium text-sm">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+91 6361990388</span>
                            </a>
                            <a href="https://wa.me/916361990388" target="_blank" rel="noopener noreferrer">
                                <Button className="shadow-md shadow-primary/20 font-semibold rounded-full px-6">
                                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                {open && (
                    <div className="mt-3 rounded-3xl border border-blue-800/40 bg-blue-950/95 backdrop-blur-md shadow-2xl p-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-200 font-bold text-lg hover:text-primary transition-colors py-2 border-b border-white/5"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a href="tel:+916361990388" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium pt-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>+91 6361990388</span>
                        </a>
                        <a href="https://wa.me/916361990388" target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button className="w-full rounded-full font-bold" onClick={() => setOpen(false)}>
                                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
