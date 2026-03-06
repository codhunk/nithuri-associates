"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Building2, Phone, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "Investors", href: "/investors" },
    { name: "Welfare", href: "/welfare" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
            scrolled
                ? "py-3 bg-black shadow-2xl"
                : "py-6 bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative">
                        <div className={cn(
                            "p-2.5 rounded-2xl group-hover:rotate-[360deg] transition-all duration-700 shadow-xl",
                            scrolled ? "bg-accent text-primary" : "bg-primary text-white dark:bg-accent dark:text-primary"
                        )}>
                            <Building2 size={24} />
                        </div>
                        <div>
                            <span className={cn(
                                "text-xl font-black tracking-tighter flex items-center gap-1 transition-colors",
                                scrolled ? "text-white" : "text-primary dark:text-white"
                            )}>
                                Nithuri <span className={cn("underline decoration-2 underline-offset-4 text-accent", scrolled ? "decoration-accent/50" : "decoration-accent/30")}>Singh</span> & Sons
                                <Sparkles className={cn("text-accent opacity-0 group-hover:opacity-100 transition-opacity")} size={14} />
                            </span>
                            <p className={cn(
                                "text-[9px] font-black uppercase tracking-[0.3em] transition-colors",
                                scrolled ? "text-white/50" : "text-primary/40 dark:text-white/40"
                            )}>Real Estate & Advisory</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-5 py-2.5 text-xs font-black uppercase tracking-widest transition-all relative group",
                                    scrolled ? "text-white/80 hover:text-accent" : "text-primary/60 dark:text-white/60 hover:text-accent dark:hover:text-accent"
                                )}
                            >
                                {link.name}
                                <span className="absolute bottom-1 left-5 right-5 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact" className={cn(
                            "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl",
                            scrolled ? "bg-accent text-primary" : "bg-primary text-white dark:bg-white dark:text-primary"
                        )}>
                            <Phone size={14} />
                            Consult Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors",
                            scrolled ? "text-white" : "text-primary dark:text-white"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={cn(
                    "lg:hidden absolute top-full left-0 right-0 border-b animate-in slide-in-from-top duration-300",
                    scrolled ? "bg-black border-white/10" : "bg-white dark:bg-primary border-primary/5 dark:border-white/5 glass-premium"
                )}>
                    <div className="flex flex-col p-6 gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-black uppercase tracking-widest hover:text-accent transition-colors",
                                    scrolled ? "text-white" : "text-primary dark:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "p-5 rounded-2xl text-center font-black uppercase tracking-widest transition-all",
                                scrolled ? "bg-accent text-primary" : "bg-primary text-white dark:bg-accent dark:text-primary"
                            )}
                        >
                            Consult Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
