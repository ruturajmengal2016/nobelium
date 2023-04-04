import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Performance() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const url = `https://nobelium-0vvw.onrender.com/user/${location.state.id}`;
  const fetchData = async () => {
    const res = await fetch(url);
    const user = await res.json();
    setData(user);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="h-screen bg-sky-300">
      {data.map((element) => {
        return (
          <div key={element.Roll_no}>
            {element.Roll_no === location.state.id && (
              <>
                <div>{element.Name}</div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Performance;
