import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function InvestorsPage() {
    const investorHilites = [
        {
            title: "Strategic Land Acquisition",
            desc: "Access to high-growth potential residential and commercial plots vetted for legal clarity.",
            icon: Building2
        },
        {
            title: "Business Consultancy",
            desc: "Expert guidance on startup DPRs, govt subsidies, and industrial project scaling.",
            icon: TrendingUp
        },
        {
            title: "Title Verification",
            desc: "100% transparent documentation and title verification services for secure investments.",
            icon: ShieldCheck
        },
        {
            title: "Partnership Growth",
            desc: "Join a network of 25+ years of trust in rural and semi-urban development.",
            icon: Users
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Investor Relations</span>
                    <h1 className="text-5xl font-bold text-primary mb-6">Partner in Our <span className="text-accent">Growth</span> Journey</h1>
                    <p className="text-primary/60 max-w-2xl mx-auto text-lg">
                        Nithuri Singh & Sons Associates offers exclusive opportunities for investors to participate in regional development with high security and returns.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {investorHilites.map((item, idx) => (
                        <div key={idx} className="p-8 bg-cream rounded-3xl border border-primary/5 hover:border-accent/40 transition-all">
                            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                            <p className="text-sm text-primary/60 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Interested in Investing?</h2>
                        <p className="text-white/60 mb-10 max-w-xl mx-auto">
                            Connect with our founder Bageshwar Singh for a personalized walkthrough of upcoming projects and industrial DPRs.
                        </p>
                        <a href="/contact" className="inline-block bg-accent text-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                            Schedule Private Consultation
                        </a>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
