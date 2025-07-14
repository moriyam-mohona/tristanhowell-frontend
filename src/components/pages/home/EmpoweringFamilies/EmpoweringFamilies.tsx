import { Container } from "@/components/ui-library/container";
import Link from "next/link";
import React from "react";

const EmpoweringFamilies = () => {
  return (
    <Container>
      <div className="space-y-4 flex flex-col items-center">
        <h2 className="text-secondary text-3xl md:text-4xl xl:text-[60px] !font-bold max-w-3xl text-center">
          Empowering Families with Safety Skills
        </h2>
        <p className="text-black-secondary text-sm lg:text-base xl:text-xl text-center max-w-[860px]">
          Join a trusted platform where families can access expert-led safety
          courses and essential educational tools. Free and premium options
          available.
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <Link
          href="/auth/signup"
          className="bg-primary px-8 py-3 rounded-xl text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-primary/90 shadow-md"
        >
          Sign Up
        </Link>
        <Link
          href="/auth/login"
          className="bg-primary px-8 py-3 rounded-xl text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-primary/90 shadow-md"
        >
          Login
        </Link>
      </div>
    </Container>
  );
};

export default EmpoweringFamilies;
