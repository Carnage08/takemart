"use client";

import Reveal from "@/components/ui/reveal";

import React, { useState } from "react";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";

const ContactFormSection = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidated(true);

    const form = event.currentTarget;
    if (!form.checkValidity()) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  return (
    <Reveal>
    <section className="bg-white pt-32 md:pt-40 pb-10 md:pb-12 text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:px-0 px-2">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
              Get in Touch with us
            </h1>

            <p className="text-lg text-black mb-12 max-w-lg">
            Built on value, trust, and day-to-day demand, 
            G Fresh is one of the best grocery store franchise in India with 
            over 400 stores nationwide. We offer a simple path to owning a Supermarket 
            Business with clear pricing, strong supply, and solid margins.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg">
              <div className="flex space-x-4">
                <FiPhone className="text-3xl text-[#0F5C44]" />
                <div>
                  <h3 className="font-semibold">Call US</h3>
                  <p className="text-black/40">
                    +91 7378787878 <br /> +91 7777777777
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <FiMail className="text-3xl text-[#0F5C44]" />
                <div>
                  <h3 className="font-semibold">Chat To Us</h3>
                  <p className="text-black/40">support@tuy</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <FiClock className="text-3xl text-[#0F5C44]" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-black/40">Mon - Fri: 8AM - 9PM</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <FiMapPin className="text-3xl text-[#0F5C44]" />
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-black/40">
                    133/24, kanpur university<br />
                    Kanpur, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD bg-[#F0FDFB] bg-linear-to-b from-[#b7ece5] to-white opacity-90*/}
          <div className="bg-[#F5F1E8]/45 opacity-90 rounded-3xl p-8 md:p-12 shadow-md">

            <h2 className="text-4xl font-bold mb-10">
              Team will <span className="text-[#0F5C44]">call you back!</span>
            </h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">

  <input
    type="text"
    name="fullName"
    placeholder="FULL NAME"
    required
    className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="tel"
      name="contact"
      placeholder="CONTACT NUMBER"
      required
      className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
    />

    <input
      type="email"
      name="email"
      placeholder="EMAIL"
      required
      className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      name="pincode"
      placeholder="PIN CODE"
      required
      className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
    />

    <select
      name="area"
      required
      className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
    >
      <option value="">Area in sqft.</option>
      <option>Below 500</option>
      <option>500 - 1000</option>
      <option>1000 - 2000</option>
      <option>2000+</option>
    </select>
  </div>

  <select
    name="propertyType"
    required
    className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
  >
    <option value="">Property Type</option>
    <option>Owned</option>
    <option>Rented</option>
    <option>Leased</option>
  </select>

  <select
    name="openingTime"
    required
    className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
  >
    <option value="">
      When you are planning to open your store?
    </option>
    <option>Immediately</option>
    <option>Within 1 month</option>
    <option>1–3 months</option>
    <option>More than 3 months</option>
  </select>

  <div className="flex justify-end">
    <button
      type="submit"
      className="bg-[#0F5C44] text-white font-semibold hover:bg-[#FF8A00] text-white text-lg px-10 py-4 rounded-full transition"
    >
      Request Callback
    </button>
  </div>

</form>

          </div>

        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default ContactFormSection;


// "use client";

// import React, { useState } from "react";
// import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";

// const ContactFormSection = () => {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setValidated(true);

//     const form = event.currentTarget;
//     if (!form.checkValidity()) return;

//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     console.log("Form Data:", data);
//   };

//   return (
//     <section className="bg-white pt-32 md:pt-40 pb-10 md:pb-12 text-gray-800">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

//           {/* LEFT CONTENT */}
//           <div className="lg:px-0 px-2">
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
//               Get in Touch with us
//             </h1>

//             <p className="text-lg text-black mb-12 max-w-lg">
//             Built on value, trust, and day-to-day demand, 
//             G Fresh is one of the best grocery store franchise in India with 
//             over 400 stores nationwide. We offer a simple path to owning a Supermarket 
//             Business with clear pricing, strong supply, and solid margins.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg">
//               <div className="flex space-x-4">
//                 <FiPhone className="text-3xl text-[#0F5C44]" />
//                 <div>
//                   <h3 className="font-semibold">Call US</h3>
//                   <p className="text-black/40">
//                     +91 7378787878 <br /> +91 7777777777
//                   </p>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <FiMail className="text-3xl text-[#0F5C44]" />
//                 <div>
//                   <h3 className="font-semibold">Chat To Us</h3>
//                   <p className="text-black/40">support@tuy</p>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <FiClock className="text-3xl text-[#0F5C44]" />
//                 <div>
//                   <h3 className="font-semibold">Hours</h3>
//                   <p className="text-black/40">Mon - Fri: 8AM - 9PM</p>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <FiMapPin className="text-3xl text-[#0F5C44]" />
//                 <div>
//                   <h3 className="font-semibold">Visit Us</h3>
//                   <p className="text-black/40">
//                     133/24, kanpur university<br />
//                     Kanpur, India
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT FORM CARD bg-[#F0FDFB] bg-linear-to-b from-[#b7ece5] to-white opacity-90*/}
//           <div className="bg-[#F5F1E8]/45 opacity-90 rounded-3xl p-8 md:p-12 shadow-md">

//             <h2 className="text-4xl font-bold mb-10">
//               Team will <span className="text-[#0F5C44]">call you back!</span>
//             </h2>

//             <form onSubmit={handleSubmit} noValidate className="space-y-6">

//   <input
//     type="text"
//     name="fullName"
//     placeholder="FULL NAME"
//     required
//     className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//   />

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <input
//       type="tel"
//       name="contact"
//       placeholder="CONTACT NUMBER"
//       required
//       className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//     />

//     <input
//       type="email"
//       name="email"
//       placeholder="EMAIL"
//       required
//       className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//     />
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <input
//       type="text"
//       name="pincode"
//       placeholder="PIN CODE"
//       required
//       className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//     />

//     <select
//       name="area"
//       required
//       className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//     >
//       <option value="">Area in sqft.</option>
//       <option>Below 500</option>
//       <option>500 - 1000</option>
//       <option>1000 - 2000</option>
//       <option>2000+</option>
//     </select>
//   </div>

//   <select
//     name="propertyType"
//     required
//     className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//   >
//     <option value="">Property Type</option>
//     <option>Owned</option>
//     <option>Rented</option>
//     <option>Leased</option>
//   </select>

//   <select
//     name="openingTime"
//     required
//     className="w-full px-5 py-4 border-2 border-gray-400 rounded-xl bg-white focus:outline-none focus:border-green-700"
//   >
//     <option value="">
//       When you are planning to open your store?
//     </option>
//     <option>Immediately</option>
//     <option>Within 1 month</option>
//     <option>1–3 months</option>
//     <option>More than 3 months</option>
//   </select>

//   <div className="flex justify-end">
//     <button
//       type="submit"
//       className="bg-[#0F5C44] text-white font-semibold hover:bg-[#FF8A00] text-white text-lg px-10 py-4 rounded-full transition"
//     >
//       Request Callback
//     </button>
//   </div>

// </form>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactFormSection;