"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedText from "@/components/ui/AnimatedText";
import { Download, Target, Award } from "lucide-react";
import Card from "@/components/home/Card";

export default function AboutPage() {
  return (
    <>
      <div className="p-16 h-20 md:h-24" /> {/* Spacer for fixed header */}
      {/* Hero Section */}
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
                  About{" "}
                  <span className="hires-gradient-text">The Hires Lab</span>
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  We're a team of recruitment specialists dedicated to
                  connecting exceptional talent with forward-thinking companies.
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
      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 mb-4">
                To revolutionize the recruitment industry by providing
                personalized, efficient, and effective talent acquisition
                solutions that create lasting value for both candidates and
                employers.
              </p>
              <p className="text-gray-400">
                We believe in building long-term relationships based on trust,
                transparency, and delivering exceptional results.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className=" p-8 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-secondary" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-gray-400 mb-4">
                To be the most trusted and innovative recruitment partner, known
                for our ability to connect exceptional talent with opportunities
                where they can thrive and make a meaningful impact.
              </p>
              <p className="text-gray-400">
                We envision a world where every professional finds fulfilling
                work and every organization has the talent they need to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our diverse team of recruitment specialists brings years of industry experience and passion for connecting talent with opportunity."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Smith",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "15+ years in recruitment and HR consulting",
              },
              {
                name: "John Davis",
                role: "Head of Talent Acquisition",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Expert in executive search and leadership recruitment",
              },
              {
                name: "Sarah Johnson",
                role: "HR Consultant",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Specializes in organizational development and HR strategy",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedText
              text="Interested in Working With Us?"
              tag="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you find the perfect talent for your
              team or advance your career.
            </p>
            <Button size="lg" variant="prime">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
