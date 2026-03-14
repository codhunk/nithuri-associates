import React from "react";
import { CheckCircle2, Award, Users, MapPin } from "lucide-react";

export function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-primary-light/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                                alt="Bageshwar Singh - Founder"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                                <p className="text-accent font-bold text-xl">Bageshwar Singh</p>
                                <p className="text-white/80 text-sm italic">Founder & Visionary</p>
                            </div>
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -right-8 -bottom-8 bg-accent p-8 rounded-2xl shadow-2xl z-20 text-primary hidden md:block">
                            <span className="text-3xl font-extrabold block">25+</span>
                            <span className="text-sm font-bold uppercase tracking-widest">Years of Trust</span>
                        </div>
                        {/* Grid Pattern decorative */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                    </div>

                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">About the Organization</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-6 leading-tight">
                            A Legacy of <span className="text-growth">Excellence</span> and <span className="text-accent">Social Impact</span>
                        </h2>
                        <p className="text-primary/70 dark:text-white/70 mb-8 text-sm leading-relaxed">
                            Nithuri Singh & Sons Associates has been a cornerstone in Real Estate and Social Services for over two decades.
                            Under the leadership of Bageshwar Singh, we empower individuals through accurate information,
                            strategic guidance, and exclusive investment opportunities.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {[
                                "Land Investment Experts",
                                "Business Startup Mentors",
                                "Legal & Registry Guidance",
                                "Govt Scheme Advocacy"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="bg-growth/20 p-1 rounded-full text-growth">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className="font-semibold text-primary/80 dark:text-white/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-cream rounded-2xl border-l-4 border-accent dark:bg-white/5">
                            <h4 className="font-bold text-primary dark:text-white mb-2">Our Mission</h4>
                            <p className="text-primary/60 text-sm dark:text-white/60">
                                To promote economic growth, employment opportunities, and real estate development in rural and semi-urban regions through integrity and professional consulting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
