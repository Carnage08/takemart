'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Animation variants for performance (uses hardware acceleration)
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-[#F7FBF7] overflow-hidden px-6 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial="initial"
          animate="animate"
          className="z-10 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight"
          >
            Grocceror <br /> 
            <span className="text-[#2D2D2D]">your drug</span> <br />
            <span className="text-[#4CAF50]">delivere</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Experience the freshest groceries delivered straight to your doorstep. 
            Quality products, lightning-fast delivery.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button className="group relative px-8 py-4 bg-[#4CAF50] text-white rounded-full font-semibold text-lg flex items-center gap-3 transition-all hover:bg-[#43a047] active:scale-95 shadow-lg shadow-green-200">
              Start Shopping
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <span className="text-sm font-medium text-gray-400 italic">
              Pery Coontet
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          {/* Main Basket Image */}
          <div className="relative w-full max-w-[500px] lg:max-w-full drop-shadow-2xl">
            <img 
              src="/1_1.png" // Replace with your high-res 3D asset
              alt="Fresh Grocery Basket"
              className="w-full h-auto object-contain"
              loading="eager" // Prioritize loading for LCP performance
            />

          
          </div>

          {/* Background Decorative Element */}
          <div className="absolute -z-10 w-[120%] h-[120%] bg-green-50 rounded-full blur-3xl opacity-60" />
        </motion.div>
      </div>

      {/* Subtle Bottom Curve/Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;