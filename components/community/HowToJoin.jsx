"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HowToJoin() {
  const steps = [
    {
      title: 'Apply to Join',
      description: 'Fill out a short application form to tell us about yourself and your interests.',
      image: '/images/1.webp',
    },
    {
      title: 'Get Approved',
      description: 'Our team will review your application and get in touch with you shortly.',
      image: '/images/1.webp',
    },
    {
      title: 'Join the Platform',
      description: 'Once approved, you’ll receive access to our members-only platform.',
      image: '/images/1.webp',
    },
    {
      title: 'Start Engaging',
      description: 'Participate in events, discussions, and content co-creation with the community.',
      image: '/images/1.webp',
    },
  ];

  return (
    <section className="pt-15 py-2 pb-15 px-6 md:px-12 lg:px-20 bg-[#F7F7F7] max-w-full min-w-full container flex flex-col">
      <h2 className="mb-12 hires-gradient-text text-2xl md:text-3xl lg:text-4xl font-semibold text-center  ">How to Join?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={step.image}
              alt={step.title}
              width={300}
              height={300}
              className="mb-4"
            />
            <span className="text-gray-500">0{index + 1}</span>
            <h3 className="text-xl font-light mb-2 text-black">{step.title}</h3>
            <p className="text-gray-700 max-w-xs text-center p-1">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
