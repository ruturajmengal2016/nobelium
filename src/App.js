import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import Home from "./Home";

function App() {
  return (
    <>
    <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/register" element=""></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
