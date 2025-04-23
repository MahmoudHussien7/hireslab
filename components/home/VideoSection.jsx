"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="p-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          className="text-white"
          title="See How We Work"
          subtitle="Watch our short video to learn more about our recruitment process and how we can help your business grow."
          center
        />
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Video Thumbnail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" variant="zaza" className="rounded-full">
              <Play size={24} className="rounded-full" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
