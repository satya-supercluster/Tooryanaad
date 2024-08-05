import React, { useState } from "react";
import EventCard from "./EventCard";
import { useData } from "../../Data/useData";
const Event = () => {
  const { eventCardValue } = useData();
  const eventsList = [
    "कवि सम्मेलन",
    "अभिव्यक्ति गायन",
    "चक्रव्यूह",
    "सृजन",
    "डिजिटल सृजन",
    "अभिव्यक्ति मंच",
    "अभिव्यक्ति नृत्य",
    "परिधानिका",
    "भाषा संगमम्",
    "छात्र संसद",
    "खिचड़ी",
    "लेखन",
    "नुक्कड़ नाटक",
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 mt-24 mb-5 ">
        <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
          प्रतियोगिता पृष्ठ
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {eventsList.map((event, index) => (
            <EventCard event={eventCardValue[event]} title={event} key={index}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
