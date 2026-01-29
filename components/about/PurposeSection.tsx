"use client";



import { Leaf, Eye, FileText } from "lucide-react";

const cards = [
  {
    id: "01",
    title: "Our Mission",
    description:
      "To deliver fresh, affordable groceries while building trust, sustainability, and convenience into everyday shopping.",
    icon: Leaf,
    hoverBg: "bg-[#C8EAC9]"
  },
  {
    id: "02",
    title: "Our Vision",
    description:
      "To create a connected grocery ecosystem where communities and brands grow together through technology.",
    icon: Eye,
    hoverBg: "bg-[#FFE0B2]"
  },
  {
    id: "03",
    title: "Our Statement",
    description:
      "We stand for quality, transparency, and customer-first thinking in everything we do.",
    icon: FileText,
    hoverBg: "bg-[#C8E6C9]"
  }
];

const PurposeSection = () => {
  return (
    
    <section className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* CENTERED HEADING  [#2F4F2F] text*/}
        {/* <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-black">
            Our Mission, Vision and Statement
          </h2>
        </div> */}
        <div className="text-center mb-24">
  <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
    Our{" "}
    <span className="text-[#FF610A] relative inline-block">
      Mission
      <span className="absolute left-0 -bottom-2 w-full h-3 bg-[#BB8D3F]/40 -z-10 rounded-md"></span>
    </span>
    ,{" "}
    <span className="text-[#FF610A]">Vision</span>{" "}
    and{" "}
    <span className="text-[#FF610A]">Statement</span>
  </h2>

  <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
    The principles that guide our purpose, decisions, and long-term commitment.
  </p>
</div>


        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.id} className="group perspective-[1200px]">
                <div
                  className="
                    relative h-[360px] w-full
                    transition-transform duration-700
                    transform-style-preserve-3d
                    group-hover:rotate-y-180
                  "
                >
                  {/* FRONT SIDE */}
                  <div
                    className="
                        absolute inset-0
                        bg-white rounded-3xl
                        flex flex-col items-center justify-center
                        backface-hidden
                        border border-black/5
                        shadow-sm
                    ">
                    {/* Number */}
                    <span className="absolute top-6 right-6 text-3xl font-bold text-[#0F5C44]">
                        {card.id}
                    </span>

                    {/* Icon Badge */}
                    <div className="w-24 h-24 rounded-full flex items-center justify-center
                                    bg-gradient-to-br from-[#818865]/20 via-[#BB8D3F]/20 to-sky-200/20
                                    mb-6">
                        <Icon className="w-14 h-14 text-[#FF610A]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-[#0F5C44] tracking-wide">
                        {card.title}
                    </h3>
                    </div>

                  {/* <div
                    className="
                      absolute inset-0
                      bg-white rounded-3xl
                      flex flex-col items-center justify-center
                      backface-hidden
                      border border-black/5
                    "
                  >
                    <span className="absolute top-6 right-6 text-black font-semibold">
                      {card.id}
                    </span>

                    <Icon className="w-20 h-20 text-green-700 mb-6" />

                    <h3 className="text-2xl font-semibold text-black">
                      {card.title}
                    </h3>
                  </div> */}

                  {/* BACK SIDE */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl p-8
                      rotate-y-180 backface-hidden
                      ${card.hoverBg}
                    `}
                  >
                    <div className="flex justify-between items-start">
                      <Icon className="w-7 h-7 text-black" />
                      <span className="text-3xl font-bold text-black/80">
                        {card.id}
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-semibold text-black">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-black/80 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
   
  );
};

export default PurposeSection;





// "use client";

// import { Leaf, Eye, FileText } from "lucide-react";

// const cards = [
//   {
//     id: "01",
//     title: "Our Mission",
//     description:
//       "To deliver fresh, affordable groceries while building trust, sustainability, and convenience into everyday shopping.",
//     icon: Leaf,
//     hoverBg: "bg-[#818865]/70"
//   },
//   {
//     id: "02",
//     title: "Our Vision",
//     description:
//       "To create a connected grocery ecosystem where communities and brands grow together through technology.",
//     icon: Eye,
//     hoverBg: "bg-sky-200"
//   },
//   {
//     id: "03",
//     title: "Our Statement",
//     description:
//       "We stand for quality, transparency, and customer-first thinking in everything we do.",
//     icon: FileText,
//     hoverBg: "bg-[#BB8D3F]/60"
//   }
// ];

// const PurposeSection = () => {
//   return (
//     <section className="bg-gray-50 py-32">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* CENTERED HEADING  [#2F4F2F] text*/}
//         {/* <div className="text-center mb-20">
//           <h2 className="text-5xl font-extrabold text-black">
//             Our Mission, Vision and Statement
//           </h2>
//         </div> */}
//         <div className="text-center mb-24">
//   <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
//     Our{" "}
//     <span className="text-[#0F5C44] relative inline-block">
//       Mission
//       <span className="absolute left-0 -bottom-2 w-full h-3 bg-[#BB8D3F]/40 -z-10 rounded-md"></span>
//     </span>
//     ,{" "}
//     <span className="text-[#0F5C44]">Vision</span>{" "}
//     and{" "}
//     <span className="text-[#0F5C44]">Statement</span>
//   </h2>

//   <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
//     The principles that guide our purpose, decisions, and long-term commitment.
//   </p>
// </div>


//         {/* CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {cards.map((card) => {
//             const Icon = card.icon;

//             return (
//               <div key={card.id} className="group perspective-[1200px]">
//                 <div
//                   className="
//                     relative h-[360px] w-full
//                     transition-transform duration-700
//                     transform-style-preserve-3d
//                     group-hover:rotate-y-180
//                   "
//                 >
//                   {/* FRONT SIDE */}
//                   <div
//                     className="
//                         absolute inset-0
//                         bg-white rounded-3xl
//                         flex flex-col items-center justify-center
//                         backface-hidden
//                         border border-black/5
//                         shadow-sm
//                     ">
//                     {/* Number */}
//                     <span className="absolute top-6 right-6 text-3xl font-bold text-black/80">
//                         {card.id}
//                     </span>

//                     {/* Icon Badge */}
//                     <div className="w-24 h-24 rounded-full flex items-center justify-center
//                                     bg-gradient-to-br from-[#818865]/20 via-[#BB8D3F]/20 to-sky-200/20
//                                     mb-6">
//                         <Icon className="w-14 h-14 text-[#2F4F2F]" />
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-2xl font-semibold text-[#0F5C44] tracking-wide">
//                         {card.title}
//                     </h3>
//                     </div>

//                   {/* <div
//                     className="
//                       absolute inset-0
//                       bg-white rounded-3xl
//                       flex flex-col items-center justify-center
//                       backface-hidden
//                       border border-black/5
//                     "
//                   >
//                     <span className="absolute top-6 right-6 text-black font-semibold">
//                       {card.id}
//                     </span>

//                     <Icon className="w-20 h-20 text-green-700 mb-6" />

//                     <h3 className="text-2xl font-semibold text-black">
//                       {card.title}
//                     </h3>
//                   </div> */}

//                   {/* BACK SIDE */}
//                   <div
//                     className={`
//                       absolute inset-0 rounded-3xl p-8
//                       rotate-y-180 backface-hidden
//                       ${card.hoverBg}
//                     `}
//                   >
//                     <div className="flex justify-between items-start">
//                       <Icon className="w-7 h-7 text-black" />
//                       <span className="text-3xl font-bold text-black/80">
//                         {card.id}
//                       </span>
//                     </div>

//                     <h3 className="mt-10 text-2xl font-semibold text-black">
//                       {card.title}
//                     </h3>

//                     <p className="mt-4 text-black/80 leading-relaxed">
//                       {card.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PurposeSection;
