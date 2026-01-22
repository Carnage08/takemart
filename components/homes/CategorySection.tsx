'use client'
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: "Bakery", img: "/_2.png", color: "bg-[#FDF2D0]", dot: "bg-gray-300" },
  { id: 2, name: "Bakery", img: "/_3.png", color: "bg-[#E6F4F1]", dot: "bg-gray-300" },
  { id: 3, name: "Frozen", img: "/frozen-1.png", color: "bg-[#B8D8BA]", dot: "bg-yellow-200 shadow-[0_0_10px_rgba(254,240,138,0.8)]" },
  { id: 4, name: "Couttics", img: "/bottles-1.png", color: "bg-[#E3EDF7]", dot: "bg-gray-300" },
  { id: 5, name: "Bakine", img: "/basket-small.png", color: "bg-[#E3EDF7]", dot: "bg-gray-300" },
  { id: 6, name: "Frozen", img: "/packets.png", color: "bg-[#E6F4F1]", dot: "bg-gray-300" },
  { id: 7, name: "Beverages", img: "/veggies.png", color: "bg-[#E6F4F1]", dot: "bg-yellow-200 shadow-[0_0_10px_rgba(254,240,138,0.8)]" },
  { id: 8, name: "Beverages", img: "/bottles-2.png", color: "bg-[#E3EDF7]", dot: "bg-gray-300" },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Optimized Grid: 1 col on mobile, 2 on sm, 4 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] p-8 min-h-[220px] flex flex-col justify-between transition-shadow hover:shadow-xl ${cat.color}`}
          >
            {/* Status Indicator Dot */}
            <div className="absolute top-6 right-6">
              <div className={`w-4 h-4 rounded-full ${cat.dot}`} />
            </div>

            {/* 3D Product Image Container */}
            <div className="flex-1 flex items-center justify-center">
              <motion.img
                src={cat.img}
                alt={cat.name}
                loading="lazy" // Performance: Only loads when near viewport
                className="w-4/5 h-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Category Label */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 tracking-tight">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;