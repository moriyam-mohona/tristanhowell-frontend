"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Container } from "@/components/ui-library/container";

const Banner = () => {
  return (
    <Container>
      {" "}
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl md:rounded-4xl shadow-lg mb-12 my:mb-24 mt-2">
        {/* Aspect ratio container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9]">
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Logo */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
            <Image
              src={logo}
              alt="SafeSavvyKids Logo"
              width={100}
              height={100}
              className="h-auto w-10 sm:w-12 md:w-16"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
