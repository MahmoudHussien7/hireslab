"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroCommunity() {
  return (
    <section
      className="container mx-auto min-h-screen px-6 md:px-12 lg:px-20
         bg-black flex items-center justify-start ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          <span className="hires-gradient-text">Community Page</span>
          <br />
          Where Talent Connects, Learns, and Grows
        </h1>
        <p className="text-[0.9rem] md:text-xl max-w-2xl text-white">
          At The Hires Lab, our community isn’t just a team — it’s a space where
          HR minds, creatives, and curious thinkers come together to learn,
          build, and grow. Whether you're a seasoned recruiter, a student
          exploring the HR world, or someone passionate about people — you
          belong here.{" "}
        </p>
      </motion.div>
    </section>
  );
}

{
  /* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-400 via-blue-300 to-green-300 opacity-50 blur-3xl"></div> */
}
