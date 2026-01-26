"use client";

import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactInfoMapSection = () => {
  return (
    <section className="bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 space-y-35">

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Call */}
          <div className="bg-[#818865]/10 rounded-2xl p-8 shadow-md">
            <FiPhone className="text-3xl mb-4 text-black/70" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              (+876) 765 665
            </h3>
            <p className="text-black/80 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus luctus.
            </p>
          </div>

          {/* Email */}
          <div className="bg-[#BB8D3F]/10 rounded-2xl p-8 shadow-md">
            <FiMail className="text-3xl mb-4 text-black/70" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              mail@influenca.id
            </h3>
            <p className="text-black/80 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus luctus.
            </p>
          </div>

          {/* Location */}
          <div className="bg-sky-100/60 rounded-2xl p-8 shadow-md">
            <FiMapPin className="text-3xl mb-4 text-black/70" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              London Eye London
            </h3>
            <p className="text-black/80 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus luctus.
            </p>
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
  );
};

export default ContactInfoMapSection;