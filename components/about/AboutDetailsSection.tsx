import Image from "next/image";

const AboutDetailsSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="w-full h-[420px] lg:h-[520px] relative">
          <Image
            src="/grocery.png"
            alt="Grocery shopping"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          
          {/* TOP SINGLE BLOCK */}
          <div
            className="
              bg-[#BB8D3F]/50 rounded-3xl p-8
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-xl
              will-change-transform
            "
          >
            <h2 className="text-2xl font-bold text-black mb-3">
              About Us
            </h2>
            <p className="text-black leading-relaxed">
              We are a modern grocery platform focused on delivering freshness,
              affordability, and trust. Our goal is to simplify everyday grocery
              shopping while supporting sustainable sourcing.
            </p>
          </div>

          {/* BOTTOM TWO BLOCKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div
              className="
                bg-[#F5F1E8] rounded-3xl p-8
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-xl
                will-change-transform
              "
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                Who We Are
              </h3>
              <p className="text-black leading-relaxed">
                A team driven by innovation and customer-first thinking, working
                to connect communities with reliable grocery brands.
              </p>
            </div>

            <div
              className="
                bg-[#F5F1E8] rounded-3xl p-8
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-xl
                will-change-transform
              "
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                What We Do
              </h3>
              <p className="text-black leading-relaxed">
                We bring quality groceries to your doorstep by partnering with
                trusted brands and ensuring efficient, tech-enabled delivery.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailsSection;




// import Image from "next/image";
// // w-full bg-white py-24 earleir
// const AboutDetailsSection = () => {
//   return (
//     <section className="w-full bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* LEFT IMAGE */}
//         <div className="w-full h-full relative">
//           <Image
//             src="/grocery.png"   // put image in public/
//             alt="Grocery shopping"
//             fill
//             className="object-cover rounded-3xl"
//             // width={600}
//             // height={600}
//             // className="rounded-3xl object-cover w-full h-full"
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex flex-col gap-6">
          
//           {/* TOP SINGLE BLOCK */}
//           <div className="bg-[#BB8D3F]/50 rounded-3xl p-8">
//             <h2 className="text-2xl font-bold text-black mb-3">
//               About Us
//             </h2>
//             <p className="text-black leading-relaxed">
//               We are a modern grocery platform focused on delivering freshness,
//               affordability, and trust. Our goal is to simplify everyday grocery
//               shopping while supporting sustainable sourcing.
//             </p>
//           </div>

//           {/* BOTTOM TWO BLOCKS who-bg-[#818865]/40 what-bg-sky-100/60 */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
//             <div className="bg-[#F5F1E8] rounded-3xl p-8">
//               <h3 className="text-xl font-semibold text-black mb-2">
//                 Who We Are
//               </h3>
//               <p className="text-black leading-relaxed">
//                 A team driven by innovation and customer-first thinking, working
//                 to connect communities with reliable grocery brands.
//               </p>
//             </div>

//             <div className="bg-[#F5F1E8] rounded-3xl p-8">
//               <h3 className="text-xl font-semibold text-black mb-2">
//                 What We Do
//               </h3>
//               <p className="text-black leading-relaxed">
//                 We bring quality groceries to your doorstep by partnering with
//                 trusted brands and ensuring efficient, tech-enabled delivery.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutDetailsSection;
