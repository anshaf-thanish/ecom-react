import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaHeart,
  FaTshirt,
  FaCrown,
  FaLeaf,
  FaGift,
  FaFire,
} from "react-icons/fa";
import OFC1 from "../assets/OFC1.jpg";
import OFC2 from "../assets/OFC2.jpg";
import OFC3 from "../assets/OFC3.jpg";
import OFC4 from "../assets/OFC4.jpg";
import OFC5 from "../assets/OFC5.jpg";
import OFC6 from "../assets/OFC6.jpg";
import "../components/theme.css";

const collections = [
  {
    title: "Romantic Knitwear Series",
    image: OFC1,
    icon: <FaTshirt className="text-pink-400 text-xl" />,
  },
  {
    title: "Elegant Date Outfits",
    image: OFC2,
    icon: <FaHeart className="text-red-500 text-xl" />,
  },
  {
    title: "Royal Valentine Edition",
    image: OFC3,
    icon: <FaCrown className="text-yellow-400 text-xl" />,
  },
  {
    title: "Floral Love Collection",
    image: OFC4,
    icon: <FaLeaf className="text-green-400 text-xl" />,
  },
  {
    title: "Sweetheart Dresses",
    image: OFC5,
    icon: <FaGift className="text-pink-500 text-xl" />,
  },
  {
    title: "Hot Picks for Lovers",
    image: OFC6,
    icon: <FaFire className="text-red-500 text-xl" />,
  },
];

const LIB = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("ofc-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div
    id="collections"
    className="relative bg-gradient-to-br from-pink-100 to-rose-400 overflow-hidden"
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
            fontSize: `${Math.random() * 2}rem`,
            animationDuration: `${Math.random() * 5 + 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>

    {/* SECTION TITLE */}
    <div className="text-center py-10 relative z-10">
      <FaHeart className="inline-block text-red-500 mr-2" />
      <h2 className="inline-block text-2xl sm:text-3xl font-bold text-gray-800">
        Love in Bloom Collections
      </h2>
      <FaHeart className="inline-block text-red-500 ml-2" />
    </div>

    {/* COLLECTION GRID */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-6 pb-12 max-w-7xl mx-auto">
      {collections.map((item, index) => (
        <div
          key={index}
          className={`group relative rounded-xl overflow-hidden shadow-xl transition-all duration-700 ${
            show
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-80 object-cover transition-all duration-700 ${
              show ? "scale-100" : "scale-90"
            } group-hover:scale-110`}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-200 mb-4">
              {item.description}
            </p>

            <button className="w-fit bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-full font-semibold transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default LIB