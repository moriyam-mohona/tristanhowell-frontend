import React from "react";
import Image from "next/image";
import sponsors from "@/assets/home/sponsors.png";

const Sponsors = () => {
  return (
    <div
      className="relative w-full bg-gradient-to-t from-primary to-white mt-12 md:mt-24"
      style={{ aspectRatio: "3/1" }}
    >
      {" "}
      {/* Adjust ratio (e.g., 16/9, 4/3) to match your image */}
      <Image
        src={sponsors}
        alt="Sponsors"
        fill
        className="object-contain"
        priority
        sizes="100vw"
      />
    </div>
  );
};

export default Sponsors;
