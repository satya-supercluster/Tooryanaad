import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import IconBar from "../IconBar/IconBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 3) {
        setIsVisible(true);
        console.log(window.scrollY);
      } else {
        setIsVisible(false);
        console.log(window.scrollY);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <IconBar />
      <Header />
      <div className="md:pt-14">
        <Outlet />
      </div>
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Layout;
