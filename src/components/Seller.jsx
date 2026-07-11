import React from "react";
import { FaHeart } from "react-icons/fa";
import OBS1 from "../assets/OBS1.png";
import OBS2 from "../assets/OBS2.png";
import OBS3 from "../assets/OBS3.png";
import "../components/theme.css";

const bestSellers = [
  {
    id: 1,
    image: OBS1,
    title: "Euphoria Crop Blouse",
    price: "Rs 4125.000",
  },
  {
    id: 2,
    image: OBS2,
    title: "Venus Halter Dress",
    price: "Rs 5180.000",
  },
  {
    id: 3,
    image: OBS3,
    title: "Snap Pure Blouse",
    price: "Rs 4129.000",
  },
];

const Seller = () => {
  return (
    <div
      id="season"
      className="relative py-8 bg-gradient-to-b from-pink-100 to-rose-400 "
    >
      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <FaHeart
            key={i}
            className="absolute text-red-400 opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* HEADING */}
      <h2 className="text-2xl sm:text-5xl text-center animate-fade-in font-[cursive] md:text-4xl text-rose-700 font-extrabold mb-12 uppercase tracking-wide">
        <FaHeart className="inline-block text-red-500 mr-2" />
        Our Best Sellers
        <FaHeart className="inline-block text-red-500 ml-2" />
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="relative bg-pink-200 p-4 rounded-2xl shadow-lg transition-all hover:shadow-rose-800 hover:ring-2 hover:ring-rose-300 hover:scale-105 transform duration-300 border border-rose-200"
            >
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-lg shadow-md transition-all duration-500 h-48 sm:h-56 md:h-64 lg:h-96"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg sm:text-xl font-semibold text-rose-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg font-medium">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seller;
