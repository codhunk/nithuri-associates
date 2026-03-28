"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, Phone, X, ShieldCheck, Users, Award, Building2, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const searchParams = new URLSearchParams(window.location.search);
            if (searchParams.get("type") === "register") {
                setIsLogin(false);
            }
        }
    }, []);

    const toggleMode = () => setIsLogin(!isLogin);

    return (
        <main className="min-h-screen flex items-center justify-center relative bg-gray-50 p-4 font-sans">
            {/* Background overlay like a modal */}
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm z-0 pointer-events-none" />

            {/* Popup Card matching the requested style */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px]"
            >
                {/* Close Button top-right */}
                <Link href="/" className="absolute top-6 right-6 z-20 text-gray-400 hover:text-primary transition-colors">
                    <X size={24} />
                </Link>

                {/* Left Side: Illustration / Branding Area */}
                <div className="hidden md:flex flex-col items-center justify-center w-5/12 bg-cream p-8 relative isolate">

                    {/* Concentric Circles Design */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[300px] h-[300px] rounded-full border border-accent/10" />
                        <div className="absolute w-[200px] h-[200px] rounded-full border border-accent/20" />
                    </div>

                    {/* Top Stat */}
                    <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-accent/10 mb-2">
                            <ShieldCheck className="text-accent" size={24} />
                        </div>
                        <span className="font-bold text-sm text-primary">100%</span>
                        <span className="text-[10px] text-primary/40 uppercase tracking-widest font-black">Verified Assets</span>
                    </div>

                    {/* Left Stat */}
                    <div className="absolute bottom-[25%] left-[10%] flex flex-col items-center ">
                        <div className="w-12 h-12 rounded-2xl bg-growth shadow-xl shadow-growth/20 flex items-center justify-center mb-2">
                            <Users className="text-white" size={24} />
                        </div>
                        <span className="font-bold text-sm text-primary">500+</span>
                        <span className="text-[10px] text-primary/40 uppercase tracking-widest font-black text-center max-w-[80px]">Happy Families</span>
                    </div>

                    {/* Right Stat */}
                    <div className="absolute bottom-[25%] right-[10%] flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500 shadow-xl shadow-blue-500/20 flex items-center justify-center mb-2">
                            <Award className="text-white" size={24} />
                        </div>
                        <span className="font-bold text-sm text-primary">25+ Yrs</span>
                        <span className="text-[10px] text-primary/40 uppercase tracking-widest font-black text-center max-w-[80px]">Trust & Legacy</span>
                    </div>

                    {/* Center Branding */}
                    <div className="relative z-10 flex flex-col items-center justify-center pt-8">
                        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                            <Building2 className="text-primary" size={30} />
                        </div>
                        <h2 className="text-lg font-black text-primary">Nithuri & Sons</h2>
                        <p className="text-[9px] capitalize tracking-[0.2em] font-semibold text-primary/40 mt-2 text-center">
                            A Step Towards Premium Real Estate
                        </p>
                    </div>

                </div>

                {/* Right Side: Form Area */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-white">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-3xl font-bold text-primary mb-2">
                            {isLogin ? "Sign In" : "Sign Up"}
                        </h1>
                        <p className="text-sm text-primary/60 mb-4 font-bold">
                            {isLogin ? "Welcome back! Please enter your details." : "Join us to explore premium property investments."}
                        </p>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            {!isLogin && (
                                <>
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-primary/60">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User size={18} className="text-primary/30" />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-cream border-transparent rounded-xl py-3 pl-12 pr-4 text-primary placeholder:text-primary/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none font-semibold"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-primary/60">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Phone size={18} className="text-primary/30" />
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="+91 98396 05273"
                                                className="w-full bg-cream border-transparent rounded-xl py-3 pl-12 pr-4 text-primary placeholder:text-primary/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none font-semibold"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-primary/60">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail size={18} className="text-primary/30" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="bageshwarsingh1525@gmail.com"
                                        className="w-full bg-cream border-transparent rounded-xl py-3 pl-12 pr-4 text-primary placeholder:text-primary/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none font-semibold"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-primary/60">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock size={18} className="text-primary/30" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-cream border-transparent rounded-xl py-3 pl-12 pr-12 text-primary placeholder:text-primary/30 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none tracking-widest font-semibold"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-primary/30 hover:text-primary"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-primary/20 text-accent focus:ring-accent" />
                                    <span className="text-sm text-primary/60 font-bold group-hover:text-primary">Remember me</span>
                                </label>
                                {isLogin && (
                                    <a href="#" className="flex-shrink-0 text-xs font-black text-accent hover:text-amber-600 transition-colors uppercase tracking-widest">
                                        Forgot Password?
                                    </a>
                                )}
                            </div>

                            <button className="w-full bg-accent hover:bg-amber-500 text-primary py-4 rounded-xl font-black text-sm uppercase tracking-widest mt-4 transition-all shadow-xl flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 active:translate-y-0">
                                <span>{isLogin ? "Sign In" : "Sign Up"}</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="text-center mt-8">
                            <p className="text-sm font-bold text-primary/40">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button onClick={toggleMode} className="text-accent hover:text-amber-600 transition-colors font-black">
                                    {isLogin ? "Sign up" : "Sign In"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
