import { Award, Settings, Briefcase, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChoose() {
    const features = [
        {
            icon: Award,
            title: "Proven Business Model",
            description: "Our franchise model is built on years of retail expertise, ensuring high ROI and sustainable growth for our partners.",
            color: "bg-orange-50 text-orange-600",
        },
        {
            icon: Settings,
            title: "Operational Efficiency",
            description: "We provide comprehensive training and standard operating procedures to ensure smooth day-to-day operations.",
            color: "bg-blue-50 text-blue-600",
        },
        {
            icon: Briefcase,
            title: "Complete Store Setup",
            description: "From layout design to shelf stocking, we handle the entire setup process to get your store ready in just 45 days.",
            color: "bg-purple-50 text-purple-600",
        },
        {
            icon: Handshake,
            title: "Marketing & Sales Support",
            description: "Benefit from our national branding and local marketing strategies to drive footfall and boost sales from day one.",
            color: "bg-pink-50 text-pink-600",
        },
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Text Content */}
                    <div className="lg:w-1/3 space-y-8 sticky top-32 h-fit">
                        <div className="space-y-4">
                            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Why Choose Us</span>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                Why Choose <br className="hidden lg:block" />
                                <span className="text-primary">TakeMart</span> Franchise?
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We don't just sell franchises; we build partnerships. Our success is directly tied to yours, which is why we go the extra mile to support you at every step of your journey.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="italic text-gray-600">"TakeMart's support system is unmatched. They truly care about their partners' success."</p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Partner" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                                    <p className="text-sm text-gray-500">Franchise Owner, Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Features Grid */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-8 space-y-4">
                                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center`}>
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
