"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

export default function CommunitySection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <section
      ref={targetRef}
      className="py-12 md:py-16 relative min-h-[600px] flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <SectionHeading
              className="text-gray-800 mb-6"
              title="Join Our Community"
              subtitle="Connect with like-minded professionals, access exclusive resources, and advance your career."
            />

            <div className="space-y-3 mb-6 sm:mb-8">
              {[
                "Networking opportunities with industry leaders",
                "Exclusive job postings and career resources",
                "Professional development workshops and events",
                "Mentorship programs and career guidance",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle
                    className="text-[#7ED967] mr-2 mt-1 flex-shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-base sm:text-lg">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              variant="community"
              className="w-full sm:w-auto"
            >
              <Link href="/community">Join Now</Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            style={{ opacity, y }}
            className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
          >
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Community Members"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
