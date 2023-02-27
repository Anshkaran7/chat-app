import React, { useContext } from "react";
// import DP from "../img/dp.jpg"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="Navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img className="dp" src={currentUser.photoURL} />
        <span >{currentUser.displayName}</span>
        <button onClick={()=>{signOut(auth)}}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
