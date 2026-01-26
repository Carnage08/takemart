"use client";

import Reveal from "@/components/ui/reveal";

import React from "react";

const ContactInfoMapSection = () => {
  return (
    <Reveal delay={100}>
    <section className="bg-white pt-20 pb-40">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* WHAT HAPPENS NEXT */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold md:text-5xl text-black mb-12">
            What Happens{" "}
            <span className="text-[#0F5C44]">Next?</span>
          </h2>

          <div className="grid grid-cols-1 pt-12 pb-20 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-[#F5F1E8]/60 rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
              <div className="text-4xl font-extrabold text-[#0F5C44] mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Submit Your Details
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Fill out the form with your basic information so our team can
                understand your franchise interest.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F5F1E8]/60 rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
              <div className="text-4xl font-extrabold text-[#0F5C44] mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Expert Call Within 24–48 Hours
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                Our franchise expert connects with you to discuss investment,
                location, and next steps.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F5F1E8]/60 rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
              <div className="text-4xl font-extrabold text-[#0F5C44] mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Site Review & Franchise Onboarding
              </h3>
              <p className="text-black/70 text-sm leading-relaxed">
                We evaluate your site and guide you through onboarding to launch
                your G-Fresh Mart.
              </p>
            </div>

          </div>
        </div>

        {/* MAP */}
        <div className="rounded-3xl overflow-hidden shadow-lg border">
          <iframe
            title="London Eye Map"
            src="https://www.google.com/maps?q=London%20Eye&output=embed"
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

      </div>
    </section>
    </Reveal>
  );
};

export default ContactInfoMapSection;

// "use client";

// import React from "react";

// const ContactInfoMapSection = () => {
//   return (
//     <section className="bg-white pt-20 pb-40">
//       <div className="max-w-7xl mx-auto px-4 space-y-20">

//         {/* WHAT HAPPENS NEXT */}
//         <div className="text-center">
//           <h2 className="text-5xl font-extrabold md:text-5xl text-black mb-12">
//             What Happens{" "}
//             <span className="text-[#0F5C44]">Next?</span>
//           </h2>

//           <div className="grid grid-cols-1 pt-12 pb-20 md:grid-cols-3 gap-8">
            
//             {/* Step 1 */}
//             <div className="bg-[#F5F1E8]/60 rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
//               <div className="text-4xl font-extrabold text-[#0F5C44] mb-4">
//                 1
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-black">
//                 Submit Your Details
//               </h3>
//               <p className="text-black/70 text-sm leading-relaxed">
//                 Fill out the form with your basic information so our team can
//                 understand your franchise interest.
//               </p>
//             </div>

//             {/* Step 2 */}
//             <div className="bg-[#F5F1E8]/60 rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
//               <div className="text-4xl font-extrabold text-[#0F5C44] mb-4">
//                 2
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-black">
//                 Expert Call Within 24–48 Hours
//               </h3>
//               <p className="text-black/70 text-sm leading-relaxed">
//                 Our franchise expert connects with you to discuss investment,
//                 location, and next steps.
//               </p>
//             </div>

//             {/* Step 3 */}
//             <div className="bg-[#F5F1E8]/60 rounded-2xl p-8 shadow-md hover:-translate-y-1 transition">
//               <div className="text-4xl font-extrabold text-[#0F5C44] mb-4">
//                 3
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-black">
//                 Site Review & Franchise Onboarding
//               </h3>
//               <p className="text-black/70 text-sm leading-relaxed">
//                 We evaluate your site and guide you through onboarding to launch
//                 your G-Fresh Mart.
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* MAP */}
//         <div className="rounded-3xl overflow-hidden shadow-lg border">
//           <iframe
//             title="London Eye Map"
//             src="https://www.google.com/maps?q=London%20Eye&output=embed"
//             width="100%"
//             height="380"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactInfoMapSection;




// "use client";

// import React from "react";
// import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

// const ContactInfoMapSection = () => {
//   return (
//     <section className="bg-white pt-24 pb-32">
//       <div className="max-w-7xl mx-auto px-4 space-y-35">

//         {/* INFO CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* Call */}
//           <div className="bg-[#818865]/10 rounded-2xl p-8 shadow-md">
//             <FiPhone className="text-3xl mb-4 text-black/70" />
//             <h3 className="text-xl font-semibold mb-2 text-black">
//               (+876) 765 665
//             </h3>
//             <p className="text-black/80 text-sm leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Ut elit tellus luctus.
//             </p>
//           </div>

//           {/* Email */}
//           <div className="bg-[#BB8D3F]/10 rounded-2xl p-8 shadow-md">
//             <FiMail className="text-3xl mb-4 text-black/70" />
//             <h3 className="text-xl font-semibold mb-2 text-black">
//               mail@influenca.id
//             </h3>
//             <p className="text-black/80 text-sm leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Ut elit tellus luctus.
//             </p>
//           </div>

//           {/* Location */}
//           <div className="bg-sky-100/60 rounded-2xl p-8 shadow-md">
//             <FiMapPin className="text-3xl mb-4 text-black/70" />
//             <h3 className="text-xl font-semibold mb-2 text-black">
//               London Eye London
//             </h3>
//             <p className="text-black/80 text-sm leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Ut elit tellus luctus.
//             </p>
//           </div>
//         </div>

//         {/* MAP */}
//         <div className="rounded-3xl overflow-hidden shadow-lg border">
//           <iframe
//             title="London Eye Map"
//             src="https://www.google.com/maps?q=London%20Eye&output=embed"
//             width="100%"
//             height="380"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactInfoMapSection;