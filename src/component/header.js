import { useState } from "react";
import { Link } from "react-router";
import React from "react";
export const Header = () => {
  const [login, setlogin] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-36241ld.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li>Cart</li> */}
          <button className="btn" onClick={()=>login == "login" ? setlogin("logout") :setlogin("login")}>{login}</button>
        </ul>
      </div>
    </div>
  );
};