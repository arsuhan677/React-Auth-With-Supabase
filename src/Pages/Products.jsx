import React from "react";
import { NavLink, Outlet } from "react-router";

const Products = () => {
  return (
    <div>
      <header className="flex gap-4">
        <NavLink to={"/products/cart"}>Cart</NavLink>
        <NavLink to={"/products/new"}>New</NavLink>
        <NavLink to={"/products/categories"}>Categories</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Products;
