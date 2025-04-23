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
    <section ref={targetRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                className="text-gray-800"
                title="Join Our Community"
                subtitle="Connect with like-minded professionals, access exclusive resources, and advance your career."
              />

              <div className="space-y-4 mb-8 ">
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
                    />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#7ED967] to-[#28A745] hover:from-[#6CC65F] hover:to-[#218838] text-white shadow-md"
            >
              <Link href="/community">Join Now</Link>
            </Button>
          </div>

          <motion.div
            style={{ opacity, y }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Community Members"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
