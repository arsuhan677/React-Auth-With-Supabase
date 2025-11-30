import React from "react";
import { NavLink } from "react-router";

function Explore() {
  const bgImage = {
    backgroundImage: "url('/images/6.webp')",
  };

  return (
    <div className="container mx-auto">
      <div className="items-center justify-between flex">
        <div className="mb-5 text-2xl">
          Explore <span className="font-bold">Nirvana</span>
        </div>
        <NavLink to="/login">
          <p className="font-bold text-blue-900">View All</p>
        </NavLink>
      </div>
      <div
        className=" px-3 sm:px-1 mb-16 bg-cover bg-center bg-no-repeat h-35 rounded-lg"
        style={bgImage}
      ></div>
    </div>
  );
}

export default Explore;
