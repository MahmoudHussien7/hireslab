"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribe,resetSubscribeState } from "@/redux/slices/subscribe";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.subscribe);

const handleSubmit = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error ("Please enter a valid email address.");
    return;
  }

  dispatch(subscribe(email)).then((res) => {
    if (res.meta.requestStatus === "fulfilled") {
      setEmail("");
      setTimeout(() => dispatch(resetSubscribeState()), 3000);
    }
  });
};


  return (
    <section className="p-4 sm:p-8 md:p-16 bg-white">
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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
          >
            <div className="relative w-full sm:flex-1">
              <Mail
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <label className="floating-label">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="input input-sm sm:input-md w-full pl-10 sm:pl-8 active:border-0 focus:border-0"
                />
                <span>Email Address</span>
              </label>
            </div>

            <Button
              type="submit"
              variant="prime"
              className="w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <div className="text-center mt-4">
            {success && <p className="text-green-600">Subscribed successfully!</p>}
            {error && <p className="text-red-600">Error: {error}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
