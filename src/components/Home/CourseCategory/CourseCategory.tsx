"use client";
import physic from "../../../ui/image/p-category.jpg";
import { Button } from "@heroui/button";
import { Card, CardFooter, Link, Image, Divider } from "@heroui/react";

const categories = [
  {
    id: 1,
    title: "Physics",
    courses: 25,
    image: physic.src,
    link: "https://softmax.com/physics",
  },
  {
    id: 2,
    title: "Mathematics",
    courses: 30,
    image: physic.src,
    link: "https://softmax.com/mathematics",
  },
  {
    id: 3,
    title: "Chemistry",
    courses: 20,
    image: physic.src,
    link: "https://softmax.com/chemistry",
  },
  {
    id: 4,
    title: "Biology",
    courses: 15,
    image: physic.src,
    link: "https://softmax.com/biology",
  },
  {
    id: 5,
    title: "Computer Science",
    courses: 18,
    image: physic.src,
    link: "https://softmax.com/computer-science",
  },
  {
    id: 6,
    title: "Economics",
    courses: 22,
    image: physic.src,
    link: "https://softmax.com/economics",
  },
  {
    id: 7,
    title: "History",
    courses: 12,
    image: physic.src,
    link: "https://softmax.com/history",
  },
  {
    id: 8,
    title: "Language Arts",
    courses: 10,
    image: physic.src,
    link: "https://softmax.com/language-arts",
  },
];

const CourseCategory = () => {
  return (
    <div className="min-h-screen p-6 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Browse By Categories</h1>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md">
          All Categories
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card
            key={category.id}
            className='p-4 
              darkMode ? "bg-gray-700" : "bg-white"
            } shadow-md rounded-lg'
          >
            <div className="flex justify-center mb-4">
              <Image
                className="rounded-full"
                alt={category.title}
                src={category.image}
                height={100}
                width={100}
              />
            </div>
            <Divider className="mb-4" />
            <h2 className="text-center text-xl font-semibold">
              {category.title}
            </h2>
            <CardFooter className="mt-4 flex justify-center">
              <Link
                isExternal
                href={category.link}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                {category.courses} Courses
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
