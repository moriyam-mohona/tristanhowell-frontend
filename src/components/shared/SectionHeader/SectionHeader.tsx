import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  itemsAlign?: "center" | "start";
  textAlign?: "center" | "start";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  itemsAlign = "center",
  textAlign = "center",
}) => {
  return (
    <div className={`space-y-4 flex flex-col items-${itemsAlign}`}>
      <h2
        className={`text-secondary text-3xl md:text-4xl xl:text-[48px] !font-bold max-w-3xl text-${textAlign}`}
      >
        {title}
      </h2>
      <p
        className={`text-black-secondary text-sm xl:text-base text-${textAlign} max-w-[860px]`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export const SectionHeaderTwo: React.FC<SectionHeaderProps> = ({
  title,
  itemsAlign = "start",
  textAlign = "start",
}) => {
  return (
    <div className={`flex flex-col items-${itemsAlign}`}>
      <h2
        className={`text-black text-xl xl:text-2xl !font-bold max-w-3xl text-${textAlign}`}
      >
        {title}
      </h2>
    </div>
  );
};
