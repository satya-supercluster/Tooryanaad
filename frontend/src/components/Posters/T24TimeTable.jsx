import React from "react";

const T24TimeTable = () => {
  return (
    <div className="min-h-screen">
      <div className="max-sm:mt-16">
        <div className="font-semibold text-yellow-500 pb-5 pt-8 text-xl text-center sm:text-3xl">
          तूर्यनाद'24 समय-सारणी
        </div>
        <div className="p-5 flex justify-center items-start">
          <div className="border-2 border-red-500 rounded-xl">
            <img
              src="/timetable24.jpg"
              alt="TimeTable24"
              className="rounded-xl max-sm:w-[100vw] p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default T24TimeTable;
