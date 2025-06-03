"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Videocommunity() {
  return (
    <section className="py-15 px-10 bg-black">
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold px-2 pt-5 ">
        THE VIBE IS<span className=" text-[#ffc56d] "> HERE!</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="px-2 pt-5 text-[1.1rem] text-white">
          💡 Explore our creative team's insights and solid HR knowledge that
          guides you through the world of work <br /> while making sure we’re
          having a little fun along the way. 🌟
        </p>
      </motion.div>

      <div className="flex items-center justify-center gap-4 mt-10 p-3 pb-0 w-auto bg-white">
        <div className="bg-[#ffc56d] rounded-full w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-105 transition">
          <ArrowLeft className="text-black w-10 h-10 " />
        </div>

        <div className="p-2 pb-0 rounded-lg w-full max-w-4xl">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Intro Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="bg-[#ffc56d] rounded-full w-15 h-15 flex items-center justify-center cursor-pointer hover:scale-105 transition">
          <ArrowRight className="text-black w-10 h-10" />
        </div>
      </div>
    </section>
  );
}
