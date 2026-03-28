"use client";

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919839605273"; // From your context
    const defaultMessage = "Hello Nithuri Singh & Sons! I would like to inquire about your services.";

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Popup Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between shadow-sm relative z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 relative shadow-inner">
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full"></div>
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <div className="text-white">
                                    <h4 className="font-bold text-sm tracking-wide">Nithuri & Sons</h4>
                                    <p className="text-[10px] text-white/90 lowercase font-medium">Typically replies instantly</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors bg-black/10 p-1.5 rounded-full hover:bg-black/20">
                                <X size={18} />
                            </button>
                        </div>

                        {/* WhatsApp Native Chat Body */}
                        <div className="bg-[#E5DDD5] p-4 h-56 overflow-y-auto relative">
                            {/* Doodles Background */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://i.pinimg.com/originals/ab/ab/60/abab60f06ab52fa78465d3e640c353c0.png')", backgroundSize: "300px" }}></div>
                            
                            {/* Message Bubble */}
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white text-gray-800 p-3 pt-2.5 rounded-tr-xl rounded-b-xl max-w-[85%] text-[13px] shadow-sm relative z-10"
                            >
                                <p className="font-bold text-xs text-xl text-gray-500 mb-1">Nithuri Associates Support</p>
                                <p className="leading-snug pr-2">Hello! 👋 Welcome to Nithuri Singh & Sons Associates. How can we help you today with your real estate or consultancy needs?</p>
                                <span className="text-[9px] text-gray-400 block text-right mt-1 font-semibold">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="bg-[#f0f2f5] p-3 flex items-center gap-2 relative z-20">
                            <a 
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full relative group block"
                            >
                                <div className="w-full bg-white rounded-full px-5 py-3 text-[13px] text-gray-400 border border-transparent group-hover:border-[#25D366]/30 transition-colors flex items-center justify-between shadow-sm cursor-text">
                                    <span className="font-medium">Type a message...</span>
                                    <div className="bg-[#25D366] p-1.5 rounded-full text-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Send size={14} className="ml-0.5" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bubble Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 p-3 sm:px-4 sm:py-3.5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 z-50 group hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)] border-2 border-white/20 bg-[#25D366] text-white`}
            >
                {isOpen ? (
                    <X size={24} className="mx-1" />
                ) : (
                    <>
                        {/* Perfect WhatsApp SVG Logo */}
                        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-sm group-hover:animate-pulse" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                        </svg>
                        <span className="font-bold text-[13px] tracking-wide hidden sm:block pr-1 drop-shadow-sm">Chat on WhatsApp</span>
                    </>
                )}
            </button>
        </div>
    );
}

