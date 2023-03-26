import React from "react";
import img1 from "./Images/logo.jpg";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Register from "./Register";
import Footer from "./Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <div className="flex bg-orange-400 text-[2rem] gap-3 font-bold p-2 sticky top-0 h-[5rem] items-center">
        <img src={img1} alt="logo" className="h-[3rem] w-[3rem]" />
        <Link to="/">
          <span className="active:text-white">Home</span>
        </Link>
        <Link to="/Dashboard">
          <span className="active:text-white">Dashboard</span>
        </Link>
        <Link to="/Register">
          <span className="active:text-white">Register</span>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;
