"use client";


import Image from "next/image";

const PartnerInfo = () => {
  return (
    
      <section className="bg-[#F4F9EE] py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D6830] leading-tight">
              Partner with <span className="text-[#FF8A00]">Take Smart</span>
            </h1>

            <p className="mt-6 text-lg text-black/70 leading-relaxed">
              Join Take Smart as a partner and grow your business. Whether you're
              a seller, service provider, or property owner, we help you reach
              more customers and scale faster.
            </p>

            <button className="mt-8 px-8 py-4 bg-[#4CAF50] text-white rounded-full font-semibold shadow-md hover:bg-[#43a047] transition">
              Become a Partner
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/OGroceries.svg" // replace with your image
              alt="Partner with Take Smart"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    
  );
};

export default PartnerInfo;
