import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useData } from "../../Data/useData";
const EventCard = ({ event }) => {
  const { eventDescriptions } = useData();
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const initialX = Math.random() < 0.5 ? -50 : 50;

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 50, x: initialX }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex flex-col gap-1 pt-5 pb-3 justify-center items-center overflow-hidden rounded-2xl shadow-[0_0px_5px_5px_rgba(0,0,0,0.3)] sm:hover:scale-[1.05] cursor-pointer"
        onClick={toggleDetails}
      >
        <img
          src={`/events/${event.alias}.jpg`}
          alt={event.alias}
          className="w-[70%] aspect-square object-cover rounded-b-lg rounded-t-3xl border-[3px] border-yellow-500 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]"
        />
        <div className="w-full text-white p-1 text-center">
          <p className="text-lg font-semibold text-white">{event.title}</p>
          <Link
            to={`/events/${event.alias}`}
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-yellow-500"
          >
            अधिक जाने
          </Link>
        </div>
      </motion.div>

      <AnimatePresence>
        {isDetailsVisible && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-[rgb(29,32,38)] text-white p-4 rounded-2xl overflow-y-auto"
            onClick={toggleDetails}
          >
            <h3 className="text-xl font-bold mb-1 text-yellow-500">उद्देश्य</h3>
            <p className="text-sm font-semibold">
              {eventDescriptions[event.alias]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventCard;
