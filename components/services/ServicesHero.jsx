"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Bottom green gradient background effect */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-500 to-transparent pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            OUR <span className="hires-gradient-text">SERVICES</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna"
          </p>
        </motion.div>

        {/* Services Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center gap-12 mb-10 flex-wrap "
        >
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Green Rounded Square (button) */}
                <div className="w-20 h-20 bg-gradient-to-br from-sec to-sec rounded-full shadow-lg cursor-pointer" />

                {/* Two orange links under each icon */}
                <div className="text-center space-y-1">
                  <a
                    href="#"
                    className="text-orange-400 text-sm hover:underline block"
                  >
                    hiring
                  </a>
                  <a
                    href="#"
                    className="text-orange-400 text-sm hover:underline block"
                  >
                    hr{" "}
                  </a>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Decorative gradient line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[2px] w-[300px] bg-gradient-to-r from-transparent via-sec to-transparent rounded-full mx-auto mt-6 shadow-[0_0_40px_#22c55e]"
        />
      </div>
    </section>
  );
}
