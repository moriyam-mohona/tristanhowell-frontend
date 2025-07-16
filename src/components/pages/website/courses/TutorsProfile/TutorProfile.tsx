import React from "react";
import TutorInfo from "./TutorProfile/TutorInfo";
import CoursesByTutor from "./TutorProfile/CoursesByTutor";

const TutorProfile = () => {
  return (
    <div className="space-y-10 md:space-y-24 mt-12 md:mt-24">
      <TutorInfo />
      <CoursesByTutor />
    </div>
  );
};

export default TutorProfile;
