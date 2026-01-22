import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Insights() {
    const posts = [
        {
            category: "Franchise Tips",
            title: "5 Tips to Run a Successful Supermarket Franchise",
            excerpt: "Running a supermarket requires dedication and the right strategy. Here are 5 expert tips to ensure profitability.",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
            date: "Jan 12, 2024"
        },
        {
            category: "Market Trends",
            title: "The Future of Grocery Retail in India",
            excerpt: "Explore the emerging trends in the Indian retail sector and how technology is shaping the future of grocery shopping.",
            image: "https://images.unsplash.com/photo-1578916171728-56685ff8d487?auto=format&fit=crop&q=80&w=600",
            date: "Jan 10, 2024"
        },
        {
            category: "Success Stories",
            title: "How Mrs. Gupta Transformed Her Career with TakeMart",
            excerpt: "From a homemaker to a successful business owner, read the inspiring journey of one of our top franchise partners.",
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600",
            date: "Jan 05, 2024"
        },
    ]

    return (
        <section className="py-24 bg-gray-50">
            <div className="container px-4">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Latest Resources</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Latest Resources & Insights</h2>
                    </div>
                    <Link href="#" className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        View All Posts <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto pt-4 border-t border-gray-100">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Button variant="outline">View All Posts</Button>
                </div>
            </div>
        </section>
    )
}
