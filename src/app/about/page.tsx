import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    BookOpen,
    Briefcase,
    GraduationCap,
    Quote,
    Target,
    Award,
    Building2,
    ShieldCheck,
    Handshake,
    FileText,
    Users
} from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-primary">
            <Navbar />

            {/* Hero Section / Director's Vision */}
            <section className="pt-32 pb-20 bg-cream overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                                <img
                                    src="/director.png"
                                    alt="Bageshwar Singh - Director"
                                    className="w-full h-full object-cover transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex flex-col justify-end p-10">
                                    <h1 className="text-4xl font-bold text-white mb-2">Bageshwar Singh</h1>
                                    <p className="text-accent font-medium tracking-widest uppercase text-sm">Director & Visionary</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full p-8 flex flex-col items-center justify-center text-white z-20 shadow-2xl transform rotate-12">
                                <span className="text-4xl font-extrabold">25Y</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Family Legacy</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold shadow-sm">
                                <Quote size={16} />
                                <span>निदेशक का संदेश</span>
                            </div>

                            <h2 className="text-4xl font-bold leading-tight text-primary">
                                Director’s Thoughts & <span className="text-accent underline decoration-accent/30 underline-offset-8">Vision</span>
                            </h2>

                            <div className="space-y-6 text-primary/80 italic leading-loose text-lg border-l-4 border-accent pl-8">
                                <p>
                                    "I believe that true entrepreneurship is not just about building businesses; it is about building communities. 
                                    Coming from a family with a 25-year legacy in real estate built by my father, Shri Nithuri Singh, 
                                    I learned early on that trust and transparency are the greatest currencies in any market."
                                </p>
                                <p>
                                    "My vision is to bridge traditional business values with modern, MBA-driven strategies. 
                                    Whether it is providing a family with a dispute-free home, guiding a young mind toward the right career, 
                                    or helping a local entrepreneur secure government funding, my goal is to create an ecosystem of growth."
                                </p>
                                <p>
                                    "I envision a future where top-tier business consultancy, complete property solutions, and dedicated social welfare 
                                    are accessible to everyone in our zone. When our youth and our laborers grow, our society thrives."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-growth font-bold uppercase tracking-widest text-sm mb-4 block">Academic Foundation</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary">Strong Education & Early <span className="text-accent">Discipline</span></h2>
                        <p className="mt-6 text-primary/60 max-w-2xl mx-auto leading-relaxed">
                            Bageshwar Singh's journey is rooted in discipline and premier education, providing a solid foundation for business acumen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building2 className="text-accent" />,
                                title: "Schooling",
                                desc: "Cultivated independence, leadership, and discipline at Vikas Bharti School (Boarding), pursuing Commerce under the ICSE board."
                            },
                            {
                                icon: <GraduationCap className="text-growth" />,
                                title: "Undergraduate",
                                desc: "Earned a B.Com (Honours) from the prestigious Sharda University, mastering finance, trade, and corporate economics."
                            },
                            {
                                icon: <Award className="text-blue-500" />,
                                title: "Postgraduate",
                                desc: "Completed an MBA from GNIOT (AKTU, Lucknow), specializing in strategic management, operations, and business administration."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-cream/50 rounded-[2.5rem] border border-transparent hover:border-accent/20 transition-all group hover:bg-white hover:shadow-2xl">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                                <p className="text-primary/60 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Entrepreneurial Journey */}
            <section className="py-24 bg-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-50 blur-[120px] -translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-primary">
                                    Work Experience & <br />
                                    <span className="text-accent underline decoration-accent/20 underline-offset-4">Entrepreneurial Journey</span>
                                </h2>
                                <p className="text-primary/70 leading-relaxed text-lg">
                                    Recognized as one of the youngest and most dynamic businessmen in the zone, 
                                    Bageshwar Singh has rapidly built a diverse and impactful portfolio.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center shrink-0 text-accent font-bold group-hover:bg-accent group-hover:text-white transition-all shadow-sm">01</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-primary">Autocare Solutions (First Venture, 2021)</h4>
                                        <p className="text-primary/60 text-sm">Launched through the PMEGP fund, putting MBA knowledge into immediate action and showcasing practical expertise in government initiatives.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-growth/30 flex items-center justify-center shrink-0 text-growth font-bold group-hover:bg-growth group-hover:text-white transition-all shadow-sm">02</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-primary">Social & Career Counseling</h4>
                                        <p className="text-primary/60 text-sm">Providing free guidance to local youth, aspiring entrepreneurs, and laborers on career building, business loans, and government schemes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-400 font-bold group-hover:bg-blue-400 group-hover:text-white transition-all shadow-sm">03</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-primary">Scaling the Family Legacy (Real Estate & Construction)</h4>
                                        <p className="text-primary/60 text-sm mb-4">Transformed his father's 25-year legacy into a "Complete Property Solution" offering 360-degree management.</p>
                                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] uppercase tracking-widest font-bold text-accent/80">
                                            <li>• Buying & Selling</li>
                                            <li>• Premium Plotting</li>
                                            <li>• Construction Management</li>
                                            <li>• Material Sourcing</li>
                                            <li>• Legal & Registry Support</li>
                                            <li>• Title Verification</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="space-y-6 pt-12">
                                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                                    <h5 className="font-bold text-accent text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">1000+</h5>
                                    <p className="text-xs uppercase tracking-widest font-bold text-primary/40">Guided Clients</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                                    <h5 className="font-bold text-growth text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">360°</h5>
                                    <p className="text-xs uppercase tracking-widest font-bold text-primary/40">Property Service</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                                    <h5 className="font-bold text-blue-500 text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">2021</h5>
                                    <p className="text-xs uppercase tracking-widest font-bold text-primary/40">First Venture</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                                    <h5 className="font-bold text-purple-600 text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">MBA</h5>
                                    <p className="text-xs uppercase tracking-widest font-bold text-primary/40">Driven Strategy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Fields of Expertise */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-primary">Core Fields of <span className="text-accent underline decoration-accent/20 underline-offset-8">Expertise</span></h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <ShieldCheck size={32} />,
                                title: "Real Estate & Infrastructure",
                                desc: "Transforming traditional plotting into modern, complete housing and commercial solutions."
                            },
                            {
                                icon: <FileText size={32} />,
                                title: "Business Consultancy",
                                desc: "Startup guidance, DPR creation, and securing government subsidies like PMEGP."
                            },
                            {
                                icon: <Users size={32} />,
                                title: "Social Welfare & Youth",
                                desc: "Dedicated career counseling, job placement for laborers, and educational guidance."
                            },
                            {
                                icon: <Briefcase size={32} />,
                                title: "Automotive Enterprise",
                                desc: "Founder and operator of a successful and innovative Autocare business."
                            }
                        ].map((field, i) => (
                            <div key={i} className="group p-8 bg-cream/50 rounded-3xl border border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="mb-6 text-accent group-hover:scale-110 transition-transform">
                                    {field.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">{field.title}</h4>
                                <p className="text-sm text-primary/60 leading-relaxed">
                                    {field.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

