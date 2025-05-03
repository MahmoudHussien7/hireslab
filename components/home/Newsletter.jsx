"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="p-4 sm:p-8 md:p-16 bg-gradient-to-tr from-gray-100 via-white to-[#f0fff4]">
      <div className="container mx-auto px-2 sm:px-4 md:px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-4 sm:p-6 md:p-12 rounded-lg shadow-lg"
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 sm:mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Subscribe to our newsletter for the latest industry insights, job
              opportunities, and company updates.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <div className="relative w-full sm:flex-1">
              <Mail
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <label className="floating-label">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-sm sm:input-md w-full pl-10 sm:pl-12"
                />
                <span>Email Address</span>
              </label>
            </div>
            <Button type="submit" variant="prime" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
