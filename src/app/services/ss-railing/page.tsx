import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SSRailingPage() {
    const imageFiles = [
        "IMG-20260318-WA0053.jpg",
        "IMG-20260318-WA0054.jpg",
        "IMG-20260318-WA0055.jpg",
        "IMG-20260318-WA0056.jpg",
        "IMG-20260318-WA0057.jpg",
        "IMG-20260318-WA0059.jpg",
        "IMG-20260318-WA0060.jpg",
        "IMG-20260318-WA0061.jpg",
        "IMG-20260318-WA0062.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Premium Stainless Steel Railings"
            description="Elegant, safe, and durable SS railing solutions for staircases, balconies, and rooftops."
            imageFolder="/services/ss railing"
            imageFiles={imageFiles}
            details={[
                "High-grade SS 304 & 316 and aluminum combinations",
                "Advanced orbital welding for seamless joints",
                "Wide variety of handrail shapes (round, square, flat)",
                "Installation by skilled professionals for safety"
            ]}
        />
    );
}
