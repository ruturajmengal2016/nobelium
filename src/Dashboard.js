import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";
import axios from './Axios/axios'

export const fetchData = async () => {
  const res = await axios.get("/data")
  return res.data
};

function Dashboard() {
  const navigate = useNavigate();
  const users = useLoaderData()
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
                navigate={navigate}
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

function User({ name, email, id, mob, navigate }) {
  return (
    <div
      className="h-[8rem] w-[20rem] shadow-xl shadow-gray-500 border-[1px] border-red-400 flex box-border p-1 pl-2 flex-col rounded-lg cursor-pointer"
      onClick={() => {
        navigate("/performance", { state: { id: id } });
      }}
    >
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
