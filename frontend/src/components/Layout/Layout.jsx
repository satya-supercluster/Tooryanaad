import React, { useEffect } from "react";
import {Outlet,useLocation } from "react-router-dom";
import Header from "../Header/Header";
import IconBar from "../IconBar/IconBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import MessageBox from "../MessageBox/MessageBox";
const Layout = () => {
  const { pathname } = useLocation();
  const scrollUp = () => {
    const scrollableElement = document.querySelector("body > div");
    if (scrollableElement) {
      scrollableElement.scrollTop = 0;
    }
  };
  useEffect(scrollUp, [pathname]);

  return (
    <div>
      <IconBar />
      <Header />
      <div className="md:mt-14">
        <Outlet />
      </div>
      <ScrollToTop/>
      <Footer />
      <MessageBox/>
    </div>
  );
};

export default Layout;
