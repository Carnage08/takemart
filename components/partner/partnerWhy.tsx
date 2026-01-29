"use client";


import { CheckCircle } from "lucide-react";

const reasons = [
  "Massive Customer Reach",
  "Hassle-Free Transactions",
  "Marketing & Promotion Support",
  "Dedicated Support Team",
];

const WhyPartner = () => {
  return (
    
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#2D6830] mb-12">
            Why Partner with Take Smart?
          </h2>

          <div className="space-y-6">
            {reasons.map((item, i) => (
              <div
              key={i}
              className="
                flex items-center gap-4
                bg-[#F4F9EE]
                p-6 rounded-2xl
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
            
                <CheckCircle className="text-[#4CAF50]" />
                <p className="text-black font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default WhyPartner;
