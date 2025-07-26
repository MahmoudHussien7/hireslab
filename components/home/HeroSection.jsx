"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const loadVanta = async () => {
      const THREE = await import("three");
      // Set THREE globally so Vanta can use it
      if (typeof window !== "undefined") {
        window.THREE = THREE;
      }

      const VANTA = await import("vanta/dist/vanta.dots.min");

      if (vantaRef.current && !vantaEffectRef.current && mounted) {
        vantaEffectRef.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x7ed967,
          backgroundColor: 0x000000,
          size: 2.0,
          spacing: 20.0,
        });
      }
    };

    loadVanta();

    return () => {
      mounted = false;
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="p-16 relative h-screen flex items-center justify-center text-white"
    >
      <div className="container mx-auto px-4 z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="hires-gradient-text">Impacting</span> lives through strategic HR & talent solutions
          </h1>
          <p className="text-xl mb-8 text-gray-300">
      We match people with purpose — helping ambitious companies and talented individuals build stronger futures, one hire at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="prime">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="default">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
