"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const teamMembers = [
  {
    name: "John Davis",
    role: "Head of Talent Acquisition",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in executive search and leadership recruitment",
  },
  {
    name: "ِAbdallah Afify",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "15+ years in recruitment and HR consulting",
  },

  {
    name: "Nour Abbas",
    role: "Head of Marketing",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specializes in organizational development and Marketing strategies",
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our diverse team of recruitment specialists brings years of industry experience and passion for connecting talent with opportunity."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white ">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-64 mx-auto mt-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
