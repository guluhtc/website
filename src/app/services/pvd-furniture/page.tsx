import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function PVDFurniturePage() {
    const imageFiles = [
        "1000449406.jpg",
        "1000449408.jpg",
        "1000449414.jpg",
        "1000456280.jpg",
        "1000456282.jpg",
        "1000456283.jpg",
        "1000456284.jpg",
        "1000456285.jpg",
        "1000456286.jpg",
        "1000456287.jpg",
        "1000456290.jpg",
        "1000456292.jpg"
    ];

    return (
        <ServicePageTemplate
            title="PVD Coated Premium Furniture"
            description="Luxury lifestyle furniture with high-precision Physical Vapor Deposition (PVD) coating for supreme durability and high-end luster."
            imageFolder="/services/pvd furniture & railing"
            imageFiles={imageFiles}
            details={[
                "Advanced PVD coating technologie: Champagne Gold, Rose Gold, Titanium Black",
                "Superior scratch resistance and long-term protection",
                "Premium stainless steel construction with museum-grade finishes",
                "Custom furniture designs: Coffee tables, console units, and seating frames",
                "Elegance and sophistication for luxury residential and commercial spaces"
            ]}
        />
    );
}
