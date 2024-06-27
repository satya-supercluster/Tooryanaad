import React, { useEffect, useState } from "react";
import IconBarSm from "../IconBar/IconBarSm";
import About from "../About/AboutOld";
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: isMobile
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),url('/mobile.png')`
      : `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url('/main.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="">
      <div
        className="relative -z-10 overflow-hidden pt-10 lg:pt-0 flex flex-col justify-center items-center w-full lg:rounded-lg max-sm:min-h-[100vh] min-h-[95vh]"
        style={backgroundStyle}
      >
        <div className="px-5 sm:px-10 max-sm:pt-10">
          <div className="flex justify-center items-center lg:mb-10">
            <img
              src="/img/logo/imgTyW.png"
              alt=""
              className=" w-[20rem] lg:m-2"
            />
          </div>
          <h1 className=" font-bold text-yellow-500 text-xl sm:text-3xl text-center mt-2">
            हिन्दी है हम
          </h1>
          <div className="flex justify-center items-center">
            <p className=" text-gray-300 py-5 text-lg sm:text-2xl font-semibold min-[500px]:w-3/4 lg:w-1/2 leading-10 text-center">
              <span className="text-yellow-500"> उद्देश्य -</span>
              राजभाषा हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा
              देशवासियों में राष्ट्रगौरव व आत्मगौरव की भावना का विकास करना।
            </p>
          </div>
        </div>
        {isMobile ? (
          <div className="w-screen">
            <IconBarSm></IconBarSm>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <About />
    </div>
  );
};

export default Home;
