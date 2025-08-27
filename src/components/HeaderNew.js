import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const HeaderNew = () => {
  const [btnReactName, setBtnReactName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
  }, [btnReactName]);

  return (
    <div className=" flex m-2  justify-between border border-black">
      {/* Logo */}
      <div className="flex items-center">
        <img className="m-2 w-20" alt="logo" src={LOGO_URL} />
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex list-none text-lg">
          <li className="px-3 py-2">
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </li>
          <li className="px-3 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 py-2">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-3 py-2">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-3 py-2">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-3 py-2">Cart</li>

          {/* Login / Logout Button */}
          <button
            className="m-2 w-24 cursor-pointer border border-black bg-yellow-400 px-4 py-2 font-bold text-white transition-transform hover:scale-105 hover:shadow-md"
            onClick={() =>
              setBtnReactName(btnReactName === "Login" ? "Logout" : "Login")
            }
          >
            {btnReactName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNew;
