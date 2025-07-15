import CoursesCards from "@/components/pages/website/courses/CoursesCards/CoursesCards";
import CoursesHeader from "@/components/pages/website/courses/CoursesHeader/CoursesHeader";
import { Container } from "@/components/ui-library/container";
import React from "react";

const CoursesPage = () => {
  return (
    <div className="bg-gray/20 ">
      <Container className="py-12 md:py-24 space-y-10 md:space-y-32">
        <CoursesHeader />
        <CoursesCards />
      </Container>
    </div>
  );
};

export default CoursesPage;
