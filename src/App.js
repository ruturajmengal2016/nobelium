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
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Footer from "./Pages/Footer";
import Performance from "./Component/Performance";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/performance" element={<Performance />} />
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
      <div className=" bg-orange-500 sm:text-[1.5rem] gap-5 font-bold p-2 sticky top-0 sm:h-[5rem] items-center flex w-[100%] justify-between pr-12 box-border shadow-md shadow-gray-600 z-10">
        <img
          src={img1}
          alt="logo"
          className="sm:h-[3rem] sm:w-[3rem] hidden sm:inline-block"
        />
        <div className="flex gap-[1rem] float-right">
          <Link
            to="/"
            className="sm:inline-block font-normal"
          >
            Home
          </Link>
          <Link
            to="/Dashboard"
            className="sm:inline-block font-normal"
          >
            Dashboard
          </Link>
          <Link
            to="/Register"
            className="sm:inline-block font-normal"
          >
            Register
          </Link>
        </div>
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
