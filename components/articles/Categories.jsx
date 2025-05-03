import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Settings,
  Heart,
  Cpu,
  ArrowRight,
} from "lucide-react";

export default function Categories({ articles, onCategorySelect }) {
  const categories = [
    ...new Set(articles.map((article) => article.category?.toLowerCase())),
  ]
    .filter(Boolean) // Remove null/undefined
    .map((category) => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      count: articles.filter(
        (article) => article.category?.toLowerCase() === category
      ).length,
      icon:
        {
          "workplace trends": Briefcase,
          recruitment: Users,
          "hr strategy": Settings,
          "workplace culture": Heart,
          technology: Cpu,
        }[category] || Briefcase,
    }));

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="mb-2 text-[#FFC56D] uppercase tracking-wider text-sm">
            POPULAR CATEGORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore by Topic
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Dive into our most popular topics to find insights that matter to
            you.
          </p>
        </div>
        {categories.length === 0 ? (
          <p className="text-gray-400">No categories available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-neutral-900 rounded-lg hover:bg-neutral-800 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7ED967]/10 to-[#FFC56D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-6 h-6 text-[#7ED967] mr-2 group-hover:text-[#FFC56D] transition-colors" />
                    <div className="w-12 h-1 bg-gradient-to-r from-[#7ED967] to-[#FFC56D] group-hover:scale-x-125 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm  mb-4">
                    {category.count} article{category.count !== 1 ? "s" : ""} on{" "}
                    {category.name.toLowerCase()}.
                  </p>
                  <button
                    onClick={() => onCategorySelect(category.name)}
                    className="cta-link inline-flex items-center relative transition-all"
                    aria-label={`Explore ${category.name} articles`}
                  >
                    <span className="cta-text">Explore</span>
                    <ArrowRight className="cta-icon ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
