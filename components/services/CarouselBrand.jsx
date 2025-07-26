"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function CarouselBrand({ className }) {
  const items = [
    { img: "/clientslogos/1.svg" },
    { img: "/clientslogos/2.svg" },
    { img: "/clientslogos/3.svg" },
    { img: "/clientslogos/4.svg" },
    { img: "/clientslogos/5.svg" },
    { img: "/clientslogos/6.svg" },
    { img: "/clientslogos/7.svg" },
    { img: "/clientslogos/8.svg" },
    { img: "/clientslogos/9.svg" },
    { img: "/clientslogos/10.svg" },
    { img: "/clientslogos/11.svg" },
    { img: "/clientslogos/12.svg" },
    { img: "/clientslogos/13.svg" },
    { img: "/clientslogos/14.svg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`w-full overflow-hidden px-4 md:px-10 sm:px-12 lg:px-16 xl:px-20 dark:bg-gray-900 ${className}`}
    >
      <Slider {...settings} className="w-full  mx-auto ">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center px-2">
            <div className="relative w-[120px] h-[80px] sm:w-[150px] sm:h-[100px]">
              <Image
                src={item.img}
                alt={`Brand logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
