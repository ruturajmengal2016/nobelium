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
      <div className=" bg-orange-400 sm:text-[2rem] gap-3 font-bold p-2 sticky top-0 sm:h-[5rem] items-center flex">
        <img
          src={img1}
          alt="logo"
          className="sm:h-[3rem] sm:w-[3rem] hidden sm:inline-block"
        />
        <Link to="/">
          <span className="active:text-white hidden sm:inline-block">Home</span>
        </Link>
        <Link to="/Dashboard">
          <span className="active:text-white hidden sm:inline-block">
            Dashboard
          </span>
        </Link>
        <Link to="/Register">
          <span className="active:text-white hidden sm:inline-block">
            Register
          </span>
        </Link>
        <Mob />
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

function Mob() {
  return (
    <div className="sm:hidden flex flex-col items-center">
      <Link to="/">
        <span className="">Home</span>
      </Link>
      <Link to="/Dashboard">
        <span className="">Dashboard</span>
      </Link>
      <Link to="/Register">
        <span className="">Register</span>
      </Link>
    </div>
  );
}
export default App;
