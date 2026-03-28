import React from "react";
import { BarChart3, Globe, Users, Lightbulb } from "lucide-react";

export function Highlights() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-growth rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Investor Opportunities</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight text-balance">Investing in the <span className="text-growth">Future</span> of Rural Growth</h2>
                        <p className="text-primary/60 mb-10 text-lg leading-relaxed">
                            We provide exclusive access to land development projects, Public-Private Partnership (PPP) opportunities,
                            and rural entrepreneurship initiatives that drive economic growth.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Upcoming Real Estate Projects", icon: BarChart3 },
                                { title: "Eco-Tourism & Resort Development", icon: Globe },
                                { title: "Land Development & Infrastructure", icon: Lightbulb }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-cream p-4 rounded-2xl border border-primary/5 hover:border-accent/30 transition-all cursor-default group hover:bg-white hover:shadow-xl">
                                    <div className="bg-accent/20 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="font-bold text-primary/80 group-hover:text-primary transition-colors">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm flex flex-col justify-center text-center hover:shadow-xl transition-all">
                            <span className="text-4xl font-extrabold text-accent mb-2">1000+</span>
                            <span className="text-xs uppercase tracking-widest text-primary/40 font-bold">People Assisted</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm flex flex-col justify-center text-center hover:shadow-xl transition-all mt-12">
                            <span className="text-4xl font-extrabold text-growth mb-2">500+</span>
                            <span className="text-xs uppercase tracking-widest text-primary/40 font-bold">Consultations</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm flex flex-col justify-center text-center hover:shadow-xl transition-all">
                            <span className="text-4xl font-extrabold text-primary mb-2">25+</span>
                            <span className="text-xs uppercase tracking-widest text-primary/40 font-bold">Years Exp.</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-primary/5 shadow-sm flex flex-col justify-center text-center hover:shadow-xl transition-all mt-12">
                            <span className="text-4xl font-extrabold text-accent mb-2">100%</span>
                            <span className="text-xs uppercase tracking-widest text-primary/40 font-bold">Trust Score</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
