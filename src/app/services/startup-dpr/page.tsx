import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, TrendingUp, Lightbulb, PieChart, CheckCircle2, AlertCircle } from "lucide-react";

export default function StartupDPRInformatics() {
    return (
        <main className="min-h-screen bg-white dark:bg-primary">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Service Informatics</span>
                        <h1 className="text-5xl font-bold text-primary dark:text-white mb-8">Business Startup <span className="text-growth">DPR</span> Guide</h1>
                        <p className="text-primary/60 dark:text-white/60 text-lg leading-relaxed mb-10">
                            A Detailed Project Report (DPR) is the most critical document for any new business venture.
                            It serves as a roadmap for the entrepreneur and a foundation for bank financing and government subsidies.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Financial Feasibility", desc: "Profit & Loss projections, break-even analysis." },
                                { title: "Technical Setup", desc: "Machinery, raw material, and site requirements." },
                                { title: "Market Survey", desc: "Demand-supply analysis and competitive landscape." },
                                { title: "Compliance", desc: "Licenses, GST, MSME, and environmental nods." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-cream dark:bg-white/5 rounded-2xl border border-primary/5">
                                    <h3 className="font-bold text-primary dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-xs text-primary/60 dark:text-white/60 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section className="p-10 bg-growth/10 border border-growth/20 rounded-[2.5rem]">
                            <h2 className="text-2xl font-bold text-growth mb-6 flex items-center gap-3">
                                <TrendingUp />
                                Why You Need a DPR?
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Prerequisite for Bank Loans (PMEGP, MSME, etc.)",
                                    "Required for Govt Subsidies and Incentives",
                                    "Clarity on Project Cost and Working Capital",
                                    "Assessment of Risk and ROI for Investors"
                                ].map(point => (
                                    <li key={point} className="flex items-start gap-3 text-primary/80 dark:text-white/80 font-medium">
                                        <CheckCircle2 className="text-growth shrink-0" size={20} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-3xl flex items-start gap-4">
                            <AlertCircle className="text-amber-500 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-primary dark:text-white mb-1 uppercase text-xs tracking-widest">Crucial Note</h4>
                                <p className="text-sm text-primary/60 dark:text-white/60">
                                    A weak DPR is the #1 reason for bank loan rejections. Precision in financial modeling is non-negotiable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-primary/5 text-center group hover:bg-growth hover:text-white transition-all duration-500">
                        <PieChart className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold mb-2">Costing</h4>
                    </div>
                    <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-primary/5 text-center group hover:bg-growth hover:text-white transition-all duration-500">
                        <FileText className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold mb-2">Technical</h4>
                    </div>
                    <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-primary/5 text-center group hover:bg-growth hover:text-white transition-all duration-500">
                        <Lightbulb className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold mb-2">Idea Choice</h4>
                    </div>
                    <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-primary/5 text-center group hover:bg-growth hover:text-white transition-all duration-500">
                        <TrendingUp className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold mb-2">Projections</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
