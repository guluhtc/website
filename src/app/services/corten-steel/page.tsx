import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CortenSteelPage() {
    const imageFiles = [
        "1000457441.jpg",
        "1000457443.jpg",
        "1000457445.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Premium Corten Steel Designs"
            description="Weathering steel architectural solutions that blend industrial strength with timeless aesthetic appeal."
            imageFolder="/services/corten steel"
            imageFiles={imageFiles}
            details={[
                "Natural weathered rust finish with unique character",
                "High durability and corrosion resistance",
                "Architectural cladding, signage, and decorative partitions",
                "Low maintenance requirements for exterior applications",
                "Bespoke laser-cut patterns and structural designs"
            ]}
        />
    );
}
