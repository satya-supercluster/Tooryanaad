import React, { useEffect } from "react";
import "./about.css";
import Counter from "./Counter";
const About = () => {
  const backgroundStyle = {
    backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url('/bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }; 
  return (
    <div
      className="py-10 flex flex-col gap-5 justify-center items-center"
      style={backgroundStyle}
    >
      <div className="">
        <Counter></Counter>
      </div>
      <div className="responsive-container-block Container">
        <div
          className="responsive-container-block rightSide"
          //   data-aos="fade-right"
          //   data-aos-delay="300"
        >
          <img className="number1img" src="/about/1.jpeg" />
          <img className="number2img" src="/about/2.jpeg" />
          <img className="number3img" src="/about/3.jpg" />
          <img className="number5img" src="/about/4.jpg" />
          <iframe
            allowFullScreen="allowfullscreen"
            className="number4vid"
            poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
            src="https://www.youtube.com/embed/KOSjwo4c67U"
          ></iframe>
          <img className="number7img" src="/about/5.jpg" />
          <img className="number6img" src="/about/6.jpg" />
        </div>
        <div
          className="responsive-container-block leftSide"
          //   data-aos="fade-left"
          //   data-aos-delay="600"
        >
          <p className="text-blk heading">तूर्यनाद</p>
          <p className="text-md min-[400px]:text-lg max-sm:p-7 max-sm:text-center md:text-xl text-white ">
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
        </div>
      </div>
    </div>
  );
}
export default About;