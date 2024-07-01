import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("../LazyLoader/Lazy"));

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "FB_IMG_1680860270167.jpg",
    "FB_IMG_1680861119470.jpg",
    "FB_IMG_1680862534834.jpg",
    "FB_IMG_1680860283637.jpg",
    "FB_IMG_1680861220505.jpg",
    "FB_IMG_1680862550075.jpg",
    "FB_IMG_1680860299824.jpg",
    "FB_IMG_1680861255880.jpg",
    "FB_IMG_1680862564691.jpg",
    "FB_IMG_1680860698153.jpg",
    "FB_IMG_1680861261933.jpg",
    "FB_IMG_1680860705620.jpg",
    "FB_IMG_1680861287859.jpg",
    "FB_IMG_1680860708825.jpg",
    "FB_IMG_1680861315909.jpg",
    "FB_IMG_1680860722124.jpg",
    "FB_IMG_1680861326386.jpg",
    "FB_IMG_1680860845046.jpg",
    "FB_IMG_1680861503718.jpg",
    "FB_IMG_1680860850022.jpg",
    "FB_IMG_1680861537363.jpg",
    "FB_IMG_1680860860170.jpg",
    "FB_IMG_1680861577042.jpg",
    "FB_IMG_1680860885007.jpg",
    "FB_IMG_1680861591651.jpg",
    "FB_IMG_1680860895336.jpg",
    "FB_IMG_1680861602381.jpg",
    "FB_IMG_1680860903908.jpg",
    "FB_IMG_1680861704941.jpg",
    "FB_IMG_1680860973300.jpg",
    "FB_IMG_1680861720732.jpg",
    "FB_IMG_1680860980375.jpg",
    "FB_IMG_1680861765620.jpg",
    "FB_IMG_1680861037991.jpg",
    "FB_IMG_1680861818017.jpg",
    "FB_IMG_1680861056176.jpg",
    "FB_IMG_1680862492942.jpg",
    "FB_IMG_1680861062324.jpg",
    "FB_IMG_1680862517340.jpg",
    "FB_IMG_1680861113867.jpg",
    "FB_IMG_1680862522619.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === prevIndex);
        return newIndex;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full text-center px-4 py-4 mt-20">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl mb-10">
        वीथिका
      </div>
      <div className="max-w-[80%] 2xl:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-sm:gap-7 mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="relative aspect-square overflow-hidden"
            animate={{
              rotateY: index === currentImageIndex ? 180 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Suspense
              fallback={
                <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-lg"></div>
              }
            >
              <LazyImage
                src={`/gallery/${image}`}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Suspense>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
