import React from 'react';
import CarouselBrand from './CarouselBrand';

export default function BrandLogos() {
  return (
    <section className='bg-[#F7F7F7] w-full  flex flex-col items-center justify-left py-10'>

      {/* <h2 className="text-1xl md:text-2xl lg:text-2xl font-light mb-6 text-gray-700 p-10">
          <span className="hires-gradient-text">Embedded</span> With … 
      </h2> */}
      <CarouselBrand/>
    </section>
  );
}
