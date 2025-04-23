"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Stage 1: Building the funnel",
    description:
      "You found your first few hires through personal and professional networks, but now you're running out of options. You're staring at a blank page wondering how to even begin setting up a proper recruiting funnel.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    ],
    features: [
      "ATS selection, setup, and integration",
      "Hiring material design",
      "Standard operating procedure design",
    ],
  },
  {
    id: 2,
    title: "Stage 2: Scaling your recruitment",
    description:
      "Your company is growing rapidly and you need to hire multiple roles across different departments. You need a structured approach to scale your recruitment efforts efficiently.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    ],
    features: [
      "Recruitment strategy development",
      "Candidate sourcing and screening",
      "Interview process optimization",
    ],
  },
  {
    id: 3,
    title: "Stage 3: Talent retention",
    description:
      "You've built a great team, but now you need to focus on keeping your top talent engaged and motivated to ensure long-term success and reduce turnover.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    ],
    features: [
      "Employee engagement programs",
      "Performance management systems",
      "Career development frameworks",
    ],
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="p-16 bg-gradient-to-t from-black to-[#4e4921cf] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#7ED967]/20 text-[#7ED967] px-4 py-2 rounded-full text-sm font-medium mb-4">
            THE RECRUITING JOURNEY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            We help you grow as you embark on your recruiting journey.
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="service-carousel-slide"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 shadow-lg">
                {/* Left: Text */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {services[currentIndex].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider mb-3 text-gray-500">
                      FEATURED SERVICES:
                    </h4>
                    <ul className="space-y-2">
                      {services[currentIndex].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-[#7ED967] mr-2 mt-1 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-[#1a1a1a]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: DaisyUI carousel */}
                <div className="carousel carousel-center bg-neutral rounded-box p-2 space-x-4 max-w-full overflow-x-auto">
                  {services[currentIndex].images.map((img, idx) => (
                    <div key={idx} className="carousel-item">
                      <img
                        src={img}
                        alt={`Slide image ${idx + 1}`}
                        className="rounded-box h-[260px] w-[400px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between items-center mt-10 px-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="border-[#7ED967] text-[#7ED967] hover:bg-[#7ED967]/10 transition"
            >
              <ArrowLeft size={20} />
            </Button>

            <div className="flex space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? "bg-[#7ED967]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              className="border-[#7ED967] text-[#7ED967] hover:bg-[#7ED967]/10 transition"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
