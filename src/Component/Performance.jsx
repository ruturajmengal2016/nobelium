import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../Axios/axios";

function Performance() {
  const [user, setData] = useState([]);
  const location = useLocation();
  const fetchData = async () => {
    const res = await axios.get(`/user/${location.state.id}`);
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-screen bg-sky-300 flex justify-center items-center">
      <div className="bg-purple-900 h-[90%] w-[90%] grid grid-flow-col p-3">
        <div className="bg-red-500 h-[15rem] w-[50rem]"></div>
        <div className="bg-red-500 h-[15rem] w-[20rem]"></div>
      </div>
    </div>
  );
}

export default Performance;
