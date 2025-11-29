import React, { useState } from "react";
import { Link } from "react-router";   // ⬅ Link import করতে হবে

const AboutCategories = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = [
    { name: "All Categories", path: "/products" },
    { name: "Electronics", path: "/products/electronics" },
    { name: "Office", path: "/products/home-office" },
    { name: "Fashion", path: "/products/fashion" },
    { name: "Sports", path: "/products/sports" },
  ];

  return (
    <div className="w-full max-w-xs bg-white rounded-lg">
      <h2 className="text-gray-600 font-semibold mb-3">Category</h2>

      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            onClick={() => setActiveCategory(cat.name)}
            className={`block                     // ⬅ button নয়, Link হবে
              text-left px-4 py-2 rounded-lg font-medium
              transition-all duration-200
              ${
                activeCategory === cat.name
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutCategories;
