import React from "react";
import Products from "./Components/Products";
import ProductCard from "./Components/ProductCard";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";


function App() {
  
  return (
    <>
    <NavBar />
     <div className="App">
        <div id="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductCard" element={<ProductCard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;


