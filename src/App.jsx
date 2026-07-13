import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Season from "./components/Season";
import Seller from "./components/Seller";
import Banner2 from "./components/Banner2";
import OurProducts from "./components/OurProducts";

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Banner/>
      <Season/>
      <Seller/>
      <Banner2/>
      <OurProducts/>
    </div>
  );
};

export default App;
