import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import supabase from "../../Utils/supabase";
import { useSelector } from "react-redux";

function Nav() {
  const value = useSelector((state) => state.counter.value);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
      return;
    }
    navigate("/login");
  };

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) navigate("/");
    };
    checkSession();
  }, []);

  return (
    <header className="bg-white shadow-md p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* LEFT: Logo */}
        <Link to="/" className="text-2xl font-bold">
          HattBazaar
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV BAR */}
        <div
          className={`
            md:flex md:items-center md:space-x-12 
            absolute md:static left-0 top-full w-full md:w-auto 
            bg-white md:bg-transparent shadow-md md:shadow-none 
            p-5 md:p-0 transition-all duration-300 
            overflow-hidden
            ${menuOpen ? "max-h-screen block" : "max-h-0 hidden md:flex"}
          `}
        >

          {/* CENTER MENU */}
          <nav className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto">
            <Link to="/products" className="nav-item">Products</Link>
            <Link to="/shop" className="nav-item">Shop</Link>
            <Link to="#" className="nav-item">About</Link>
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={() => navigate("/addtocart")}
              className="bg-gray-200 p-2 rounded hover:bg-gray-300 flex items-center"
            >
              🛒 Cart: {value}
            </button>

            <button
              onClick={handleLogout}
              className="hover:bg-gray-300 py-2 px-5 rounded-lg font-semibold"
            >
              SignOut
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
