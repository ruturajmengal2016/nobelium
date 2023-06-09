import React from "react";
function Update() {
  return (
    <div className="h-screen bg-red-400 flex justify-between items-center overflow-hidden">
      <div className="hidden sm:inline-flex">
        <div className="rounded-full h-[30rem] w-[30rem] bg-sky-500 opacity-75 -translate-x-[6rem] translate-y-[12rem] ring-8 ring-green-500 z-0"></div>
      </div>
      <div className="bg-blue-400 h-[25rem] w-[30rem] rounded-lg">
        <form
          action="https://nobelium-0vvw.onrender.com/post"
          method="post"
          className="flex flex-col gap-5 items-center justify-center h-[100%]"
        >
          <span className="font-mono font-bold text-[2rem]">UPDATE</span>
          <input
            type="text"
            placeholder="Id..."
            name="id"
            className="w-[70%] h-[10%] rounded-lg shadow-md shadow-gray-600 placeholder:text-red-600 placeholder:translate-x-3"
          />
          <input
            type="text"
            placeholder="Name..."
            name="name"
            className="w-[70%] h-[10%] rounded-lg shadow-md shadow-gray-600 placeholder:text-red-600 placeholder:translate-x-3"
          />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            className="w-[70%] h-[10%] rounded-lg shadow-md shadow-gray-600 placeholder:text-red-600 placeholder:translate-x-3"
          />

          <input
            type="submit"
            className="border-2 border-pink-500 p-2 w-[25%] font-bold text-xl text-red-500 active:scale-90 rounded-md ring-1"
          />
        </form>
      </div>
    </div>
  );
}

export default Update;
