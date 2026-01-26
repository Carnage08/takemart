const AboutSections = () => {
  return (
    <section className="relative w-full bg-[#0F5C44] pt-28 pb-48 overflow-hidden">
      
      {/* CENTERED HEADING */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 mt-10 md:mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Us
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-white text-lg leading-relaxed">
          We are a modern grocery platform connecting cities, brands, products,
          and customers with quality, trust, and sustainability at the core.
        </p>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[120px]"
        >
          <path
            d="M0,40 C240,100 480,100 720,70 960,40 1200,40 1440,70 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSections;



// const AboutSections = () => {
//   return (
//     <section className="relative w-full bg-[#0F5C44] pt-28 pb-48 overflow-hidden">
      
//       {/* CENTERED HEADING  bg-[#818865]/60 */}
//       <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-white">
//           About Us
//         </h1>
//         <p className="mt-6 max-w-3xl mx-auto text-white text-lg leading-relaxed">
//           We are a modern grocery platform connecting cities, brands, products,
//           and customers with quality, trust, and sustainability at the core.
//         </p>
//       </div>

//       {/* Bottom Curve w-full h-[120px]  absolute bottom-0 left-0 w-full leading-none */}
//       <div className="absolute bottom-0 left-0 w-full leading-none">
//         <svg
//           viewBox="0 0 1440 120"
//           preserveAspectRatio="none"
//           className="block w-full h-[120px]"
//         >
//           <path
//             d="M0,40 C240,100 480,100 720,70 960,40 1200,40 1440,70 L1440,120 L0,120 Z"
//             fill="#ffffff"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default AboutSections;