import React, { useEffect } from "react";
import { Outlet,useLocation } from "react-router-dom";
import Header from "../Header/Header";
import IconBar from "../IconBar/IconBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollableElement = document.querySelector("body > div");
    if (scrollableElement) {
      scrollableElement.scrollTop = 0;
    }
  }, [pathname]);

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
