import { Button } from "@/components/ui/button"

export function CTABanner() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10"></div>
            <div className="container relative z-10 px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to start your Franchise Journey?
                </h2>
                <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                    Join 250+ successful entrepreneurs who have transformed their lives with Takemart.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 border-none h-14 px-8 text-lg rounded-full">
                        Apply Now
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 h-14 px-8 text-lg rounded-full backdrop-blur-sm">
                        Request Callback
                    </Button>
                </div>
            </div>
        </section>
    )
}
