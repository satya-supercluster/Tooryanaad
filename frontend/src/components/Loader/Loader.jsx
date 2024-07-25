import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[rgb(29,32,38)]">
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: [60, 0, 0, -360, 0, 0, -60, 0, 0, 360] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-80 h-40 bottom-2 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/logo/imgLogoXL.png')`,
          }}
        />
        <div className="relative flex space-x-1 mt-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              className="flex items-center justify-center"
              key={index}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [-15, 15] }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img
                className="transform rotate-[701deg] w-16"
                src="/shell.png"
                alt="shell"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Loader;
