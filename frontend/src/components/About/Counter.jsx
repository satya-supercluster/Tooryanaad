import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Counter = () => {
  const counters = [
    { label: "इंस्टाग्राम", value: 3500 },
    { label: "फेसबुक", value: 20000 },
    { label: "हिटर", value: 800 },
    { label: "यूट्यूब", value: 3500 },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <div className="flex max-sm:flex-col justify-center gap-5 lg:gap-10 text-white px-10 rounded-lg py-5 border border-white items-center  bg-gray-700 bg-opacity-40">
      {counters.map((counter, index) => (
        <div key={index}>
          <motion.div
            initial={{ value: 0 }}
            whileInView={{ value: counter.value }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
              value: useTransform(scrollYProgress, [0, 1], [0, counter.value]),
            }}
            className="text-3xl font-bold"
          >
            {`${counter.value}+`}
          </motion.div>
          <div className="text-center">{counter.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
