import React from "react";

export default function Card({ image, quote, nameTitle, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col rounded-2xl overflow-hidden min-w-[280px] max-w-[280px] h-[450px] bg-gradient-to-b from-sec to-sec shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
      aria-label={`Open details for ${nameTitle}`}
    >
      {/* Image Section */}
      <div className="h-2/3 w-full">
        <img
          src={image}
          alt={nameTitle}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-between p-4 h-1/3 text-left">
        <div>
          <h3 className="text-xl font-bold text-black uppercase mb-2">
            {nameTitle}
          </h3>
          <p className="text-sm text-black leading-tight">{quote}</p>
        </div>
      
      </div>
    </div>
  );
}
