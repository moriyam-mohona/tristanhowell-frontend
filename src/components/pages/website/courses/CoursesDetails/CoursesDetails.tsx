import { Container } from "@/components/ui-library/container";
import React from "react";
import SuggestedCourses from "./SuggestedCourses";
import CourseDetailHeader from "./CourseDetail/CourseDetailHeader";
import CourseDetailTitleAndInstructor from "./CourseDetail/CourseDetailTitleAndInstructor";
import CourseDetailDescriptions from "./CourseDetail/CourseDetailDescriptions";
import InstructorInfo from "./CourseDetail/InstructorInfo";
import Requirements from "./CourseDetail/Requirements";
import CourseModuleList from "./CourseDetail/CourseModuleList";

const CoursesDetails = () => {
  return (
    <Container className="grid grid-cols-1 xl:grid-cols-12 xl:gap-20 my-12 lg:my-24">
      <div className="lg:col-span-8 space-y-10 lg:space-y-20">
        <CourseDetailHeader />
        <CourseDetailTitleAndInstructor />
        <CourseDetailDescriptions />
        <CourseModuleList />
        <InstructorInfo />
        <Requirements />
      </div>
      <div className="lg:col-span-4 mt-20">
        <SuggestedCourses />
      </div>
    </Container>
  );
};

export default CoursesDetails;
