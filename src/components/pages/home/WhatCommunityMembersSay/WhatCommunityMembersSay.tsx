/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Container } from "@/components/ui-library/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import bg from "@/assets/home/bg.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "@/components/shared/Cards/TestimonialCard";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import SharedModal from "@/components/shared/Modal/SharedModal";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import CreateReview from "./CreateReview";

const testimonialsData = [
  {
    id: 1,
    name: "Amanda R",
    role: "Renter in Atlanta",
    quote:
      "I found a clean and safe room within 3 days! Everything was online.",
    rating: 4.5,
    avatar: "/placeholder.svg?height=60&width=60&text=AR",
  },
  {
    id: 2,
    name: "Jayson K",
    role: "College Student",
    quote: "Love the flexibility and how fast maintenance responds.",
    rating: 4.5,
    avatar: "/placeholder.svg?height=60&width=60&text=JK",
  },
  {
    id: 3,
    name: "Lisa B",
    role: "Healthcare Worker",
    quote: "The whole experience was smooth — and I love my private room.",
    rating: 4.5,
    avatar: "/placeholder.svg?height=60&width=60&text=LB",
  },
  {
    id: 4,
    name: "Marcus T",
    role: "Young Professional",
    quote:
      "Amazing location and the all-inclusive rent makes budgeting so easy. Highly recommend!",
    rating: 5.0,
    avatar: "/placeholder.svg?height=60&width=60&text=MT",
  },
  {
    id: 5,
    name: "Sarah M",
    role: "Graduate Student",
    quote:
      "The furnished room was exactly as described. Move-in was hassle-free and the community is great.",
    rating: 4.5,
    avatar: "/placeholder.svg?height=60&width=60&text=SM",
  },
  {
    id: 6,
    name: "David L",
    role: "Remote Worker",
    quote:
      "Perfect setup for remote work. Fast Wi-Fi, quiet environment, and great value for money.",
    rating: 5.0,
    avatar: "/placeholder.svg?height=60&width=60&text=DL",
  },
];
const WhatCommunityMembersSay = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>

      <Container className="py-10 md:py-12 lg:py-20 relative z-10">
        <SectionHeader
          title=" What Our Renters Are Saying"
          subtitle="Our renters don’t just stay — they stay satisfied. Read their stories and see why TheTopSpot feels like home."
        />

        {/* Testimonials Slider */}
        <div className="relative mt-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            onSwiper={setSwiper}
            navigation={{
              prevEl: ".testimonials-prev",
              nextEl: ".testimonials-next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <GoChevronLeft />
          </button>

          <button
            className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-xl shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <GoChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => handleOpenModal()}
            className="bg-primary px-6 py-3 rounded-md text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-primary/90 shadow-md"
          >
            Write a Review
          </button>
        </div>
      </Container>
      <SharedModal
        title="Share your Review"
        open={isModalOpen}
        onCancel={handleCloseModal}
      >
        <CreateReview />
      </SharedModal>
    </div>
  );
};

export default WhatCommunityMembersSay;
