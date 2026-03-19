import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SSGrillPage() {
    const imageFiles = [
        "IMG-20260318-WA0012.jpg",
        "IMG-20260318-WA0015.jpg",
        "IMG-20260318-WA0016.jpg",
        "IMG-20260318-WA0017.jpg",
        "IMG-20260318-WA0018.jpg",
        "IMG-20260318-WA0019.jpg",
        "IMG-20260318-WA0020.jpg",
        "IMG-20260318-WA0021.jpg",
        "IMG-20260318-WA0022.jpg",
        "IMG-20260318-WA0023.jpg",
        "IMG-20260318-WA0024.jpg",
        "IMG-20260318-WA0025.jpg",
        "IMG-20260318-WA0026.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Stainless Steel Windows & Grills"
            description="Innovative SS grill designs that prioritize security and aesthetics for balconies, windows, and open areas."
            imageFolder="/services/ss grill"
            imageFiles={imageFiles}
            details={[
                "Robust SS 202/304/316 grade options available",
                "Advanced laser cutting for intricate patterns",
                "Rust-proof and high-impact resistant security grills",
                "Tailored to fit your architectural style"
            ]}
        />
    );
}
