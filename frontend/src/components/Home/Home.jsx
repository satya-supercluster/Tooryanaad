import React, { useEffect, useState } from "react";
import IconBarSm from "../IconBar/IconBarSm";
import About from "../About/About";
import { motion } from "framer-motion";
import Sponsor from "../Sponsor/Sponsor";
import News from "../News/News";
import Books from "../Books/Books"
import { useData } from "../../Data/useData";
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const { setShowMsg,setShowVid } = useData();
  useEffect(() => {
    setShowMsg(true);
    setShowVid(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),url('/hometry3.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="">
      <div
        className="relative z-1 overflow-hidden pt-10 lg:pt-0 flex flex-col justify-center items-center w-full lg:rounded-lg max-sm:min-h-[100vh] min-h-[95vh] bg-[rgb(29,32,38)]"
        style={backgroundStyle}
      >
        <div className="px-5 sm:px-10 max-sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease:"easeOut", duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center lg:mb-10"
          >
            <img
              src="/img/logo/imgTyW.png"
              alt=""
              className=" w-[20rem] xl:w-[30rem] lg:m-2"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease:"easeOut", duration: 0.8 }}
            viewport={{ once: true }}
            className=" font-bold text-yellow-500 text-xl sm:text-3xl text-center mt-2"
          >
            हिन्दी हैं हम
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease:"easeOut", duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <p className=" text-gray-300 py-5 text-lg sm:text-2xl font-semibold min-[500px]:w-3/4 lg:w-1/2 leading-10 text-center xl:leading-loose">
              <span className="text-yellow-500"> उद्देश्य -</span>
              राजभाषा हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा
              देशवासियों में राष्ट्रगौरव व आत्मगौरव की भावना का विकास करना।
            </p>
          </motion.div>
        </div>
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease:"easeOut", duration: 1  }}
            viewport={{ once: true }}
            className="w-screen"
          >
            <IconBarSm></IconBarSm>
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
      <About />
      {/* <Books></Books> */}
      <News></News>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
