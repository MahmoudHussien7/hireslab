"use client";
import React from "react";
import styles from "./services.module.css";
import { motion } from "framer-motion";

export default function ServiceSectionLeft({ component }) {
  return (
    <section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10 py-16">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 overflow-hidden flex justify-center md:justify-start items-center w-full"
      >
        <div
          className={`${styles.clip_img} sm:clip-img clip-img bg-cover bg-center bg-no-repeat w-[400px] h-[500px] rounded-lg`}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center p-2"
      >
        <p className="text-gray-500">03</p>
        <h3 className="text-2xl font-bold mb-4">Talent audit</h3>
        <p className="mb-6">
          We start a project by building a really clear picture of what is
          required. To do this we reverse engineer the hiring plan using our
          IP/Data to create that clarity.
        </p>
        <p className="mb-10">
          We then audit your current talent environment and set a project plan
          of everything needed to build a world class hiring environment.
        </p>

        <p className="text-gray-500">04</p>
        <h3 className="text-2xl font-bold mb-4">Bespoke embedded team</h3>
        <p className="mb-6">
          We put together a bespoke talent team that have specialist niche
          ecosystem expertise and understanding of your sector.
        </p>
        <p>
          Our embedded teams look and feel just like your own in-house team.
          Working either on-site or remotely with your existing in-house teams
          or building the team from scratch.
        </p>
        {component}
      </motion.div>
    </section>
  );
}
