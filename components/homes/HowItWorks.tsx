"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Easy To Order",
      desc: "You only need a few steps in ordering food.",
      icon: <img src="/checkout.png" alt="Order" />,
      color: "from-emerald-400 to-emerald-600",
      accent: "bg-emerald-50",
    },
    {
      title: "Fastest Delivery",
      desc: "Delivery that is always ontime even faster",
      icon: <img src="/delivery.png" alt="Delivery" />,
      color: "from-amber-400 to-amber-600",
      accent: "bg-amber-50",
    },
    {
      title: "Best Quality",
      desc: "Not only fast for us quality is also number one",
      icon: <img src="/quality.png" alt="Quality" />,
      color: "from-emerald-500 to-amber-500",
      accent: "bg-orange-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatingIcon = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 tracking-tight"
        >
          How Does It Work?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center group"
            >
              <motion.div
                variants={floatingIcon}
                initial="initial"
                animate="animate"
                className={`w-32 h-32 md:w-40 md:h-40 ${step.accent} rounded-full flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-105`}
              >
                <div
                  className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent p-4`}
                >
                  {step.icon}
                </div>

                <div
                  className={`absolute inset-0 rounded-full blur-2xl opacity-20 bg-gradient-to-br ${step.color}`}
                />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
