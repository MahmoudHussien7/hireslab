import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { User, Calendar, ArrowRight } from "lucide-react";

export default function FeaturedArticles() {
  const featuredRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xTransform = useTransform(mouseX, [-100, 100], [-10, 10]);
  const yTransform = useTransform(mouseY, [-100, 100], [-10, 10]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (featuredRef.current) {
        const rect = featuredRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
          onMouseEnter={() => setHoveredCard("featured")}
          onMouseLeave={() => setHoveredCard(null)}
          ref={featuredRef}
        >
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
            <motion.div
              style={{ x: xTransform, y: yTransform }}
              className="relative h-full w-full"
            >
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Featured Article"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Featured
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="mb-2 text-[#7ED967] uppercase tracking-wider text-sm">
                FEATURED ARTICLE
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Future of Work: Trends Shaping the Modern Workplace
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg">
                Explore the emerging trends that are reshaping how we work, from
                remote collaboration to AI-powered productivity tools.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <User size={16} className="mr-1" />
                <span className="mr-4">Jane Smith</span>
                <Calendar size={16} className="mr-1" />
                <span>November 10, 2023</span>
              </div>
              <Link
                href="/articles/featured"
                className="inline-flex items-center text-[#7ED967] hover:text-[#7ED967]/80 transition-colors"
                aria-label="Read featured article"
              >
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
