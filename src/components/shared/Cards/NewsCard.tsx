import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GrShare } from "react-icons/gr";
import React from "react";

export interface NewsCardProps {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  image,
  title,
  description,
  date,
  readTime,
}) => {
  const truncateWords = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "…";
  };
  return (
    <div className="flex flex-col shadow-xl rounded-xl">
      <Image
        src={image}
        alt="news image"
        width={800}
        height={800}
        className=" lg:w-[416px] h-[200px] 2xl:h-[250px] object-cover rounded-t-xl"
      />
      <div className="p-5 lg:p-3 xl:p-5">
        {/* Icons  */}
        <div className="flex items-center justify-start">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 6.26758V8.99972L10.6071 10.6069"
                stroke="#212121"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.00007 14.7853C9.75986 14.7853 10.5122 14.6356 11.2142 14.3449C11.9161 14.0541 12.5539 13.628 13.0912 13.0907C13.6284 12.5534 14.0546 11.9156 14.3454 11.2137C14.6361 10.5117 14.7858 9.75937 14.7858 8.99958C14.7858 8.23979 14.6361 7.48744 14.3454 6.78548C14.0546 6.08353 13.6284 5.44572 13.0912 4.90846C12.5539 4.37121 11.9161 3.94504 11.2142 3.65428C10.5122 3.36352 9.75986 3.21387 9.00007 3.21387C7.4656 3.21387 5.99398 3.82343 4.90895 4.90846C3.82392 5.9935 3.21436 7.46511 3.21436 8.99958C3.21436 10.534 3.82392 12.0057 4.90895 13.0907C5.99398 14.1757 7.4656 14.7853 9.00007 14.7853Z"
                stroke="#212121"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.2145 4.17829V1.92829C12.2145 1.5873 12.079 1.26027 11.8379 1.01916C11.5968 0.778037 11.2697 0.642578 10.9287 0.642578H7.0716C6.73061 0.642578 6.40358 0.778037 6.16247 1.01916C5.92135 1.26027 5.78589 1.5873 5.78589 1.92829V4.17829M12.2145 13.8006V16.0711C12.2145 16.4121 12.079 16.7392 11.8379 16.9803C11.5968 17.2214 11.2697 17.3569 10.9287 17.3569H7.0716C6.73061 17.3569 6.40358 17.2214 6.16247 16.9803C5.92135 16.7392 5.78589 16.4121 5.78589 16.0711V13.8006"
                stroke="#212121"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm 2xl:text-base">{readTime}</p>
          </div>
          <span className="mx-4 h-3 w-[2px] rounded-2xl bg-black-secondary/40"></span>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M11 13.5L14 10.5L17 13.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 1.5V4.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 16.5V10.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.25 8.50725V4.5C16.25 4.10218 16.092 3.72064 15.8107 3.43934C15.5294 3.15804 15.1478 3 14.75 3H4.25C3.85218 3 3.47064 3.15804 3.18934 3.43934C2.90804 3.72064 2.75 4.10218 2.75 4.5V15C2.75 15.3978 2.90804 15.7794 3.18934 16.0607C3.47064 16.342 3.85218 16.5 4.25 16.5H11"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.75 7.5H16.25"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 1.5V4.5"
                stroke="#212121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm 2xl:text-base">{date}</p>
          </div>
        </div>
        <h2 className="text-xl xl:text-xl 2xl:text-[28px] font-bold mt-5 truncate">
          {title}
        </h2>
        <p className="text-black-secondary text-sm 2xl:text-base mt-4">
          {truncateWords(description, 17)}
        </p>

        <Link
          href={`/news/${id}`}
          className="text-primary font-semibold hover:underline cursor-pointer flex items-center gap-2 mt-5"
        >
          <GrShare />
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
