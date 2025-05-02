'use client';

import { useState } from "react";
import { Quote } from 'lucide-react';
import SlickCarousel from "./SlickCarousel ";

const ReviewsCommunity = () => {
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState({ name: "", message: "" });



  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name && input.message) {
      setReviews([...reviews, input]);
      setInput({ name: "", message: "" });
    }
  };

  return (
    <section className="bg-[#F7F7F7] py-2 pt-15 px-4 ">
      <div className="container mx-auto px-10 md:px-12 lg:px-20  gap-10 py-10">
      <h2 className="font-light text-black text-xl md:text-2xl">Reviews</h2>
      <div className="">
        <SlickCarousel/>
      </div>
      </div>
      {/* <div className="bg-red-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Share Your Review</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <textarea
            placeholder="Write your review..."
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            rows={4}
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
          />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>

        {reviews.length > 0 && (
          <div className="mt-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">What Others Said</h3>
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow text-left">
                <p className="font-semibold text-indigo-700">{r.name}</p>
                <p className="text-gray-700">{r.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>  */}
    </section>
  );
};

export default ReviewsCommunity;
