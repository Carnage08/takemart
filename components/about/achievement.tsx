"use client";

import Reveal from "@/components/ui/reveal";

const achievements = [
    { value: "250+", label: "Cities" },
    { value: "1,500+", label: "Brands" },
    { value: "20,000+", label: "Products" },
    { value: "500,000+", label: "Customers" },
  ];
  
  const Achievement = () => {
    return (
        <Reveal delay={250}>

      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our Achievements
            </h2>
            <p className="mt-4 text-black/70 max-w-2xl mx-auto">
              Milestones that reflect the trust communities place in G-Fresh Mart.
            </p>
          </div>
  
          {/* Stats  previous color #45492D*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F5C44] rounded-2xl p-8 text-center shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-[#F5F1E8]">
                  {item.value}
                </h3>
                <p className="mt-2 text-[#F5F1E8] tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
      </Reveal>
    );
  };
  
  export default Achievement;
  


// const achievements = [
//     { value: "250+", label: "Cities" },
//     { value: "1,500+", label: "Brands" },
//     { value: "20,000+", label: "Products" },
//     { value: "500,000+", label: "Customers" },
//   ];
  
//   const Achievement = () => {
//     return (
//       <section className="w-full bg-white py-24">
//         <div className="max-w-6xl mx-auto px-6">
  
//           {/* Heading */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-black">
//               Our Achievements
//             </h2>
//             <p className="mt-4 text-black/70 max-w-2xl mx-auto">
//               Milestones that reflect the trust communities place in G-Fresh Mart.
//             </p>
//           </div>
  
//           {/* Stats  previous color #45492D*/}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {achievements.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#0F5C44] rounded-2xl p-8 text-center shadow-md hover:-translate-y-1 transition-all duration-300"
//               >
//                 <h3 className="text-4xl font-bold text-[#F5F1E8]">
//                   {item.value}
//                 </h3>
//                 <p className="mt-2 text-[#F5F1E8] tracking-wide">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
  
//         </div>
//       </section>
//     );
//   };
  
//   export default Achievement;
  