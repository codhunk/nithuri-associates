import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, GraduationCap, HandHelping, Scale } from "lucide-react";

export default function SocialWelfarePage() {
    const initiatives = [
        {
            title: "Govt Scheme Assistance",
            desc: "100% Free guidance to help rural citizens access benefits from state and central government programs.",
            icon: HandHelping
        },
        {
            title: "Educational Counseling",
            desc: "Career guidance and scholarship assistance for students from underprivileged backgrounds.",
            icon: GraduationCap
        },
        {
            title: "Legal Aid Support",
            desc: "Free preliminary legal advice for land title and documentation issues to prevent exploitation.",
            icon: Scale
        },
        {
            title: "Regional Employment",
            desc: "Initiatives focused on creating self-employment opportunities through startup DPRs.",
            icon: Heart
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Social Responsibility</span>
                    <h1 className="text-5xl font-bold text-primary mb-6">Empowering <span className="text-growth">Communities</span></h1>
                    <p className="text-primary/60 max-w-2xl mx-auto text-lg">
                        At Nithuri Singh & Sons Associates, we believe that development must be inclusive. Our social welfare wing offers 100% free services to those in need.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {initiatives.map((item, idx) => (
                        <div key={idx} className="flex gap-6 p-10 bg-cream rounded-[2.5rem] border border-primary/5">
                            <div className="w-16 h-16 bg-growth/10 rounded-2xl flex items-center justify-center text-growth shrink-0">
                                <item.icon size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-primary/60 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center bg-accent/5 p-12 rounded-[3rem] border border-accent/20">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Need Assistance?</h2>
                        <p className="text-primary/70 mb-8 leading-relaxed">
                            If you or someone you know requires help with government schemes, education, or basic legal guidance,
                            please contact our dedicated welfare team.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary border border-primary/5">100% Free Service</span>
                            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary border border-primary/5">No Hidden Charges</span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <a href="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                            Contact Welfare Team
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
