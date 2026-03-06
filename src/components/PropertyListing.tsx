"use client";

import React, { useState } from "react";
import { Search, MapPin, IndianRupee, Home, Filter, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ListPropertyModal } from "./ListPropertyModal";
import { PropertyDetailModal } from "./PropertyDetailModal";

const properties = [
    {
        id: 1,
        title: "Eco-Friendly Residential Plot",
        location: "Rural Development Zone A",
        price: "15,00,000",
        type: "Residential",
        area: "1200 sqft",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
        tag: "New"
    },
    {
        id: 2,
        title: "Commercial Space for Startups",
        location: "Semi-Urban Center",
        price: "45,00,000",
        type: "Commercial",
        area: "2500 sqft",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tag: "Trending"
    },
    {
        id: 3,
        title: "Lakeview Development Land",
        location: "Near Eco-Tourism Project",
        price: "85,00,000",
        type: "Plot",
        area: "5000 sqft",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
        tag: "Investor's Choice"
    }
];

export function PropertyListing() {
    const [filter, setFilter] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState<any>(null);

    const filteredProperties = filter === "All"
        ? properties
        : properties.filter(p => p.type === filter);

    return (
        <section id="properties" className="py-24 bg-white dark:bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-xl">
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Available Projects</span>
                        <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Explore Premium <span className="text-accent">Properties</span></h2>
                        <p className="text-primary/60 dark:text-white/60">
                            Verified land and commercial opportunities vetted by our legal experts for a secure investment.
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-light transition-all dark:bg-accent dark:text-primary"
                    >
                        <Plus size={20} />
                        List Your Property
                    </button>
                </div>

                <ListPropertyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <PropertyDetailModal property={selectedProperty} isOpen={!!selectedProperty} onClose={() => setSelectedProperty(null)} />

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {["All", "Residential", "Commercial", "Plot"].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                filter === f
                                    ? "bg-accent border-accent text-primary shadow-lg"
                                    : "bg-transparent border-primary/10 text-primary/60 hover:border-accent dark:border-white/10 dark:text-white/60"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(property => (
                        <div key={property.id} className="group bg-cream dark:bg-white/5 rounded-3xl overflow-hidden border border-primary/5 hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-accent text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    {property.tag}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-accent mb-4">
                                    <MapPin size={16} />
                                    <span className="text-xs font-bold uppercase tracking-tighter">{property.location}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{property.title}</h3>
                                <div className="flex items-center justify-between mt-6 pt-6 border-t border-primary/5">
                                    <div className="flex items-center gap-1 text-growth font-extrabold text-lg">
                                        <IndianRupee size={18} />
                                        <span>{property.price}</span>
                                    </div>
                                    <div className="text-xs font-bold text-primary/40 dark:text-white/40 uppercase tracking-widest">
                                        {property.area}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProperty(property)}
                                    className="w-full mt-6 bg-white dark:bg-primary border border-primary/10 dark:border-white/10 py-3 rounded-xl font-bold text-primary dark:text-white hover:bg-accent hover:border-accent hover:text-primary transition-all"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
