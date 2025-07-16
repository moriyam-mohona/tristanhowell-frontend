import { SectionHeaderTwo } from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const CourseDetailDescriptions = () => {
  return (
    <div className="mt-10 space-y-20">
      <div>
        <SectionHeaderTwo title="Course Description:" />
        <p className="mt-6 lg:text-lg text-black-secondary">
          In a world full of unexpected situations, every child deserves to feel
          confident and capable.
          <br /> This course is designed to teach children how to recognize and
          respond to emergencies in a calm and informed way. <br />
          Through interactive modules, real-world examples, and practical
          activities, students will learn the basics of fire safety, dealing
          with strangers, medical emergencies, and more. The content is
          age-appropriate, visually engaging, and designed to build both
          knowledge and confidence. <br />
          Whether it&apos;s learning how to call emergency services or how to
          stay calm in a crisis, this course equips children with essential life
          skills in a fun and approachable format. By the end of this course,
          learners will:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 lg:text-lg text-black-secondary ml-5">
          <li>Understand what qualifies as an emergency</li>
          <li>Know how to respond effectively and safely</li>
          <li>Gain confidence to act wisely when it matters most</li>
        </ul>
      </div>
      <div>
        <SectionHeaderTwo title="What You’ll Learn!" />
        <ul className="list-disc list-inside mt-4 space-y-2 lg:text-lg text-black-secondary ml-5">
          <li>Recognize different types of emergencies</li>
          <li>React with calm and confidence</li>
          <li>Understand fire, stranger, and medical safety</li>
          <li>Practice response skills through simple activities</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailDescriptions;
