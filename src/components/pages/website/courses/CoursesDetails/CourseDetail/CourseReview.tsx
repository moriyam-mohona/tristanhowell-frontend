"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import img from "@/assets/images/Human.png";

interface Review {
  id: number;
  name: string;
  profileImage: string;
  timeAgo: string;
  rating: number;
  comment: string;
}

const CourseReview = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: "Rifat! Profile",
      profileImage: "/placeholder.svg?height=40&width=40",
      timeAgo: "2 days ago",
      rating: 4.5,
      comment:
        "All information provided is accurate and complete to the best of your knowledge.",
    },
    {
      id: 2,
      name: "Rifat! Profile",
      profileImage: "/placeholder.svg?height=40&width=40",
      timeAgo: "9 days ago",
      rating: 5.0,
      comment:
        "All information provided is accurate and complete to the best of your knowledge.",
    },
    {
      id: 3,
      name: "Rifat! Profile",
      profileImage: "/placeholder.svg?height=40&width=40",
      timeAgo: "12 days ago",
      rating: 4.5,
      comment:
        "All information provided is accurate and complete to the best of your knowledge.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
  });

  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
    console.log("Rating selected:", rating);
  };

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prev) => ({ ...prev, comment: e.target.value }));
  };

  const handleSubmitReview = () => {
    if (newReview.rating === 0 || newReview.comment.trim() === "") {
      console.log("Please provide both rating and comment");
      return;
    }

    const submittedReview = {
      id: Date.now(),
      name: "New User",
      profileImage: "/placeholder.svg?height=40&width=40",
      timeAgo: "Just now",
      rating: newReview.rating,
      comment: newReview.comment,
    };

    console.log("Review submitted:", submittedReview);

    // Reset form
    setNewReview({ rating: 0, comment: "" });
    setHoveredStar(0);
  };

  const renderStars = (rating: number, size: "sm" | "lg" = "sm") => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FaStar
            key={i}
            className={`${
              size === "sm" ? "w-5 h-5" : "w-5 h-5"
            } fill-[#FF8800] text-[#FF8800]`}
          />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <FaStar
              className={`${
                size === "sm" ? "w-5 h-5" : "w-5 h-5"
              } text-[#FF8800]/50`}
            />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <FaStar
                className={`${
                  size === "sm" ? "w-5 h-5" : "w-5 h-5"
                } fill-[#FF8800] text-[#FF8800]`}
              />
            </div>
          </div>
        );
      } else {
        stars.push(
          <FaStar
            key={i}
            className={`${
              size === "sm" ? "w-5 h-5" : "w-5 h-5"
            } text-[#FF8800]/50`}
          />
        );
      }
    }
    return stars;
  };

  const renderInteractiveStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= (hoveredStar || newReview.rating);
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => setHoveredStar(0)}
          className="focus:outline-none"
        >
          <FaStar
            className={`w-6 h-6 ${
              isFilled ? "fill-[#FF8800] text-[#FF8800]" : "text-gray-300"
            }`}
          />
        </button>
      );
    }
    return stars;
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-6">Rating & reviews</h3>

      {/* Reviews List */}
      <div className="space-y-6 mb-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex gap-4 border border-gray/20 p-5 rounded-3xl"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <Image
                src={review.profileImage || img}
                alt={review.name}
                width={400}
                height={400}
                className="w-12 h-12 rounded-full object-cover bg-gray-200"
              />
            </div>

            {/* Review Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.timeAgo}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">({review.rating})</span>
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Review Form */}
      <div className="bg-light-gray rounded-lg p-6">
        {/* FaStar   Rating Input */}
        <div className="flex gap-1 mb-4">{renderInteractiveStars()}</div>

        {/* Comment Input */}
        <textarea
          value={newReview.comment}
          onChange={handleCommentChange}
          placeholder="Write your review here..."
          className="w-full bg-white h-40 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmitReview}
          className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default CourseReview;
