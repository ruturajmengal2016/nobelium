import React from "react";
import Box from "@mui/material/Box";
import iso from "../iso.jpg";
export default function BoxSx() {
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "fit-content",
        display: "flex",
        background: `url(${iso})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignItems: "center",
      }}
    >
      <span className="sm:text-[8rem] w-fit text-center font-mono font-bold text-red-400 animate-pulse text-[3rem] h-fit">
        <span className="text-blue-500 italic -z-1">Nobelium</span> Web
        Development cohort
      </span>
    </Box>
  );
}
