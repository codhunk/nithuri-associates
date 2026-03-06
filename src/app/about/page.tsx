import { Navbar } from "@/components/Navbar";
import { AboutUs } from "@/components/AboutUs";
import { Footer } from "@/components/Footer";
import { History, Target, Eye, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-primary text-primary dark:text-white">
            <Navbar />
            <div className="pt-20">
                <AboutUs />

                <section className="py-24 bg-cream dark:bg-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="p-10 bg-white dark:bg-primary rounded-[3rem] border border-primary/5 shadow-sm">
                                <History className="text-accent mb-6" size={32} />
                                <h3 className="text-2xl font-bold mb-4">Our History</h3>
                                <p className="text-sm text-primary/60 dark:text-white/60 leading-relaxed mb-6">
                                    Founded in 2000, Nithuri Singh & Sons Associates started as a small land consultancy in rural UP. Over 25 years, we have expanded into a multi-domain advisory firm.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <span className="font-bold text-accent">2000</span>
                                        <span className="text-xs">Inception in Regional Land Markets</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-bold text-accent">2012</span>
                                        <span className="text-xs">Launch of Business Consultancy Wing</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="font-bold text-accent">2020</span>
                                        <span className="text-xs">Digital Transformation & Social Welfare Portal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-12">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-8 rounded-3xl bg-white dark:bg-primary border border-primary/5">
                                        <Target className="text-growth mb-4" size={28} />
                                        <h4 className="text-xl font-bold mb-3">Our Objective</h4>
                                        <p className="text-sm text-primary/60 dark:text-white/60">To bridge the information gap between government policy and rural execution.</p>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white dark:bg-primary border border-primary/5">
                                        <Eye className="text-blue-500 mb-4" size={28} />
                                        <h4 className="text-xl font-bold mb-3">Our Vision</h4>
                                        <p className="text-sm text-primary/60 dark:text-white/60">Becoming the most trusted regional platform for investment and social upliftment.</p>
                                    </div>
                                </div>

                                <div className="p-10 bg-primary text-white rounded-[2.5rem] relative overflow-hidden">
                                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                                        <ShieldCheck className="text-accent shrink-0" size={48} />
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">Under the Leadership of Bageshwar Singh</h3>
                                            <p className="text-white/60 text-sm leading-relaxed">
                                                With a foundation built on integrity, Bageshwar Singh has personally guided over 1000+ individuals
                                                in making secure land investments and establishing sustainable businesses.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl opacity-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
