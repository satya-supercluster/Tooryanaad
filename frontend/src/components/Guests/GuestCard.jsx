import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("../LazyLoader/Lazy"));

const GuestCard = ({ member }) => {
  const initialX = Math.random() < 0.5 ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-1 pt-5 pb-3 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_60px_15px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05]"
    >
      <Suspense
        fallback={
          <div className="w-[70%] aspect-square bg-gray-200 rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl"></div>
        }
      >
        <LazyImage
          src={`/guest/${member.YEAR}/${member.UNAME}.jpg`}
          alt={member.UNAME}
          className="w-[70%] aspect-square object-cover rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl border-[3px] border-yellow-500 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
        />
      </Suspense>
      <div className="w-full text-white p-1 text-center">
        <p className="text-lg font-semibold text-white">{member.NAME}</p>
        <p className="text-sm text-white">{member.POST}</p>
      </div>
    </motion.div>
  );
};

export default GuestCard;
