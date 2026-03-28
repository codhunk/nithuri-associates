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
                ? "py-3 bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-gray-100"
                : "py-6 bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group relative shrink-0">
                        <img
                            src="/logo-bg.png"
                            alt="Nithuri Singh & Sons Logo"
                            className={cn(
                                "transition-all duration-500 object-contain",
                                scrolled ? "h-14" : "h-16"
                            )}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 mx-8 bg-gray-50/50 p-1 rounded-full border border-gray-100/50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all rounded-full h-10 flex items-center",
                                    scrolled
                                        ? "text-primary/70 hover:text-accent hover:bg-white"
                                        : "text-primary/80 hover:text-accent hover:bg-white/50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/auth" className={cn(
                            "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-accent px-4 py-2",
                            "text-primary"
                        )}>
                            Sign In
                        </Link>
                        <Link href="/auth?type=register" className={cn(
                            "px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl bg-accent text-primary"
                        )}>
                            <User size={14} />
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2.5 rounded-xl transition-all border border-gray-100",
                            scrolled ? "bg-white text-primary" : "bg-white/50 backdrop-blur-sm text-primary"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className={cn(
                    "lg:hidden absolute top-full left-0 right-0 border-b animate-in slide-in-from-top duration-300 bg-white shadow-2xl overflow-hidden"
                )}>
                    <div className="flex flex-col p-6 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "p-4 rounded-2xl text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-cream transition-all text-primary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-2">
                            <Link
                                href="/auth"
                                onClick={() => setIsOpen(false)}
                                className="p-4 rounded-2xl text-center font-bold uppercase tracking-widest text-primary border border-gray-100"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/auth?type=register"
                                onClick={() => setIsOpen(false)}
                                className="p-4 rounded-2xl text-center font-bold uppercase tracking-widest bg-accent text-primary shadow-xl"
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
