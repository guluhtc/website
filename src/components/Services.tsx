import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, MoveRight, Box, Flame, Wrench, Wind, Zap, Cog, Hammer, ArrowUpRight } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Fabrication & Engineering",
            description: "Laser Cutting, CNC Bending, PEB Structures, and Custom General Fabrication Works.",
            details: ["Laser Cutting (2x4m)", "CNC Bending", "PEB Structures", "Heavy-duty Steelwork"],
            icon: <Factory className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />,
            color: "bg-blue-50 text-blue-600 hover:bg-blue-600 border-blue-200",
            bgGradient: "from-blue-50 to-white hover:from-blue-600 hover:to-blue-700",
        },
        {
            title: "Conveyor Systems",
            description: "Belting, Pulleys, Accessories, and Chains for seamless industrial material handling.",
            details: ["Rubber/PVC/Food Belts", "Flat/Drum Pulleys", "Fasteners/Rollers", "Z-Conveyor Chains"],
            icon: <MoveRight className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />,
            color: "bg-orange-50 text-orange-600 hover:bg-orange-600 border-orange-200",
            bgGradient: "from-orange-50 to-white hover:from-orange-600 hover:to-orange-700",
        },
        {
            title: "Industrial Buckets",
            description: "A wide variety of Industrial Food Grade Buckets designed for durability and compliance.",
            details: ["SS & MS Buckets", "Shovel Type", "Rice & Z-Pin Type", "Corian & Rock Type"],
            icon: <Box className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />,
            color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 border-indigo-200",
            bgGradient: "from-indigo-50 to-white hover:from-indigo-600 hover:to-indigo-700",
        },
        {
            title: "IBR & Boiler Parts",
            description: "Certified IBR piping, chimney maintenance parts, insulation, and refractory materials.",
            details: ["IBR Pipes & Flanges", "Boiler Paint & Nozzles", "Asbestos Rope", "Fire Bricks"],
            icon: <Flame className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />,
            color: "bg-red-50 text-red-600 hover:bg-red-600 border-red-200",
            bgGradient: "from-red-50 to-white hover:from-red-600 hover:to-red-700",
        },
        {
            title: "Valves & Machinery",
            description: "Industrial valves, specialized fittings, and critical specialty components.",
            details: ["Globe/Ball/Gate Valves", "Steam & Bucket Traps", "Pressure Gauges", "Auto Injectors"],
            icon: <Wrench className="h-8 w-8 text-cyan-600 group-hover:text-white transition-colors" />,
            color: "bg-cyan-50 text-cyan-600 hover:bg-cyan-600 border-cyan-200",
            bgGradient: "from-cyan-50 to-white hover:from-cyan-600 hover:to-cyan-700",
        },
        {
            title: "Pneumatic Components",
            description: "Pneumatic Actuators, Valves, FRL units, and comprehensive distribution setups.",
            details: ["Pneumatic Cylinders", "Solenoid Valves", "FRL Units", "PU Tubes & SS Fittings"],
            icon: <Wind className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors" />,
            color: "bg-teal-50 text-teal-600 hover:bg-teal-600 border-teal-200",
            bgGradient: "from-teal-50 to-white hover:from-teal-600 hover:to-teal-700",
        },
        {
            title: "Electrical & Automation",
            description: "Reliable switchgear, automation tools, and industrial protection devices.",
            details: ["MCB & ELCB", "VFD Drives", "Control Panels", "Sensors & Relays"],
            icon: <Zap className="h-8 w-8 text-yellow-600 group-hover:text-white transition-colors" />,
            color: "bg-yellow-50 text-yellow-600 hover:bg-yellow-600 border-yellow-200",
            bgGradient: "from-yellow-50 to-white hover:from-yellow-500 hover:to-yellow-600",
        },
        {
            title: "Motors & Gearboxes",
            description: "High-power industrial pumps, robust motors, and precision gearboxes.",
            details: ["CRI Submersible Pumps", "Foot/Flange Motors", "Helical Gearboxes", "Transmission Couplings"],
            icon: <Cog className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />,
            color: "bg-purple-50 text-purple-600 hover:bg-purple-600 border-purple-200",
            bgGradient: "from-purple-50 to-white hover:from-purple-600 hover:to-purple-700",
        },
        {
            title: "Tools & Hardware",
            description: "Essential industrial power tools, testing equipment, and general mill store items.",
            details: ["Bearings & Sprockets", "Moisture/Weight Meters", "Grinding Machines", "Welding Consumables"],
            icon: <Hammer className="h-8 w-8 text-fuchsia-600 group-hover:text-white transition-colors" />,
            color: "bg-fuchsia-50 text-fuchsia-600 hover:bg-fuchsia-600 border-fuchsia-200",
            bgGradient: "from-fuchsia-50 to-white hover:from-fuchsia-600 hover:to-fuchsia-700",
        },
    ];

    return (
        <section id="services" className="py-24 bg-gradient-to-br from-indigo-50 to-white relative border-b-[12px] border-b-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                            Complete Manufacturing & Engineering Solutions
                        </h2>
                        <p className="text-lg text-slate-600">
                            From precision fabrication to advanced automation and critical power tools, we provide top-tier components and services for industrial excellence.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className={`group relative overflow-hidden border-2 bg-gradient-to-br transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-slate-200 hover:border-transparent ${service.bgGradient}`}>
                            <CardHeader className="relative z-10 pb-2">
                                <div className="flex justify-between items-start">
                                    <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm ${service.color.split(' ').slice(0, 2).join(' ')} group-hover:bg-white/20`}>
                                        {service.icon}
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white" />
                                    </div>
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <CardDescription className="text-base text-slate-600 text-pretty group-hover:text-white/90 transition-colors duration-300 mb-4">
                                    {service.description}
                                </CardDescription>
                                <ul className="space-y-2">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-sm font-medium text-slate-700 group-hover:text-white/90 transition-colors">
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-white/70"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
