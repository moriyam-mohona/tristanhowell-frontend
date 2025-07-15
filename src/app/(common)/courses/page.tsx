import CoursesCards from "@/components/pages/website/courses/CoursesCards/CoursesCards";
import CoursesHeader from "@/components/pages/website/courses/CoursesHeader/CoursesHeader";
import { Container } from "@/components/ui-library/container";
import React from "react";

const CoursesPage = () => {
  return (
    <Container className="my-12 md:my-24 space-y-10 md:space-y-20">
      <CoursesHeader />
      <CoursesCards />
    </Container>
  );
};

export default CoursesPage;
