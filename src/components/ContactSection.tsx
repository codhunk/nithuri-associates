"use client";

import React from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="order-2 lg:order-1">
                        <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 block text-center lg:text-left">Contact Us</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center lg:text-left">Let's Build Something <span className="text-accent">Great</span> Together</h2>
                        <p className="text-primary/60 mb-8 sm:mb-10 text-base sm:text-lg text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                            Whether you're looking for land, starting a business, or seeking free social assistance, our doors are always open.
                        </p>

                        <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-12">
                            <div className="flex items-center sm:items-start gap-4 sm:gap-6 bg-gray-50 p-4 sm:p-0 sm:bg-transparent rounded-2xl group cursor-default">
                                <div className="bg-accent/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm sm:text-base text-primary mb-0.5 sm:mb-1">Call Us</h4>
                                    <p className="text-xs sm:text-sm text-primary/60 font-semibold">+91 9839605273, 7007717074</p>
                                </div>
                            </div>

                            <div className="flex items-center sm:items-start gap-4 sm:gap-6 bg-gray-50 p-4 sm:p-0 sm:bg-transparent rounded-2xl group cursor-default">
                                <div className="bg-growth/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-growth flex-shrink-0 group-hover:bg-growth group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm sm:text-base text-primary mb-0.5 sm:mb-1">Email Us</h4>
                                    <p className="text-xs sm:text-sm text-primary/60 font-semibold break-all">bageshwarsingh1525@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center sm:items-start gap-4 sm:gap-6 bg-gray-50 p-4 sm:p-0 sm:bg-transparent rounded-2xl group cursor-default">
                                <div className="bg-primary/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm sm:text-base text-primary mb-0.5 sm:mb-1">Our Office</h4>
                                    <p className="text-xs sm:text-sm text-primary/60 font-semibold leading-relaxed">Nithuri Singh & Sons Associates, Rural Development Block</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Placeholder */}
                        {/* <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-primary/5 shadow-inner flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="mx-auto mb-2 text-primary/20" size={48} />
                                <p className="text-xs text-primary/40 font-bold uppercase tracking-widest">Google Maps Integration</p>
                            </div>
                        </div> */}
                    </div>

                    <div className="order-1 lg:order-2 bg-white p-6 sm:p-8 lg:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Decorative blob inside form card */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h3 className="text-2xl sm:text-3xl font-black text-primary mb-2 relative z-10">Send a Message</h3>
                        <p className="text-sm text-primary/60 mb-8 font-semibold relative z-10">We usually respond within 2-4 business hours.</p>

                        <form className="space-y-5 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-1">Full Name</label>
                                    <input type="text" className="w-full bg-cream/50 border-transparent rounded-xl p-3.5 sm:p-4 text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-accent outline-none text-primary transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-1">Phone Number</label>
                                    <input type="tel" className="w-full bg-cream/50 border-transparent rounded-xl p-3.5 sm:p-4 text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-accent outline-none text-primary transition-all" placeholder="+91 00000 00000" />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-1">Subject inquiry</label>
                                <select className="w-full bg-cream/50 border-transparent rounded-xl p-3.5 sm:p-4 text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-accent outline-none text-primary transition-all appearance-none cursor-pointer">
                                    <option>Real Estate Inquiry</option>
                                    <option>Business Consultancy</option>
                                    <option>Legal Advisory</option>
                                    <option>Social Welfare Assistance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 pl-1">Message Detail</label>
                                <textarea rows={4} className="w-full bg-cream/50 border-transparent rounded-xl p-3.5 sm:p-4 text-sm font-semibold focus:bg-white focus:ring-2 focus:ring-accent outline-none text-primary transition-all resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary-light text-white py-4 sm:py-5 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 mt-4 group">
                                Send Message
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
