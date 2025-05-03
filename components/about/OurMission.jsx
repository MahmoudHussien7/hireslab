"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function OurMission() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-white p-8 rounded-lg shadow-md"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Target className="text-primary" size={24} />
      </div>
      <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
      <p className="text-gray-400 text-3xl mb-4">
        To revolutionize the recruitment industry by providing personalized,
        efficient, and effective talent acquisition solutions that create
        lasting value for both candidates and employers.
      </p>
      <p className="text-gray-400">
        We believe in building long-term relationships based on trust,
        transparency, and delivering exceptional results.
      </p>
    </motion.div>
  );
}
