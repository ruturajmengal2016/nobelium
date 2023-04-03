import React, { useState, useEffect } from "react";

function Axios() {
  const [users, setuser] = useState(null);
  const url = "https://nobelium-0vvw.onrender.com/data";
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setuser(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return 
}

export default Axios;
