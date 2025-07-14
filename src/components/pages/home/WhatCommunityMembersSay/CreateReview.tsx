/* eslint-disable @typescript-eslint/no-explicit-any */
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormSelect from "@/components/ui/MyForm/MyFormSelect/MyFormSelect";
import MyFormTextArea from "@/components/ui/MyForm/MyFormTextArea/MyFormTextArea";

const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  role: z.string({
    required_error: "Please select your role",
  }),
  opinion: z.string({
    required_error: "Please enter your opinion",
  }),
});

const CreateReview = () => {
  const handleSubmit = async (formData: any) => {
    console.log(formData);
  };
  return (
    <div>
      {" "}
      <MyFormWrapper
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        className="space-y-6"
      >
        <MyFormInput
          type="text"
          name="name"
          label="Name"
          labelClassName="font-medium"
          placeHolder="Enter your name"
        />
        <MyFormSelect
          name="role"
          label="Your Role"
          labelClassName="font-medium"
          options={[
            { label: "mentee", value: "Mentee" },
            { label: "mentor", value: "mentor" },
          ]}
          placeHolder="Mentee/Mentor"
        />
        <MyFormTextArea
          name="opinion"
          labelClassName="font-medium"
          label="Enter your opinion"
          placeHolder="Enter your opinion"
        />
        <button
          type="submit"
          className="bg-primary text-white text-base font-medium w-full py-3 rounded-lg"
        >
          Submit Review
        </button>
      </MyFormWrapper>
    </div>
  );
};

export default CreateReview;
