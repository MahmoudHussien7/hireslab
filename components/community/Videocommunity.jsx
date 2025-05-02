"use client"
import React from 'react'
import { motion } from 'framer-motion';

export default function Videocommunity() {
  return (
    <section className="bg-[#F7F7F7] py-2 pt-15 px-4 text-center">
      <h2 className="hires-gradient-text text-3xl md:text-4xl lg:text-5xl font-semibold px-2 py-5 text-black">
        Watch Our Story
      </h2>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="p-2 text-lg text-gray-800">
          Watch our short video to learn more about our recruitment 
          process and how we can help your business grow.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto py-10">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Intro Video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
