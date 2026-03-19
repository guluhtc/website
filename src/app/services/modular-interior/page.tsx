import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModularInterior from "@/components/ModularInterior";

export default function ModularInteriorPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-background relative selection:bg-primary/20">
            <Navbar />
            <main className="flex-1 pt-20">
                <ModularInterior />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
