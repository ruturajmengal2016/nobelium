import React from "react";

function Footer() {
  return (
    <div className="w-screen bg-blue-500 flex justify-around p-3">
      <div>
        <h1 className="text-[1.5rem] font-semibold text-white underline decoration-pink-500">Company</h1>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Our Service</li>
          <li>Carrer</li>
          <li>Program</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[1.5rem] font-semibold text-white underline decoration-pink-500">Get help</h1>
        <ul>
          <li>FAQ</li>
          <li>Query</li>
          <li>return</li>
        </ul>
      </div>
      <div>
        <h1 className="text-[1.5rem] font-semibold text-white underline decoration-pink-500">Merchandise</h1>
        <ul>
          <li>Shoe</li>
          <li>Jacket</li>
          <li>Electronics</li>
          <li>Technology</li>
          <li>Garments</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
