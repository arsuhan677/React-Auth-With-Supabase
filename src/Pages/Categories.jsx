import React from "react";

function Categories() {

//   const addToCart = (product) => {

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.push(product);

//   localStorage.setItem("cart", JSON.stringify(cart));

//   setCount(count + 1);
// };

  const Products = [
    {
      id: 1,
      name: "boAt Airdopes Alpha",
      price: "25000",
      images: "./public/images/1.avif"
    },
    {
      id: 2,
      name: "boAt Stone 350 Pro",
      price: "840",
      images: "./public/images/2.avif"
    },
    {
      id: 3,
      name: "boAt Nirvana Zenita Zenith Pro",
      price: "550",
      images: "./public/images/3.avif"
    },
    {
      id: 4,
      name: "boAt Lunar Discovery",
      price: "230",
      images: "./public/images/4.avif"
    },
    {
      id: 5,
      name: "boAt Rockerz 255 Pro+",
      price: "340",
      images: "./public/images/5.avif"
    },
    {
      id: 6,
      name: "boAt EnergyShroom PB300 Pro",
      price: "25000",
      images: "./public/images/7.avif"
    },
    
    
  ]

  // const addToCart = () => {
  //     setCount(count + 1)
  // }


  return (
    <div className="container mx-auto px-3 sm:px-1 mb-16">
      <div className="gap-3 sm:gap-6 grid grid-cols-2 sm:grid-cols-6 sm:mt-16 mt-12">
      {Products.map((product) => (
        <div className="bg-gray-200 items-center rounded-lg border-b-4 border-gray-400 border-2 overflow-hidden xs:h-100 w-50">
          <img className="w-full sm:h-40 "
            src={product.images}
            alt={product.name}
          />
           <div className="p-4">
            <div key={product.id}>
            <h2 className="sm:text-l font-bold text-ellipsis line-clamp-1 text-sm text-black mb-2">{product.name}</h2>
            <h2 className="sm:text-[14px] font-bold text-xl mb-2 text-ellipsis line-clamp-1">{product.price}</h2>
          </div>
        </div> 
      </div>
          ))}
      </div>
    </div>
  );
}
export default Categories;