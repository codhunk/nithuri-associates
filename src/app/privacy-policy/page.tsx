import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-primary">
            <Navbar />
            <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary dark:text-white mb-8">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none text-primary/70 dark:text-white/70 space-y-6">
                    <p>Last updated: March 2025</p>
                    <section>
                        <h2 className="text-2xl font-bold text-primary dark:text-white mb-4 italic">Introduction</h2>
                        <p>Nithuri Singh & Sons Associates ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-primary dark:text-white mb-4 italic">Data Collection</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which you provide through contact forms, including identity data (name) and contact data (email, phone number).</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-primary dark:text-white mb-4 italic">How We Use Your Data</h2>
                        <p>We will only use your personal data to contact you regarding your inquiries about real estate, consultancy, or social welfare services.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
