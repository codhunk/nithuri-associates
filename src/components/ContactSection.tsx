"use client";

import React from "react";
import { Send, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
                        <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">Let's Build Something <span className="text-accent">Great</span> Together</h2>
                        <p className="text-primary/60 dark:text-white/60 mb-10 text-lg">
                            Whether you're looking for land, starting a business, or seeking free social assistance, our doors are always open.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-6">
                                <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary dark:text-white mb-1">Call Us</h4>
                                    <p className="text-primary/60 dark:text-white/60">+91 9839605273, 7007717074</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-growth/10 p-4 rounded-2xl text-growth">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary dark:text-white mb-1">Email Us</h4>
                                    <p className="text-primary/60 dark:text-white/60">bageshwarsingh1525@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-primary/5 p-4 rounded-2xl text-primary dark:text-white/20 dark:text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary dark:text-white mb-1">Our Office</h4>
                                    <p className="text-primary/60 dark:text-white/60">Nithuri Singh & Sons Associates, Rural Development Block</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Placeholder */}
                        <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-primary/5 shadow-inner flex items-center justify-center dark:bg-white/5">
                            <div className="text-center">
                                <MapPin className="mx-auto mb-2 text-primary/20 dark:text-white/20" size={48} />
                                <p className="text-xs text-primary/40 dark:text-white/40 font-bold uppercase tracking-widest">Google Maps Integration</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-cream p-10 rounded-3xl dark:bg-white/5 border border-primary/5 shadow-xl">
                        <h3 className="text-2xl font-bold text-primary dark:text-white mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-white dark:bg-primary border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-white dark:bg-primary border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="+91 0000000000" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Subject</label>
                                <select className="w-full bg-white dark:bg-primary border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white">
                                    <option>Real Estate Inquiry</option>
                                    <option>Business Consultancy</option>
                                    <option>Legal Advisory</option>
                                    <option>Social Welfare Assistance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-primary/50 dark:text-white/50 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-white dark:bg-primary border border-primary/10 rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none dark:text-white" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-light transition-all shadow-lg dark:bg-accent dark:text-primary">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919839605273"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2"
            >
                <MessageSquare size={24} />
                <span className="font-bold hidden md:inline">Chat with Us</span>
            </a>
        </section>
    );
}
