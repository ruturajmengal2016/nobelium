import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
function Dashboard() {
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
  return (
    <>
      {users !== null ? (
        <div className="grid sm:grid-cols-4 gap-4 p-2 grid-cols-1">
          {users.map((user, index) => {
            return (
              <User
                name={user.Name}
                email={user.Email}
                id={user.Roll_no}
                mob={user.Mob}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <BarLoader color="red" />
        </div>
      )}
    </>
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

export default Dashboard;
