"use client";



const partners = [
  "Retailers & Sellers",
  "Service Providers",
  "Property Owners",
  "Farmers & Agri-Businesses",
];

const WhoCanPartner = () => {
  return (
    
      <section className="bg-[#F4F9EE] py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2D6830] mb-12">
            Who Can Partner with Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {partners.map((item, i) => (
                    <div
                    key={i}
                    className="
                        bg-[#FF8432]
                        rounded-2xl
                        shadow-md
                        transition
                        hover:-translate-y-1
                        flex items-center justify-center
                        h-32
                        px-6
                    "
                    >
                    <p className="text-xl text-center font-bold text-[#F5F1E8] leading-snug">
                        {item}
                    </p>
                    </div>
                ))}
                </div>

        </div>
      </section>
    
  );
};

export default WhoCanPartner;
