"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function OurVision() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="p-16 rounded-lg shadow-md"
      dir="rtl"
    >
      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
        <Award className="text-secondary" size={24} />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
      <p className="text-gray-400 mb-4">
        To be the most trusted and innovative recruitment partner, known for our
        ability to connect exceptional talent with opportunities where they can
        thrive and make a meaningful impact.
      </p>
      <p className="text-gray-400">
        We envision a world where every professional finds fulfilling work and
        every organization has the talent they need to succeed.
      </p>
    </motion.div>
  );
}
