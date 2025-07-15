import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GrShare } from "react-icons/gr";
import { FiUser } from "react-icons/fi";

export interface CourseCardProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  price: string;
  isLive: boolean;
  isBeginner: boolean;
  mentorName: string;
}

const CoursesCard = ({
  id,
  image,
  title,
  price,
  isLive,
  mentorName,
  isBeginner,
}: CourseCardProps) => {
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
        <h2 className="text-xl xl:text-xl 2xl:text-2xl font-bold md:mt-5 truncate">
          {title}
        </h2>
        <div className="flex flex-wrap items-start gap-2 h-20">
          {isLive && (
            <h2 className="bg-red-500/5 text-red-500 py-1.5 px-4 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M12.1851 6.32031C13.0273 7.164 13.5003 8.30743 13.5003 9.49956C13.5003 10.6917 13.0273 11.8351 12.1851 12.6788"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3062 4.2002C15.7108 5.60647 16.4998 7.51282 16.4998 9.50045C16.4998 11.4881 15.7108 13.3944 14.3062 14.8007"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.69365 14.8007C2.28899 13.3944 1.5 11.4881 1.5 9.50045C1.5 7.51282 2.28899 5.60647 3.69365 4.2002"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.8148 12.6788C4.97256 11.8351 4.49951 10.6917 4.49951 9.49956C4.49951 8.30743 4.97256 7.164 5.8148 6.32031"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11C9.82843 11 10.5 10.3284 10.5 9.5C10.5 8.67157 9.82843 8 9 8C8.17157 8 7.5 8.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11Z"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Live Session
            </h2>
          )}
          <h2 className="bg-primary/10 text-primary py-1.5 px-4 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
            <FiUser className="text-lg" />
            {mentorName}
          </h2>

          {isBeginner && (
            <h2 className="bg-orange/10 text-orange py-1.5 px-4 rounded-full text-sm font-semibold w-fit flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M4.5 7.25C5.74264 7.25 6.75 6.24264 6.75 5C6.75 3.75736 5.74264 2.75 4.5 2.75C3.25736 2.75 2.25 3.75736 2.25 5C2.25 6.24264 3.25736 7.25 4.5 7.25Z"
                  stroke="#C17100"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.5 7.25V16.25"
                  stroke="#C17100"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 2.75L11.25 7.25"
                  stroke="#C17100"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 7.25L11.25 2.75"
                  stroke="#C17100"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 9.125V11.75"
                  stroke="#C17100"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 16.25C14.7426 16.25 15.75 15.2426 15.75 14C15.75 12.7574 14.7426 11.75 13.5 11.75C12.2574 11.75 11.25 12.7574 11.25 14C11.25 15.2426 12.2574 16.25 13.5 16.25Z"
                  stroke="#C17100"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Beginner
            </h2>
          )}
        </div>
        <ul className="flex flex-col gap-2">
          <li className="text-black-secondary flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.25 16.2979C8.47803 16.4296 8.7367 16.4989 9 16.4989C9.2633 16.4989 9.52197 16.4296 9.75 16.2979L15 13.2979C15.2278 13.1664 15.417 12.9773 15.5487 12.7495C15.6803 12.5218 15.7497 12.2635 15.75 12.0004V6.00042C15.7497 5.73737 15.6803 5.47902 15.5487 5.25129C15.417 5.02355 15.2278 4.83444 15 4.70292L9.75 1.70291C9.52197 1.57126 9.2633 1.50195 9 1.50195C8.7367 1.50195 8.47803 1.57126 8.25 1.70291L3 4.70292C2.7722 4.83444 2.58299 5.02355 2.45135 5.25129C2.31971 5.47902 2.25027 5.73737 2.25 6.00042V12.0004C2.25027 12.2635 2.31971 12.5218 2.45135 12.7495C2.58299 12.9773 2.7722 13.1664 3 13.2979L8.25 16.2979Z"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 16.5V9"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.46729 5.25L8.99979 9L15.5323 5.25"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.625 3.20215L12.375 7.06465"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            12 Modules
          </li>
          <li className="text-black-secondary flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.1851 5.82031C13.0273 6.664 13.5003 7.80743 13.5003 8.99956C13.5003 10.1917 13.0273 11.3351 12.1851 12.1788"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.3062 3.7002C15.7108 5.10647 16.4998 7.01282 16.4998 9.00045C16.4998 10.9881 15.7108 12.8944 14.3062 14.3007"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.69365 14.3007C2.28899 12.8944 1.5 10.9881 1.5 9.00045C1.5 7.01282 2.28899 5.10647 3.69365 3.7002"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.8148 12.1788C4.97256 11.3351 4.49951 10.1917 4.49951 8.99956C4.49951 7.80743 4.97256 6.664 5.8148 5.82031"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            3 Live Session
          </li>
          <li className="text-black-secondary flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_318_3960)">
                <path
                  d="M9 1.5C10.4551 1.49973 11.8789 1.92276 13.0978 2.71752C14.3166 3.51227 15.278 4.64444 15.8647 5.97603C16.4514 7.30761 16.6381 8.78111 16.402 10.2169C16.1659 11.6528 15.5172 12.9889 14.535 14.0625"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 4.5V9L12 10.5"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.87451 6.65625C1.63552 7.38274 1.50906 8.14152 1.49951 8.90625"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.12207 12C2.5432 12.9689 3.16426 13.8378 3.94457 14.55"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.47705 3.92595C3.68633 3.69813 3.90951 3.48347 4.1453 3.2832"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.48291 16.0653C8.35318 16.7315 10.4113 16.6291 12.2062 15.7803"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_318_3960">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            4 Weeks
          </li>
          <li className="text-black-secondary flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1.5 6.75C2.09674 6.75 2.66903 6.98705 3.09099 7.40901C3.51295 7.83097 3.75 8.40326 3.75 9C3.75 9.59674 3.51295 10.169 3.09099 10.591C2.66903 11.0129 2.09674 11.25 1.5 11.25V12.75C1.5 13.1478 1.65804 13.5294 1.93934 13.8107C2.22064 14.092 2.60218 14.25 3 14.25H15C15.3978 14.25 15.7794 14.092 16.0607 13.8107C16.342 13.5294 16.5 13.1478 16.5 12.75V11.25C15.9033 11.25 15.331 11.0129 14.909 10.591C14.4871 10.169 14.25 9.59674 14.25 9C14.25 8.40326 14.4871 7.83097 14.909 7.40901C15.331 6.98705 15.9033 6.75 16.5 6.75V5.25C16.5 4.85218 16.342 4.47064 16.0607 4.18934C15.7794 3.90804 15.3978 3.75 15 3.75H3C2.60218 3.75 2.22064 3.90804 1.93934 4.18934C1.65804 4.47064 1.5 4.85218 1.5 5.25V6.75Z"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.75 9L8.25 10.5L11.25 7.5"
                stroke="#667085"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Enrollments 560+
          </li>
        </ul>

        <div className="flex justify-between items-center">
          <p className="text-xl 2xl:text-[28px] font-bold">{price}</p>
          <Link
            href={`/news/${id}`}
            className="text-black font-semibold hover:underline cursor-pointer flex items-center gap-2"
          >
            Preview Course
            <GrShare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
