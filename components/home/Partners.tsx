import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function Partners() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="relative order-2 lg:order-1">
                        <div className="space-y-6">
                            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Join Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Why Partner With India's Leading Retail Franchise?</h2>
                            <p className="text-lg text-gray-600">
                                Partnering with TakeMart gives you access to a massive customer base, premium products, and a brand that people trust.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Complete Store Setup in 45 Days",
                                "Proven Business Model with High ROI",
                                "Extensive Training & Support",
                                "Marketing & Branding Assistance",
                                "Access to 1000+ Premium Products"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image Collage */}
                    <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 relative">
                                <img src="https://images.unsplash.com/photo-1578916171728-56685ff8d487?auto=format&fit=crop&q=80&w=800" alt="Store Interior" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-32 sm:h-40 relative">
                                <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800" alt="Fresh Produce" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-2xl overflow-hidden shadow-lg h-32 sm:h-40 relative">
                                <img src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&q=80&w=800" alt="Shopping Cart" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 relative">
                                <img src="https://images.unsplash.com/photo-1601599963565-b7b8b420f188?auto=format&fit=crop&q=80&w=800" alt="Happy Customer" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
