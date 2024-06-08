import React, { useEffect, useState } from "react";
import IconBarSm from "../IconBar/IconBarSm";
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
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),url('/main.png')`
      : `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url('/main.png')`,
    backgroundSize: isMobile ? `${window.innerWidth*0.5} auto`:"cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="abolute">
      <div
        className="pt-10 lg:pt-0 flex flex-col justify-center items-center lg:rounded-lg max-[380px]:min-h-[100vh] min-h-[95vh]"
        style={backgroundStyle}
      >
        <div className="px-5 sm:px-10 pt-20">
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
            <p className=" text-gray-300 py-5 text-lg sm:text-2xl font-semibold lg:w-[50rem] leading-10 text-center">
              <span className="text-yellow-500"> उद्देश्य -</span> राजभाषा
              हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा देशवक्षियों में
              राष्ट्रगौरव व आत्मगौरव की भवना का विकाश करना।
            </p>
          </div>
        </div>
        <div className="w-screen">
          <IconBarSm></IconBarSm>
        </div>
      </div>
      <div className="min-h-screen">
      </div>
    </div>
  );
};

export default Home;
