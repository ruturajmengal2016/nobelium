import React, { useState } from "react";
import img from "./Images/imhs.jpg";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <ul className="left">
          <li>Home</li>
          <li>Service</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
        <ul className="right">
          <li>Login</li>
          <li>SignIn</li>
        </ul>
      </nav>
      <button
        onClick={() => {setMenu(!menu)
        }}>
        &#8801;
      </button>
      {menu && <Navmob />}
    </div>
  );
}

function Navmob() {
  return (
      <nav className="flex justify-center mt-8 bg-emerald-300 text-pink-500 mob">
        <ul className=" flex flex-col gap-1">
          <li>Home</li>
          <li>Service</li>
          <li>Contact</li>
          <li>About us</li>
          <li>Login</li>
          <li>SignIn</li>
        </ul>
      </nav>
  );
}

function Hero() {
  return (
    <div className="hero-div">
      <img src={img} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        dolorem odio quibusdam pariatur exercitationem error sequi, asperiores
        beatae ad nesciunt autem quas voluptatum id recusandae? Quidem dolorum
        voluptates rem totam enim similique ducimus consequuntur sint ex eum.
        Molestiae neque laborum commodi assumenda possimus reprehenderit error
        labore doloremque, optio placeat provident natus architecto recusandae
        eum veniam reiciendis ut, quam accusantium aliquam esse? Magnam numquam
        maiores ex corporis cumque id nisi amet quo quam velit minus ratione
        alias voluptatum earum reprehenderit, eveniet saepe molestias incidunt
        quibusdam voluptates reiciendis dignissimos expedita unde modi! Ut
        praesentium saepe eum temporibus nisi consequuntur ullam fuga iste
        doloribus iure, autem ipsum sed quae.
      </p>
    </div>
  );
}

export default App;
