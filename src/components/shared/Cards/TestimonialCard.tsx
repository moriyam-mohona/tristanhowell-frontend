import type React from "react";
import { ImQuotesRight } from "react-icons/im";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
}) => {
  const truncateWords = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "…";
  };

  return (
    <div className="bg-white rounded-2xl p-8 mb-10 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Quote */}
      <p className="text-black-secondary leading-relaxed mb-6 flex-grow">
        {truncateWords(quote, 13)}
      </p>
      {/* Name and Role */}
      <div className="mb-4 flex items-center gap-2 ">
        <h3 className="text-black text-lg font-semibold mb-1 flex items-center gap-2">
          <ImQuotesRight className="text-primary mr-3 text-2xl" />
          {name}
        </h3>
        <div className="h-1 w-1 bg-black-secondary rounded-full" />
        <p className="text-sm text-black-secondary font-medium">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
