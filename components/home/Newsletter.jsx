"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="p-16 bg-gradient-to-tr  from-gray-100 via-white to-[#f0fff4]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest industry insights, job
              opportunities, and company updates.
            </p>
          </div>

          <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:flex-1">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <label className="floating-label">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-md w-full"
                />
                <span>Email Address</span>
              </label>
            </div>
            <Button type="submit" variant="prime">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
