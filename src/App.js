import React from "react";

function App() {
  const data = [
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ajit Mengal", Age: 22, email: "ajitmengal2016@gmail.com" },
    { Name: "Punam Bhat", Age: 23, email: "punambhat2016@gmail.com" },
    { Name: "Sahil bhutambre", Age: 21, email: "sahilbhutambre2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
    { Name: "Ruturaj Mengal", Age: 21, email: "ruturajmengal2016@gmail.com" },
  ];
  return <div>
    {data.map((e,i)=>{
      return <div className="h-[5rem] w-[5rem] grid grid-cols-3">{e.Name}</div>;
    })}
  </div>;
}

export default App;
