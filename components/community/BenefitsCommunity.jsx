"use client";

import React from "react";
import styles from "./community.module.css";
import { motion } from "framer-motion";

export default function BenefitsCommunity() {
  const benefits = [
    {
      title: "Real Growth Opportunities",
      description: ` Access curated workshops, mentorship, and exclusive resources that grow your career.`,
    },
    {
      title: "Strong Network",
      description: ` Connect with recruiters, HR leaders, creatives, and industry professionals.`,
    },
    {
      title: "Talent Support",
      description: ` Need guidance? We’re here to support your journey with advice and opportunities.`,
    },
    {
      title: "Collaborative Projects",
      description: ` Join campaigns, events, and projects where your ideas and voice matter.`,
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-8 px-4">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 py-10">
        {/* Image Section */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-center">
          <div
            className={`${styles.clip_img} clip-img bg-cover bg-center bg-no-repeat rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 md:h-[500px] lg:h-[600px]`}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full flex flex-col justify-center items-start md:items-start text-left space-y-6">
          <h2 className="hires-gradient-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-left sm:text-center md:text-left">
           Why Join?
          </h2>

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-2"
            >
              <p className="text-gray-500 text-sm">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
