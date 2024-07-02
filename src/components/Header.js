import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  const login = () => {
    if (btnName == "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li className="nav-list">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-list">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="nav-list">Contact Us</li>
          </Link>
          <Link to="/grocerry">
            <li className="nav-list">Grocerry</li>
          </Link>
          <Link to="/cart">
            <li className="nav-list">cart</li>
          </Link>
          <li className="nav-list">
            {isOnline == true ? "🟢Online" : "🔴 Offline"}
          </li>
          <button className="filter-btn login-btn" onClick={login}>
            {btnName}
          </button>
           <li className="nav-list">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
