import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function GlassRailingPage() {
    const imageFiles = [
        "IMG-20260318-WA0043.jpg",
        "IMG-20260318-WA0044.jpg",
        "IMG-20260318-WA0045.jpg",
        "IMG-20260318-WA0046.jpg",
        "IMG-20260318-WA0047.jpg",
        "IMG-20260318-WA0048.jpg",
        "IMG-20260318-WA0049.jpg",
        "IMG-20260318-WA0050.jpg",
        "IMG-20260318-WA0051.jpg",
        "IMG-20260318-WA0052.jpg"
    ];

    return (
        <ServicePageTemplate
            title="Premium Glass Railing Solutions"
            description="Exquisite glass railing designs that bring transparency, safety, and modern elegance to your residential and commercial spaces."
            imageFolder="/services/glass railing"
            imageFiles={imageFiles}
            details={[
                "Toughened safety glass for maximum durability",
                "Wide variety of mounting options (patch fittings, floor springs, standoff)",
                "Corrosion-resistant stainless steel spacers and handrails",
                "Customized designs for staircases, balconies, and rooftops"
            ]}
        />
    );
}
