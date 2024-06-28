import React, { useEffect, useState } from "react";

const logos = [
  "/sponsor/logo1.png",
  "/sponsor/logo2.jpeg",
  "/sponsor/logo3.png",
  "/sponsor/logo4.png",
  "/sponsor/logo5.png",
  "/sponsor/logo2_t23.png",
  "/sponsor/logo3_t23.png",
  "/sponsor/logo4_t23.png",
  // Add all your logos here
];

const Sponsor = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const animationDuration = 50000; // 100 seconds for a slower speed
    const totalWidth = 250 * logos.length * 2; // Double the total width for infinite loop

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - 0.5; // Adjust speed here
        return newPosition <= -totalWidth / 2 ? 0 : newPosition;
      });
    };

    const intervalId = setInterval(animate, 10); // Adjust interval for smoothness

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-4xl font-light text-center text-yellow-600 mb-10">
        हमारे प्रायोजक
      </h1>
      <div className="relative w-[90%] rounded-xl max-w-[960px] h-28 mx-auto overflow-hidden bg-white shadow-lg">
        <div
          className="absolute top-0 left-0 flex"
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[250px] h-28 px-6 py-4">
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="w-[250px] h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Sponsor;
