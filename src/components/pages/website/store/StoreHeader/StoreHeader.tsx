"use client";

import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import { useState } from "react";
import { Select, Button } from "antd";
import { IoSearchOutline } from "react-icons/io5";

const StoreHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>(
    undefined
  );
  const [selectedCourseType, setSelectedCourseType] = useState<
    string | undefined
  >(undefined);
  const [selectedMentor, setSelectedMentor] = useState<string | undefined>(
    undefined
  );

  // Category options
  const categoryOptions = [
    { value: "fire-safety", label: "Fire Safety" },
    { value: "emergency-response", label: "Emergency Response" },
    { value: "stranger-awareness", label: "Stranger Awareness" },
    { value: "home-safety", label: "Home Safety" },
    { value: "emotional-safety", label: "Emotional Safety" },
    { value: "learning-basics", label: "Learning Basics" },
    { value: "creative-thinking", label: "Creative Thinking" },
  ];
  const priceOptions = [
    { value: "fire-safety", label: "Under $5" },
    { value: "emergency-response", label: "$5 – $10" },
    { value: "stranger-awareness", label: "$10+" },
  ];

  // Price range options renamed to course types with values as keys
  const courseTypes = [
    { value: "free-course", label: "Free Course" },
    { value: "paid-course", label: "Paid Course" },
    { value: "live-session", label: "Live Session" },
    { value: "recorded", label: "Recorded" },
  ];

  // Mentors with meaningful unique ids as values
  const mentors = [
    { value: "ayesh-khan", label: "Ayesh Khan" },
    { value: "sofia-allen", label: "Sofia Allen" },
    { value: "john-mathews", label: "John Mathews" },
    { value: "sarah-dean", label: "Sarah Dean" },
    { value: "olivia-carter", label: "Olivia Carter" },
  ];

  const handleSearch = () => {
    const searchData = {
      category: selectedCategory,
      priceRange: selectedCourseType,
      timestamp: new Date().toISOString(),
    };

    console.log("Search Data:", searchData);
    console.log("Category:", selectedCategory || "Not specified");
    console.log("Price Range:", selectedCourseType || "Not specified");
  };

  return (
    <div>
      <SectionHeader
        title="Explore Safety & Learning eBooks for Smart Kids"
        subtitle="Fun, illustrated eBooks to help kids learn safety, life skills, and smart habits. Instant digital downloads for students, parents, and teachers."
      />
      <div className="w-full max-w-4xl mx-auto mt-8 bg-white px-2 py-2 rounded-2xl  border-gray border-2  ">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {/* Category Dropdown */}
          <div className="w-full md:w-48">
            <Select
              placeholder="Category's"
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={categoryOptions}
              size="large"
              className="w-full rounded-xl"
            />
          </div>

          {/* Price Range Dropdown */}
          <div className="w-full md:w-48">
            <Select
              placeholder="Price"
              value={selectedPrice}
              onChange={setSelectedPrice}
              options={priceOptions}
              size="large"
              className="w-full rounded-xl"
            />
          </div>

          {/* Course Type Dropdown */}
          <div className="w-full md:w-48">
            <Select
              placeholder="Course Type"
              value={selectedCourseType}
              onChange={setSelectedCourseType}
              options={courseTypes}
              size="large"
              className="w-full rounded-xl"
            />
          </div>
          <div className="w-full md:w-48">
            <Select
              placeholder="Mentor's"
              value={selectedMentor}
              onChange={setSelectedMentor}
              options={mentors}
              size="large"
              className="w-full rounded-xl !border-none"
            />
          </div>

          {/* Search Button */}
          <Button
            type="primary"
            icon={<IoSearchOutline />}
            onClick={handleSearch}
            size="large"
            className="w-full md:w-auto h-12 px-2 !bg-primary hover:!bg-primary/80 !border-primary hover:!border-primary/80 !rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            style={{
              minWidth: "48px",
              height: "48px",
            }}
          >
            Find Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreHeader;
