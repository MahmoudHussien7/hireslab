import React from 'react';
import styles from './services.module.css';

export default function ServicesHero() {
  return (
    <section className="container mx-auto mt-10 px-10 md:px-12 lg:px-20 flex flex-col md:flex-row bg-black justify-center items-center gap-5 min-h-[100vh] py-16">
      <div className="flex-1 text-left flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Our <span className="hires-gradient-text">Services</span>
        </h1>
        <p className="text-white text-[1rem] leading-relaxed">
          Our dynamic hiring solution offers immediate access to a skilled 
          talent team. <br className="hidden md:block" />
          We can strengthen your current workforce or create a full team tailored for you.
        </p>
      </div>

      <div className="flex-1 relative flex justify-center items-center">
        <div className={`${styles.clip_img} sm:clip-img clip-img bg-cover bg-center bg-no-repeat w-[500px] h-[600px] rounded-lg`} />
      </div>
    </section>
  );
}


