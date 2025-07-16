import Link from "next/link";
import React from "react";

const InstructorInfo = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-2xl">Instructor Info:</h2>
        <Link
          href="/"
          className="flex items-center gap-2 text-black-secondary lg:text-lg font-semibold cursor-pointer hover:underline"
        >
          <span className="hidden md:block">Courses by this tutor</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 3H21V9"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 14L21 3"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>{" "}
      <div className="flex flex-col md:flex-row md:items-center justify-start gap-2 xl:gap-6 lg:text-lg mb-2">
        <p className="font-semibold w-[200px]">Instructor name</p>
        <p className="text-black-secondary">Mr. Ayesh Khan</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-start gap-2 xl:gap-6 lg:text-lg ">
        <p className="font-semibold w-[200px]">Short Description</p>
        <p className="text-black-secondary">
          8+ years experience in youth education and child safety
        </p>
      </div>
    </div>
  );
};

export default InstructorInfo;
