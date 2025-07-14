import React from "react";
import ConnectInfo from "./ConnectInfo";
import ContactForm from "./ContactForm";
import { Container } from "@/components/ui-library/container";

const Connect = () => {
  return (
    <Container className="space-y-10 md:space-y-24 my-12 md:my-24">
      <ConnectInfo />
      <ContactForm />
    </Container>
  );
};

export default Connect;
