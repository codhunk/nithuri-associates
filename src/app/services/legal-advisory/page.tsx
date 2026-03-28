import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, ShieldAlert, FileSearch, Gavel, CheckCircle2, Bookmark } from "lucide-react";

export default function LegalAdvisoryInformatics() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Service Informatics</span>
                        <h1 className="text-5xl font-bold text-primary mb-8">Legal Title <span className="text-accent">Verification</span></h1>
                        <p className="text-primary/60 text-lg leading-relaxed mb-10">
                            Regional property transactions are often plagued by inheritance disputes and undocumented boundaries.
                            Our legal advisory wing specializes in clearing these bottlenecks before you invest.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                                <Bookmark className="text-accent" />
                                Critical Checks
                            </h3>
                            {[
                                { title: "Ownership Chain", desc: "Establishing a clear link between current sellers and historical owners." },
                                { title: "Encumbrance Status", desc: "Ensuring the land isn't mortgaged to any bank or financial institution." },
                                { title: "Inheritance Clarity", desc: "Verifying that all heirs have consented to the sale to avoid family stays." },
                                { title: "Demarcation (Shajra)", desc: "Matching physical boundaries with the village map records." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-5 bg-cream rounded-2xl border-l-4 border-accent">
                                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                    <p className="text-xs text-primary/60 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-400">
                            <ShieldAlert />
                            Common Pitfalls
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-red-400/50 transition-colors">
                                <h4 className="font-bold text-red-400 mb-2">Unregistered Agreements</h4>
                                <p className="text-sm text-white/60">Buying land on 'Notary' agreement is not a legal registry. Only registered Sale Deeds hold value in court.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-red-400/50 transition-colors">
                                <h4 className="font-bold text-red-400 mb-2">Tribal Land (Section 157)</h4>
                                <p className="text-sm text-white/60">Special permissions are required for General categories to buy tribal land. Without it, the registry is null and void.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-red-400/50 transition-colors">
                                <h4 className="font-bold text-red-400 mb-2">Dakhil Kharij Delay</h4>
                                <p className="text-sm text-white/60">Mutation must be completed within 45-90 days of registry. Delaying this can lead to 'double-sale' frauds.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-8 justify-center">
                    {[
                        { label: "Land Registry Advisory", icon: Gavel },
                        { label: "Agreement Drafting", icon: FileSearch },
                        { label: "Title Search Reports", icon: Scale },
                        { label: "Documentation Help", icon: CheckCircle2 }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 px-8 py-6 bg-white rounded-full border border-primary/5 shadow-sm">
                            <item.icon className="text-accent" size={20} />
                            <span className="font-bold text-sm text-primary">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
