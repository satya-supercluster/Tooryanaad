import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0,y:-500 }}
        >
          <div
            className="relative w-80 h-40 bottom-2 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url('/img/logo/imgTyW.png')`,
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
                  src='/shell.png'
                  alt="shell"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
