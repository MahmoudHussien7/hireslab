import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ArticlesHero() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />
      {/* <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#7ED967]/20 to-transparent blur-2xl pointer-events-none" /> */}
      <div className="absolute w-full h-1/2 bg-gradient-to-t from-[#FFC56D]/20 to-transparent blur-2xl pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="hires-gradient-text">Insights</span> & Articles
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Discover the latest trends, insights, and best practices in
            recruitment and HR.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#articles"
              className="inline-flex items-center px-6 py-3 bg-[#ffc56d] text-black rounded-full hover:bg-[#7ED967]/90 transition-colors text-lg font-medium"
              aria-label="Browse all articles"
            >
              Browse All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
