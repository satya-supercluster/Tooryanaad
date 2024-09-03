import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const LazyImage = lazy(() => import("../LazyLoader/Lazy"));

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction) => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;
      return newIndex;
    });
  };

  return (
    <div className="w-full text-center px-4 py-4 mt-20">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl mb-10">
        वीथिका
      </div>
      <div className="max-w-[80%] 2xl:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-sm:gap-7 mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="relative aspect-square overflow-hidden cursor-pointer"
            animate={{
              rotateY: index === currentImageIndex ? 180 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => handleImageClick(index)}
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

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-[90vw] bg-white rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={`/gallery/${images[selectedImageIndex]}`}
                  alt={`Enlarged gallery image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover max-h-[80vh] aspect-square"
                />
              </div>
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 text-white bg-black rounded-tr-3xl rounded-bl-3xl h-[7vh] w-[7vh]"
              >
                <FontAwesomeIcon icon={faTimes} size="xl" />
              </button>
              <button
                onClick={() => navigateImage(-1)}
                className="absolute left-1 md:left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 rounded-xl py-1 px-2"
              >
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </button>
              <button
                onClick={() => navigateImage(1)}
                className="absolute right-1 md:right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 rounded-xl py-1 px-2"
              >
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
