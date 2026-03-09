import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background relative selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ImageSlider />
        <Testimonials />
        <Services />
        <WhyUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
