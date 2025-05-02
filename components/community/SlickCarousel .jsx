"use client"
import React from "react";
import Slider from "react-slick";
import { Quote } from "lucide-react";


function AutoPlay() {
  const steps = [
    {
      name: "Apply to Join",
      review:
        "Fill out a short application form to tell us about yourself and your interests.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
    {
      name: "Get Approved",
      review:
        "Our team will review your application and get in touch with you shortly.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
    {
      name: "Join the Platform",
      review:
        "Once approved, you’ll receive access to our members-only platform.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
    {
      name: "Start Engaging",
      review:
        "Participate in events, discussions, and content co-creation with the community.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
    {
      name: "Get Approved",
      review:
        "Our team will review your application and get in touch with you shortly.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
    {
      name: "Join the Platform",
      review:
        "Once approved, you’ll receive access to our members-only platform.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
    {
      name: "Start Engaging",
      review:
        "Participate in events, discussions, and content co-creation with the community.",
      icon: <Quote className="w-5 h-5 text-indigo-600 mb-2" />,
    },
  ];

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

  return (
    <div className="px-5 py-10">
      <Slider {...settings}>
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow w-full
             max-w-sm md:min-w-sm mx-auto h-full"
          >
            {step.icon}
            <p className="text-gray-600 text-center text-md">{step.review}</p>
            <h3 className="text-sm font-medium py-2 text-center text-black">
              {step.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
