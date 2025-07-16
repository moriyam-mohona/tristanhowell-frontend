import { SectionHeaderTwo } from "@/components/shared/SectionHeader/SectionHeader";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const InstructorInfo = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <SectionHeaderTwo title="Instructor Info:" />
        <Link
          href={`/courses/2/1234`}
          className="flex items-center gap-2 text-black-secondary lg:text-lg font-medium cursor-pointer hover:underline"
        >
          <span className="hidden md:block">Courses by this tutor</span>
          <FaArrowUpRightFromSquare className="text-black-secondary text-base" />
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
