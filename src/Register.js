import React from "react";

function Register() {
  return (
    <div className="h-screen bg-red-400 flex justify-between items-center overflow-hidden">
      <div className="">
        <div className="rounded-full h-[30rem] w-[30rem] bg-sky-500 opacity-75 -translate-x-[6rem] translate-y-[12rem] ring-8 ring-green-500 z-0"></div>
      </div>
      <div className="bg-blue-400 h-[25rem] w-[30rem] rounded-lg">
        <form
          action=""
          className="flex flex-col gap-5 items-center justify-center h-[100%]"
        >
          <span className="font-mono font-bold text-[2rem]">REGISTER</span>
          <input
            type="text"
            placeholder="Name..."
            className="w-[70%] h-[10%] rounded-lg shadow-md shadow-gray-600"
          />
          <input
            type="email"
            placeholder="Email..."
            className="w-[70%] h-[10%] rounded-lg shadow-md shadow-gray-600"
          />
          <input
            type="text"
            placeholder="Id..."
            className="w-[70%] h-[10%] rounded-lg shadow-md shadow-gray-600"
          />
          <button className="border-2 border-pink-500 p-2 w-[20%] font-bold text-xl text-red-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
