import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const ConnectInfo = () => {
  return (
    <div>
      <SectionHeader
        title="Contact Safe Savvy!"
        subtitle="Have questions or need support? Reach out to our friendly team — we're here to help you every step of the way, from getting started to finding the right resources for your needs."
      />
      <div className="mt-10 flex flex-col md:flex-row justify-center md:items-center gap-4 lg:gap-10">
        <div className="flex items-center space-x-4">
          {/* Email */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M22.5 13V6C22.5 5.46957 22.2893 4.96086 21.9142 4.58579C21.5391 4.21071 21.0304 4 20.5 4H4.5C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V18C2.5 19.1 3.4 20 4.5 20H12.5"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5 7L13.53 12.7C13.2213 12.8934 12.8643 12.996 12.5 12.996C12.1357 12.996 11.7787 12.8934 11.47 12.7L2.5 7"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 19L18.5 21L22.5 17"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className=" text-sm lg:text-base text-black-secondary">
            {" "}
            contact@hj-taxi.fr
          </p>
        </div>
        <span className="hidden md:block text-gray text-xs font-semibold">
          |
        </span>
        <div className="flex items-center space-x-4">
          {/* Phone */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-sm lg:text-base text-black-secondary">
            +33 X XX XX XX XX
          </p>
        </div>
        <span className="hidden md:block text-gray text-xs font-semibold">
          |
        </span>
        <div className="flex items-center space-x-4">
          {/* Address */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M20.5 10C20.5 14.993 14.961 20.193 13.101 21.799C12.9277 21.9293 12.7168 21.9998 12.5 21.9998C12.2832 21.9998 12.0723 21.9293 11.899 21.799C10.039 20.193 4.5 14.993 4.5 10C4.5 7.87827 5.34285 5.84344 6.84315 4.34315C8.34344 2.84285 10.3783 2 12.5 2C14.6217 2 16.6566 2.84285 18.1569 4.34315C19.6571 5.84344 20.5 7.87827 20.5 10Z"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 13C14.1569 13 15.5 11.6569 15.5 10C15.5 8.34315 14.1569 7 12.5 7C10.8431 7 9.5 8.34315 9.5 10C9.5 11.6569 10.8431 13 12.5 13Z"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className=" text-sm lg:text-base text-black-secondary">
            85 Portland, London W1W 7LT, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectInfo;
