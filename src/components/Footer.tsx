import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Building2, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer id="footer" className="bg-[#0b1120] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-white/10 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-growth/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Newsletter Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10 mb-12 sm:mb-16">
                    <div className="max-w-xl text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">Subscribe to our Market Insights</h3>
                        <p className="text-white/60 text-sm sm:text-base">Get the latest updates on real estate trends, new properties, and investment opportunities delivered directly to your inbox.</p>
                    </div>
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 sm:gap-0 bg-white/5 p-2 rounded-2xl sm:rounded-full border border-white/10 flex-shrink-0">
                        <input 
                            type="email" 
                            placeholder="Enter your email address..." 
                            className="bg-transparent border-none outline-none text-white px-6 py-3 w-full sm:w-72 text-sm placeholder:text-white/40"
                        />
                        <button className="bg-accent hover:bg-amber-400 text-[#0b1120] px-8 py-3 rounded-xl sm:rounded-full font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group">
                            Subscribe
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
                            <div className="p-2.5 bg-accent text-primary rounded-xl group-hover:rotate-[360deg] transition-all duration-700 shadow-xl">
                                <Building2 size={24} />
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tighter flex items-center gap-1 text-white">
                                    Nithuri <span className="underline decoration-2 underline-offset-4 decoration-accent/50 text-accent">Singh</span> & Sons
                                </span>
                                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Real Estate & Advisory</p>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-8 pr-4">
                            A highly trusted organization with over 25 years of excellence in Real Estate development, Startup Business Consultancy, and comprehensive Legal Verification services.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#0b1120] transition-all hover:-translate-y-1">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-white/60 text-sm font-medium">
                            <li><Link href="/" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent hover:translate-x-1 transition-all inline-block">About Company</Link></li>
                            <li><Link href="/services" className="hover:text-accent hover:translate-x-1 transition-all inline-block">All Services</Link></li>
                            <li><Link href="/properties" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Property Listings</Link></li>
                            <li><Link href="/contact" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Real Estate Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Real Estate</h4>
                        <ul className="space-y-4 text-white/60 text-sm font-medium">
                            <li><Link href="/services" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Buy Residential Property</Link></li>
                            <li><Link href="/services" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Commercial Real Estate</Link></li>
                            <li><Link href="/services" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Land & Plot Investments</Link></li>
                            <li><Link href="/services" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Property Valuation</Link></li>
                            <li><Link href="/services" className="hover:text-accent hover:translate-x-1 transition-all inline-block">Title Verification</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Contact Us</h4>
                        <ul className="space-y-5 text-white/60 text-sm">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-accent shrink-0 mt-0.5"><MapPin size={16} /></div>
                                <span className="leading-relaxed">Nithuri Singh & Sons Associates, Rural Development Block, UP, India</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-accent shrink-0"><Phone size={16} /></div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-white/80">+91 9839605273</span>
                                    <span className="font-semibold text-white/80">+91 7007717074</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 bg-white/5 rounded-lg text-accent shrink-0"><Mail size={16} /></div>
                                <span>bageshwarsingh1525@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4 pt-2 mt-2 border-t border-white/10">
                                <div className="p-2 bg-white/5 rounded-lg text-growth shrink-0"><Clock size={16} /></div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-white/40 font-bold mb-0.5">Operating Hours</span>
                                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs text-center md:text-left mt-8 lg:mt-0">
                    <p>© 2025 Nithuri Singh & Sons Associates. All rights reserved.</p>
                    <p>Managed by <span className="text-white hover:text-accent font-bold transition-colors cursor-pointer">Webduality</span></p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
