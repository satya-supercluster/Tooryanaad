import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useData } from "../../Data/useData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const { setShowVid } = useData();
  const [isScaled, setIsScaled] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setIsScaled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowBorder(true);
    }, 2000);
  }, []);
  const handleVideoClick = () => {
    if (window.innerWidth <= 500) {
      setIsScaled(!isScaled);
    }
  };
  return (
    <div
      className={`fixed max-sm:w-[70%] sm:w-[35%] lg:w-[25%] bottom-2 left-2 overflow-hidden shadow-lg z-[10] rounded-lg ${
        showBorder ? "border-2 border-red-500" : ""
      }`}
      onTouchEndCapture={handleVideoClick}
      ref={videoRef}
      style={{
        transform: `scale(${isScaled ? 1 : 0.7})`,
        transformOrigin: "bottom left",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="relative flex">
        <motion.video
          autoPlay
          muted
          loop
          controls
          className="rounded-lg"
          style={{ width: "100%" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/vid.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={() => {
            setShowVid(false);
          }}
          className="absolute right-[0px] top-[0px] leading-none py-1 px-2 sm:py-2 sm:px-3 bg-red-500 font-bold z-[20] text-white rounded-tr-lg rounded-bl-lg cursor-pointer outline outline-red-500"
        >
          <FontAwesomeIcon icon={faXmark} />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoPlayer;
