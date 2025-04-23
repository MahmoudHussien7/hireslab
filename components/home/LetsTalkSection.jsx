"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LetsTalkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section
      ref={ref}
      className="p-16 w-full sm:h-screen sm:max-h-[900px] bg-brand-carbon text-content-light flex items-start relative overflow-hiddenpy-20 bg-gradient-to-br from-black via-[#0d1b10] to-black text-white"
    >
      {/* Background Transition Layer */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ zIndex: 0 }}
      />

      {/* Content Container */}
      <motion.div
        className="container pt-16 xl:pt-20 pb-20 md:pb-0 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h5
          className="text-lg md:text-xl font-semibold text-gray-300 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Find out why everyone is going Embedded
        </motion.h5>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Let’s Talk
        </motion.h2>

        <motion.div
          className="sm:-mx-2 w-full"
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="/schedule-a-call"
            target="_blank"
            className="inline-block bg-zaza text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors sm:mx-2 my-2"
          >
            <span className="flex items-center">
              <span className="mr-3">Schedule a call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.174"
                height="12.383"
                viewBox="0 0 20.174 12.383"
              >
                <g transform="translate(-1735.326 -211.883)">
                  <line
                    y2="19.674"
                    transform="translate(1735.326 218.061) rotate(-90)"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                  />
                  <path
                    d="M1.061,126.938l4.867,4.867H7.872l4.865-4.865"
                    transform="translate(1623.194 224.974) rotate(-90)"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
