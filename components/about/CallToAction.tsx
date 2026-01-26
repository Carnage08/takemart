"use client";

import Reveal from "@/components/ui/reveal";
import Image from "next/image";

const CallToAction = () => {
  return (
    <Reveal delay={300}>
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#F4F9EE]">

          {/* Decorative background circles #0F5C44  initial- [#2F7D32] */}
          <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-[#818865]/10" />
          <div className="absolute -right-10 top-40 w-[260px] h-[260px] rounded-full bg-[#BB8D3F]/10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-14">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                Start Your <span className="text-[#0F5C44]">G-Fresh Mart</span>{" "}
                Journey Today
              </h2>

              <p className="mt-6 text-black/70 max-w-xl">
                Launch your profitable supermarket in just{" "}
                <span className="font-semibold text-black">45 days</span> with
                end-to-end support and world-class infrastructure from G-Fresh
                Mart.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-full bg-[#FF8A00] text-white font-semibold shadow-md hover:opacity-90 transition">
                  Apply Now
                </button>

                <button className="px-8 py-4 rounded-full bg-white border border-black/10 text-black font-semibold hover:bg-black/5 transition">
                  Talk to Our Team
                </button>
              </div>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/house.svg"   // put image in public/
                alt="G-Fresh Mart Illustration"
                width={420}
                height={420}
                className="max-w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default CallToAction;



// "use client";

// import Image from "next/image";

// const CallToAction = () => {
//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="relative overflow-hidden rounded-[32px] bg-[#F4F9EE]">

//           {/* Decorative background circles #0F5C44  initial- [#2F7D32] */}
//           <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-[#818865]/10" />
//           <div className="absolute -right-10 top-40 w-[260px] h-[260px] rounded-full bg-[#BB8D3F]/10" />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-14">

//             {/* LEFT CONTENT */}
//             <div>
//               <h2 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight">
//                 Start Your <span className="text-[#0F5C44]">G-Fresh Mart</span>{" "}
//                 Journey Today
//               </h2>

//               <p className="mt-6 text-black/70 max-w-xl">
//                 Launch your profitable supermarket in just{" "}
//                 <span className="font-semibold text-black">45 days</span> with
//                 end-to-end support and world-class infrastructure from G-Fresh
//                 Mart.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-4">
//                 <button className="px-8 py-4 rounded-full bg-[#FF8A00] text-white font-semibold shadow-md hover:opacity-90 transition">
//                   Apply Now
//                 </button>

//                 <button className="px-8 py-4 rounded-full bg-white border border-black/10 text-black font-semibold hover:bg-black/5 transition">
//                   Talk to Our Team
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT ILLUSTRATION */}
//             <div className="flex justify-center lg:justify-end">
//               <Image
//                 src="/house.svg"   // put image in public/
//                 alt="G-Fresh Mart Illustration"
//                 width={420}
//                 height={420}
//                 className="max-w-full h-auto"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
