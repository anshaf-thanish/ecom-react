import React from "react";
import { FaHeart } from "react-icons/fa";
import "../components/theme.css";

import BL1 from "../assets/BL1.png";
import BL2 from "../assets/BL2.png";
import BR1 from "../assets/BR1.png";
import BR2 from "../assets/BR2.png";

const Banner2 = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-rose-400 py-12 px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between relative">
      {/* Decorative Hearts */}
      <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6">
        <FaHeart className="text-red-500 text-3xl" />
      </div>
      <div className="absolute right-0 bottom-0 transform -translate-x-6 -translate-y-6">
        <FaHeart className="text-red-500 text-3xl" />
      </div>

      {/* LEFT SIDE IMG */}
      <div className="flex gap-4 md:w-1/3 justify-end relative">
        <img
          src={BL1}
          alt="Left IMG"
          className="w-24 sm:w-32 md:w-2/5 rounded-lg transform rotate-[-5deg] transition duration-300 hover:scale-105"
        />
        <img
          src={BL2}
          alt="Left IMG"
          className="w-24 sm:w-32 md:w-2/5 rounded-lg transform rotate-[-5deg] transition duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Banner2;
