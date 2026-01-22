"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PerformanceStats = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-gray-50 w-fit px-3 py-1 rounded-md border border-gray-100">
            <span className="text-[#10b981] text-xs">📈 Performance stats</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Proven by leading <br className="hidden md:block" /> sales teams
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-500 text-lg max-w-md">
            Increase lead quality and close deals faster through smarter workflows.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a href="#" className="text-[#10b981] font-semibold flex items-center gap-1 hover:underline underline-offset-4 transition-all">
              Explore the full demo <span className="text-xs">↗</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-12">
            <p className="text-sm text-gray-400 mb-4 max-w-xs">
              All in real time, capture leads, track performance, and scale winning strategies.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm">— rated 4.8/5</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Bento Grid Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Large Card (Top) */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 bg-[#f4f4f4] rounded-[32px] p-8 md:p-12 min-h-[240px] flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-sm text-[#059669] font-medium">
              <span className="w-4 h-4 bg-[#10b981] rounded-sm flex items-center justify-center text-[10px] text-white">▣</span>
              Higher ROI
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gray-900">76%</div>
              <p className="text-gray-500 mt-2">Trimmed ad spend via segmentation</p>
            </div>
          </motion.div>

          {/* Card 2: Bottom Left */}
          <motion.div 
            variants={itemVariants as any}
            className="bg-[#f4f4f4] rounded-[32px] p-8 min-h-[220px] flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-sm text-[#059669] font-medium">
                <span className="w-4 h-4 bg-[#10b981] rounded-sm flex items-center justify-center text-[10px] text-white">▣</span>
                Faster Conversions
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900">91%</div>
              <p className="text-gray-500 text-sm mt-2">Removed redundant tools</p>
            </div>
          </motion.div>

          {/* Card 3: Bottom Right */}
          <motion.div 
            variants={itemVariants as any}
            className="bg-[#f4f4f4] rounded-[32px] p-8 min-h-[220px] flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-sm text-[#059669] font-medium">
                <span className="w-4 h-4 bg-[#10b981] rounded-sm flex items-center justify-center text-[10px] text-white">▣</span>
                Better Efficiency
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900">69%</div>
              <p className="text-gray-500 text-sm mt-2">Optimized bidding costs</p>
            </div>
          </motion.div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default PerformanceStats;