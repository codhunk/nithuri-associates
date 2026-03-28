import React from "react";
import { ShieldCheck, FileText, Search, Lightbulb, ArrowRight } from "lucide-react";

export function KnowledgeHub() {
    const topics = [
        {
            title: "Land Title Verification",
            icon: ShieldCheck,
            tip: "Security First",
            desc: "Always verify the '7/12 extract' and 'Encumbrance Certificate' before any land deal to ensure a 100% dispute-free property.",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Startup Success (DPR)",
            icon: FileText,
            tip: "Strategic Planning",
            desc: "A Detailed Project Report is your roadmap for bank loans and govt subsidies. It must include market analysis and technical feasibility.",
            color: "text-growth",
            bg: "bg-growth/10"
        },
        {
            title: "Govt Scheme Eligibility",
            icon: Search,
            tip: "Social Support",
            desc: "Check your eligibility for PMEGP, MSME loans, and regional housing schemes. Most rural benefits remain unclaimed due to lack of info.",
            color: "text-accent",
            bg: "bg-accent/10"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Educational Hub</span>
                        <h2 className="text-4xl font-bold text-primary mb-6">Expert <span className="text-accent">Knowledge</span> for Better Decisions</h2>
                        <p className="text-primary/60 text-lg leading-relaxed">
                            We believe in empowering our clients with the right information. Explore these quick guides to navigate the complexities of real estate and business.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {topics.map((topic, idx) => (
                        <div key={idx} className="group p-8 rounded-[2.5rem] bg-cream/50 border border-primary/5 hover:border-accent/20 transition-all duration-500 hover:bg-white hover:shadow-2xl">
                            <div className={`w-14 h-14 ${topic.bg} ${topic.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                                <topic.icon size={28} />
                            </div>
                            <div className="inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-accent mb-4 border border-primary/5 shadow-sm">
                                {topic.tip}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{topic.title}</h3>
                            <p className="text-primary/60 mb-8 leading-relaxed text-sm">
                                {topic.desc}
                            </p>
                            <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors">
                                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-2">Need a detailed consultancy guide?</h4>
                        <p className="text-white/60 text-sm">Download our free PDF guide on "Rural Investment Strategies 2025".</p>
                    </div>
                    <button className="relative z-10 bg-accent text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-accent/20">
                        Get Knowledge Pack
                        <Lightbulb size={18} />
                    </button>
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
