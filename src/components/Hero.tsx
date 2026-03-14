"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, TrendingUp, ChevronDown, Award, ChevronLeft, ChevronRight, Search, MapPin, Home, Phone } from "lucide-react";

const carouselImages = [
    {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80",
        title: "Premium Real Estate",
        desc: "Exclusive land and property opportunities."
    },
    {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        title: "Modern Infrastructure",
        desc: "Regional development and growth advisory."
    },
    {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        title: "Professional Consultancy",
        desc: "25+ years of expert startup guidance."
    },
    {
        url: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        title: "Trusted Legal Support",
        desc: "Comprehensive title verification services."
    }
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTab, setSearchTab] = useState("Buy");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

    return (
        <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
            {/* Background Layer: Mesh Gradient & Dot Pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-mesh-gradient opacity-60 dark:opacity-40" />
                <div className="absolute inset-0 bg-dot-pattern opacity-100 dark:opacity-50" />

                {/* Large Background Blur Blobs */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full animate-float opacity-70" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-growth/20 blur-[150px] rounded-full [animation-delay:2s] animate-float opacity-70" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-12 xl:col-span-6 text-center xl:text-left flex flex-col items-center xl:items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center xl:items-start"
                        >
                            <div className="inline-flex items-center gap-3 glass-premium px-6 py-2.5 rounded-full text-sm font-bold mb-8 group cursor-default">
                                <Award className="text-accent animate-bounce" size={18} />
                                <span className="text-primary dark:text-white tracking-[0.2em] text-[10px] font-bold">
                                    Trusted by 1000+ Clients Nationwide
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-[1.1] text-primary dark:text-white mb-6 tracking-tight">
                                Securing Your
                                <span className="text-gradient-gold"> Future</span> & <span className="text-gradient-emerald">Legacy</span>
                            </h1>

                            <p className="text-base md:text-sm text-primary/60 dark:text-white/60 mb-8 max-w-2xl leading-relaxed mx-auto xl:mx-0">
                                Nithuri Singh & Sons Associates: Professional land advisory, startup consultancy,
                                and legal verification with a 25-year legacy of excellence.
                            </p>

                            {/* Functional Search Bar */}
                            <div className="w-full mt-6 bg-white dark:bg-[#0f172a] p-3 md:p-4 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 flex flex-col gap-3 relative z-40 max-w-2xl mx-auto xl:mx-0 transition-all">
                                {/* Search Tabs */}
                                <div className="flex gap-2 px-2 border-b border-gray-100 dark:border-white/5 pb-3">
                                    {["Buy", "Rent", "Commercial"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setSearchTab(tab)}
                                            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${tab === searchTab
                                                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
                                                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Search Inputs Container */}
                                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                                    <div className="flex-[2] bg-[#f1f5f9] dark:bg-[#1e293b] rounded-2xl flex items-center px-4 py-3.5 border border-transparent focus-within:border-emerald-400 transition-colors">
                                        <MapPin size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                                        <input
                                            type="text"
                                            placeholder="City, Locality or Project..."
                                            className="bg-transparent w-full text-sm outline-none text-primary dark:text-white placeholder:text-gray-400 font-semibold"
                                        />
                                    </div>
                                    <div className="flex-1 bg-[#f1f5f9] dark:bg-[#1e293b] rounded-2xl flex items-center px-4 py-3.5 border border-transparent focus-within:border-emerald-400 transition-colors hidden md:flex relative">
                                        <Home size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                                        <select className="bg-transparent w-full text-sm outline-none text-primary dark:text-white cursor-pointer appearance-none font-semibold">
                                            <option>Property Type</option>
                                            <option>Apartment</option>
                                            <option>Villa</option>
                                            <option>Independent House</option>
                                            <option>Plot / Land</option>
                                        </select>
                                        <ChevronDown size={14} className="text-gray-400 absolute right-4 pointer-events-none" />
                                    </div>
                                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl px-6 py-3.5 font-bold text-xs tracking-widest uppercase transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 group">
                                        <Search size={16} className="group-hover:-rotate-12 transition-transform duration-300" />
                                        <span>Search</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-12 xl:col-span-6 relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8] xl:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white dark:border-primary-light"
                    >
                        {/* Professional Quick Actions Panel on Right Side */}
                        <div className="absolute top-6 right-6 md:top-6 md:right-6 z-30 flex flex-col gap-3 items-end">
                            <div className="bg-black/40 p-4 md:p-5 rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-xl flex flex-col gap-3 shadow-2xl w-[250px] md:w-[280px]">
                                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 md:pb-3">
                                    <h4 className="text-white text-[10px] md:text-[11px] uppercase font-bold tracking-widest">Client Portal</h4>
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-growth animate-pulse" />
                                </div>

                                <Link href="/properties/add" className="group flex items-center justify-between gap-4 md:gap-6 bg-growth hover:bg-emerald-400 text-white px-4 md:px-5 py-3 md:py-3.5 rounded-xl font-bold text-[10px] md:text-[11px] uppercase tracking-widest transition-all shadow-lg w-full">
                                    <span>Upload Property</span>
                                    <Building2 size={16} className="group-hover:-translate-y-1 transition-transform" />
                                </Link>

                                <Link href="/contact" className="group flex items-center justify-center gap-3 bg-accent hover:bg-amber-400 text-[#0f172a] px-4 md:px-5 py-3 md:py-3.5 rounded-xl font-bold text-[10px] md:text-[11px] uppercase tracking-widest transition-all shadow-lg w-full">
                                    <Phone size={14} className="group-hover:-rotate-12 transition-transform" />
                                    <span>Get Consult</span>
                                </Link>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={carouselImages[currentIndex].url}
                                    alt={carouselImages[currentIndex].title}
                                    className="w-full h-full object-cover opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="absolute bottom-10 left-10 text-white"
                                >
                                    <h3 className="text-3xl font-bold mb-2">{carouselImages[currentIndex].title}</h3>
                                    <p className="text-white/70 text-sm font-bold tracking-wide">{carouselImages[currentIndex].desc}</p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Controls */}
                        <div className="absolute bottom-10 right-10 flex gap-3">
                            <button onClick={prevSlide} className="p-3 glass-premium text-white rounded-full hover:bg-white/20 transition-all active:scale-90">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-3 glass-premium text-white rounded-full hover:bg-white/20 transition-all active:scale-90">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="mt-16 flex flex-wrap justify-center xl:justify-start items-center gap-8 lg:gap-16 border-t border-primary/5 dark:border-white/5 pt-12"
                >
                    {[
                        { label: "Verified Assets", value: "500+", icon: Building2, color: "text-blue-500" },
                        { label: "Success Rate", value: "99.9%", icon: TrendingUp, color: "text-growth" },
                        { label: "Legacy Years", value: "25+", icon: ShieldCheck, color: "text-accent" },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4 group">
                            <div className={`${stat.color} bg-white dark:bg-white/5 p-3.5 rounded-2xl shadow-lg border border-primary/5 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-xl font-bold text-primary dark:text-white">{stat.value}</div>
                                <div className="text-[8px] uppercase font-bold tracking-widest text-primary/40 dark:text-white/40">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer pointer-events-none hidden xl:flex"
            >
                <span className="uppercase text-[9px] font-bold tracking-[0.3em] dark:text-white">Scroll</span>
                <ChevronDown className="dark:text-white" size={16} />
            </motion.div>
        </section>
    );
}
