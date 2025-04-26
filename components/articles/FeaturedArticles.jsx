"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export default function FeaturedArticle({ articles }) {
  // Select the first article as the featured one, or null if none exist
  const featuredArticle = articles && articles.length > 0 ? articles[0] : null;

  // If no featured article, render a fallback UI
  if (!featuredArticle) {
    return (
      <section className="py-16 md:py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">No featured article available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-2 text-[#FFC56D] uppercase tracking-wider text-sm">
            FEATURED ARTICLE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {featuredArticle.title}
          </h2>
          <p className="text-gray-300 max-w-2xl">
            {featuredArticle.excerpt.length > 150
              ? `${featuredArticle.excerpt.substring(0, 150)}...`
              : featuredArticle.excerpt}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
            <Image
              src={
                featuredArticle.coverImage ||
                "/placeholder.svg?height=400&width=600"
              }
              alt={featuredArticle.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                {featuredArticle.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">
                {featuredArticle.title}
              </h3>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <User size={14} className="mr-1" />
                <span className="mr-4">
                  {featuredArticle.author?.name || "Unknown Author"}
                </span>
                <Calendar size={14} className="mr-1" />
                <span>
                  {format(new Date(featuredArticle.date), "MMMM d, yyyy")}
                </span>
              </div>
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="cta-link inline-flex items-center relative transition-all text-white hover:text-[#FFC56D]"
                aria-label={`Read ${featuredArticle.title}`}
              >
                <span className="cta-text">Read More</span>
                <ArrowRight className="cta-icon ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
