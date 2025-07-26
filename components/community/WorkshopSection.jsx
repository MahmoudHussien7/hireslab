// components/WorkshopSection.jsx
import React from 'react';
import Link from "next/link";

const WorkshopSection = () => {
  return (
    
    <section className="workshop-section w-full relative text-white pb-8 pt-16">
     <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] z-1 top-0 left-0 right-0 buttom-0 w-full"></div>

      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
       style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}></div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
           Join Our Workshops & Learning Tracks
        </h2>
        <Link
          href="#"
          download
          className="inline-block bg-[#7ed967]  text-black font-semibold py-2 px-6 rounded hover:bg-[#6ab857] transition"
        >
          Download Brochure
        </Link>

        <ul className="text-sm md:text-md mt-8 space-y-1 text-gray-200">
          <li>1. Read the Brochure</li>
          <li>2. Choose your workshop / program</li>
          <li>3. Send an email to careers@thehireslab.com with your choice of selection as a subject</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkshopSection;
