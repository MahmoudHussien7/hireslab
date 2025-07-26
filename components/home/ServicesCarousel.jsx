"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "The Brief",
    description:
      "We get to know your goals, culture, and what a great hire looks like — even if you're not sure yet.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    ],
    features: [
      "We listen to your goals, culture, and team dynamics",
      "Help define the role and ideal candidate profile",
      "Align on success metrics from day one",
    ],
  },
  {
    id: 2,
    title: "Sourcing",
    description:
      "We tap into our local and global networks to find the right people and build you a future-ready talent pool.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    ],
    features: [
      "Tap into local and global networks",
      "Use smart tools to filter by relevance",
      "Build a tailored database for now & later",
    ],
  },
  {
    id: 3,
    title: "Screening",
    description:
      "We assess skills, experience, and culture fit — then send only the most aligned candidates your way.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    ],
    features: [
      "Human-led resume & value screening",
      "Interviews and skill assessments",
      "Cultural fit check before presenting",
    ],
  },
  {
    id: 4,
    title: "Onboarding",
    description:
      "You choose. We guide. From offer to first day, we ensure a smooth and supported hire.",
    images: [
      "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    ],
    features: [
      "Share candidate insights for easier decisions",
      "Guide offer communication and negotiations",
      "Assist with onboarding to ensure smooth transitions",
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
    <section className="p-4 sm:p-8 md:p-16 bg-gradient-to-t from-black to-[#4e4921cf] text-white">
      <div className="container mx-auto px-2 sm:px-4 md:px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block bg-[#7ED967]/20 text-[#7ED967] px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-4">
            THE RECRUITING JOURNEY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
Here’s How We Make Hiring Work — For Everyone.          </h2>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
                {/* Left: Text */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1a1a1a]">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                    {services[currentIndex].description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 text-gray-500">
                      FEATURED SERVICES:
                    </h4>
                    <ul className="space-y-2">
                      {services[currentIndex].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-[#7ED967] mr-2 mt-1 flex-shrink-0"
                            size={14}
                          />
                          <span className="text-[#1a1a1a] text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: DaisyUI carousel */}
                <div className="carousel carousel-center bg-neutral rounded-box p-1 sm:p-2 space-x-2 sm:space-x-4 max-w-full overflow-x-auto">
                  {services[currentIndex].images.map((img, idx) => (
                    <div key={idx} className="carousel-item">
                      <img
                        src={img}
                        alt={`Slide image ${idx + 1}`}
                        className="rounded-box h-40 sm:h-52 md:h-64 w-64 sm:w-80 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-10 px-2 sm:px-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              className="border-[#7ED967] text-[#7ED967] hover:bg-[#7ED967]/10 transition w-full sm:w-auto mb-4 sm:mb-0"
            >
              <ArrowLeft size={16} />
            </Button>

            <div className="flex space-x-2 sm:space-x-3 mb-4 sm:mb-0">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full transition-all cursor-pointer ${
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
              className="border-[#7ED967] text-[#7ED967] hover:bg-[#7ED967]/10 transition w-full sm:w-auto"
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
