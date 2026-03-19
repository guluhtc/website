import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function FurniturePage() {
    // Furniture is broad. We'll use some images from the sofa folder too as they represent furniture.
    const imageFiles = [
        "IMG-20260318-WA0003.jpg",
        "IMG-20260318-WA0007.jpg",
        "IMG-20260318-WA0010.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Bespoke Furniture Solutions"
            description="Luxury furniture pieces designed with premium craftsmanship to complement your interior decor with style and comfort."
            imageFolder="/services/sofa"
            imageFiles={imageFiles}
            details={[
                "Exquisite handcrafted wooden furniture",
                "Custom-built sofas, dining sets, and bedroom furniture",
                "Modern and classical designs tailored to your taste",
                "Quality assurance with premium materials and finishes"
            ]}
        />
    );
}
