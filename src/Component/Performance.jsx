import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Performance() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const url = `https://nobelium-0vvw.onrender.com/user/${location.state.id}`;
  const fetchData = async (url) => {
    const res = await fetch(url);
    const user = await res.json();
    setData(user);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <div className="h-screen bg-sky-300 flex justify-center items-center">
      <div className="bg-purple-900 h-[90%] w-[90%] flex p-4 gap-3 justify-evenly">
        <div className="h-[10rem] w-[10rem] bg-red-600 flex-grow"></div>
        <div className="h-[10rem] w-[10rem] bg-red-600 flex-grow"></div>
        <div className="h-[10rem] w-[10rem] bg-red-600 flex-grow"></div>
        <div className="h-[10rem] w-[10rem] bg-red-600 flex-grow"></div>
        <div className="h-[10rem] w-[10rem] bg-red-600 flex-grow"></div>
      </div>
    </div>
  );
}

export default Performance;
