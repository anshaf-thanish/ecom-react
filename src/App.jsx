import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Season from "./components/Season";
import Seller from "./components/Seller";
import Banner2 from "./components/Banner2";
import OurProducts from "./components/OurProducts";
import LIB from "./components/LIB";
import Carousel from "./components/carousel";

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Banner/>
      <Season/>
      <Seller/>
      <Banner2/>
      <OurProducts/>
      <LIB/>
      <Carousel/>
    </div>
  );
};

export default App;
