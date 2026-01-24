import { useState } from "react";
import { Link } from "react-router";
import React from "react";
import useStatus from "../utils/useStatus";
export const Header = () => {
  const [login, setlogin] = useState("login");
  const status = useStatus();
  console.log(status);
  return (
    <div className="header m-4 p-4 bg-yellow-100 flex justify-between shadow-lg">
      <div className="logo-container">
        <img
          className="w-36 h-36"
          src="https://thumbs.dreamstime.com/b/veggie-burger-hamburger-food-product-mockup-isolated-white-background-generative-ai-delicious-nutritious-variety-269914832.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">{status ? "You are Online ✅" : "Offline 🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocerry">Grocerry</Link></li>
          {/* <li>Cart</li> */}
        </ul>
          <button className={`btn px-4 py-2 ${login == "login" ? "bg-blue-400" : "bg-red-400"} rounded`} onClick={()=>login == "login" ? setlogin("logout") :setlogin("login")}>{login}</button>
      </div>
    </div>
  );
};