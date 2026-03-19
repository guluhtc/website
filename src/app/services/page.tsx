import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = {
    title: "Our Services | SteelNArt - Modular Interior & Fabrication",
    description: "Explore our comprehensive range of services from premium modular interiors to advanced metal fabrication.",
};

export default function ServicesOverviewPage() {
    return (
        <div className="flex min-h-[100dvh] flex-col bg-slate-50 text-slate-900 selection:bg-primary/20">
            <Navbar />

            <main className="flex-1 pt-24 md:pt-32 pb-20">
                {/* Hero Slider */}
                <div className="container mx-auto px-4 mb-20 overflow-hidden relative">
                    <div className="flex animate-scroll hover:[animation-play-state:paused] gap-4 w-[200%] md:w-[150%] lg:w-[120%] h-64 md:h-80 lg:h-96">
                        {[
                            "/images/modular-kitchen.png",
                            "/services/glass railing/IMG-20260318-WA0045.jpg",
                            "/services/ss doors/IMG-20260318-WA0037.jpg",
                            "/services/sofa/IMG-20260318-WA0014.jpg",
                            "/services/ss grill/IMG-20260318-WA0019.jpg",
                            "/services/ss railing/IMG-20260318-WA0055.jpg"
                        ].map((img, idx) => (
                            <div key={idx} className="relative flex-1 rounded-3xl overflow-hidden border-2 border-slate-200 bg-white group shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                <Image
                                    src={img}
                                    alt={`Hero ${idx}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <ServicesGrid
                    title="Our Offerings"
                    description="Excellence in Modular interiors, Furniture, and Industrial Fabrication Solutions."
                    showButton={false}
                />
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
