import React from "react";

const CourseDetailHeader = () => {
  return (
    <div>
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
        </div>
      </div>
    </div>
  );
};

export default CourseDetailHeader;
