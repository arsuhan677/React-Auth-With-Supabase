import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">MyShop</h2>
          <p className="text-gray-400">
            Your one-stop shop for amazing products. Quality guaranteed!
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">Products</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
    );
}

export default Footer;