import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const IconBarSm = () => {
  return (
    <div className="sm:hidden w-full p-10">
      <div className="text-center font-semibold text-yellow-500 pb-2">
        सोशल मीडिया
      </div>
      <div className="flex gap-2 justify-center ">
        <a
          onClick={(e) => {
            e.preventDefault();
            console.log("clicked");
            window.open("https://www.facebook.com/651896654877454", "_blank");
          }}
          href="https://www.facebook.com/651896654877454"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="px-3 py-3 text-lg bg-white text-black rounded-lg"
          />
        </a>
        <a
          href="https://twitter.com/tooryanaad_nitb?t=W8w1LQTbJ5UI_iC-UwUYzw&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="px-3 py-3 text-lg bg-white text-black rounded-lg"
          />
        </a>
        <a
          href="https://instagram.com/tooryanaad?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="px-3 py-3 text-lg bg-white text-black rounded-lg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tooryanaad-nit-bhopal-66ab49151"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="px-3 py-3 text-lg bg-white text-black rounded-lg"
          />
        </a>
        <a
          href="https://youtube.com/@TooryanaadNITBHOPAL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className="px-3 py-3 text-lg bg-white text-black rounded-lg"
          />
        </a>
      </div>
    </div>
  );
};

export default IconBarSm;
