import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
                <div className="prose max-w-none text-primary/70 space-y-6">
                    <p>Last updated: March 2025</p>
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4 italic">1. Terms</h2>
                        <p>By accessing the website at Nithuri Singh & Sons Associates, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4 italic">2. Use License</h2>
                        <p>Permission is granted to temporarily view the materials on Nithuri Singh & Sons Associates' website for personal, non-commercial transitory viewing only.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-4 italic">3. Disclaimer</h2>
                        <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
