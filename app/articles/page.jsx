"use client";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/articles/ArticlesHero";
import SearchFilter from "@/components/articles/SearchFilter";
import FeaturedArticle from "@/components/articles/FeaturedArticles";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import Categories from "@/components/articles/Categories";
import Newsletter from "@/components/home/Newsletter";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "@/redux/slices/blogSlice";

// Utility function to generate a slug from the article name
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Utility function to strip HTML tags and truncate text
const stripHtmlAndTruncate = (html, maxLength = 100) => {
  const text = html.replace(/<[^>]*>/g, ""); // Remove HTML tags
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState("");
  const filterRef = useRef(null);

  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.blog);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      setHasFetched(true);
      dispatch(fetchArticles());
    }
  }, [dispatch, hasFetched]);

  // Map API data to the expected format for all components
  const mappedArticles = articles.map((article) => ({
    id: article._id,
    title: article.name,
    excerpt: article.excerpt || stripHtmlAndTruncate(article.content, 100), // Use excerpt or strip HTML from content
    coverImage: article.image,
    category:
      article.category ||
      (article.writer?.about?.includes("technology")
        ? "Technology"
        : "General"),
    author: article.writer
      ? { name: article.writer.name }
      : { name: "Unknown Author" },
    date: article.date,
    slug: generateSlug(article.name),
  }));

  const handleSubscribe = (e, email) => {
    e.preventDefault();
    let error = "";

    if (!email) {
      error = "Email is required.";
    } else if (email.length < 5) {
      error = "Email must be at least 5 characters.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = "Please enter a valid email address.";
    }

    setSubscriptionError(error);

    if (!error) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleCategorySelect = (category) => {
    setSearchQuery(category);
    if (filterRef.current) {
      filterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="h-20 md:h-24" />
        <p className="text-white text-lg">Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="h-20 md:h-24" />
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="h-20 md:h-24" />
      <Hero />
      <FeaturedArticle articles={mappedArticles} />
      <SearchFilter
        filterRef={filterRef}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        articles={mappedArticles}
      />
      <ArticlesGrid
        articles={mappedArticles}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Categories
        articles={mappedArticles}
        onCategorySelect={handleCategorySelect}
      />
      <Newsletter
        isSubscribed={isSubscribed}
        handleSubscribe={handleSubscribe}
        subscriptionError={subscriptionError}
      />
    </div>
  );
}
