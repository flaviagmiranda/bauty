import React from "react";
import LoginButton from "../Login/LoginButton.js";
import LogoutButton from "../Logout/LogoutButton.js";
import Favourites from "../Favourites/Favourites.js";
import "./Header.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../Pages/Layout.jsx";
import Home from "../../Pages/Home.jsx";
import ProductsPage from "../../Pages/Products.jsx";
import Contact from "../../Pages/Contact.jsx";
import NoPage from "../../Pages/NoPage.jsx";

export default function Header() {
  return (
    <header>
      <img
        className="logo"
        src="https://i.imgur.com/OWeM7yf.png"
        alt="bauty logo"
      ></img>
      <div>
        <Favourites />
        <LoginButton />
        <LogoutButton />
        <Home />
      </div>
    </header>
  );
}
