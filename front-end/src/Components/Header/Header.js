import React from "react";
import LoginButton from "../Login/LoginButton.js";
import LogoutButton from "../Logout/LogoutButton.js";
import Favourites from "../Favourites/Favourites.js";
import "./Header.css";
import Home from "../../Pages/Home.jsx";

export default function Header() {
  return (
    <header>
      <img
        className="logo"
        src="https://i.imgur.com/OWeM7yf.png"
        alt="bauty logo"
      ></img>
      <div className="headerElements">
        <div className="navBar">
          <Home />
        </div>
        <Favourites />
        <LoginButton />
        <LogoutButton />
      </div>
    </header>
  );
}
