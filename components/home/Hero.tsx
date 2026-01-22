import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-gray-900/60" />
            </div>
            <div className="container relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium">India's Fastest Growing Supermarket Chain</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Launch Your Own <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Supermarket Franchise
                        </span>
                        <br /> in India in Just 45 Days
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join India's fastest-growing retail chain and build a profitable business with our end-to-end support and proven business model.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-red-500/25">
                            Apply Now
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20">
                            <Play className="alert-circle w-5 h-5 mr-2 fill-current" />
                            Watch Video
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    )
}
