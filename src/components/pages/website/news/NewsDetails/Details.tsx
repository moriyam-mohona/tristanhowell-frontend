import React from "react";
import img from "@/assets/dynamicImages/news-two.png";
import Image from "next/image";
import { LuCalendarArrowUp } from "react-icons/lu";

const Details = () => {
  return (
    <div className="">
      <Image
        src={img}
        alt="news banner"
        width={1000}
        height={1000}
        className="w-full rounded-3xl h-[250px] md:h-[400px] xl:h-[600px] object-cover"
      />
      <p className="text-black-secondary flex items-center gap-2 mt-4">
        <LuCalendarArrowUp />
        May 15, 2025
      </p>
      <h1 className="text-secondary text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mt-8 mb-6 lg:mb-10">
        Best Educational Tools for Creative Learning at Home
      </h1>
      <p className="text-black-secondary mb-10 text-sm lg:text-base">
        Discover store picks that improve focus, creativity, and fun —
        handpicked by our mentors. Lorem ipsum is placeholder text, commonly
        used in design and publishing for previewing layouts. It helps visualize
        content placement without focusing on the actual text. Originating from
        classical literature, it&apos;s generated for text layers and other
        design elements. Various online tools provide random Lorem Ipsum
        generation, simplifying the design process. Discover store picks that
        improve focus, creativity, and fun — handpicked by our mentors. Lorem
        ipsum is placeholder text, commonly used in design and publishing for
        previewing layouts. It helps visualize content placement without
        focusing on the actual text. Originating from classical literature,
        it&apos;s generated for text layers and other design elements. Various
        online tools provide random Lorem Ipsum generation, simplifying the
        design process.
      </p>
      <p className="text-black-secondary text-sm lg:text-base">
        Discover store picks that improve focus, creativity, and fun —
        handpicked by our mentors. Lorem ipsum is placeholder text, commonly
        used in design and publishing for previewing layouts. It helps visualize
        content placement without focusing on the actual text. Originating from
        classical literature, it&apos;s generated for text layers and other
        design elements. Various online tools provide random Lorem Ipsum
        generation, simplifying the design process. Discover store picks that
        improve focus, creativity, and fun — handpicked by our mentors. Lorem
        ipsum is placeholder text, commonly used in design and publishing for
        previewing layouts. It helps visualize content placement without
        focusing on the actual text. Originating from classical literature,
        it&apos;s generated for text layers and other design elements. Various
        online tools provide random Lorem Ipsum generation, simplifying the
        design process.
      </p>
    </div>
  );
};

export default Details;
