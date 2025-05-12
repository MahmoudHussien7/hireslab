import React from "react";
import { motion } from "framer-motion";

export default function Modal({ isOpen, onClose, card }) {
  if (!isOpen || !card) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-2xl max-w-lg w-full p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col gap-4">
          <img
            src={card.image}
            alt={card.nameTitle}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-2xl font-bold text-black uppercase">
            {card.nameTitle}
          </h3>
          <p className="text-base text-gray-700">{card.quote}</p>
          {/* Additional Details (Customizable) */}
          <p className="text-sm text-gray-600">
            Additional details about {card.nameTitle}. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
