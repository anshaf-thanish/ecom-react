import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Season from "./components/Season";
import Seller from "./components/Seller";
import Banner2 from "./components/Banner2";

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Banner/>
      <Season/>
      <Seller/>
      <Banner2/>
    </div>
  );
};

export default App;
