import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Search, Users, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export default function GovtSchemesInformatics() {
    return (
        <main className="min-h-screen bg-white dark:bg-primary">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-growth font-bold uppercase tracking-widest text-sm mb-4 block">100% Free Social Service</span>
                    <h1 className="text-5xl font-bold text-primary dark:text-white mb-8">Empowerment Through <span className="text-growth">Information</span></h1>
                    <p className="text-primary/60 dark:text-white/60 text-lg leading-relaxed">
                        Most government schemes fail to reach the intended beneficiaries due to lack of awareness and documentation complexity.
                        We bridge this gap with free consultancy.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Search className="text-growth" />
                                Top Govt Schemes We Cover
                            </h2>
                            <div className="grid gap-6">
                                {[
                                    { title: "PMEGP Loan", desc: "Up to 35% subsidy for manufacturing and service setups in rural regions.", link: "https://www.kviconline.gov.in/" },
                                    { title: "Pradhan Mantri Awas Yojana", desc: "Accessing housing subsidies for eligible rural families.", link: "#" },
                                    { title: "MSME Registration (Udyam)", desc: "Enabling small businesses to access official govt benefits and low-interest loans.", link: "https://udyamregistration.gov.in/" },
                                    { title: "Regional Skill Development", desc: "Linking youth with PMKVY centers for vocational training and placement.", link: "https://www.pmkvyofficial.org/" }
                                ].map((scheme, idx) => (
                                    <div key={idx} className="p-8 bg-cream dark:bg-white/5 rounded-3xl border border-primary/5 group hover:border-growth/40 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">{scheme.title}</h3>
                                            <p className="text-sm text-primary/60 dark:text-white/60 leading-relaxed">{scheme.desc}</p>
                                        </div>
                                        <a href={scheme.link} target="_blank" className="bg-growth text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 group-hover:scale-105 transition-transform">
                                            Apply Info <ExternalLink size={14} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-12">
                        <section className="p-10 bg-primary rounded-[3rem] text-white shadow-2xl">
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                                <Calendar className="text-growth" />
                                Application Process
                            </h3>
                            <div className="space-y-8 relative">
                                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10"></div>
                                {[
                                    { step: "Eligibility Check", desc: "Bring your Aadhaar and Income Proof." },
                                    { step: "Doc Preparation", desc: "We help align your paperwork." },
                                    { step: "Online Submission", desc: "Assistance with official portals." },
                                    { step: "Follow-up", desc: "Monitoring status until approval." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative flex gap-6">
                                        <div className="w-4 h-4 rounded-full bg-growth mt-1.5 z-10 p-0.5 border-2 border-primary"></div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{item.step}</h4>
                                            <p className="text-xs text-white/50">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="p-8 border border-growth/20 rounded-3xl bg-growth/5">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Heart className="text-red-500" size={18} />
                                Our Promise
                            </h4>
                            <p className="text-xs text-primary/60 dark:text-white/60 leading-relaxed italic">
                                "We never charge a single rupee for government scheme assistance. This is our contribution to regional development."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center border-t border-primary/5 pt-12">
                    <div className="flex flex-wrap gap-4 items-center bg-cream dark:bg-white/5 px-8 py-4 rounded-full border border-primary/5">
                        <span className="text-xs font-bold text-primary/40 dark:text-white/40 uppercase tracking-widest">Required Documents:</span>
                        {["Aadhaar Card", "PAN Card", "Residence Proof", "Income Certificate", "Ration Card"].map(doc => (
                            <div key={doc} className="flex items-center gap-1.5 text-xs font-bold text-primary/80 dark:text-white/80">
                                <CheckCircle2 className="text-growth" size={14} />
                                {doc}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
