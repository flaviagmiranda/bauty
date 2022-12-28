import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar.js";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;