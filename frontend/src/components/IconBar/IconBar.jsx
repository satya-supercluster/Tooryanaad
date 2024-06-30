import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const IconBar = () => {
    return (
      <div className="max-sm:hidden fixed top-1/2 -translate-y-1/2 z-10 bg-[rgba(30,30,30)] shadow-[0_1px_5px_3px_rgba(0,0,0,0.6)] py-5 rounded-r-3xl">
        <div className="grid grid-cols-1 gap-1 w-10">
          <a
            href="https://www.facebook.com/651896654877454"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-full  py-1 text-blue-500 hover:text-blue-600 bg-[rgba(30,30,30)] "
            />
          </a>
          <a
            href="https://instagram.com/tooryanaad?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-full  py-1 text-pink-500 hover:text-pink-600 bg-[rgba(30,30,30)] "
            />
          </a>
          <a
            href="https://twitter.com/tooryanaad_nitb?t=W8w1LQTbJ5UI_iC-UwUYzw&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-full  py-1 text-blue-500 hover:text-blue-600 bg-[rgba(30,30,30)] "
            />
          </a>
          <a
            href="https://youtube.com/@TooryanaadNITBHOPAL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-full  py-1 text-red-500 hover:text-red-600 bg-[rgba(30,30,30)] "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tooryanaad-nit-bhopal-66ab49151"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-full  py-1 text-blue-500 hover:text-blue-600 bg-[rgba(30,30,30)] "
            />
          </a>
        </div>
      </div>
    );
};

export default IconBar;
