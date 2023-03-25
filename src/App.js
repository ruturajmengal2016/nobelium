import React, { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://nobelium-0vvw.onrender.com/data");
      const data = await res.json();
      console.log(data);
      setuser(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-screen grid sm:grid-cols-4 gap-4 p-2 grid-cols-1">
      {user.map((element, index) => {
        return (
          <User
            name={element.Name}
            email={element.Email}
            id={element.Roll_no}
            mob={element.Mob}
            key={index}
          />
        );
      })}
    </div>
  );
}

function User({ name, email, id, mob }) {
  return (
    <div className="h-[8rem] w-[20rem] shadow-xl shadow-gray-500 border-[1px] border-red-400 flex box-border p-1 pl-2 flex-col rounded-lg">
      <span>
        User_id <span className="text-blue-600">{id}</span>
      </span>
      <span>
        User_name <span className="text-blue-600">{name}</span>
      </span>
      <span>
        Email <span className="text-blue-600">{email}</span>
      </span>
      <span>
        Contact <span className="text-blue-600">{mob}</span>
      </span>
    </div>
  );
}

export default App;
