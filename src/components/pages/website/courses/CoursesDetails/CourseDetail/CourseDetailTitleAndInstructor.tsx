import Link from "next/link";
import { FaRegShareFromSquare } from "react-icons/fa6";

const CourseDetailTitleAndInstructor = () => {
  const summaryData = [
    {
      name: "Instructor",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M1.5 15.7503C1.49994 14.5956 1.8331 13.4653 2.45951 12.4952C3.08592 11.5252 3.97896 10.7564 5.03145 10.2813C6.08394 9.80625 7.25118 9.64496 8.39307 9.81684C9.53496 9.98872 10.603 10.4865 11.469 11.2503"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 9.75C9.57107 9.75 11.25 8.07107 11.25 6C11.25 3.92893 9.57107 2.25 7.5 2.25C5.42893 2.25 3.75 3.92893 3.75 6C3.75 8.07107 5.42893 9.75 7.5 9.75Z"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.25 12V16.5"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 14.25H12"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      value: "Mr. Ayesh Khan",
    },

    {
      name: "Subject",
      icon: (
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
            d="M2.46777 5.25L9.00027 9L15.5328 5.25"
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
      ),
      value: "Kids Situation Handel ",
    },
    {
      name: "Modules",
      icon: (
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
            d="M2.46777 5.25L9.00027 9L15.5328 5.25"
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
      ),
      value: "12",
    },
    {
      name: "Duration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clip-path="url(#clip0_321_2552)">
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
              d="M1.875 6.65625C1.63601 7.38274 1.50955 8.14152 1.5 8.90625"
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
              d="M3.47754 3.92595C3.68682 3.69813 3.91 3.48347 4.14579 3.2832"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.4834 16.0653C8.35367 16.7315 10.4118 16.6291 12.2066 15.7803"
              stroke="#667085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_321_2552">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      value: "4 Weeks",
    },
    {
      name: "Rating",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 2.62305C10.051 2.62305 10.1013 2.6367 10.1455 2.66211C10.1896 2.68744 10.2263 2.72369 10.252 2.76758L12.5811 6.76562L12.748 7.05176L13.0703 7.12109L17.5938 8.10156C17.6435 8.1124 17.6898 8.13577 17.7275 8.16992C17.7653 8.20413 17.7928 8.24838 17.8086 8.29688C17.8242 8.34519 17.8278 8.3966 17.8174 8.44629C17.8069 8.49606 17.7829 8.5421 17.749 8.58008L14.666 12.0312L14.4463 12.2783L14.4795 12.6064L14.9463 17.2109C14.9514 17.2616 14.9427 17.3128 14.9219 17.3594C14.901 17.406 14.8684 17.4466 14.8271 17.4766C14.7859 17.5065 14.7372 17.5249 14.6865 17.5303C14.6359 17.5357 14.5847 17.5283 14.5381 17.5078V17.5068L10.3027 15.6406L10 15.5068L9.69824 15.6406L5.46289 17.5068V17.5078C5.41634 17.5283 5.36505 17.5356 5.31445 17.5303C5.26381 17.5249 5.21506 17.5065 5.17383 17.4766C5.13254 17.4466 5.09994 17.4059 5.0791 17.3594C5.06872 17.3362 5.06067 17.312 5.05664 17.2871L5.05469 17.2109L5.52148 12.6064L5.55469 12.2773L5.33496 12.0312L2.25098 8.58105C2.21705 8.54312 2.19318 8.49705 2.18262 8.44727C2.1721 8.3974 2.1757 8.34536 2.19141 8.29688C2.20716 8.24835 2.23462 8.20414 2.27246 8.16992C2.3102 8.13579 2.35654 8.11241 2.40625 8.10156L6.92969 7.12109L7.25293 7.05176L7.41895 6.76562L9.74805 2.76758C9.77372 2.72355 9.81128 2.6875 9.85547 2.66211C9.89953 2.63684 9.9492 2.62311 10 2.62305Z"
            stroke="#667085"
            stroke-width="1.5"
          />
        </svg>
      ),
      value: "4.6",
    },
    {
      name: "Level",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M4.5 6.75C5.74264 6.75 6.75 5.74264 6.75 4.5C6.75 3.25736 5.74264 2.25 4.5 2.25C3.25736 2.25 2.25 3.25736 2.25 4.5C2.25 5.74264 3.25736 6.75 4.5 6.75Z"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 6.75V15.75"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.75 2.25L11.25 6.75"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.75 6.75L11.25 2.25"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 8.625V11.25"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 15.75C14.7426 15.75 15.75 14.7426 15.75 13.5C15.75 12.2574 14.7426 11.25 13.5 11.25C12.2574 11.25 11.25 12.2574 11.25 13.5C11.25 14.7426 12.2574 15.75 13.5 15.75Z"
            stroke="#667085"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      value: "Beginner",
    },
    {
      name: "Enrollments",
      icon: (
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
      ),
      value: "560+",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h2 className="text-secondary text-2xl lg:text-3xl font-bold">
            Emergency Situations & Response
          </h2>
          <p className="text-black-secondary mt-5">
            Help your child act confidently in real-life emergencies.
          </p>
        </div>
        <Link
          href="/courses"
          className="bg-primary px-6 py-3 rounded-md text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-primary/90 shadow-md h-fit"
        >
          Start Course
        </Link>
      </div>
      {/* price  */}
      <div className="flex justify-between">
        <h2 className="text-2xl lg:text-3xl font-bold">$10.99</h2>
        <button className="bg-gray/10 p-2 rounded-full text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-gray/90 shadow-md h-fit">
          <FaRegShareFromSquare className="text-2xl text-black-secondary" />
        </button>
      </div>
      {/* Summery  */}
      <div className="max-w-sm">
        {summaryData.map((summary, idx) => (
          <div className="grid grid-cols-2 gap-2 text-base space-y-3" key={idx}>
            <h2 className="flex items-center gap-2 text-black-secondary font-medium">
              {summary.icon} {summary.name}
            </h2>
            <p className="text-black-secondary">{summary.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailTitleAndInstructor;
