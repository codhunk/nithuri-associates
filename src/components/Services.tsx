import React from "react";
import { Building, TrendingUp, Scale, Heart, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Real Estate Services",
        icon: Building,
        desc: "Buying and selling land, property listings, commercial opportunities, and construction guidance.",
        items: ["Property Listings", "Registry Guidance", "Construction Support"],
        color: "bg-blue-500",
        link: "/services/real-estate"
    },
    {
        title: "Business Consultancy",
        icon: TrendingUp,
        desc: "Startup consultancy, DPR preparation, business idea selection, and loan assistance.",
        items: ["DPR Preparation", "Startup Guidance", "Loan & Subsidy"],
        color: "bg-growth",
        link: "/services/startup-dpr"
    },
    {
        title: "Legal Advisory",
        icon: Scale,
        desc: "Land title verification, registry guidance, land dispute consultation, and documentation.",
        items: ["Title Verification", "Dispute Resolution", "Documentation"],
        color: "bg-accent",
        link: "/services/legal-advisory"
    },
    {
        title: "Social Welfare",
        icon: Heart,
        desc: "100% Free services for government scheme assistance, education guidance, and career counseling.",
        items: ["Govt Schemes", "Education Support", "Youth Career"],
        color: "bg-red-500",
        highlight: "100% Free Service",
        link: "/services/govt-schemes"
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">What We Offer</span>
                    <h2 className="text-4xl font-bold text-primary mb-6 text-balance">Expertise Across Multiple Domains</h2>
                    <p className="text-primary/60">
                        From securing your first land investment to scaling your business or accessing free social support,
                        we provide end-to-end assistance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-primary/5 relative overflow-hidden"
                        >
                            {service.highlight && (
                                <div className="absolute -right-12 top-6 bg-red-500 text-white text-[10px] font-bold py-1 px-12 rotate-45 shadow-sm">
                                    {service.highlight}
                                </div>
                            )}

                            <div className={cn("inline-flex p-4 rounded-2xl text-white mb-6 transition-transform group-hover:scale-110 shadow-lg shadow-current/20", service.color)}>
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                            <p className="text-sm text-primary/60 mb-6 line-clamp-3 leading-relaxed">
                                {service.desc}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.items.map(item => (
                                    <li key={item} className="text-xs font-semibold text-primary/80 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={service.link}
                                className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all"
                            >
                                Learn More
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
