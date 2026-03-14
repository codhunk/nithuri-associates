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
        <main className="min-h-screen flex items-center justify-center relative bg-gray-100 dark:bg-gray-900 p-4 font-sans">
            {/* Dark background overlay like a modal */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0 pointer-events-none" />

            {/* Popup Card matching the requested style */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-4xl bg-white dark:bg-[#0f172a] rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px]"
            >
                {/* Close Button top-right */}
                <Link href="/" className="absolute top-6 right-6 z-20 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
                    <X size={24} />
                </Link>

                {/* Left Side: Illustration / Branding Area */}
                <div className="hidden md:flex flex-col items-center justify-center w-5/12 bg-[#Fdfaf4] dark:bg-[#1e293b] p-8 relative isolate">

                    {/* Concentric Circles Design */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[300px] h-[300px] rounded-full border border-amber-500/10 dark:border-amber-500/5" />
                        <div className="absolute w-[200px] h-[200px] rounded-full border border-amber-500/20 dark:border-amber-500/10" />
                    </div>

                    {/* Top Stat */}
                    <div className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#0f172a] shadow-lg flex items-center justify-center border border-amber-100 dark:border-white/5 mb-2">
                            <ShieldCheck className="text-amber-500" size={24} />
                        </div>
                        <span className="font-bold text-sm text-primary dark:text-white">100%</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Verified Assets</span>
                    </div>

                    {/* Left Stat */}
                    <div className="absolute bottom-[25%] left-[10%] flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500 shadow-xl shadow-emerald-500/20 flex items-center justify-center mb-2">
                            <Users className="text-white" size={24} />
                        </div>
                        <span className="font-bold text-sm text-primary dark:text-white">500+</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black text-center max-w-[80px]">Happy Families</span>
                    </div>

                    {/* Right Stat */}
                    <div className="absolute bottom-[25%] right-[10%] flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500 shadow-xl shadow-blue-500/20 flex items-center justify-center mb-2">
                            <Award className="text-white" size={24} />
                        </div>
                        <span className="font-bold text-sm text-primary dark:text-white">25+ Yrs</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black text-center max-w-[80px]">Trust & Legacy</span>
                    </div>

                    {/* Center Branding */}
                    <div className="relative z-10 flex flex-col items-center justify-center pt-8">
                        <div className="w-20 h-20 rounded-full border-2 border-primary dark:border-white flex items-center justify-center mb-4 bg-white dark:bg-black/20">
                            <Building2 className="text-primary dark:text-white" size={40} />
                        </div>
                        <h2 className="text-xl font-black text-primary dark:text-white">Nithuri & Sons</h2>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-2 text-center">
                            A Step Towards Premium Real Estate
                        </p>
                    </div>

                </div>

                {/* Right Side: Form Area */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-center bg-white dark:bg-[#0f172a]">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">
                            {isLogin ? "Sign In" : "Sign Up"}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-bold">
                            {isLogin ? "Welcome back! Please enter your details." : "Join us to explore premium property investments."}
                        </p>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            {!isLogin && (
                                <>
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-600 dark:text-gray-300">Full Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User size={18} className="text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] border-transparent rounded-xl py-3 pl-12 pr-4 text-primary dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0f172a] focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-600 dark:text-gray-300">Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Phone size={18} className="text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] border-transparent rounded-xl py-3 pl-12 pr-4 text-primary dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0f172a] focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm outline-none"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail size={18} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="jalandhar143184@gmail.com"
                                        className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] border-transparent rounded-xl py-3 pl-12 pr-4 text-primary dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0f172a] focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock size={18} className="text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full bg-[#f1f5f9] dark:bg-[#1e293b] border-transparent rounded-xl py-3.5 pl-12 pr-12 text-primary dark:text-white placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0f172a] focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm outline-none tracking-widest"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-white"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-bold group-hover:text-gray-700 dark:group-hover:text-gray-200">Remember me</span>
                                </label>
                                {isLogin && (
                                    <a href="#" className="flex-shrink-0 text-xs font-black text-amber-500 hover:text-amber-600 transition-colors uppercase tracking-widest">
                                        Forgot Password?
                                    </a>
                                )}
                            </div>

                            <button className="w-full bg-[#ffc107] hover:bg-[#ffca28] text-black py-4 rounded-xl font-black text-sm uppercase tracking-widest mt-4 transition-all shadow-lg flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 active:translate-y-0">
                                <span>{isLogin ? "Sign In" : "Sign Up"}</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="text-center mt-8">
                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button onClick={toggleMode} className="text-amber-500 hover:text-amber-600 transition-colors font-black">
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
