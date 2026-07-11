import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Season from "./components/Season";
import Seller from "./components/Seller";

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Banner/>
      <Season/>
      <Seller/>
    </div>
  );
};

export default App;
