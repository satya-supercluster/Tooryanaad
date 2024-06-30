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
      <div className="max-sm:hidden fixed top-1/2 -translate-y-1/2 left-1 z-10">
        <div className="grid grid-cols-1 gap-1 w-10">
          <a href="https://www.facebook.com/651896654877454" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-full py-3 bg-black text-white rounded-lg"
            />
            {/* <i className="fa fa-facebook"></i> */}
          </a>
          <a
            href="https://twitter.com/tooryanaad_nitb?t=W8w1LQTbJ5UI_iC-UwUYzw&s=08"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-full py-3 bg-black text-white rounded-lg"
            />
            {/* <i className="fa fa-twitter"></i> */}
          </a>
          <a
            href="https://instagram.com/tooryanaad?igshid=YmMyMTA2M2Y="
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-full py-3 bg-black text-white rounded-lg"
            />
            {/* <i className="fa fa-instagram"></i> */}
          </a>
          <a
            href="https://www.linkedin.com/in/tooryanaad-nit-bhopal-66ab49151"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-full py-3 bg-black text-white rounded-lg"
            />
            {/* <i className="fa fa-linkedin"></i> */}
          </a>
          <a href="https://youtube.com/@TooryanaadNITBHOPAL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-full py-3 bg-black text-white rounded-lg"
            />
          </a>
        </div>
      </div>
    );
};

export default IconBar;
