import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import StatsSection from "@/components/home/StatsSection";
import CommunitySection from "@/components/home/CommunitySection";
import Newsletter from "@/components/home/Newsletter";
import LetsTalkSection from "@/components/home/LetsTalkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ServicesCarousel />
      <StatsSection />
      <CommunitySection />
      <Newsletter />
      <LetsTalkSection />
    </>
  );
}
