"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000); // 3 second delay for professional feel
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookie-consent", "rejected");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="fixed bottom-0 left-0 z-[200] w-full"
                >
                    <div className="bg-white border-t border-gray-100 shadow-[0_-15px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                        {/* Status bar */}
                        <div className="h-1.5 w-full bg-accent/20">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                                className="h-full bg-accent"
                            />
                        </div>

                        <div className="max-w-7xl mx-auto px-6 py-6">
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                                {/* Left Side: Icon & Text */}
                                <div className="flex items-start gap-8 flex-1">
                                    <div className="bg-primary/5 p-5 rounded-3xl hidden md:flex items-center justify-center flex-shrink-0 animate-pulse">
                                        <Cookie className="text-accent" size={40} strokeWidth={1.5} />
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                            <ShieldCheck size={16} className="text-growth" />
                                            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary/40">Privacy Assurance</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-primary mb-3 tracking-tight">Your Privacy Matters</h3>
                                        <p className="text-base text-primary/60 leading-relaxed max-w-2xl font-medium">
                                            We use analytical cookies to understand how you interact with our services and to provide a more
                                            tailored, secure experience. By clicking <span className="text-primary font-bold">"Accept All"</span>,
                                            you help us improve Nithuri Singh & Sons for everyone.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side: Buttons */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                                    <button
                                        onClick={handleReject}
                                        className="group w-full sm:w-auto px-10 py-4.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary/40 hover:text-primary transition-all active:scale-95 border border-primary/5 hover:bg-primary/5 rounded-2xl"
                                    >
                                        I Decline
                                    </button>
                                    <button
                                        onClick={handleAccept}
                                        className="w-full sm:w-auto bg-primary text-white hover:bg-accent hover:text-primary px-12 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl hover:shadow-accent/40 active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        Accept All Cookies
                                    </button>
                                </div>

                                {/* Close button */}
                                <button
                                    onClick={handleReject}
                                    className="absolute top-6 right-6 p-2 text-primary/20 hover:text-primary transition-colors lg:hidden"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
