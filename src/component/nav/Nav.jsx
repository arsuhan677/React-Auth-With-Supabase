import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import supabase from "../../Utils/supabase";
function Nav() {

  const [count, setCount] = useState()

  const navigate = useNavigate();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
      return;
    }
    navigate("/login");
    alert("Logout Success.");
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-bold">
          HattBazaar
        </Link>

        {/* Navigation */}

        {/* Action buttons */}
        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full p-2 px-18 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <nav className="flex items-center gap-6 text-xl ">
          <a
            href="products"
            className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110"
          >
            Products
          </a>
          <a
            href="products"
            className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110"
          >
            About
          </a>
          {/* <a
            href="/admin"
            className="text-gray-700 hover:text-blue-500 transform transition ease-in duration-300 hover:scale-110"
          >
            Admin Page
          </a> */}

          <button
          onClick={handleLogout} 
          className="cursor-pointer bg-red-400 hover:bg-red-500 py-2 px-5 rounded-full text-white">
            logout
          </button>
          <div>
            <button className="bg-gray-200 p-2 rounded hover:bg-gray-300">
            🛒 Cart <span>{count}</span>
          </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
