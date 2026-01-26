"use client";

import Reveal from "@/components/ui/reveal";
import {
  Factory,
  TestTube,
  Globe,
  Users,
  Truck,
  ShieldCheck,
  Lightbulb,
  Handshake
} from "lucide-react";

const features = [
  {
    title: "Quality Sourcing",
    description: "Carefully sourced groceries ensuring freshness, purity, and reliability.",
    icon: Factory,
    bg: "bg-[#818865]/10"
  },
  {
    title: "Quality Assurance",
    description: "Every product is checked to meet safety and quality standards.",
    icon: TestTube,
    bg: "bg-[#BB8D3F]/10"
  },
  {
    title: "Wide Availability",
    description: "Reliable supply across cities with efficient distribution.",
    icon: Globe,
    bg: "bg-sky-100/60"
  },
  {
    title: "Customer-First",
    description: "Designed to meet the daily needs of families and communities.",
    icon: Users,
    bg: "bg-[#818865]/10"
  },
  {
    title: "Efficient Delivery",
    description: "Timely delivery supported by strong logistics partners.",
    icon: Truck,
    bg: "bg-[#BB8D3F]/10"
  },
  {
    title: "Secure Packaging",
    description: "Hygienic, durable, and eco-conscious packaging.",
    icon: ShieldCheck,
    bg: "bg-sky-100/60"
  },
  {
    title: "Innovation Driven",
    description: "Constant improvements for better products and experiences.",
    icon: Lightbulb,
    bg: "bg-[#818865]/10"
  },
  {
    title: "Trusted Partnerships",
    description: "Strong relationships with suppliers and local communities.",
    icon: Handshake,
    bg: "bg-[#BB8D3F]/10"
  }
];

const WhyChooseUs = () => {
  return (
    <Reveal delay={200}>
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-black">
            Why Choose Us
          </h2>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto">
            Built on quality, trust, and a commitment to serve communities better every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  ${item.bg}
                  rounded-3xl p-8
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:shadow-xl
                  shadow-md
                `}
              >
                <Icon className="w-10 h-10 text-[#2F4F2F] mb-6" />

                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    </Reveal>
  );
};

export default WhyChooseUs;

// "use client";

// import {
//   Factory,
//   TestTube,
//   Globe,
//   Users,
//   Truck,
//   ShieldCheck,
//   Lightbulb,
//   Handshake
// } from "lucide-react";

// const features = [
//   {
//     title: "Quality Sourcing",
//     description: "Carefully sourced groceries ensuring freshness, purity, and reliability.",
//     icon: Factory,
//     bg: "bg-[#818865]/10"
//   },
//   {
//     title: "Quality Assurance",
//     description: "Every product is checked to meet safety and quality standards.",
//     icon: TestTube,
//     bg: "bg-[#BB8D3F]/10"
//   },
//   {
//     title: "Wide Availability",
//     description: "Reliable supply across cities with efficient distribution.",
//     icon: Globe,
//     bg: "bg-sky-100/60"
//   },
//   {
//     title: "Customer-First",
//     description: "Designed to meet the daily needs of families and communities.",
//     icon: Users,
//     bg: "bg-[#818865]/10"
//   },
//   {
//     title: "Efficient Delivery",
//     description: "Timely delivery supported by strong logistics partners.",
//     icon: Truck,
//     bg: "bg-[#BB8D3F]/10"
//   },
//   {
//     title: "Secure Packaging",
//     description: "Hygienic, durable, and eco-conscious packaging.",
//     icon: ShieldCheck,
//     bg: "bg-sky-100/60"
//   },
//   {
//     title: "Innovation Driven",
//     description: "Constant improvements for better products and experiences.",
//     icon: Lightbulb,
//     bg: "bg-[#818865]/10"
//   },
//   {
//     title: "Trusted Partnerships",
//     description: "Strong relationships with suppliers and local communities.",
//     icon: Handshake,
//     bg: "bg-[#BB8D3F]/10"
//   }
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-white py-32">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-extrabold text-black">
//             Why Choose Us
//           </h2>
//           <p className="mt-4 text-black/70 max-w-2xl mx-auto">
//             Built on quality, trust, and a commitment to serve communities better every day.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className={`
//                   ${item.bg}
//                   rounded-3xl p-8
//                   transition-all duration-300 ease-out
//                   hover:-translate-y-2
//                   hover:shadow-xl
//                   shadow-md
//                 `}
//               >
//                 <Icon className="w-10 h-10 text-[#2F4F2F] mb-6" />

//                 <h3 className="text-xl font-semibold text-black mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-black/70 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
