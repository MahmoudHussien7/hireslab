"use client";

import AboutHero from "@/components/about/AboutHero";
import OurTeam from "@/components/about/OurTeam";
import AboutCTA from "@/components/about/About.CTA";
import OurMission from "@/components/about/OurMission";
import OurVision from "@/components/about/OurVision";

export default function AboutPage() {
  return (
    <>
      <div className="p-16 h-20 md:h-24" /> {/* Spacer for fixed header */}
      <AboutHero />
      <OurMission />
      <OurVision />
      <OurTeam />
      <AboutCTA />
    </>
  );
}
