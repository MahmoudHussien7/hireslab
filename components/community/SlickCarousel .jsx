"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import { Quote } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "@/redux/slices/reviewSlice"; // Adjust path to your slice

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    // Fetch reviews if not already loaded
    if (status === "idle") {
      dispatch(fetchReviews());
    }
  }, [dispatch, status]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (status === "loading") {
    return <p className="text-center">Loading reviews...</p>;
  }

  if (status === "failed") {
    return (
      <p className="text-center text-red-500">
        {error || "Failed to load reviews"}
      </p>
    );
  }

  if (reviews.length === 0) {
    return <p className="text-center">No reviews available</p>;
  }

  return (
    <div className="px-5 py-10">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review._id}
            className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow w-full max-w-sm mx-auto h-full"
          >
            <Quote className="w-5 h-5 text-indigo-600 mb-2" />
            <p className="text-gray-600 text-center text-md">{review.review}</p>
            <h3 className="text-sm font-medium py-2 text-center text-black">
              {review.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
