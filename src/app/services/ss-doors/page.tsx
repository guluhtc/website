import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SSDoorsPage() {
    const imageFiles = [
        "IMG-20260318-WA0027.jpg",
        "IMG-20260318-WA0028.jpg",
        "IMG-20260318-WA0029.jpg",
        "IMG-20260318-WA0030.jpg",
        "IMG-20260318-WA0031.jpg",
        "IMG-20260318-WA0032.jpg",
        "IMG-20260318-WA0033.jpg",
        "IMG-20260318-WA0034.jpg",
        "IMG-20260318-WA0037.jpg",
        "IMG-20260318-WA0039.jpg",
        "IMG-20260318-WA0040.jpg",
        "IMG-20260318-WA0041.jpg",
        "IMG-20260318-WA0042.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Premium Stainless Steel Doors"
            description="High-security, durable, and stylish SS doors meticulously designed for modern homes and commercial applications."
            imageFolder="/services/ss doors"
            imageFiles={imageFiles}
            details={[
                "High-grade SS 304 & 316 stainless steel material",
                "Laser-cut aesthetic designs with high-precision finishing",
                "Advanced multi-point locking system for top-tier security",
                "Weather-resistant and low maintenance for long-term usage"
            ]}
        />
    );
}
