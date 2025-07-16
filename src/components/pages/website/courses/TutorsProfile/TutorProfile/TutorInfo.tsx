import { Container } from "@/components/ui-library/container";
import Image from "next/image";
import React from "react";
import profileImage from "@/assets/images/Human.png";
import { SectionHeaderTwo } from "@/components/shared/SectionHeader/SectionHeader";
const TutorInfo = () => {
  const certificates = [
    "Child Protection & Emergency Response (CPER Certified)",
    "Pediatric First Aid (Red Cross Certified)",
  ];
  const experienceAreas = [
    "Fire Safety",
    "Emergency Response",
    "Emotional Development",
    "Stranger Awareness",
    "Child Communication Coaching",
  ];
  const hostLocation = [
    "Safety Course Creator",
    "Assignment Reviewer",
    "Kids Life Skills Coach",
    "Live Zoom Session Facilitator",
    "Personalized Feedback Provider",
  ];
  return (
    <Container className="space-y-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        <Image
          src={profileImage}
          alt="profile"
          width={800}
          height={800}
          className="bg-black-secondary/40 rounded-2xl w-32 h-32 object-cover"
        />
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-lg">Instructor: Ayesh Khan</h2>
          <div className="flex items-center gap-3">
            <h2 className="flex items-center gap-2 bg-primary/10 px-5 py-1 rounded-full text-primary text-sm md:text-base lg:text-lg font-medium w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 3.5H4C3.44772 3.5 3 3.94772 3 4.5V20.5C3 21.0523 3.44772 21.5 4 21.5H10C10.5523 21.5 11 21.0523 11 20.5V4.5C11 3.94772 10.5523 3.5 10 3.5Z"
                  stroke="#3AB3B6"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 3.5V21.5"
                  stroke="#3AB3B6"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.3998 19.3998C20.5998 19.8998 20.2998 20.4998 19.7998 20.6998L17.8998 21.3998C17.3998 21.5998 16.7998 21.2998 16.5998 20.7998L11.0998 5.59976C10.8998 5.09976 11.1998 4.49976 11.6998 4.29976L13.5998 3.59976C14.0998 3.39976 14.6998 3.69976 14.8998 4.19976L20.3998 19.3998Z"
                  stroke="#3AB3B6"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              25 Courses
            </h2>
            <h2 className="flex items-center gap-2 bg-orange/10 px-5 py-1 rounded-full text-orange text-sm md:text-base lg:text-lg font-medium w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M7.9 20.5C9.80858 21.4791 12.0041 21.7443 14.0909 21.2478C16.1777 20.7514 18.0186 19.5259 19.2818 17.7922C20.545 16.0586 21.1474 13.9308 20.9806 11.7922C20.8137 9.65366 19.8886 7.64502 18.3718 6.12824C16.855 4.61146 14.8464 3.6863 12.7078 3.51946C10.5693 3.35263 8.44147 3.95509 6.70782 5.21829C4.97417 6.48149 3.74869 8.32236 3.25222 10.4092C2.75575 12.496 3.02094 14.6915 4 16.6L2 22.5L7.9 20.5Z"
                  stroke="#C17100"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7996 9.69999C15.3323 9.24193 14.704 8.98535 14.0496 8.98535C13.3953 8.98535 12.767 9.24193 12.2996 9.69999L11.9996 10.1L11.6496 9.79999C11.4204 9.55186 11.1417 9.35447 10.8316 9.22054C10.5215 9.0866 10.1867 9.01908 9.84889 9.02233C9.51108 9.02557 9.1777 9.09951 8.87019 9.23938C8.56268 9.37926 8.28786 9.58196 8.06342 9.83446C7.83898 10.087 7.66989 10.3836 7.56704 10.7054C7.46418 11.0272 7.42984 11.367 7.46622 11.7028C7.5026 12.0387 7.6089 12.3632 7.77828 12.6555C7.94765 12.9478 8.17635 13.2014 8.44965 13.4L12.0496 16.9L15.6496 13.4C16.8496 12.2 16.7496 10.7 15.8496 9.69999"
                  stroke="#C17100"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Interested
            </h2>
          </div>
        </div>
      </div>
      {/* About Summary */}
      <div className="space-y-5">
        <SectionHeaderTwo title="About Summary" />
        <p className="lg:text-lg text-black-secondary">
          Ayesh Khan is a passionate educator and certified safety trainer with
          over 8 years of experience in teaching kids essential life and safety
          skills. He specializes in creating engaging, age-appropriate content
          that helps young learners build confidence during emergencies. His
          mission is to make safety education simple, fun, and truly effective
          for children aged 6–14.
        </p>
      </div>
      {/* Certifications */}
      <div className="space-y-5">
        <SectionHeaderTwo title="Certifications" />
        {certificates.map((certificate, index) => (
          <p
            key={index}
            className="flex items-center gap-3 mb-3 text-black-secondary lg:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_321_2208)">
                <path
                  d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                  stroke="#3AB3B6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.99959 1.5C8.00503 2.49456 7.44629 3.84348 7.44629 5.25C7.44629 6.65652 8.00503 8.00544 8.99959 9C9.99415 9.99456 11.3431 10.5533 12.7496 10.5533C14.1561 10.5533 15.505 9.99456 16.4996 9"
                  stroke="#3AB3B6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_321_2208">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {certificate}
          </p>
        ))}
      </div>
      {/* Expertise Areas & Host Locations  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-5">
          <SectionHeaderTwo title="Expertise Areas" />
          {experienceAreas.map((experience, index) => (
            <p
              key={index}
              className="flex items-center gap-3 mb-3 text-black-secondary lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_321_2208)">
                  <path
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    stroke="#3AB3B6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99959 1.5C8.00503 2.49456 7.44629 3.84348 7.44629 5.25C7.44629 6.65652 8.00503 8.00544 8.99959 9C9.99415 9.99456 11.3431 10.5533 12.7496 10.5533C14.1561 10.5533 15.505 9.99456 16.4996 9"
                    stroke="#3AB3B6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_321_2208">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {experience}
            </p>
          ))}
        </div>
        <div className="space-y-5">
          <SectionHeaderTwo title="Host Locations" />
          {hostLocation.map((location, index) => (
            <p
              key={index}
              className="flex items-center gap-3 mb-3 text-black-secondary lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_321_2208)">
                  <path
                    d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                    stroke="#3AB3B6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99959 1.5C8.00503 2.49456 7.44629 3.84348 7.44629 5.25C7.44629 6.65652 8.00503 8.00544 8.99959 9C9.99415 9.99456 11.3431 10.5533 12.7496 10.5533C14.1561 10.5533 15.505 9.99456 16.4996 9"
                    stroke="#3AB3B6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_321_2208">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {location}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TutorInfo;
