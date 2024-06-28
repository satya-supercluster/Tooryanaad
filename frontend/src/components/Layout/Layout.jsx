import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import IconBar from "../IconBar/IconBar";
import Footer from "../Footer/Footer";

const Layout = () => {

  return (
    <div>
      <IconBar />
      <Header />
      <div className="md:mt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
