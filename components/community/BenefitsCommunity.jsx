"use client"

import React from 'react'
import styles from './community.module.css';
import { motion } from "framer-motion";

export default function BenefitsCommunity() {

  const benefits = [
    { title: "Real Growth Opportunities", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam ratione rem laborum molestias est.` },
    { title: "Strong Network", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam ratione rem laborum molestias est.` },
    { title: "Talent Support", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam ratione rem laborum molestias est.` },
    { title: "Collaborative Projects", description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam ratione rem laborum molestias est.` },
  ];

  return (
    <section className="bg-[#F7F7F7] py-2 pt-15 px-4 ">
      <div className="container mx-auto px-10 md:px-12 lg:px-20 flex flex-col md:flex-row-reverse justify-center items-center gap-10 py-10">
        {/* Image Section */}
        <div className="flex-1 overflow-hidden flex justify-end items-center">
          <div className={`${styles.clip_img} sm:clip-img clip-img bg-cover bg-center bg-no-repeat h-[600px] rounded-lg w-[600px]`} />
        </div>

        {/* Dynamic Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
        <h2 className="hires-gradient-text text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-center">What Are the Benefits?</h2>
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
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}

        </div>
      </div>
    </section>
  );
}
