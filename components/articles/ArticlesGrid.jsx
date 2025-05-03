import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export default function ArticlesGrid({
  articles,
  searchQuery,
  setSearchQuery,
}) {
  // Filter articles based on search query
  const filteredArticles = articles
    .filter((article) => {
      if (!searchQuery) return true; // Show all if searchQuery is empty
      const query = searchQuery.toLowerCase().trim();
      const categoryMatch = article.category?.toLowerCase() === query;
      const titleMatch = article.title?.toLowerCase().includes(query);
      const excerptMatch = article.excerpt?.toLowerCase().includes(query);
      const authorMatch = article.author?.name
        ?.toLowerCase()
        ?.trim()
        ?.includes(query);

      // Log mismatches for debugging
      if (!categoryMatch && query === article.category?.toLowerCase()) {
        console.warn("Category mismatch:", {
          searchQuery,
          articleCategory: article.category,
        });
      }
      if (
        !authorMatch &&
        article.author?.name?.toLowerCase()?.includes(query)
      ) {
        console.warn("Author mismatch:", {
          searchQuery,
          authorName: article.author?.name,
        });
      }

      return categoryMatch || titleMatch || excerptMatch || authorMatch;
    })
    // Sort articles by date in descending order (latest first)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section id="articles" className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-2 text-[#FFC56D] uppercase tracking-wider text-sm">
            LATEST ARTICLES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
                    src={
                      article.coverImage ||
                      "/placeholder.svg?height=400&width=600"
                    }
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {article.excerpt.length > 100
                        ? `${article.excerpt.substring(0, 100)}...`
                        : article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <User size={14} className="mr-1" />
                      <span className="mr-4">
                        {article.author?.name || "Unknown Author"}
                      </span>
                      <Calendar size={14} className="mr-1" />
                      <span>
                        {format(new Date(article.date), "MMMM d, yyyy")}
                      </span>
                    </div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="cta-link inline-flex items-center relative transition-all text-white hover:text-[#FFC56D]"
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
            {setSearchQuery && (
              <button
                className="mt-4 inline-flex items-center px-6 py-3 bg-[#7ED967] text-black rounded-full hover:bg-[#7ED967]/90 transition-colors"
                onClick={() => setSearchQuery("")}
                aria-label="View all articles"
              >
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
