import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SofaPage() {
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
        "IMG-20260318-WA0013.jpg",
        "IMG-20260318-WA0014.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Luxury Sofa & Seating"
            description="Bespoke sofa designs that combine comfort, style, and premium upholstery for a cohesive living room aesthetic."
            imageFolder="/services/sofa"
            imageFiles={imageFiles}
            details={[
                "Custom fabric and leatherette options for various budgets",
                "High-density ergonomic foam for long-lasting comfort",
                "Premium wooden and stainless steel frames",
                "Wide variety of styles: Sectionals, Chesterfields, Modern Minimalist"
            ]}
        />
    );
}
