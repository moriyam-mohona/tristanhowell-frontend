import { Container } from "@/components/ui-library/container";
import React from "react";
import Details from "./Details";
import Cards from "./Cards";

const NewsDetails = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12 lg:my-24">
      <div className="lg:col-span-8">
        <Details />
      </div>
      <div className="lg:col-span-4">
        <Cards />
      </div>
    </Container>
  );
};

export default NewsDetails;
