import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"

export function AboutFranchise() {
    return (
        <section id="about" className="py-24 bg-green-50/50">
            <div className="container px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Video/Image */}
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                        <div className="aspect-video relative bg-gray-900">
                            {/* Placeholder for video content */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-500 group-hover:opacity-60"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=2574')" }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center pl-1 cursor-pointer transition-transform hover:scale-110 shadow-lg shadow-red-500/30 animate-pulse">
                                    <Play className="w-8 h-8 text-white fill-current" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">About Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                About <span className="text-primary">TakeMart</span> Supermarket Franchise
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                TakeMart is India's fastest-growing supermarket chain, revolutionizing the grocery retail experience. We combine fresh produce, everyday essentials, and a friendly shopping environment to serve communities across the nation.
                            </p>
                            <p>
                                Our proven business model ensures that every franchise partner succeeds. From store setup and inventory management to marketing and staff training, we provide end-to-end support to help you build a profitable business.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="#" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-2 text-lg">
                                Read our success story
                                <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
