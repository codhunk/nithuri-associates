"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, MapPin, DollarSign, UploadCloud, Info, X, CheckCircle2 } from "lucide-react";

export default function AddPropertyPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setImages((prev) => [...prev, ...filesArray]);
            
            const newPreviewUrls = filesArray.map((file) => URL.createObjectURL(file));
            setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            const filesArray = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
            setImages((prev) => [...prev, ...filesArray]);
            
            const newPreviewUrls = filesArray.map((file) => URL.createObjectURL(file));
            setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
        setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center relative bg-[#Fdfaf4] p-4 font-sans py-20 md:py-24">
            {/* Background design elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-emerald-500/10 blur-[150px] rounded-full opacity-60" />
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-amber-500/10 blur-[150px] rounded-full opacity-60" />
            </div>

            {/* Navigation back */}
            <Link href="/" className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors font-bold text-xs md:text-sm tracking-widest uppercase">
                <ArrowLeft size={16} className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Back</span>
            </Link>

            {/* Main Form Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
                {/* Left Side: Instructions Panel */}
                <div className="hidden md:flex flex-col w-5/12 bg-emerald-50 p-10 relative isolate border-r border-emerald-100">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
                        <Building2 className="text-emerald-500" size={28} />
                    </div>
                    <h2 className="text-2xl font-black text-primary mb-4">
                        List Your Premium Asset
                    </h2>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed font-semibold">
                        Provide accurate details to attract the right buyers. Our verification team will review your submission within 24 hours.
                    </p>
                    
                    <ul className="space-y-6 mt-auto">
                        {[
                            { title: "Verification Process", desc: "All properties undergo title and legal verification." },
                            { title: "High-Quality Images", desc: "Listings with 5+ professional photos sell 40% faster." },
                            { title: "Expert Support", desc: "Need help? Contact our advisory at 1800-NITHURI" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="text-emerald-500" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-primary">{item.title}</h4>
                                    <p className="text-xs font-semibold text-gray-500 mt-1">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Form Area */}
                <div className="flex-1 p-6 md:p-12 bg-white">
                    <div className="md:hidden text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 mb-4">
                            <Building2 className="text-emerald-500 w-6 h-6" />
                        </div>
                        <h1 className="text-2xl font-black text-primary mb-2">
                            Upload Property
                        </h1>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
                        {/* Basic Details */}
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-bold text-gray-600 pl-1">Property Title</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Info size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="E.g. Modern Villa in Downtown"
                                    className="w-full bg-[#f1f5f9] border-transparent rounded-xl py-3.5 pl-12 pr-4 text-primary placeholder:text-gray-400 focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-sans text-sm outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-gray-600 pl-1">Location</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MapPin size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="City or Region"
                                    className="w-full bg-[#f1f5f9] border-transparent rounded-xl py-3.5 pl-12 pr-4 text-primary placeholder:text-gray-400 focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-sans text-sm outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-gray-600 pl-1">Estimated Value</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <DollarSign size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Price in ₹"
                                    className="w-full bg-[#f1f5f9] border-transparent rounded-xl py-3.5 pl-12 pr-4 text-primary placeholder:text-gray-400 focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-sans text-sm outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-gray-600 pl-1">Property Type</label>
                            <select className="w-full bg-[#f1f5f9] border-transparent rounded-xl py-3.5 px-4 text-primary focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-sans text-sm appearance-none cursor-pointer outline-none">
                                <option>Residential Land</option>
                                <option>Commercial Property</option>
                                <option>Agricultural Land</option>
                                <option>Apartment / Villa</option>
                            </select>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-gray-600 pl-1">Total Area</label>
                            <input
                                type="text"
                                placeholder="E.g. 2400 sq.ft / 5 Acres"
                                className="w-full bg-[#f1f5f9] border-transparent rounded-xl py-3.5 px-4 text-primary placeholder:text-gray-400 focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-sans text-sm outline-none"
                            />
                        </div>

                        {/* Drag and Drop Image Upload Area */}
                        <div className="md:col-span-2 mt-2">
                            <input 
                                type="file" 
                                multiple 
                                accept="image/*" 
                                ref={fileInputRef} 
                                onChange={handleFileSelect} 
                                className="hidden" 
                            />
                            <div 
                                onClick={triggerFileInput}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer group text-center
                                    ${isDragging 
                                        ? "border-emerald-500 bg-emerald-50" 
                                        : "border-gray-200 bg-[#f1f5f9]/50 hover:bg-[#f1f5f9]"}`}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 ${isDragging ? "bg-emerald-500 text-white scale-110" : "bg-white text-gray-400 shadow-sm group-hover:-translate-y-1"}`}>
                                    <UploadCloud className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-bold text-primary mb-1">
                                    {isDragging ? "Drop images here" : "Click or drag to upload property images"}
                                </p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">SVG, PNG, JPG or WEBP (max. 5MB)</p>
                            </div>
                            
                            {/* Image Previews */}
                            {previewUrls.length > 0 && (
                                <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                                    {previewUrls.map((url, idx) => (
                                        <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
                                            <img src={url} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button 
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); removeImage(idx); }}
                                                    className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transform hover:scale-110 transition-all shadow-lg"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="text-sm font-bold text-gray-600 pl-1">Property Description</label>
                            <textarea
                                rows={3}
                                placeholder="Provide details about the property, nearby landmarks, and legal status."
                                className="w-full bg-[#f1f5f9] border-transparent rounded-xl py-3.5 px-4 text-primary placeholder:text-gray-400 focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all font-sans text-sm resize-none outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 mt-2">
                            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group">
                                <span>Submit Property Listing</span>
                                <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </main>
    );
}
