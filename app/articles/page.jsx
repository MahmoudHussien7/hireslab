"use client";

import { useState, useRef } from "react";
import Hero from "@/components/articles/ArticlesHero";
import SearchFilter from "@/components/articles/SearchFilter";
import FeaturedArticle from "@/components/articles//FeaturedArticles";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import Categories from "@/components/articles//Categories";
import Newsletter from "@/components/home/Newsletter";

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const filterRef = useRef(null);

  const articles = [
    {
      id: 1,
      title: "The Future of Remote Work",
      excerpt:
        "Explore how remote work is reshaping the modern workplace and what it means for employers and employees.",
      author: "Jane Smith",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workplace Trends",
    },
    {
      id: 2,
      title: "Hiring Trends in 2023",
      excerpt:
        "Discover the latest hiring trends and how they're impacting recruitment strategies across industries.",
      author: "John Davis",
      date: "June 22, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "Recruitment",
    },
    {
      id: 3,
      title: "Building an Effective Onboarding Process",
      excerpt:
        "Learn how to create an onboarding process that sets new hires up for success and improves retention.",
      author: "Sarah Johnson",
      date: "July 10, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "HR Strategy",
    },
    {
      id: 4,
      title: "Employee Retention Strategies",
      excerpt:
        "Explore proven strategies to improve employee retention and reduce turnover in your organization.",
      author: "Michael Brown",
      date: "August 5, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "HR Strategy",
    },
    {
      id: 5,
      title: "Diversity and Inclusion in the Workplace",
      excerpt:
        "Understand the importance of diversity and inclusion and how to implement effective D&I initiatives.",
      author: "Lisa Chen",
      date: "September 18, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workplace Culture",
    },
    {
      id: 6,
      title: "The Impact of AI on Recruitment",
      excerpt:
        "Explore how artificial intelligence is transforming the recruitment process and what it means for HR professionals.",
      author: "David Wilson",
      date: "October 3, 2023",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const handleCategorySelect = (category) => {
    setSearchQuery(category);
    if (filterRef.current) {
      filterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24" />
      <Hero />

      <FeaturedArticle />
      <SearchFilter
        filterRef={filterRef}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        articles={articles}
      />
      <ArticlesGrid articles={articles} searchQuery={searchQuery} />
      <Categories articles={articles} onCategorySelect={handleCategorySelect} />
      <Newsletter
        isSubscribed={isSubscribed}
        handleSubscribe={handleSubscribe}
      />
    </div>
  );
}
