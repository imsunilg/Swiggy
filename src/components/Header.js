import React, { use } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useOnlineStatus } from "../utils/useOnlineStatus";
export const Header = () => {
  const [btnReactName, setBtnReactName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // if no dependencies are passed, useEffect will run on every render
  // if an empty array is passed, useEffect will run only once after the first render
  // if dependencies are passed, useEffect will run when those dependencies change
  useEffect(() => {
    console.log("useEffect called");
  }, [btnReactName]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-300">
      <div className=" m-1 p-2">
        <img className="w-20" alt="logo" src={LOGO_URL} /> 
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
          <li className="px-4">
          {onlineStatus ? "✅" : "🔴"} {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnReactName === "Login"
                ? setBtnReactName("Logout")
                : setBtnReactName("Login");
            }}
          >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
