import React from 'react'
import photo from "../../assets/background/main.png";
import tywlogo from "../../assets/img/logo/imgTyW.png";
const Home = () => {
  return (
    <div className="">
      <div
        className="pt-10 lg:pt-0 bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-center lg:rounded-lg h-screen"
        style={{
          "background-image": `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)),url(${photo})`,
        }}
      >
        <div className="px-5 sm:px-10">
          <div className="flex justify-center items-center">
            <img src={tywlogo} alt="" className=" w-[20rem] lg:m-2" />
          </div>
          <h1 className=" font-bold text-yellow-300 text-xl sm:text-3xl text-center mt-2">
            हिन्दी है हम
          </h1>
          <div className="flex justify-center items-center">
            <p className=" text-gray-300 py-5 text-lg sm:text-2xl font-semibold lg:w-[50rem] leading-10 text-center">
              <span className="text-yellow-300"> उद्देश्य -</span> राजभाषा
              हिन्दी व भारतीय संस्कृति के प्रचार-प्रसार द्वारा देशवक्षियों में
              राष्ट्रगौरव व आत्मगौरव की भवना का विकाश करना।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home