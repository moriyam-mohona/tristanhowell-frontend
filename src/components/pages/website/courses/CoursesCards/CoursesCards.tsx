import CoursesCard from "@/components/shared/Cards/CoursesCard";
import { courseData } from "@/utils/dummyData/courseData";

const CoursesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-6">
      {courseData.map((courses) => (
        <CoursesCard key={courses?.id} {...courses} />
      ))}
    </div>
  );
};

export default CoursesCards;
