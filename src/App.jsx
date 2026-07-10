import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Season from "./components/Season";

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Banner/>
      <Season/>
    </div>
  );
};

export default App;
