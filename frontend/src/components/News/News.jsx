import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const photos = [
  "/news/photo2.jpg",
  "/news/photo1.jpg",
  "/news/photo4.jpg",
  "/news/photo3.jpeg",
  "/news/photo5.jpeg",
];

function News() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 960 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 960, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" my-20">
      <div className="">
        <motion.p
          className="text-xl lg:text-3xl font-bold text-center text-yellow-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          हमारी खबरें
        </motion.p>
      </div>
      <div className="min-[400px]:mx-12 shadow-lg rounded-lg">
        <Carousel
          responsive={responsive}
          pauseOnHover={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          dotListClass="custom-dot-list-style"
          showDots={true}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
          infinite={true}
        >
          {photos.map((photo, index) => (
            <div key={index} className="flex justify-center">
              <div className="min-[400px]:p-2">
                <img
                  className="w-[80vw] md:w-[45vw] lg:w-[30vw] h-80 object-stretch rounded-lg"
                  src={`${photo}`}
                  alt={`news clip ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default News;
