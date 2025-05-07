"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchSingleArticle, fetchArticles } from "@/redux/slices/blogSlice";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Newsletter from "@/components/home/Newsletter";

// Utility function to generate a slug from the article name
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export default function BlogPostPage({ params: paramsPromise }) {
  const params = React.use(paramsPromise); // Unwrap params using React.use()
  const { slug } = params;
  const dispatch = useDispatch();
  const { singleArticle, articles, loading, error } = useSelector(
    (state) => state.blog
  );

  // Fetch all articles (for related articles) and the single article
  useEffect(() => {
    // Fetch all articles if not already fetched (for related articles)
    if (!articles.length) {
      dispatch(fetchArticles());
    }

    // Find the article ID from the slug
    const article = articles.find((a) => generateSlug(a.name) === slug);
    if (article) {
      dispatch(fetchSingleArticle(article._id));
    }
  }, [dispatch, slug, articles]);

  // Map the single article data to the expected structure
  const blogPost = singleArticle
    ? {
        title: singleArticle.name || "Untitled Article",
        excerpt: singleArticle.content
          ? singleArticle.content.substring(0, 100) + "..."
          : "No excerpt available.",
        date: singleArticle.date
          ? new Date(singleArticle.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : "Unknown Date",
        author: singleArticle.writer?.name || "Unknown Author",
        authorRole: singleArticle.writer?.about, // Mocked (not provided by API)
        authorImage:
          singleArticle.writer?.image ||
          "/placeholder.svg?height=100&width=100",
        authorBio: singleArticle.writer?.about || "No bio available.",
        category: singleArticle.category || "General",
        image: singleArticle.image || "/placeholder.svg?height=600&width=1200",
        readingTime: singleArticle.readingTime,
        content: singleArticle.content || "No content available.",
        tags: singleArticle.tags || ["ata"], // Mocked (not provided by API)
      }
    : null;

  // Generate related posts (same category, exclude current article)
  const relatedPosts = articles
    .filter(
      (article) =>
        article.writer?.about?.includes("technology") ===
          singleArticle?.writer?.about?.includes("technology") &&
        article._id !== singleArticle?._id
    )
    .slice(0, 3)
    .map((article) => ({
      id: article._id,
      title: article.name || "Untitled Article",
      excerpt: article.content
        ? article.content.substring(0, 100) + "..."
        : "No excerpt available.",
      date: article.date
        ? new Date(article.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        : "Unknown Date",
      category: article.writer?.about?.includes("technology")
        ? "Technology"
        : "General",
      image: article.image || "/placeholder.svg?height=400&width=600",
      slug: generateSlug(article.name),
    }));

  // Social sharing functions
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = blogPost?.title || "Check out this article!";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareTitle
      )}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  // Newsletter subscription handler (mocked)
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  if (loading) {
    return <div className="container-custom py-12">Loading article...</div>;
  }

  if (error || !blogPost) {
    return (
      <div className="container-custom py-12">
        {error ? `Error: ${error}` : "Article not found."}
      </div>
    );
  }

  return (
    <div className="flex flex-col p-16 mt-20 ">
      {/* Hero Section */}
      <section className="text-white">
        <div className="container text-white ">
          <Link
            href="/articles"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {blogPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {blogPost.date}
              </div>
              <div className="flex items-center s">
                <User className="mr-2 h-4 w-4" />
                {blogPost.author}, {blogPost.authorRole}
              </div>
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                {blogPost.category}
              </div>
              <div className="flex items-center">{blogPost.readingTime}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-background text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-contain"
                />
              </div>

              <article className="prose prose-lg max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/articles/tag/${tag
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Share this article:
                </h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={shareOnFacebook}
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={shareOnTwitter}
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={shareOnLinkedIn}
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" onClick={copyLink}>
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Copy link</span>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="bg-secondary rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={blogPost.authorImage}
                        alt={blogPost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{blogPost.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {blogPost.authorRole}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{blogPost.authorBio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedPosts.map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden border-none shadow-md"
                      >
                        <div className="relative h-32">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center mb-2">
                            <span className="text-xs text-primary font-medium">
                              {post.category}
                            </span>
                            <span className="mx-2 text-muted-foreground">
                              •
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {post.date}
                            </span>
                          </div>
                          <h4 className="font-semibold mb-2">{post.title}</h4>
                          <Link
                            href={`/articles/${post.slug}`}
                            className="text-sm text-primary font-medium"
                          >
                            Read Article
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
