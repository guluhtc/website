import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function FurniturePage() {
    const imageFiles = [
        "IMG-20260318-WA0003.jpg",
        "IMG-20260318-WA0004.jpg",
        "IMG-20260318-WA0005.jpg",
        "IMG-20260318-WA0006.jpg",
        "IMG-20260318-WA0007.jpg",
        "IMG-20260318-WA0008.jpg",
        "IMG-20260318-WA0009.jpg",
        "IMG-20260318-WA0010.jpg",
        "IMG-20260318-WA0011.jpg",
        "IMG-20260318-WA0013.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Luxury Sofa & Bespoke Seating"
            description="Exquisite handcrafted sofas designed with premium upholstery and superior craftsmanship for ultimate comfort."
            imageFolder="/services/furniture"
            imageFiles={imageFiles}
            details={[
                "Bespoke sofas with premium fabric and leatherette options",
                "High-density ergonomic foam for long-lasting comfort",
                "Custom handcrafted wooden and metal seating frames",
                "Sectionals, Chesterfields, and Modern Minimalist designs",
                "Quality assurance with premium materials and finishes"
            ]}
        />
    );
}
