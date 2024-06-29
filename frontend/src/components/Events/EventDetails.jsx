import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useData } from "../../Data/useData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

function EventDetails({ title }) {
  const { events } = useData();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (events && events.length > 0) {
      const foundEvent = events.find((e) => e.alias == title);
      setEvent(foundEvent);
    }
  });
  if (!event) {
    return (
      <div className="bg-[rgb(29,32,38)] text-white text-center mt-28 px-5 min-h-screen">
        Event not found
      </div>
    );
  }
  return (
    <div className="bg-[rgb(29,32,38)] text-white text-center mt-28 px-5">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
        className="font-bold text-yellow-500 text-xl sm:text-3xl mb-10"
      >
        {event.title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto p-4 text-center"
      >
        <img
          src={`/events/${event.alias}.jpg`}
          alt={event.title}
          className="w-[70%] aspect-auto max-[400px]:w-[95%] max-w-[350px] mx-auto rounded-lg border-4 border-yellow-400"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="my-8"
        >
          {event.tagline && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="flex w-full justify-center items-center"
            >
              <blockquote
                className="text-lg font-bold text-center bg-yellow-500 text-black p-4 rounded-xl mb-4"
                dangerouslySetInnerHTML={{ __html: event.tagline }}
              ></blockquote>
            </motion.div>
          )}
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: event.description }}
          ></div>
          <div
            className="text-center mt-4"
            dangerouslySetInnerHTML={{ __html: event.other }}
          ></div>
        </motion.div>

        <div className="flex flex-wrap justify-around my-8">
          <EventCard
            title="दिनांक और समय"
            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
            content={event.timeline}
          />
          <EventCard
            title="समन्वयक"
            icon={<FontAwesomeIcon icon={faPhone} />}
            content={event.coordinators}
          />
          <EventCard
            title="कुल पुरस्कार राशि"
            icon={<FontAwesomeIcon icon={faTrophy} />}
            content={event.prize}
          />
        </div>
      </div>
    </div>
  );
}

function EventCard({ title, icon, content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="bg-gray-800 rounded-lg p-6 m-2 w-64 h-64 flex flex-col shadow-lg items-center justify-center text-center"
    >
      <h3 className="text-cyan-300 text-md mb-2">{title}</h3>
      <span className="material-icons text-yellow-400 text-4xl mb-2">
        {icon}
      </span>
      <div
        className="text-yellow-200 text-sm"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </motion.div>
  );
}

export default EventDetails;
