/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormSelect from "@/components/ui/MyForm/MyFormSelect/MyFormSelect";
import MyFormTextArea from "@/components/ui/MyForm/MyFormTextArea/MyFormTextArea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormFileUpload from "@/components/ui/MyForm/MyFormFileUpload/MyFormFileUpload";

const validationSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }),
  lastName: z.string({
    required_error: "Last name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  subject: z.string({
    required_error: "Please select your role",
  }),
  message: z.string({
    required_error: "Please enter your message",
  }),
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 5 * 1024 * 1024, // 5MB max
      { message: "File size must be less than 5MB" }
    )
    .refine(
      (file) =>
        [".pdf", ".doc", ".docx", ".jpg", ".jpeg"].includes(
          file.name.substring(file.name.lastIndexOf("."))
        ),
      { message: "Only PDF, Word, or JPG files are allowed" }
    ),
});
const ContactForm = () => {
  const handleSubmit = async (formData: any) => {
    console.log(formData);
  };
  return (
    <div className="max-w-3xl mx-auto border border-gray rounded-2xl px-6 py-8">
      {" "}
      <MyFormWrapper
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        className="space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <MyFormInput
            type="text"
            name="firstName"
            label="First Name"
            labelClassName="font-medium"
            placeHolder="Enter your first name"
          />
          <MyFormInput
            type="text"
            name="lastName"
            label="Last Name"
            labelClassName="font-medium"
            placeHolder="Enter your last name"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <MyFormInput
            type="text"
            name="email"
            label="Email"
            labelClassName="font-medium"
            placeHolder="Enter your email address"
          />
          <MyFormSelect
            name="subject"
            label="Subject"
            labelClassName="font-medium"
            options={[
              { label: "mentee", value: "Mentee" },
              { label: "mentor", value: "mentor" },
            ]}
            placeHolder="Select Subject"
          />
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-8">
            <MyFormTextArea
              name="message"
              labelClassName="font-medium"
              label="Message"
              placeHolder="Message"
            />
          </div>
          <div className="md:col-span-4 md:mt-7">
            <MyFormFileUpload
              name="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg"
              labelClassName="font-medium"
            >
              <div className="border border-gray flex flex-col items-center gap-2 bg-white p-10 lg:p-5 xl:p-10 rounded-xl h-full">
                <div className="bg-blue-400/20 p-2 w-12 h-12 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_406_362"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_406_362)">
                      <path
                        d="M6.5 19.9956C4.98333 19.9956 3.6875 19.4706 2.6125 18.4206C1.5375 17.3706 1 16.0873 1 14.5706C1 13.2706 1.39167 12.1123 2.175 11.0956C2.95833 10.0789 3.98333 9.42894 5.25 9.1456C5.66667 7.61227 6.5 6.3706 7.75 5.42061C9 4.47061 10.4167 3.99561 12 3.99561C13.95 3.99561 15.6042 4.67477 16.9625 6.03311C18.3208 7.39144 19 9.0456 19 10.9956C20.15 11.1289 21.1042 11.6248 21.8625 12.4831C22.6208 13.3414 23 14.3456 23 15.4956C23 16.7456 22.5625 17.8081 21.6875 18.6831C20.8125 19.5581 19.75 19.9956 18.5 19.9956H13C12.45 19.9956 11.9792 19.7998 11.5875 19.4081C11.1958 19.0164 11 18.5456 11 17.9956V12.8456L9.4 14.3956L8 12.9956L12 8.9956L16 12.9956L14.6 14.3956L13 12.8456V17.9956H18.5C19.2 17.9956 19.7917 17.7539 20.275 17.2706C20.7583 16.7873 21 16.1956 21 15.4956C21 14.7956 20.7583 14.2039 20.275 13.7206C19.7917 13.2373 19.2 12.9956 18.5 12.9956H17V10.9956C17 9.61227 16.5125 8.4331 15.5375 7.4581C14.5625 6.48311 13.3833 5.99561 12 5.99561C10.6167 5.99561 9.4375 6.48311 8.4625 7.4581C7.4875 8.4331 7 9.61227 7 10.9956H6.5C5.53333 10.9956 4.70833 11.3373 4.025 12.0206C3.34167 12.7039 3 13.5289 3 14.4956C3 15.4623 3.34167 16.2873 4.025 16.9706C4.70833 17.6539 5.53333 17.9956 6.5 17.9956H9V19.9956H6.5Z"
                        fill="#1C88FF"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-sm xl:text-base">Upload file*</p>
                <p className="text-sm text-black-secondary/60">
                  (.pdf,.doc,.docx,.jpg,.jpeg)
                </p>
              </div>
            </MyFormFileUpload>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary text-white text-base font-medium w-full py-3 rounded-lg cursor-pointer"
        >
          Send Message
        </button>
      </MyFormWrapper>
    </div>
  );
};

export default ContactForm;
