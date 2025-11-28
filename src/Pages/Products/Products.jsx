import React from "react";
import { NavLink, Outlet } from "react-router";
import AboutCategories from "./AboutCategories";

const Products = () => {
  return (
    <div className="container mx-auto grid grid-cols-12">
      <div className="col-span-3 mt-20">
        <div className="items-center justify-center mb-6 space-y-2">
          <h2 className="text-3xl font-bold">All Products</h2>
          <p className="font-semibold text-gray-600 text-lg">products pound</p>
        </div>
        <div className="mb-6 font-medium flex flex-col space-y-2">
          <span>Search</span>
          <div className="mb-8">
            <input className="border w-full border-gray-300 focus: rounded-lg py-2.5 px-6" type="text" placeholder="filter products............" />
          </div>
        <div className="mb-4">
          <AboutCategories />
        </div>
        </div>

      </div>
      <div className="col-span-9">
        <h3>hello grid 9</h3>

      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Products;
