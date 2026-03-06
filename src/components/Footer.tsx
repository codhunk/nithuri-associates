import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer id="footer" className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex flex-col items-start mb-6">
                            <span className="text-2xl font-bold tracking-tight text-white leading-none">
                                NITHURI SINGH & SONS
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                                ASSOCIATES
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            A trusted organization with 25+ years of experience in Real Estate, Business Consultancy, and Social Services.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="/properties" className="hover:text-accent transition-colors">Properties</Link></li>
                            <li><Link href="/welfare" className="hover:text-accent transition-colors">Social Welfare</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><Link href="/services/real-estate" className="hover:text-accent transition-colors">Real Estate Investment</Link></li>
                            <li><Link href="/services/startup-dpr" className="hover:text-accent transition-colors">Business Startup DPR</Link></li>
                            <li><Link href="/services/legal-advisory" className="hover:text-accent transition-colors">Legal Title Verification</Link></li>
                            <li><Link href="/services/govt-schemes" className="hover:text-accent transition-colors">Govt Scheme Assistance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-accent shrink-0" size={18} />
                                <span>Nithuri Singh & Sons Associates, Rural/Semi-urban Region</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-accent shrink-0" size={18} />
                                <span>+91 9839605273, 7007717074</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-accent shrink-0" size={18} />
                                <span>bageshwarsingh1525@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:row items-center justify-between gap-6 text-white/40 text-xs text-center md:text-left">
                    <p>© 2025 Nithuri Singh & Sons Associates. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
