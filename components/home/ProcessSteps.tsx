export function ProcessSteps() {
    const steps = [
        {
            number: "1",
            title: "Initial Inquiry",
            description: "Fill out the franchise application form or contact our team directly.",
        },
        {
            number: "2",
            title: "Screening & Selection",
            description: "We review your profile and location feasibility for maximum profitability.",
        },
        {
            number: "3",
            title: "Agreement & Sign-off",
            description: "Sign the franchise agreement and formalize our partnership.",
        },
        {
            number: "4",
            title: "Store Setup",
            description: "Our diverse team handles interior design, stocking, and staff hiring.",
        },
        {
            number: "5",
            title: "Grand Opening",
            description: "Launch your store with a bang using our proven marketing strategies.",
        },
        {
            number: "6",
            description: "Continuous operational and marketing support to ensure growth.",
        },
    ]

    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-green-600 font-bold tracking-wider text-sm uppercase">The Process</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Your Franchise Journey in 6 Simple Steps</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
