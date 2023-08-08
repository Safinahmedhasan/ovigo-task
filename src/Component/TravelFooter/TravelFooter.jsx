import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TravelFooter = () => {
  return (
    <footer className="bg-gray-900 text-white mt-96">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Ovigo Travel</h2>
            <p className="text-sm">
              Your ultimate guide to amazing travel destinations around the world.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-orange-500 hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Ovigo Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TravelFooter;
