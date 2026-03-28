"use client";

import React from "react";
import { X, MapPin, IndianRupee, Ruler, ShieldCheck, Calendar, Phone, ArrowRight } from "lucide-react";

interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    type: string;
    area: string;
    image: string;
    tag: string;
}

export function PropertyDetailModal({ property, isOpen, onClose }: { property: Property | null; isOpen: boolean; onClose: () => void }) {
    if (!isOpen || !property) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12">
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-md" onClick={onClose} />
            <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col lg:flex-row max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all shadow-lg"
                >
                    <X size={24} className="text-primary" />
                </button>

                <div className="lg:w-1/2 h-64 lg:h-auto relative">
                    <img src={property.image} alt={property.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-6 left-6 bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                        {property.tag}
                    </div>
                </div>

                <div className="lg:w-1/2 p-10 lg:p-16 overflow-y-auto">
                    <div className="flex items-center gap-2 text-accent mb-4">
                        <MapPin size={18} />
                        <span className="text-sm font-bold uppercase tracking-widest">{property.location}</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">{property.title}</h2>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="bg-growth/10 p-4 rounded-2xl text-growth">
                                <IndianRupee size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Price</p>
                                <p className="text-xl font-bold text-primary">₹{property.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/5 p-4 rounded-2xl text-primary">
                                <Ruler size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Area</p>
                                <p className="text-xl font-bold text-primary">{property.area}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-start gap-4 text-primary/70">
                            <ShieldCheck className="text-growth shrink-0" size={20} />
                            <p className="text-sm">Verified land title and legal documentation cleared by our experts.</p>
                        </div>
                        <div className="flex items-start gap-4 text-primary/70">
                            <Calendar className="text-accent shrink-0" size={20} />
                            <p className="text-sm">Ready for immediate registry and development.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`https://wa.me/919839605273?text=Hi, I am interested in ${property.title}`}
                            target="_blank"
                            className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-xl"
                        >
                            Contact Owner
                            <ArrowRight size={18} />
                        </a>
                        <button className="flex-1 border-2 border-primary/5 text-primary py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
