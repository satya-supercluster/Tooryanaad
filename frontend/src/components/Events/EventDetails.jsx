import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { useData } from "../../Data/useData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

function EventDetails({ index }) {
  const { eventsDataOf2023 } = useData();
  const [rules, setRules] = useState([]);
  const [firstRoundRules, setFirstRoundRules] = useState([]);
  const [secondRoundRules, setSecondRoundRules] = useState(null);
  const [thirdRoundRules, setThirdRoundRules] = useState(null);

  useEffect(() => {
    if (eventsDataOf2023 && eventsDataOf2023[index]) {
      const member = eventsDataOf2023[index];
      const processedRules =
        Array.isArray(member.rules) && member.rules.length > 0
          ? member.rules
          : typeof member.rules === "string"
          ? member.rules.split("@@")
          : [];

      setRules(processedRules);
      setFirstRoundRules(
        processedRules.length > 0 ? processedRules[0].split("**") : []
      );
      setSecondRoundRules(
        processedRules.length > 1 ? processedRules[1].split("**") : null
      );
      setThirdRoundRules(
        processedRules.length > 2 ? processedRules[2].split("**") : null
      );
    }
  }, [eventsDataOf2023, index]);

  if (!eventsDataOf2023 || !eventsDataOf2023[index]) {
    return <Loader />;
  }

  const member = eventsDataOf2023[index];

  return (
    <div className="bg-[rgb(29,32,38)] text-white text-center mt-24 px-5">
      <div className="font-bold text-yellow-500 text-xl sm:text-3xl mb-10">
        {member.title}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto p-4 text-center"
      >
        <img
          src={`/events/${member.alias}.jpg`}
          alt={member.title}
          className="w-[70%] max-[400px]:w-[95%] max-w-[350px] mx-auto rounded-lg border-4 border-yellow-400"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="my-8"
        >
          {member.tagline && (
            <div className="flex w-full justify-center items-center">
              <blockquote
                className="text-lg font-bold text-center bg-yellow-500 text-black p-4 rounded-xl mb-4"
                dangerouslySetInnerHTML={{ __html: member.tagline }}
              ></blockquote>
            </div>
          )}
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: member.description }}
          ></div>
          <div
            className="text-center mt-4"
            dangerouslySetInnerHTML={{ __html: member.other }}
          ></div>
        </motion.div>

        <div className="flex flex-wrap justify-around my-8">
          <EventCard
            title="दिनांक और समय"
            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
            content={member.timeline}
          />
          <EventCard
            title="समन्वयक"
            icon={<FontAwesomeIcon icon={faPhone} />}
            content={member.coordinators}
          />
          <EventCard
            title="कुल पुरस्कार राशि"
            icon={<FontAwesomeIcon icon={faTrophy} />}
            content={member.prize}
          />
        </div>

        {/* {rules.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg border-t-4 border-b-4 border-yellow-400"
          >
            <RulesTabs
              firstRoundRules={firstRoundRules}
              secondRoundRules={secondRoundRules}
              thirdRoundRules={thirdRoundRules}
            />
          </motion.div>
        )} */}
      </div>
    </div>
  );
}

function EventCard({ title, icon, content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
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

// function RulesTabs({ firstRoundRules, secondRoundRules, thirdRoundRules }) {
//   const [activeTab, setActiveTab] = useState("first");

//   const renderRules = (rules) => {
//     return rules.map((rule, index) => (
//       <li key={index} className="list-disc ml-6 mb-2">
//         {rule}
//       </li>
//     ));
//   };

//   return (
//     <div>
//       <div className="flex mb-4 border-l-4 border-yellow-400">
//         {firstRoundRules.length > 0 && (
//           <TabButton
//             title="प्रथम चरण"
//             isActive={activeTab === "first"}
//             onClick={() => setActiveTab("first")}
//           />
//         )}
//         {secondRoundRules && (
//           <TabButton
//             title="द्वितीय चरण"
//             isActive={activeTab === "second"}
//             onClick={() => setActiveTab("second")}
//           />
//         )}
//         {thirdRoundRules && (
//           <TabButton
//             title="तृतीय चरण"
//             isActive={activeTab === "third"}
//             onClick={() => setActiveTab("third")}
//           />
//         )}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//         className="text-white"
//       >
//         {activeTab === "first" && renderRules(firstRoundRules)}
//         {activeTab === "second" &&
//           secondRoundRules &&
//           renderRules(secondRoundRules)}
//         {activeTab === "third" &&
//           thirdRoundRules &&
//           renderRules(thirdRoundRules)}
//       </motion.div>
//     </div>
//   );
// }

// function TabButton({ title, isActive, onClick }) {
//   return (
//     <button
//       className={`px-4 py-2 ${
//         isActive ? "text-yellow-400 border-b-2 border-yellow-400" : "text-white"
//       }`}
//       onClick={onClick}
//     >
//       {title}
//     </button>
//   );
// }
