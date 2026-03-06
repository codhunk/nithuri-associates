"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, TrendingUp, ChevronDown, Award, ChevronLeft, ChevronRight } from "lucide-react";

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
                                <span className="text-primary dark:text-white uppercase tracking-[0.2em] text-[10px] font-black">
                                    Trusted by 1000+ Clients Nationwide
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-primary dark:text-white mb-6 tracking-tight">
                                Securing Your <br />
                                <span className="text-gradient-gold">Future</span> & <span className="text-gradient-emerald">Legacy</span>
                            </h1>

                            <p className="text-base md:text-lg text-primary/60 dark:text-white/60 mb-8 max-w-2xl leading-relaxed mx-auto xl:mx-0">
                                Nithuri Singh & Sons Associates: Professional land advisory, startup consultancy,
                                and legal verification with a 25-year legacy of excellence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center xl:justify-start w-full">
                                <button className="group relative bg-[#0f172a] text-white dark:bg-accent dark:text-primary px-6 py-4 rounded-full font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explore Opportunities
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
                                    </span>
                                </button>
                                <button className="glass-premium text-primary dark:text-white px-6 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:bg-primary/5 dark:hover:bg-white/5 active:scale-95 border border-primary/5 shadow-xl">
                                    Get Expert Consultation
                                </button>
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
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="absolute bottom-10 left-10 text-white"
                                >
                                    <h3 className="text-3xl font-black mb-2">{carouselImages[currentIndex].title}</h3>
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
                                <div className="text-2xl font-black text-primary dark:text-white">{stat.value}</div>
                                <div className="text-[10px] uppercase font-black tracking-widest text-primary/40 dark:text-white/40">{stat.label}</div>
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
                <span className="uppercase text-[9px] font-black tracking-[0.3em] dark:text-white">Scroll</span>
                <ChevronDown className="dark:text-white" size={16} />
            </motion.div>
        </section>
    );
}
