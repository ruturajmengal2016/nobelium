import React from "react";
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
import Performance from "./Component/Performance";
import Box from "@mui/material/Box";
import Update from "./Pages/Register";
import Typography from "@mui/material/Typography";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update" element={<Update />} />
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
      <Box
        sx={{
          zIndex: 5,
          height: "4rem",
          position: "sticky",
          top: 0,
          display: "flex",
          backgroundColor: "#2196f3",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "0rem 2rem",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "red",
            backgroundColor: "white",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          Nobelium
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            translate: "-2rem 0rem",
            justifyContent: "flex-end",
          }}
        >
          <Link index to="/" className="text-[1.2rem]">
            Home
          </Link>
          <Link to="/dashboard" className="text-[1.2rem]">
            Dashboard
          </Link>
          <Link to="/update" className="text-[1.2rem]">
            Update
          </Link>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default App;
