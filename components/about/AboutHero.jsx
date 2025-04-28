"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="hires-gradient-text">The Hires Lab</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                We're a team of recruitment specialists dedicated to connecting
                exceptional talent with forward-thinking companies.
              </p>
              <Button variant="prime">
                <Link href="#" download>
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="The Hires Lab Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
