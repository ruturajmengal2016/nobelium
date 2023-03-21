import React from "react";
import { Routes, Route,Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li> 
        <li><Link to="/about">About</Link></li> 
      </ul>
    </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
