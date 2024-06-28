import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const counters = [
    { label: "इंस्टाग्राम", value: 3900 },
    { label: "फेसबुक", value: 20000 },
    { label: "यूट्यूब", value: 3500 },
    { label: "ट्विटर", value: 800 },
  ];

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 my-5 justify-center gap-x-10 gap-y-10 lg:gap-10 text-white px-10 rounded-lg py-5 border border-yellow-500 shadow-md shadow-yellow-300 items-center bg-gray-700 bg-opacity-50"
    >
      {counters.map((counter, index) => (
        <div key={index} >
          <div className="text-2xl max-[500px]:text-md text-yellow-500 text-center">
            {inView ? (
              <CountUp start={0} end={counter.value} duration={2} />
            ) : (
              0
            )}
            +
          </div>
          <div className="text-center text-xl max-[500px]:text-sm font-bold ">
            {counter.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
