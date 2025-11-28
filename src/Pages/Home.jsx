// import React from 'react';
import React, { useState, useEffect } from "react";
import Explore from "./Explore";
// import ProductsCategories from "./Products/ProductsCategories";
import Fatured from "./Fatured";
import ShopbyCategories from "./ShopbyCategories";
import Categories from "./Categories";

function Hero(props) {
 const images = [
    "/slide-img/sl1.webp",
    // "/slide-img/sl2.webp",
    // "/slide-img/sl3.webp",
    // "/slide-img/sl4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="h-[600px] w-full ">
      {/* Sliding Container */}
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
      <div>
        <Categories />
        <Explore />
        {/* <ProductsCategories /> */}
        <Fatured />
        <ShopbyCategories />
      </div>
    </section>
  );
}

export default Hero;
