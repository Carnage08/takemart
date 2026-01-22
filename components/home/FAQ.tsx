import { AccordionItem } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="flex justify-center gap-4">
                            <Button className="rounded-full px-8">General</Button>
                            <Button variant="outline" className="rounded-full px-8">Franchise Model</Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <AccordionItem title="What is the minimum investment required to start a TakeMart franchise?" defaultOpen>
                            The minimum investment starts from ₹15 Lakhs, which includes franchise fees, store setup, inventory, and marketing support. Detailed investment breakdown is available upon request.
                        </AccordionItem>
                        <AccordionItem title="Do I need prior retail experience?">
                            No, prior experience is not mandatory. We provide comprehensive training for you and your staff, covering all aspects of store operations, inventory management, and customer service.
                        </AccordionItem>
                        <AccordionItem title="How long does it take to open the store?">
                            With our streamlined process, we typically aim to launch your store within 45 days of signing the franchise agreement.
                        </AccordionItem>
                        <AccordionItem title="What kind of support will I receive after opening?">
                            We offer continuous support including dedicated relationship managers, regular inventory replenishment, marketing campaigns, and operational audits to ensure your business thrives.
                        </AccordionItem>
                        <AccordionItem title="Can I choose the products I want to sell?">
                            Yes, while we provide a core list of best-selling products based on data, you have the flexibility to curate additional regional or local products to cater to your specific customer base.
                        </AccordionItem>
                    </div>

                    <div className="mt-12 p-8 bg-green-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Still have questions?</h4>
                            <p className="text-gray-600">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                        </div>
                        <Button className="shrink-0 bg-green-600 hover:bg-green-700 text-white">Get in Touch</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
