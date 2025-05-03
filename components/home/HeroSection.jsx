"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Dynamically load Vanta.js and Three.js scripts
    const loadScripts = async () => {
      const threeScript = document.createElement("script");
      threeScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      threeScript.async = true;
      document.body.appendChild(threeScript);

      threeScript.onload = () => {
        const vantaScript = document.createElement("script");
        vantaScript.src =
          "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);

        vantaScript.onload = () => {
          if (window.VANTA) {
            const vantaEffect = window.VANTA.DOTS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x7ed967, // Match your brand color
              backgroundColor: 0x0d1b10, // Match your gradient midpoint
              size: 2.0,
              spacing: 20.0,
            });

            // Cleanup on component unmount
            return () => {
              if (vantaEffect) vantaEffect.destroy();
            };
          }
        };
      };
    };

    loadScripts();

    // Cleanup scripts on unmount
    return () => {
      const scripts = document.querySelectorAll(
        'script[src*="three.min.js"], script[src*="vanta.dots.min.js"]'
      );
      scripts.forEach((script) => script.remove());
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
            <span className="hires-gradient-text">Transforming</span> How
            Companies Hire Talent
          </h1>
          <p className="text-xl mb-8 text-gray-500">
            We connect exceptional talent with forward-thinking companies to
            create lasting professional relationships.
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
