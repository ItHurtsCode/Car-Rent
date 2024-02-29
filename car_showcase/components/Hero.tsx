"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Ищите и арендуйте автомобили быстро и легко!
        </h1>

        <p className="hero__subtitle">
          Оптимизируйте свой опыт аренды автомобиля с помощью нашего простого процесса бронирования.
        </p>
        
        <CustomButton
          title="Найти автомобиль"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
        <img src="/hero.png" alt="hero" className="pt-40" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
    
  );
};

export default Hero;
