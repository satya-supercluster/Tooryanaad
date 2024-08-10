import React from "react";
import { motion } from "framer-motion";
import { useData } from "../../Data/useData";
const VideoPlayer = () => {
  const { setShowVid } = useData();
  return (
    <div className="w-full h-full overflow-hidden shadow-[0_1px_2px_1px_rgba(0,0,0,0.6)] cursor-not-allowed">
      <motion.video
        autoPlay
        muted
        loop
        className="fixed bottom-2 left-2 transform rounded-lg shadow-lg max-sm:w-[20%] z-[10]"
        style={{ width: "20%", minWidth:"170px" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        onClick={()=>{setShowVid(false)}}
      >
        <source src="/vid.mp4" type="video/mp4" />
        {/* Add additional source tags for different formats if needed */}
        {/* Your browser does not support the video tag. */}
      </motion.video>
    </div>
  );
};

export default VideoPlayer;
