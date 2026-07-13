import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import OP1 from "../assets/OP1.png";
import OP2 from "../assets/OP2.png";
import OP3 from "../assets/OP3.png";
import B1 from "../assets/B1.jpg";
import B2 from "../assets/B2.jpg";
import B3 from "../assets/B3.jpg";
import D1 from "../assets/D1.jpg";
import D2 from "../assets/D2.jpg";
import D3 from "../assets/D3.jpg";
import S1 from "../assets/S1.jpg";
import S2 from "../assets/S2.jpg";
import S3 from "../assets/S3.jpg";
import K1 from "../assets/K1.jpg";
import K2 from "../assets/K2.jpg";
import K3 from "../assets/K3.jpg";
import O1 from "../assets/O1.jpg";
import O2 from "../assets/O2.jpg";
import O3 from "../assets/O3.jpg";

import "../components/theme.css";

const categories = ["Top", "Bottom", "Dress", "Set", "Knit", "Outer"];
const products = {
  Top: [
    { name: "V-Neck Yellow Blouse", price: "Rs 4129.000", img: OP1 },
    { name: "Puff Sleeve Crop Top", price: "Rs 4239.000", img: OP2 },
    { name: "Striped Boatneck Tee", price: "Rs 4430.000", img: OP3 },
  ],
  Bottom: [
    { name: "Brown Corduroy Pants", price: "Rs 5250.000", img: B1 },
    { name: "Classic Blue Jeans", price: "Rs 5200.000", img: B2 },
    { name: "Black Slim Fit Jeans", price: "Rs 5250.000", img: B3 },
  ],
  Dress: [
    { name: "Floral Sundress", price: "Rs 3300.000", img: D1 },
    { name: "Off-Shoulder Maxi Dress", price: "Rs 3350.000", img: D2 },
    { name: "Polka Dot Midi Dress", price: "Rs 3300.000", img: D3 },
  ],
  Set: [
    { name: "Casual Two-Piece Set", price: "Rs 6400.000", img: S1 },
    { name: "Formal Office Set", price: "Rs 6500.000", img: S2 },
    { name: "Athleisure Lounge Set", price: "Rs 6400.000", img: S3 },
  ],
  Knit: [
    { name: "Crewneck Knit Sweater", price: "Rs 5180.000", img: K1 },
    { name: "Oversized Cardigan", price: "Rs 5220.000", img: K2 },
    { name: "Turtleneck Wool Sweater", price: "Rs 5180.000", img: K3 },
  ],
  Outer: [
    { name: "Beige Trench Coat", price: "Rs 6600.000", img: O1 },
    { name: "Quilted Puffer Jacket", price: "Rs 6700.000", img: O2 },
    { name: "Double-Breasted Wool Coat", price: "Rs 6600.000", img: O3 },
  ],
};

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("Top");
  // Display all products by default
  const [visibleProducts] = useState(
    categories.reduce(
      (acc, category) => ({
        ...acc,
        [category]: products[category].length,
      }),
      {},
    ),
  );
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const floatingHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}rem`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setHearts(floatingHearts);
  }, []);

  return (
    <div
      id="products"
      className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-400 relative overflow-hidden py-12 px-4"
    >
      {/* FLOATING HEARTS */}
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="absolute text-red-400 opacity-50 animate-float"
          style={{
            top: heart.top,
            left: heart.left,
            fontSize: heart.size,
            animationDuration: heart.duration,
          }}
        />
      ))}

      {/* SECTION TITLE */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl uppercase tracking-wide text-rose-700 font-extrabold font-[cursive] animate-fade-in text-center mb-10">
          <FaHeart className="inline-block text-red-500 mr-2" />
          Our Products
          <FaHeart className="inline-block text-red-500 ml-2" />
        </h2>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 sm:px-6 text-base py-2 sm:text-lg font-semibold transition border-b-4 ${
              activeTab === category
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OurP;
