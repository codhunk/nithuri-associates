"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Building2, Phone, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
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
                ? "py-4 bg-black shadow-2xl"
                : "py-8 bg-transparent"
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
                                "text-xl font-bold tracking-tighter flex items-center gap-1 transition-colors",
                                scrolled ? "text-white" : "text-primary dark:text-white"
                            )}>
                                Nithuri <span className={cn("underline decoration-2 underline-offset-4 text-accent", scrolled ? "decoration-accent/50" : "decoration-accent/30")}>Singh</span> & Sons
                                <Sparkles className={cn("text-accent opacity-0 group-hover:opacity-100 transition-opacity")} size={14} />
                            </span>
                            <p className={cn(
                                "text-[9px] font-bold uppercase tracking-[0.3em] transition-colors",
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
                                    "px-5 py-2.5 text-xs font-bold tracking-widest transition-all relative group",
                                    scrolled ? "text-white/80 hover:text-accent" : "text-primary/60 dark:text-white/60 hover:text-accent dark:hover:text-accent"
                                )}
                            >
                                {link.name}
                                <span className="absolute bottom-1 left-5 right-5 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        <Link href="/auth" className={cn(
                            "text-xs font-bold tracking-widest transition-colors hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left",
                            scrolled ? "text-white" : "text-primary dark:text-white"
                        )}>
                            Sign In
                        </Link>
                        <Link href="/auth?type=register" className={cn(
                            "px-6 py-2.5 rounded-full text-xs font-bold tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl",
                            scrolled ? "bg-accent text-primary" : "bg-primary text-white dark:bg-white dark:text-primary"
                        )}>
                            <User size={14} />
                            Sign Up
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
                                    "text-lg font-bold uppercase tracking-widest hover:text-accent transition-colors",
                                    scrolled ? "text-white" : "text-primary dark:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-primary/10 dark:border-white/10 mt-2">
                            <Link
                                href="/auth"
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "p-4 rounded-xl text-center font-bold uppercase tracking-widest transition-all border",
                                    scrolled ? "border-white/20 text-white" : "border-primary/20 text-primary dark:border-white/20 dark:text-white"
                                )}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/auth?type=register"
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "p-4 rounded-xl text-center font-bold uppercase tracking-widest transition-all",
                                    scrolled ? "bg-accent text-primary" : "bg-primary text-white dark:bg-emerald-500 dark:text-white"
                                )}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
