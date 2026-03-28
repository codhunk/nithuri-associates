import React from "react";
import { Trees, Warehouse, Waves, Coffee, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Eco-Tourism Park",
        desc: "A sustainable development project focusing on nature-first living and biodiversity preservation.",
        icon: Trees,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "bg-emerald-500"
    },
    {
        title: "Luxury Resort Development",
        desc: "Premium hospitality infrastructure in semi-urban regions to promote local tourism.",
        icon: Warehouse,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "bg-blue-500"
    },
    {
        title: "Lakefront Boating & Café",
        desc: "Transforming local water bodies into recreational hubs with boating and modern cafés.",
        icon: Waves,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        color: "bg-cyan-500"
    }
];

export function TourismProjects() {
    return (
        <section className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Future Vision</span>
                    <h2 className="text-4xl font-bold text-primary mb-6">Tourism & Development Projects</h2>
                    <p className="text-primary/60 leading-relaxed">
                        Envisioning a future where rural and semi-urban regions thrive through sustainable tourism
                        and modern infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-8 flex flex-col justify-end">
                                <div className={`${project.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <project.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.desc}
                                </p>
                                <button className="flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all">
                                    Project Details
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
