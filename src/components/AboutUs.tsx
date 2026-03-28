import React from "react";
import { CheckCircle2, Award, Users, MapPin } from "lucide-react";

export function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="/director.png"
                                alt="Bageshwar Singh - Director"
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                                <p className="text-accent font-bold text-xl">Bageshwar Singh</p>
                                <p className="text-white text-sm italic opacity-80 decoration-accent/30 decoration-thickness-2 underline-offset-4 underline">Founder & Visionary</p>
                            </div>
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -right-8 -bottom-8 bg-accent p-8 rounded-2xl shadow-2xl z-20 text-white hidden md:block">
                            <span className="text-3xl font-extrabold block">25+</span>
                            <span className="text-sm font-bold uppercase tracking-widest leading-tight block">Years of <br />Trust</span>
                        </div>
                        {/* Grid Pattern decorative */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                    </div>

                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">About the Organization</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                            A Legacy of <span className="text-growth">Excellence</span> and <span className="text-accent underline decoration-accent/20 underline-offset-8">Social Impact</span>
                        </h2>
                        <p className="text-primary/70 mb-8 text-sm leading-relaxed">
                            Nithuri Singh & Sons Associates carries a 25-year legacy built by Shri Nithuri Singh, now led by Bageshwar Singh (MBA). 
                            We bridge traditional business values with modern, strategic guidance in Real Estate, 
                            Business Consultancy, and Social Welfare.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {[
                                "Complete Property Solutions",
                                "MBA-Driven Strategies",
                                "Govt Funding & Subsidies",
                                "Social & Career Counseling"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 group">
                                    <div className="bg-growth p-1.5 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="font-semibold text-primary/80">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-cream rounded-2xl border-l-4 border-accent shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Award className="text-accent" size={20} />
                                Our Vision
                            </h4>
                            <p className="text-primary/60 text-sm italic">
                                To create an ecosystem of growth where top-tier consultancy and property solutions are accessible to everyone, ensuring our society thrives through youth and labor empowerment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
