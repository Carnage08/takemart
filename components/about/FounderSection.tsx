"use client";



import Image from "next/image";

const FounderSection = () => {
  return (
    
    <section className="bg-[#FFF6EC] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – STORY CONTENT bg-[#F5F1E8] inital-[#BB8D3F]/10*/}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Our Story
            </h2>

            <p className="text-black/70 mb-4 leading-relaxed">
              Take Smart was born from a simple belief — that every community
              deserves access to fresh, affordable, and reliable groceries.
            </p>

            <p className="text-black/70 mb-4 leading-relaxed">
              As founders, we witnessed firsthand the challenges families face
              with inconsistent quality, rising prices, and unreliable supply
              chains. We knew there had to be a better way.
            </p>

            <p className="text-black/70 mb-6 leading-relaxed">
              With years of experience in retail operations and sourcing, we set
              out to build a supermarket model that empowers local entrepreneurs
              while delivering trust and freshness to every household.
            </p>

            {/* Signature / Name */}
            <div className="mt-10">
              <p className="font-semibold text-black">
                — Founder & Team
              </p>
              <p className="text-black/60 text-sm">
                Take Smart
              </p>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          {/* RIGHT – IMAGE */}
            <div className="relative flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg max-h-[520px] w-full lg:w-[90%]">
                <Image
                src="/foun.avif"   // put image in public/
                alt="Founder of G-Fresh Mart"
                width={600}
                height={700}
                className="object-cover w-full h-full max-h-[520px]"
                />
            </div>

            {/* Optional badge */}
            <div className="absolute -left-6 bottom-8 bg-[#FF8A00] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                Founded with Trust
            </div>
            </div>


        </div>
      </div>
    </section>
    
  );
};

export default FounderSection;

// import Image from "next/image";

// const FounderSection = () => {
//   return (
//     <section className="bg-[#F5F1E8]/45 py-32">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT – STORY CONTENT bg-[#F5F1E8] inital-[#BB8D3F]/10*/}
//           <div>
//             <h2 className="text-4xl font-bold text-black mb-6">
//               Our Story
//             </h2>

//             <p className="text-black/70 mb-4 leading-relaxed">
//               G-Fresh Mart was born from a simple belief — that every community
//               deserves access to fresh, affordable, and reliable groceries.
//             </p>

//             <p className="text-black/70 mb-4 leading-relaxed">
//               As founders, we witnessed firsthand the challenges families face
//               with inconsistent quality, rising prices, and unreliable supply
//               chains. We knew there had to be a better way.
//             </p>

//             <p className="text-black/70 mb-6 leading-relaxed">
//               With years of experience in retail operations and sourcing, we set
//               out to build a supermarket model that empowers local entrepreneurs
//               while delivering trust and freshness to every household.
//             </p>

//             {/* Signature / Name */}
//             <div className="mt-10">
//               <p className="font-semibold text-black">
//                 — Founder & Team
//               </p>
//               <p className="text-black/60 text-sm">
//                 G-Fresh Mart
//               </p>
//             </div>
//           </div>

//           {/* RIGHT – IMAGE */}
//           {/* RIGHT – IMAGE */}
//             <div className="relative flex justify-center">
//             <div className="rounded-3xl overflow-hidden shadow-lg max-h-[520px] w-full lg:w-[90%]">
//                 <Image
//                 src="/foun.avif"   // put image in public/
//                 alt="Founder of G-Fresh Mart"
//                 width={600}
//                 height={700}
//                 className="object-cover w-full h-full max-h-[520px]"
//                 />
//             </div>

//             {/* Optional badge */}
//             <div className="absolute -left-6 bottom-8 bg-[#FF8A00] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
//                 Founded with Trust
//             </div>
//             </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default FounderSection;
