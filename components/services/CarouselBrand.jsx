"use client"
import React from 'react'
import Slider from "react-slick";
import Image from "next/image"; 

export default function CarouselBrand() {
    const items = [
        { img: "/images/Adaptavate.svg" },
        { img: "/images/Cartesian.svg" },
        { img: "/images/frist.svg" },
        { img: "/images/logo1.webp" },
        { img: "/images/logo2.webp" },
        { img: "/images/logo3.webp" },
      ];
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "ease-in-out",
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ],
      };
    
      return (
        <div className="flex justify-center items-center w-full py-5 bg-[#F7F7F7]">
          <Slider {...settings} className="w-full max-w-5xl">
            {items.map((item, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <Image
                  src={item.img}
                  alt={`Brand logo ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      );
    }
