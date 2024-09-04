import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPhone,
  faTrophy,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useData } from "../../Data/useData";
const EventCard = ({ title, content, icon }) => (
  <div className="bg-gray-800 rounded-lg p-6 m-2 w-full md:w-64 flex flex-col shadow-lg items-center justify-center text-center">
    <FontAwesomeIcon icon={icon} className="text-3xl text-yellow-500 mb-2" />
    <h3 className="text-cyan-300 text-md mb-2 font-semibold">{title}</h3>
    <div className="text-yellow-200 text-sm">{content}</div>
  </div>
);

const NewEventDetails = ({ eventData, title }) => {
    const { eventCardValue } = useData();
  if (!eventData) {
    return (
      <div className="text-white text-center mt-28 px-5">Event not found</div>
    );
  }
  const {
    उद्देश्य,
    योग्यता,
    नियम,
    चरण,
    विवरण,
    पता,
    "महत्वपूर्ण तिथियाँ": importantDates,
    "कुल पुरस्कार राशि": prizeAmount,
    "संपर्क सूत्र": contactInfo,
    अणुडाक: email,
    "पंजीयन लिंक": registrationLink,
  } = eventData;

  return (
    <div className="bg-[rgb(29,32,38)] text-white text-center mt-28 px-5">
      <h1 className="font-bold text-yellow-500 text-xl sm:text-3xl mb-10">
        {title}
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto p-4 text-center"
      >
        <img
          src={`/events/${eventCardValue[title].alias}.jpg`}
          alt={title}
          className="sm:max-h-[30vh] max-sm:w-full aspect-square object-cover mx-auto rounded-lg border-4 border-yellow-400"
        />
      </motion.div>
      {eventData.tag && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex w-full justify-center items-center"
        >
          <blockquote
            className="text-lg font-bold text-center bg-yellow-500 text-black p-4 rounded-xl mb-4"
            dangerouslySetInnerHTML={{ __html: eventData.tag }}
          ></blockquote>
        </motion.div>
      )}
      <div className="container mx-auto px-4">
        <section className="my-8">
          <h2 className="text-lg font-bold mb-4 text-yellow-500 sm:text-left">
            उद्देश्य
          </h2>
          <p className="text-left">{उद्देश्य}</p>
        </section>

        <section className="my-8">
          <h2 className="text-lg font-bold mb-4 text-yellow-500 sm:text-left">
            योग्यता
          </h2>
          <p className="text-left">{योग्यता}</p>
        </section>

        {विवरण && (
          <section className="my-8">
            <h2 className="text-lg font-bold mb-4 text-yellow-500 sm:text-left">
              विवरण
            </h2>
            <p className="text-left">{विवरण}</p>
          </section>
        )}

        {पता && (
          <section className="my-8">
            <h2 className="text-lg font-bold mb-4 text-yellow-500 sm:text-left">
              पता
            </h2>
            <p className="text-left">{पता}</p>
          </section>
        )}

        {नियम && (
          <section className="my-8">
            <h2 className="text-lg font-bold mb-4 text-yellow-500 sm:text-left">
              नियम
            </h2>
            <ul className="list-disc list-inside">
              {नियम.map((rule, index) => (
                <li key={index} className="mb-2 text-left">
                  {rule}
                </li>
              ))}
            </ul>
          </section>
        )}

        {चरण && (
          <section className="my-8">
            <h2 className="text-lg font-bold mb-4 text-yellow-500 sm:text-left">
              चरण
            </h2>
            {Object.entries(चरण).map(([stage, description], index) => (
              <div key={index} className="text-left mb-4">
                <h3 className="font-semibold">{stage}</h3>
                <p>{description}</p>
              </div>
            ))}
          </section>
        )}

        <div className="flex flex-wrap justify-around my-8">
          <EventCard
            title="महत्वपूर्ण तिथियाँ"
            icon={faCalendarAlt}
            content={
              <ul>
                {Object.entries(importantDates).map(([key, value], index) => (
                  <li key={index}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            }
          />
          <EventCard
            title="कुल पुरस्कार राशि"
            icon={faTrophy}
            content={<span className="text-2xl font-bold">{prizeAmount}</span>}
          />
          <EventCard
            title="संपर्क सूत्र"
            icon={faPhone}
            content={
              <ul>
                {Object.entries(contactInfo).map(([name, number], index) => (
                  <li key={index}>
                    {name}: {number}
                  </li>
                ))}
              </ul>
            }
          />
        </div>

        <div className="flex max-sm:flex-col justify-center items-center space-x-4 my-8 font-semibold">
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-blue-400 hover:text-blue-300 max-sm:text-sm text-wrap"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              {email}
            </a>
          )}
          {registrationLink && (
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              <FontAwesomeIcon icon={faLink} className="mr-2" />
              पंजीयन लिंक
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEventDetails;
