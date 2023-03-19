import React from "react";
import Child from "./Child";
import Header from "./Header";
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
  return (
    <div className="h-full bg-gradient-to-br from-red-500 to-blue-600 p-2 flex flex-col gap-4 justify-center">
      <Header />
      <div className="grid grid-cols-4 gap-[1rem] h-fit w-fit">
        {data.map((e, i) => {
          return <Child Name={e.Name} age={e.Age} email={e.email} />;
        })}
      </div>
    </div>
  );
}

export default App;
