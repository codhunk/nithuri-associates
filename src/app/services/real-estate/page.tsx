import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building, ShieldCheck, Map, ArrowRight, CheckCircle2, Info } from "lucide-react";

export default function RealEstateInformatics() {
    return (
        <main className="min-h-screen bg-white dark:bg-primary">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Service Informatics</span>
                        <h1 className="text-5xl font-bold text-primary dark:text-white mb-8">Real Estate <span className="text-accent">Investment</span> Guide</h1>
                        <p className="text-primary/60 dark:text-white/60 text-lg leading-relaxed mb-10">
                            Investing in rural and semi-urban land requires a scientific approach to valuation and legal security.
                            Our guide helps you navigate the complexities of property acquisition in the regional market.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Title Verification", desc: "The most critical step. We verify the chain of ownership for the last 30 years." },
                                { title: "Land Categories", desc: "Understanding the difference between Agricultural, Residential, and Commercial conversion (NA) land." },
                                { title: "Registry Process", desc: "Step-by-step guidance through the Sub-Registrar office protocols and stamp duty." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 bg-cream dark:bg-white/5 rounded-2xl border border-primary/5">
                                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-primary/60 dark:text-white/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <Info className="text-accent" />
                                Expert Tip
                            </h2>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-8 italic text-white/80">
                                "Never finalize a land deal without checking the latest 'Khasra' and 'Khatauni' records on the government Bhulekh portal. Digital records must match physical possession."
                            </div>
                            <h3 className="font-bold text-xl mb-6">Key Documentation:</h3>
                            <ul className="space-y-4">
                                {["Sale Deed / Registry", "Mutation Records (Dakhil-Kharij)", "Encumbrance Certificate", "Land Conversion Certificate", "Possession Letter"].map(doc => (
                                    <li key={doc} className="flex items-center gap-3 text-white/70 text-sm">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 border border-primary/5 rounded-3xl bg-accent/5">
                        <Building className="text-accent mb-6" size={32} />
                        <h3 className="text-xl font-bold mb-4">Market Valuation</h3>
                        <p className="text-sm text-primary/60 dark:text-white/60 leading-relaxed">
                            We use comparative market analysis and infrastructure growth project data to estimate future ROI on your plots.
                        </p>
                    </div>
                    <div className="p-8 border border-primary/5 rounded-3xl bg-growth/5">
                        <Map className="text-growth mb-6" size={32} />
                        <h3 className="text-xl font-bold mb-4">Regional Connectivity</h3>
                        <p className="text-sm text-primary/60 dark:text-white/60 leading-relaxed">
                            Distance from upcoming highways and industrial corridors is the biggest factor in regional land appreciation.
                        </p>
                    </div>
                    <div className="p-8 border border-primary/5 rounded-3xl bg-blue-500/5">
                        <ShieldCheck className="text-blue-500 mb-6" size={32} />
                        <h3 className="text-xl font-bold mb-4">Registry Shield</h3>
                        <p className="text-sm text-primary/60 dark:text-white/60 leading-relaxed">
                            Our team ensures that your registry is 100% compliant with local laws, avoiding future litigation.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
