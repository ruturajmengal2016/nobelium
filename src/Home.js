import React from "react";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg')] bg-no-repeat bg-cover">
      <span className="text-[10rem] w-fit text-center font-mono font-bold text-red-400 animate-pulse">
        <span className="text-blue-500 italic">Nobelium</span> Web Development
        cohort
      </span>
    </div>
  );
}

export default Home;
