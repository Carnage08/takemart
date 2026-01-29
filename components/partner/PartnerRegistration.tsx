"use client";



const PartnerRegistration = () => {
  return (
    
      <section className="bg-white py-28">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="bg-[#F4F9EE] rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#2D6830] mb-2">
              Partner Registration
            </h2>
            <p className="text-center text-black/60 mb-10">
              Fill in your details and our team will contact you shortly.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="inp" placeholder="First Name *" />
              <input className="inp" placeholder="Last Name *" />
              <input className="inp md:col-span-2" placeholder="Business / Brand Name *" />
              <input className="inp" placeholder="Phone Number *" />
              <input className="inp" placeholder="Alternative Number" />
              <input className="inp md:col-span-2" placeholder="Email *" />
              <textarea className="inp md:col-span-2 h-28" placeholder="Address"></textarea>
              <select className="inp md:col-span-2">
                <option>Please Select Business Type *</option>
                <option>Retailer / Seller</option>
                <option>Service Provider</option>
                <option>Property Owner</option>
                <option>Farmer / Agri Business</option>
              </select>
              <textarea className="inp md:col-span-2 h-28" placeholder="Message"></textarea>

              <div className="md:col-span-2 mt-10 flex justify-center">
                <button
                    type="submit"
                    className="
                    px-10 py-3
                    rounded-full
                    bg-[#FF8A00]
                    text-white
                    font-semibold
                    text-sm
                    shadow-md
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    active:scale-95
                    "
                >
                    Submit
                </button>
                </div>




              {/* <button className="md:col-span-2 bg-[#FF8A00] text-white py-4 rounded-full font-semibold hover:opacity-90 transition">
                Submit
              </button> */}
            </form>
          </div>
        </div>
      </section>
    
  );
};

export default PartnerRegistration;
