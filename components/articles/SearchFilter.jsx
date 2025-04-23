
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchFilter({ filterRef, searchQuery, setSearchQuery, articles }) {
  const categories = [...new Set(articles.map((article) => article.category))].map((category) => ({
    name: category,
    count: articles.filter((article) => article.category === category).length,
  }));

  return (
    <section ref={filterRef} className="py-8 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#7ED967] focus:scale-105 transition-transform duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <motion.button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                searchQuery === "" ? "bg-[#7ED967] text-black" : "bg-neutral-900 text-gray-300 hover:bg-neutral-800"
              }`}
              onClick={() => setSearchQuery("")}
              aria-label="Show all articles"
              aria-current={searchQuery === "" ? "true" : undefined}
              animate={searchQuery === "" ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              All ({articles.length})
              {searchQuery === "" && (
                <motion.div
                  className="absolute inset-0 border-2 border-[#7ED967] rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 1, 0], scale: 1 }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                  searchQuery === category.name ? "bg-[#7ED967] text-black" : "bg-neutral-900 text-gray-300 hover:bg-neutral-800"
                }`}
                onClick={() => setSearchQuery(category.name)}
                aria-label={`Filter by ${category.name}`}
                aria-current={searchQuery === category.name ? "true" : undefined}
                animate={searchQuery === category.name ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {category.name} ({category.count})
                {searchQuery === category.name && (
                  <motion.div
                    className="absolute inset-0 border-2 border-[#7ED967] rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 0], scale: 1 }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
            }