import img1 from "@/assets/dynamicImages/store-one.png";
import img2 from "@/assets/dynamicImages/store-two.png";
import img3 from "@/assets/dynamicImages/store-three.png";

export const storeData = [
  {
    id: "1",
    image: img1,
    title: "How Our Courses Helped Sophie Thrive",
    description:
      "A real success story of how an 11-year-old learned safety and self-expression with SafeSavvyKids.",
    price: "$10.99",
    rating: 4.5,
    isStock: true,
    mentorName: "Ayesh Khan",
  },
  {
    id: "2",
    image: img2,
    title: "Parent's Perspective: Safe Learning at Home",
    description:
      "An honest review from a parent on how SafeSavvyKids created a secure and engaging learning experience.",
    price: "$9.99",
    rating: 4.3,
    isStock: true,
    mentorName: "Sofia Allen",
  },
  {
    id: "3",
    image: img3,
    title: "Mentor Insights: Building Confidence in Kids",
    description:
      "Our mentors share how SafeSavvyKids empowers children through structured and supportive courses.",
    price: "$12.49",
    rating: 4.8,
    isStock: false,
    mentorName: "John Mathews",
  },
];
