import React from "react";

const CourseModuleList = () => {
  const modules = [
    "Introduction to Emergencies",
    "Fire Safety Basics",
    "Safe Exits and Escape Plans",
    "Stranger Danger",
    "Calling for Help",
    "Basic First Aid Awareness",
    "Dealing with Accidents",
    "Natural Disasters",
    "Emotional Response & Staying Calm",
    "Safety at Home & Outdoors",
    "Interactive Safety Scenarios",
    "Final Safety Challenge & Assessment",
  ];
  return (
    <div>
      <h2 className="font-bold text-2xl">Course Module List:</h2>
      <ul className="mt-4 space-y-2 lg:text-lg text-black-secondary ml-5">
        {modules.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.25 16.2979C8.47803 16.4296 8.7367 16.4989 9 16.4989C9.2633 16.4989 9.52197 16.4296 9.75 16.2979L15 13.2979C15.2278 13.1664 15.417 12.9773 15.5487 12.7495C15.6803 12.5218 15.7497 12.2635 15.75 12.0004V6.00042C15.7497 5.73737 15.6803 5.47902 15.5487 5.25129C15.417 5.02355 15.2278 4.83444 15 4.70292L9.75 1.70291C9.52197 1.57126 9.2633 1.50195 9 1.50195C8.7367 1.50195 8.47803 1.57126 8.25 1.70291L3 4.70292C2.7722 4.83444 2.58299 5.02355 2.45135 5.25129C2.31971 5.47902 2.25027 5.73737 2.25 6.00042V12.0004C2.25027 12.2635 2.31971 12.5218 2.45135 12.7495C2.58299 12.9773 2.7722 13.1664 3 13.2979L8.25 16.2979Z"
                stroke="#3AB3B6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 16.5V9"
                stroke="#3AB3B6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.46777 5.25L9.00027 9L15.5328 5.25"
                stroke="#3AB3B6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.625 3.20215L12.375 7.06465"
                stroke="#3AB3B6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseModuleList;
