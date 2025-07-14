import NewsCard from "@/components/shared/Cards/NewsCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Container } from "@/components/ui-library/container";
import { newsData } from "@/utils/dummyData/newsData";
import Link from "next/link";

const LatestNews = () => {
  return (
    <Container className="space-y-20 my-12 my:my-24">
      <SectionHeader
        title="Latest News"
        subtitle="Real stories from students, mentors, and parents who trust SafeSavvyKids for safe and smart learning."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-6">
        {newsData.map((news) => (
          <NewsCard key={news?.id} {...news} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/news"
          className="bg-primary px-6 py-3 rounded-md text-white transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-primary/90 shadow-md"
        >
          Learn More
        </Link>
      </div>
    </Container>
  );
};

export default LatestNews;
