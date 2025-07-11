import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center bg-gray-800 text-white p-10">
      <div className="max-w-[1200px] w-full flex max-[900px]:flex-col flex-wrap justify-evenly items-center gap-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <img className="w-[200px]" src="/ty24.png" alt="ty24" />
          <div className="flex flex-wrap gap-2 text-sm xl:text-md">
            <NavLink className="border-r-2 border-white pr-2" to="/">
              मुख्य पृष्ठ
            </NavLink>
            <NavLink className="border-r-2 border-white pr-2" to="/guests">
              अतिथि
            </NavLink>
            <NavLink className="border-r-2 border-white pr-2" to="/team">
              सदस्य
            </NavLink>
            <NavLink to="/gallery">वीथिका</NavLink>
          </div>
          <p className="footer-company-name text-sm text-center text-yellow-500">
            Tooryanaad © 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-sm bg-gray-900 rounded-full p-2"
            />
            <p className="inline text-sm ml-4">
              <span>मौलाना आज़ाद राष्ट्रीय प्रौद्योगिकी संस्थान</span>
              <br />
              भोपाल, मध्य-प्रदेश
            </p>
          </div>

          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-sm bg-gray-900 rounded-full p-2"
            />
            <p className="inline text-sm ml-4">(+91) 9588271775</p>
          </div>

          <div className="mb-4 flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-sm bg-gray-900 rounded-full p-2"
            />
            <p className="inline text-sm ml-4">
              <a href="mailto:tooryanaad@gmail.com" className="text-yellow-500">
                tooryanaad@gmail.com
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <p className="footer-company-about flex w-full justify-center mb-4">
            <span className="text-center font-bold">तूर्यनाद समिति</span>
          </p>
          <div className="flex gap-2 justify-center">
            <a
              href="https://www.facebook.com/651896654877454"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="px-3 py-3 text-lg bg-white text-blue-500 hover:text-blue-600 rounded-lg"
              />
            </a>
            <a
              href="https://instagram.com/tooryanaad?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="px-3 py-3 text-lg bg-white text-pink-500 hover:text-pink-600 rounded-lg"
              />
            </a>
            <a
              href="https://twitter.com/tooryanaad_nitb?t=W8w1LQTbJ5UI_iC-UwUYzw&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="px-3 py-3 text-lg bg-white text-blue-500 hover:text-blue-600 rounded-lg"
              />
            </a>
            <a
              href="https://youtube.com/@TooryanaadNITBHOPAL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="px-3 py-3 text-lg bg-white text-red-500 hover:text-red-600 rounded-lg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tooryanaad-nit-bhopal-66ab49151"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="px-3 py-3 text-lg bg-white text-blue-500 hover:text-blue-600 rounded-lg"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
