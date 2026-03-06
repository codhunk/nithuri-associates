"use client";

import React from "react";
import Link from "next/link";
import {
    Home,
    Info,
    Briefcase,
    Building2,
    Users,
    Heart,
    Phone,
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    MapPin,
    Mail,
    ChevronRight,
    ArrowLeft
} from "lucide-react";

const mainNavLinks = [
    { name: "Home", href: "/", icon: Home, description: "Return to the main page" },
    { name: "About Us", href: "/about", icon: Info, description: "Learn about our 25+ years of experience" },
    { name: "Real Estate", href: "/services/real-estate", icon: Building2, description: "Detailed guide on land investment" },
    { name: "Startup DPR", href: "/services/startup-dpr", icon: Briefcase, description: "Detailed Project Report assistance" },
    { name: "Legal Advisory", href: "/services/legal-advisory", icon: Users, description: "Registry and title verification guide" },
    { name: "Govt Schemes", href: "/services/govt-schemes", icon: Heart, description: "100% Free guidance for welfare" },
    { name: "Contact", href: "/contact", icon: Phone, description: "Get in touch for expert consultation" },
];

const services = [
    { name: "Real Estate Investment", description: "Strategic property investments and development" },
    { name: "Business Startup DPR", description: "Detailed Project Reports for new ventures" },
    { name: "Legal Title Verification", description: "Comprehensive due diligence and verification" },
    { name: "Govt Scheme Assistance", description: "Expert guidance on government programs" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
];

export default function NavigationPage() {
    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-accent/30">
            {/* Header / Back Link */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex flex-col items-start group">
                        <span className="text-xl font-bold tracking-tight text-white leading-none transition-colors group-hover:text-accent">
                            NITHURI SINGH & SONS
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                            ASSOCIATES
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </header>

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Sitemap & <span className="text-accent">Navigation</span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                            Access all sections of the Nithuri Singh & Sons Associates portal.
                            Easily navigate through our services, property listings, and more.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Sections */}
                        <div className="lg:col-span-2 space-y-4">
                            <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-accent"></div>
                                Main Sections
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {mainNavLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                            <link.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">{link.name}</h3>
                                            <p className="text-white/40 text-sm">{link.description}</p>
                                        </div>
                                        <ArrowRight className="ml-auto text-white/20 group-hover:text-accent transition-colors group-hover:translate-x-1" size={18} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-12">
                            {/* Services List */}
                            <section>
                                <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                                    <div className="w-8 h-[2px] bg-accent"></div>
                                    Our Services
                                </h2>
                                <div className="space-y-3">
                                    {services.map((service) => (
                                        <div
                                            key={service.name}
                                            className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <h3 className="font-semibold text-white/90 mb-1">{service.name}</h3>
                                            <p className="text-xs text-white/40">{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Contact & Social */}
                            <section>
                                <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                                    <div className="w-8 h-[2px] bg-accent"></div>
                                    Get In Touch
                                </h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent">
                                            <Phone size={14} />
                                        </div>
                                        <span>+91 9839605273</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent">
                                            <Mail size={14} />
                                        </div>
                                        <span>bageshwarsingh1525@gmail.com</span>
                                    </div>
                                    <div className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                            <MapPin size={14} />
                                        </div>
                                        <span>Nithuri Singh & Sons Associates, Rural/Semi-urban Region</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-white/30 text-xs text-center md:text-left">
                            © 2025 Nithuri Singh & Sons Associates. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/30 text-xs hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative BG elements */}
            <div className="fixed top-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        </main>
    );
}
