import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight } from "lucide-react";

export default function ArticlesGrid({ articles, searchQuery }) {
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="articles" className="py-16 md:py-24 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-2 text-[#FFC56D] uppercase tracking-wider text-sm">
            LATEST ARTICLES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our Insights
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Browse our collection of thought leadership content, industry
            insights, and practical guides.
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {article.excerpt.length > 100
                        ? `${article.excerpt.substring(0, 100)}...`
                        : article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <User size={14} className="mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <Link
                      href={`/articles/${article.id}`}
                      className="cta-link inline-flex items-center relative transition-all"
                      aria-label={`Read ${article.title}`}
                    >
                      <span className="cta-text">Read More</span>
                      <ArrowRight className="cta-icon ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              No articles found matching your search criteria.
            </p>
            <button
              className="mt-4 inline-flex items-center px-6 py-3 bg-[#7ED967] text-black rounded-full hover:bg-[#7ED967]/90 transition-colors"
              onClick={() => setSearchQuery("")}
              aria-label="View all articles"
            >
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
