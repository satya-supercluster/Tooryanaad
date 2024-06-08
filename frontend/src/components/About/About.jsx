import React from "react";
import Counter from "./Counter";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col gap-5 justify-center items-center">
      <Counter />
      {/* <div className=" min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex relative w-[350px] justify-center lg:flex-row-reverse items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
                तूर्यनाद
              </h1>
              <p className="text-lg text-white max-sm:text-center px-2">
                तूर्यनाद भारत का सबसे बड़ा अन्तर-महाविद्यालयीन हिन्दी महोत्सव
                है, जिसका आयोजन प्रतिवर्ष मौलाना आज़ाद राष्ट्रीय प्रौद्योगिकी
                संस्थान की राजभाषा कार्यान्वयन समिति द्वारा किया जाता है। इसके
                अन्तर्गत महाविद्यालयीन विद्यार्थियों हेतु अनेक राष्ट्रीय स्तर की
                प्रतियोगिताएँ, सांस्कृतिक कार्यक्रम, तकनीकी कार्यशालाएँ, अतिथि
                परिचर्चा, कवि सम्मेलन आदि कार्यक्रम आयोजित किए जाते हैं।
                कार्यक्रम भारतीय भाषाओं के तकनीकी समन्वय व संवर्धन की ओर भी
                कार्यरत है एवं राजभाषा हिन्दी का औपचारिकता से परे जीवन में
                सम्मान के साथ उपयोग व प्रचार-प्रसार करने का द्योतक है। समिति,
                राजभाषा हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा
                देशवासियों में राष्ट्रगौरव एवं आत्मगौरव के भाव को जागृत करने के
                ध्येय से विगत 9 वर्षों से कार्यरत है।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:w-1/2 mt-10 lg:mt-0"
            >
              <img
                src="/about/1.jpeg"
                alt="Tooryanaad 1"
                className="w-48 absolute overflow-hidden  h-48 max-sm:hidden object-cover mt-[20%] ml-[5%] z-10 rounded-lg shadow-md"
              />
              <img
                src="/about/2.jpeg"
                alt="Tooryanaad 2"
                className="w-48 absolute mt-[10%] z-5 overflow-hidden h-48  max-sm:hidden object-cover rounded-lg shadow-md"
              />
              <img
                src="/about/3.jpg"
                alt="Tooryanaad 3"
                className="w-48 absolute mt-[20%] z-10 ml-[20%] overflow-hidden h-48 max-sm:hidden object-cover rounded-lg shadow-md"
              />
              <iframe
                src="https://www.youtube.com/embed/KOSjwo4c67U"
                title="Tooryanaad Video"
                allowFullScreen
                className="w-52 absolute h-48 ml-[25%] mt-[10%] z-10 max-sm:w-[75vw] max-sm:-translate-x-1/2 max-sum:h-[75vw] rounded-lg shadow-md "
              ></iframe>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className=""
          >
            <img
              src="/about/4.jpg"
              alt="Tooryanaad 4"
              className="w-48 absolute h-48 overflow-hidden ml-[8%] mt-[-10%] max-sm:hidden object-cover rounded-lg shadow-md"
            />
            <img
              src="/about/5.jpg"
              alt="Tooryanaad 5"
              className="w-48 absolute h-48 overflow-hidden ml-[12%] mt-[2%] max-sm:hidden object-cover rounded-lg shadow-md"
            />
            <img
              src="/about/6.jpg"
              alt="Tooryanaad 5"
              className="w-48 absolute h-48 overflow-hidden ml-[20%] mt-[-10%] max-sm:hidden object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-screen"></div> */}
    </div>
  );
};

export default About;
