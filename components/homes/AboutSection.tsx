"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation configuration
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start"
        >
          <div>
            <motion.p variants={fadeInUp} className="text-[#059669] font-medium text-sm mb-4">
              About Us
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empower Your Business’s <br /> Financial Future Effortlessly
            </motion.h2>
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#059669] text-white px-8 py-3 rounded-full font-semibold transition-colors hover:bg-[#047857]"
            >
              Get Started
            </motion.button>
          </div>
          
          <motion.p variants={fadeInUp} className="text-gray-500 text-lg lg:mt-16">
            Take control of your business's financial future with effortless strategies that 
            ensure stability and growth. Empower your decisions with expert insights, 
            streamlining your path to long-term success. Focus on what matters most—growing your business.
          </motion.p>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Main Story Card (Large) */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 relative group overflow-hidden rounded-[32px] min-h-[400px] lg:min-h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="Team collaboration" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 p-8 md:p-12 text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-200 leading-relaxed">
                TechInnovate, a leading IT company, revolutionizes the industry with cutting-edge AI solutions, 
                driving innovation and connectivity for businesses worldwide.
              </p>
            </div>
          </motion.div>

          {/* Side Cards Container */}
          <div className="flex flex-col gap-6 h-full">
            {/* Mission Card (Light Green) */}
            <motion.div 
              variants={fadeInUp}
              className="flex-1 bg-[#D1FAE5] rounded-[32px] p-8 md:p-10 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver innovative IT solutions that empower businesses.
              </p>
            </motion.div>

            {/* Vision Card (Dark Green) */}
            <motion.div 
              variants={fadeInUp}
              className="flex-1 bg-[#065F46] rounded-[32px] p-8 md:p-10 flex flex-col justify-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-emerald-50">
                To lead in technology and shape a smarter, more connected future.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;