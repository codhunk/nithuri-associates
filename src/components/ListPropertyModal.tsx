"use client";

import React from "react";
import { X, Upload, Home, MapPin, IndianRupee } from "lucide-react";

export function ListPropertyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white dark:bg-primary w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                <div className="p-8 border-b border-primary/5 dark:border-white/10 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-primary dark:text-white">List Your Property</h2>
                    <button onClick={onClose} className="p-2 hover:bg-cream dark:hover:bg-white/5 rounded-full transition-colors">
                        <X size={24} className="text-primary dark:text-white" />
                    </button>
                </div>

                <form className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Property Title</label>
                            <input type="text" className="w-full bg-cream dark:bg-white/5 border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="Plot in Green Valley" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Property Type</label>
                            <select className="w-full bg-cream dark:bg-white/5 border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white">
                                <option>Residential</option>
                                <option>Commercial</option>
                                <option>Plot</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Location</label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-4 text-primary/30" size={20} />
                            <input type="text" className="w-full bg-cream dark:bg-white/5 border border-primary/10 rounded-xl p-4 pl-12 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="City, State" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Expected Price (₹)</label>
                            <input type="text" className="w-full bg-cream dark:bg-white/5 border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="e.g. 50,00,000" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Area (sqft)</label>
                            <input type="text" className="w-full bg-cream dark:bg-white/5 border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="e.g. 1500" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Property Image</label>
                        <div className="w-full border-2 border-dashed border-primary/10 dark:border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-accent group transition-all cursor-pointer">
                            <div className="p-4 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <Upload size={32} />
                            </div>
                            <p className="text-sm font-semibold text-primary/40 dark:text-white/40">Drag and drop or click to upload</p>
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-light transition-all shadow-xl dark:bg-accent dark:text-primary">
                        Submit for Review
                    </button>
                </form>
            </div>
        </div>
    );
}
