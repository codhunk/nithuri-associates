import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { KnowledgeHub } from "@/components/KnowledgeHub";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <Services />
                <KnowledgeHub />
            </div>
            <Footer />
        </main>
    );
}
