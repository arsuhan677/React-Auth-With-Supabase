import React, { useState, useEffect } from "react";
import Explore from "./Explore";
import Fatured from "./Fatured";
import ShopbyCategories from "./ShopbyCategories";
import Categories from "./Categories";

function Hero() {
  const images = [
    // "/slide-img/sl2.webp",
    "/slide-img/sl3.webp",
    "/slide-img/sl4.webp",
    "/images1/15.webp",
    "/images1/16.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔥 Hero Slider Only */}
      <section className="h-[600px] w-full overflow-hidden relative">
        <div
          className="flex h-full w-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </section>

      <div className="mt-10">
        <Categories />
        <Explore />
        {/* <HomeProducts /> */}
        <Fatured />
        <ShopbyCategories />
      </div>
    </>
  );
}

export default Hero;
