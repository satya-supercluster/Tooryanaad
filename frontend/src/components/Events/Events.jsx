import React, { useState } from "react";
import EventCard from "./EventCard";
import { useData } from "../../Data/useData";
const Event = () => {
  const { eventsOf2023 } = useData();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1200px] flex flex-col items-center gap-5 mx-auto px-4 mt-24 mb-5 ">
        <div className="font-bold text-yellow-500 text-xl sm:text-3xl">
          प्रतियोगिता पृष्ठ
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {eventsOf2023.map((event, index) => (
            <EventCard event={event} key={index}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
