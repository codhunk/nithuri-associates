import { Navbar } from "@/components/Navbar";
import { PropertyListing } from "@/components/PropertyListing";
import { Footer } from "@/components/Footer";
import { FileCheck, MapPin, Scale, Search } from "lucide-react";

export default function PropertiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <PropertyListing />

                <section className="py-24 border-t border-primary/5 bg-cream">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 text-center">
                            <h2 className="text-4xl font-bold text-primary mb-6">Property Buying <span className="text-accent">Protocol</span></h2>
                            <p className="text-primary/60 max-w-2xl mx-auto">
                                Every property listed on our platform undergoes a 3-layer verification process. Here's how we ensure your investment is safe.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Step 1: Physical Survey", icon: MapPin, desc: "We verify the ground boundaries matching the revenue maps." },
                                { title: "Step 2: Revenue Search", icon: FileCheck, desc: "30-year search of 'Registrar-II' records to check for liens." },
                                { title: "Step 3: Legal Audit", icon: Scale, desc: "Our partners verify the family tree (Vanshavali) for clear title." },
                                { title: "Step 4: Buyer Sync", icon: Search, desc: "Full transparency on land category (Abadi, Ag, etc.) for registration." }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-primary/5 group hover:bg-accent hover:text-white transition-all duration-500">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <step.icon size={24} />
                                    </div>
                                    <h4 className="font-bold mb-3">{step.title}</h4>
                                    <p className="text-xs text-primary/60 group-hover:text-white/80 leading-relaxed transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
