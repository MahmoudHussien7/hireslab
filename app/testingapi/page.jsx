"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "@/redux/slices/blogSlice";

export default function BlogPage() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.blog);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      setHasFetched(true);
      dispatch(fetchArticles());
    }
  }, [dispatch, hasFetched]);

  console.log("This is articles (Redux):", articles);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {error}. Please try again later.</p>;

  return (
    <div className="text-white">
      <ul>
        {(Array.isArray(articles) ? articles : []).map((article) => (
          <div key={article._id}>
            <div>{article.name}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}
