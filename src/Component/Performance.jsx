import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "../Axios/axios";
import Box from "@mui/material/Box";
import { grey, red, indigo } from "@mui/material/colors";
import Linechart from "./Linechart";
function Performance() {
  const [user, setData] = useState([]);
  const location = useLocation();
  const fetchData = async (id) => {
    const res = await axios.get(`/user/${id}`);
    setData(res.data);
  };
  useEffect(() => {
    fetchData(location.state.id);
  }, [location.state.id]);

  const totalAttendance = useMemo(() => {
    const regxAttendance = new RegExp("Attendance", "gi");
    return Object.keys(user)
      .filter((ele) => {
        return regxAttendance.test(ele);
      })
      .map((ele) => {
        return user[ele];
      })
      .reduce((acc, curr) => acc + curr, 0);
  }, [user]);
  const totalCodeZinger = useMemo(() => {
    const regxCodezinger = new RegExp("CodeZinger", "gi");
    return Object.keys(user)
      .filter((ele) => {
        return regxCodezinger.test(ele);
      })
      .map((ele) => {
        return user[ele];
      })
      .reduce((acc, curr) => acc + curr, 0);
  }, [user]);

  const totalAssignment = useMemo(() => {
    const regxAssignment = new RegExp("Submission", "gi");
    return Object.keys(user)
      .filter((ele) => {
        return regxAssignment.test(ele);
      })
      .map((ele) => {
        return user[ele];
      })
      .reduce((acc, curr) => acc + curr, 0);
  }, [user]);
  return (
    <div className="h-screen flex justify-center items-center max-sm:h-[120vh]">
      <Box
        sx={{
          width: "90vw",
          height: {sm:"120vh",md:"90vh"},
          backgroundColor: grey[900],
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "90%",
            justifyContent: "space-between",
            alignSelf: "center",
            display: {
              sm: "none",
              md: "flex",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: red["A200"],
              width: "20rem",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: "0.55rem",
              maxHeight: "10rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            <span>{user["Student's Name"]}</span>
            <span>{user["Roll No."]}</span>
            <span>{user["Email Id"]}</span>
            <span>{user["Mobile No."]}</span>
          </Box>
          <Box
            sx={{
              backgroundColor: indigo["A200"],
              width: "20rem",
              height: "10rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontWeight: "bold",
              color: "white",
            }}
          >
            <span>Total Attendance: {totalAttendance}</span>
            <span>Total Code Zinger Marks: {totalCodeZinger}</span>
            <span>Total Assignments: {totalAssignment}</span>
          </Box>
        </Box>
        <Box
          sx={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              backgroundColor: { sm: "#212121", md: "#b3e5fc" },
              width: "95%",
              height: "25rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position:{
                sm:"relative",
                md:"static"
              },
              top:{
                sm:'15rem',
                md:0
              }
            }}
          >
            <Linechart user={user} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Performance;
