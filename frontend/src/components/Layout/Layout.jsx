import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import IconBar from "../IconBar/IconBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import MessageBox from "../MessageBox/MessageBox";
// import MessageBox1 from "../MessageBox/MessageBox1";
import VideoPlayer from "./Vid";
import { useData } from "../../Data/useData";
const Layout = () => {
  const { pathname } = useLocation();

  const scrollUp = () => {
    const scrollableElement = document.querySelector("body > div");
    if (scrollableElement) {
      scrollableElement.scrollTop = 0;
    }
  };

  useEffect(scrollUp, [pathname]);

  const { showVid,showMsg,showMsg1 } = useData();
  return (
    <div>
      <IconBar />
      <Header />
      <div className="md:mt-14">
        <Outlet />
      </div>
      {pathname === "/" && showVid === true && <VideoPlayer />}
      <ScrollToTop />
      <Footer className="z-20" />
      {pathname === "/" && showMsg === true && <MessageBox />}
      {/* {pathname === "/" && showMsg1 === true && <MessageBox1 />} */}
    </div>
  );
};

export default Layout;
