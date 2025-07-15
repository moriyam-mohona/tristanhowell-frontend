import React from "react";
import NewsCard from "@/components/shared/Cards/NewsCard";
import { newsData } from "@/utils/dummyData/newsData";

const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2 xl:gap-6">
        {newsData.map((news) => (
          <NewsCard key={news?.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
