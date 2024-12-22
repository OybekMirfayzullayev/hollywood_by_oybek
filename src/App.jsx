import React, { Fragment } from "react";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function () {
  return (
    
    <Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  );
}
