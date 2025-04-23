"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Card from "./Card";

export default function HeroSection() {
  return (
    <section className="p-16 relative h-screen flex items-center justify-center bg-gradient-to-bl from-black via-[#0d1b10] to-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute " />
      </div>
      <div className="container mx-auto px-4 z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="hires-gradient-text">Transforming</span> How
            Companies Hire Talent
          </h1>
          <p className="text-xl mb-8 text-gray-500">
            We connect exceptional talent with forward-thinking companies to
            create lasting professional relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#7ED967] hover:bg-[#7ED967]/90 text-black"
            >
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
