import React from "react";
import { MessageSquare, ShieldCheck, Map, Rocket } from "lucide-react";

export function ProcessFlow() {
    const steps = [
        {
            number: "01",
            title: "Expert Consultation",
            desc: "Discuss your goals with Bageshwar Singh and our advisory team.",
            icon: MessageSquare
        },
        {
            number: "02",
            title: "Rigorous Verification",
            desc: "We perform deep-dive legal and technical due diligence.",
            icon: ShieldCheck
        },
        {
            number: "03",
            title: "Strategic Planning",
            desc: "Creating detailed project reports and roadmap for execution.",
            icon: Map
        },
        {
            number: "04",
            title: "Successful Delivery",
            desc: "Finalizing the investment or launching your new venture.",
            icon: Rocket
        }
    ];

    return (
        <section className="py-24 bg-cream dark:bg-primary-light/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
                    <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">Our <span className="text-accent">Scientific</span> Approach</h2>
                    <p className="text-primary/60 dark:text-white/60 text-lg">
                        We follow a transparent, multi-step methodology to ensure every project meets the highest standards of trust and profitability.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-primary/5 dark:bg-white/5"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group text-center lg:text-left">
                                <div className="inline-flex w-20 h-20 rounded-[2rem] bg-white dark:bg-white/5 border border-primary/5 shadow-sm items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 relative z-10">
                                    <step.icon size={32} />
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center dark:bg-white dark:text-primary border-2 border-cream dark:border-primary">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">{step.title}</h3>
                                <p className="text-primary/60 dark:text-white/60 text-sm leading-relaxed max-w-[240px] mx-auto lg:mx-0">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
