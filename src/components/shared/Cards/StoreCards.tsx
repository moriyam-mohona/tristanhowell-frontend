"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

export interface CourseCardProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  price: string;
  rating: number;
  isStock: boolean;
  mentorName: string;
}

const StoreCard = ({
  id,
  image,
  title,
  price,
  rating,
  isStock,
}: CourseCardProps) => {
  const handleAddToCart = () => {
    console.log("Added to cart:", id);
  };
  return (
    <div className="flex flex-col shadow-xl rounded-xl">
      <Image
        src={image}
        alt="news image"
        width={800}
        height={800}
        className="w-full lg:w-[416px] h-[200px] 2xl:h-[250px] object-cover rounded-t-xl"
      />
      <div className="p-5 lg:p-3 xl:p-5 flex flex-col justify-between gap-5">
        <div className="flex flex-wrap items-start gap-2">
          {isStock && (
            <h2 className="bg-green/5 text-green py-1.5 px-4 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 3.5H4C3.44772 3.5 3 3.94772 3 4.5V20.5C3 21.0523 3.44772 21.5 4 21.5H10C10.5523 21.5 11 21.0523 11 20.5V4.5C11 3.94772 10.5523 3.5 10 3.5Z"
                  stroke="#24D900"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 3.5V21.5"
                  stroke="#24D900"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.3998 19.3998C20.5998 19.8998 20.2998 20.4998 19.7998 20.6998L17.8998 21.3998C17.3998 21.5998 16.7998 21.2998 16.5998 20.7998L11.0998 5.59976C10.8998 5.09976 11.1998 4.49976 11.6998 4.29976L13.5998 3.59976C14.0998 3.39976 14.6998 3.69976 14.8998 4.19976L20.3998 19.3998Z"
                  stroke="#24D900"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Stock in stock
            </h2>
          )}
          <h2 className="bg-orange/10 text-orange py-1.5 px-4 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M18.4832 17.2671C17.1164 17.5953 15.6895 17.5794 14.3303 17.2208C12.9712 16.8622 11.7221 16.1721 10.6951 15.2124C9.66804 14.2526 8.89506 13.0531 8.44535 11.7213C7.99564 10.3895 7.88325 8.96696 8.11824 7.58105C8.08303 7.61615 8.04526 7.64858 8.00524 7.67805C7.72523 7.89105 7.37524 7.97005 6.67524 8.12805L6.04024 8.27205C3.58024 8.82905 2.35024 9.10706 2.05723 10.0481C1.76523 10.9881 2.60324 11.9691 4.28024 13.9301L4.71424 14.4371C5.19024 14.9941 5.42923 15.2731 5.53623 15.6171C5.64323 15.9621 5.60723 16.3341 5.53523 17.0771L5.46923 17.7541C5.21623 20.3711 5.08924 21.6791 5.85524 22.2601C6.62123 22.8411 7.77323 22.3121 10.0752 21.2511L10.6722 20.9771C11.3262 20.6751 11.6532 20.5251 12.0002 20.5251C12.3472 20.5251 12.6742 20.6751 13.3292 20.9771L13.9242 21.2511C16.2272 22.3111 17.3792 22.8411 18.1442 22.2611C18.9112 21.6791 18.7842 20.3711 18.5312 17.7541L18.4832 17.2671Z"
                fill="#C17100"
              />
              <path
                opacity="0.5"
                d="M9.1527 5.908L8.8247 6.496C8.4647 7.142 8.2847 7.465 8.0047 7.678C8.0447 7.648 8.08237 7.61567 8.1177 7.581C7.88265 8.96701 7.99504 10.3897 8.4448 11.7216C8.89455 13.0535 9.66763 14.2531 10.6948 15.2128C11.722 16.1726 12.9712 16.8627 14.3305 17.2212C15.6898 17.5797 17.1168 17.5954 18.4837 17.267L18.4637 17.077C18.3927 16.334 18.3567 15.962 18.4637 15.617C18.5707 15.273 18.8087 14.994 19.2857 14.437L19.7197 13.93C21.3967 11.97 22.2347 10.989 21.9417 10.048C21.6497 9.107 20.4197 8.828 17.9597 8.272L17.3237 8.128C16.6247 7.97 16.2747 7.891 15.9937 7.678C15.7137 7.465 15.5337 7.142 15.1737 6.496L14.8467 5.908C13.5797 3.636 12.9467 2.5 11.9997 2.5C11.0527 2.5 10.4197 3.636 9.1527 5.908Z"
                fill="#C17100"
              />
            </svg>
            {rating}
          </h2>
        </div>
        <h2 className="text-xl xl:text-xl 2xl:text-2xl font-bold md:mt-5 truncate">
          {title}
        </h2>

        <p className="text-xl 2xl:text-[28px] font-bold">{price}</p>
        <button
          onClick={handleAddToCart}
          className="bg-green text-white py-2 px-4 rounded-xl text-lg font-semibold cursor-pointer flex items-center justify-center gap-2"
        >
          Add to cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M8 22.5C8.55228 22.5 9 22.0523 9 21.5C9 20.9477 8.55228 20.5 8 20.5C7.44772 20.5 7 20.9477 7 21.5C7 22.0523 7.44772 22.5 8 22.5Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 22.5C19.5523 22.5 20 22.0523 20 21.5C20 20.9477 19.5523 20.5 19 20.5C18.4477 20.5 18 20.9477 18 21.5C18 22.0523 18.4477 22.5 19 22.5Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.05078 2.5498H4.05078L6.71078 14.9698C6.80836 15.4247 7.06145 15.8313 7.42649 16.1197C7.79153 16.408 8.24569 16.5602 8.71078 16.5498H18.4908C18.946 16.5491 19.3873 16.3931 19.7418 16.1076C20.0964 15.8222 20.3429 15.4243 20.4408 14.9798L22.0908 7.5498H5.12078"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
