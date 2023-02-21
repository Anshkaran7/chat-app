import React from "react";
import DP from "../img/dp.jpg"
const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img className="dp" src={DP} />
        <span >Karan</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
