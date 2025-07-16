import CoursesCard from "@/components/shared/Cards/CoursesCard";
import { courseData } from "@/utils/dummyData/courseData";
import React from "react";

const SuggestedCourses = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-2xl">Suggested Some Courses:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 lg:gap-10 xl:gap-6">
        {courseData.map((courses) => (
          <CoursesCard key={courses?.id} {...courses} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedCourses;
