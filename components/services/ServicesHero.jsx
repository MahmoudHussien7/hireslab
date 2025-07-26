"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  const buttons = [
    { label: "RPO", href: "#section-1" },
    { label: "BPO", href: "#section-2" },
    { label: "Consultations", href: "#section-3" },
  ];
  // Handle smooth scrolling when clicking buttons
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[70vh] mt-12 flex flex-col items-center justify-center px-4 overflow-hidden">
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
          <h1 className="text-white text-6xl md:text-6xl font-bold mb-4">
            OUR <span className="hires-gradient-text text-6xl">SERVICES</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            We don’t just fill positions — we embed recruitment and HR systems that fuel business growth and change lives.
          </p>
        </motion.div>

        {/* Services Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center gap-12 mb-10 flex-wrap "
        >
          {buttons.map((button, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Green Rounded Square (button) */}
              <a
                href={button.href}
                onClick={(e) => handleScroll(e, button.href)}
                className="w-20 h-20 bg-gradient-to-br from-sec to-sec rounded-full shadow-lg cursor-pointer flex items-center justify-center"
                aria-label={`Scroll to ${button.label}`}
              >
                <span className="text-white text-xs font-semibold text-center px-2">
                  {button.label}
                </span>
              </a>

              {/* Two orange links under each icon */}
              <div className="text-center space-y-1">
                <a
                  href={button.href}
                  onClick={(e) => handleScroll(e, button.href)}
                  className="text-orange-400 text-sm hover:underline block"
                >
                  {button.label}
                </a>
                <a
                  href={button.href}
                  onClick={(e) => handleScroll(e, button.href)}
                  className="text-orange-400 text-sm hover:underline block"
                >
                  Learn More
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
          className="h-[2px] w-[600px] bg-gradient-to-r from-transparent via-sec to-transparent rounded-full mx-auto mt-6 shadow-[0_0_40px_#22c55e]"
        />
      </div>
    </section>
  );
}
