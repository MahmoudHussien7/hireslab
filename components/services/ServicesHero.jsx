"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./services.module.css";

export default function ServicesHero() {
  return (
    <section className="container mx-auto min-h-screen px-6 md:px-12 
    lg:px-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-black py-20">     
      {/* Left side - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Our <span className="hires-gradient-text">Services</span>
        </h1>
        <p className="text-white text-base md:text-lg leading-relaxed">
          Our dynamic hiring solution offers immediate access to a skilled 
          talent team. <br className="hidden md:block" />
          We can strengthen your current workforce or create a full team tailored for you.
        </p>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex-1 flex justify-center items-center relative"
      >
        <div
          className={`${styles.clip_img} sm:clip-img clip-img mt-5 bg-cover bg-center bg-no-repeat w-[300px] md:w-[400px] lg:w-[500px] h-[400px] md:h-[500px] lg:h-[600px] rounded-lg`}
        />
      </motion.div>

    </section>
  );
}
