"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";

export default function AboutCTA() {
  return (
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
            <Link href="/contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
