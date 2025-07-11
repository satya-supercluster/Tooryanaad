import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import "./about.css";
import Counter from "./Counter";

const LazyImage = lazy(() => import("../LazyLoader/Lazy"));

const About = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const images = [
    { src: "/about/1.jpeg", className: "number1img" },
    { src: "/about/2.jpeg", className: "number2img" },
    { src: "/about/3.jpg", className: "number3img" },
    { src: "/about/4.jpg", className: "number5img" },
    { src: "/about/5.jpg", className: "number7img" },
    { src: "/about/6.jpg", className: "number6img" },
  ];

  return (
    <div
      className="py-10 flex flex-col max-sm:flex-col-reverse gap-5 justify-center items-center"
      style={backgroundStyle}
    >
      <div className="">
        <Counter></Counter>
      </div>
      <div className="responsive-container-block Container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="responsive-container-block rightSide"
        >
          {images.map((image, index) => (
            <Suspense
              key={index}
              fallback={
                <div className={`${image.className} bg-gray-200`}></div>
              }
            >
              <LazyImage
                src={image.src}
                alt={`About image ${index + 1}`}
                className={image.className}
              />
            </Suspense>
          ))}
          <iframe
            allowFullScreen="allowfullscreen"
            className="number4vid"
            poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
            src="https://www.youtube.com/embed/KOSjwo4c67U?&rel=0&fs=0&cc-load_policy=0&iv_load_policy=3"
          ></iframe>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="responsive-container-block leftSide"
        >
          <p className="text-blk heading">तूर्यनाद</p>
          <p className="text-md min-[400px]:text-lg max-sm:p-7 max-sm:text-justify md:text-xl text-white ">
            तूर्यनाद भारत का सबसे बड़ा अन्तर-महाविद्यालयीन हिन्दी महोत्सव है,
            जिसका आयोजन प्रतिवर्ष मौलाना आज़ाद राष्ट्रीय प्रौद्योगिकी संस्थान की
            तूर्यनाद समिति द्वारा किया जाता है। इसके अन्तर्गत महाविद्यालयीन
            विद्यार्थियों हेतु अनेक राष्ट्रीय स्तर की प्रतियोगिताएँ, सांस्कृतिक
            कार्यक्रम, तकनीकी कार्यशालाएँ, अतिथि परिचर्चा, कवि सम्मेलन आदि
            कार्यक्रम आयोजित किए जाते हैं। कार्यक्रम भारतीय भाषाओं के तकनीकी
            समन्वय व संवर्धन की ओर भी कार्यरत है एवं राजभाषा हिन्दी का औपचारिकता
            से परे जीवन में सम्मान के साथ उपयोग व प्रचार-प्रसार करने का द्योतक
            है। समिति, राजभाषा हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा
            देशवासियों में राष्ट्रगौरव एवं आत्मगौरव के भाव को जागृत करने के
            ध्येय से विगत 9 वर्षों से कार्यरत है।
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
