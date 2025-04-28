"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Award, Star } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

function useInViewCounter(start, end, delay = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTime = null;
          const duration = 1500;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated, start]);

  return { count, ref };
}

export default function StatsSection() {
  const stats = [
    {
      number: 94,
      description: "% placement retention rate after 12 months",
      icon: <Clock className="text-[#16a34a]" />,
      iconBg: "bg-[#bbf7d0]",
    },
    {
      number: 35,
      description:
        "% of our candidates are engaged via our community events & initiatives",
      icon: <Users className="text-[#f59e0b]" />,
      iconBg: "bg-[#fef3c7]",
    },
    {
      number: 30,
      description: "% of our leadership placements in 2024 identified as women",
      icon: <Award className="text-[#16a34a]" />,
      iconBg: "bg-[#bbf7d0]",
    },
    {
      number: 84,
      description:
        "is our top-notch NPS score, which means the vast majority of people would happily recommend us",
      icon: <Star className="text-[#f59e0b]" />,
      iconBg: "bg-[#fef3c7]",
    },
  ];

  return (
    <section>
      <div className="container p-16  mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText
            text="And we've got the"
            className="text-3xl md:text-4xl font-bold text-amber-50"
          />
          <AnimatedText
            text="numbers to prove it"
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const { count, ref } = useInViewCounter(0, stat.number);
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start  rounded-xl p-6 shadow-md"
              >
                <div
                  className={`rounded-full p-3 mb-4 ${stat.iconBg} inline-flex`}
                >
                  {stat.icon}
                </div>
                <div className="w-full h-px bg-gray-200 mb-6" />
                <div className="text-4xl font-bold text-white mb-2">
                  {count}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
