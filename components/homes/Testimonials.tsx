import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            location: "New Delhi",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            quote: "TakeMart's support has been incredible. From day one, they guided me through everything. My store reached break-even in just 3 months!",
            role: "Franchise Partner since 2021"
        },
        {
            name: "Priya Sharma",
            location: "Bangalore",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            quote: "I was new to retail, but their training program gave me the confidence to run a supermarket. The daily operations are streamlined and efficient.",
            role: "Franchise Partner since 2022"
        },
        {
            name: "Amit Patel",
            location: "Ahmedabad",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            quote: "The brand recognition of TakeMart is huge. Customers trust the quality, and the footfall has been consistent since opening day.",
            role: "Franchise Partner since 2020"
        },
    ]

    return (
        <section className="py-24 bg-white">
            <div className="container px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Success Stories from Our Franchise Partners</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-gray-50 border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex gap-4 items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
