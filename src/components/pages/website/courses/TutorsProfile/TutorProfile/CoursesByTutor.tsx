import CoursesCard from "@/components/shared/Cards/CoursesCard";
import { SectionHeaderTwo } from "@/components/shared/SectionHeader/SectionHeader";
import { Container } from "@/components/ui-library/container";
import { courseData } from "@/utils/dummyData/courseData";
import Link from "next/link";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CoursesByTutor = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <Container className="py-10 lg:py-20 space-y-6">
        <div className="flex items-center justify-between">
          <SectionHeaderTwo title="Courses By Ayesh Khan" />
          <Link
            href="/courses"
            className="flex items-center gap-2 text-lg text-black-secondary hover:font-semibold cursor-pointer hover:underline"
          >
            <span className="hidden md:block">Browse all Courses</span>{" "}
            <FaArrowUpRightFromSquare className="text-black-secondary text-sm" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-6">
          {courseData.map((courses) => (
            <CoursesCard key={courses?.id} {...courses} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CoursesByTutor;
