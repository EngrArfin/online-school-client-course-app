"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import card1 from "../../../ui/image/card1.jpg";

const CourseData = () => {
  const cards = [
    {
      title: "Computer Science",
      subtitle: "Lesson 1 | 40h | Students 100+",
      image: card1,
      price: 80,
      originalPrice: 150,
    },
    {
      title: "Mathematics for Engineers",
      subtitle: "Lesson 6 | 50h | Students 80+",
      image: card1,
      price: 90,
      originalPrice: 160,
    },
    {
      title: "Basic Chemistry Concepts",
      subtitle: "Lesson 3 | 30h | Students 120+",
      image: card1,
      price: 70,
      originalPrice: 130,
    },
    {
      title: "Physics for Beginners",
      subtitle: "Lesson 2 | 25h | Students 75+",
      image: card1,
      price: 60,
      originalPrice: 110,
    },
    {
      title: "Digital Marketing ",
      subtitle: "Lesson 4 | 35h | Students 90+",
      image: card1,
      price: 85,
      originalPrice: 150,
    },
    {
      title: "Web Development/React",
      subtitle: "Lesson 7 | 45h | Students 200+",
      image: card1,
      price: 100,
      originalPrice: 180,
    },
    {
      title: "Data Science Python",
      subtitle: "Lesson 8 | 60h | Students 250+",
      image: card1,
      price: 120,
      originalPrice: 200,
    },
    {
      title: "Writing for Beginners",
      subtitle: "Lesson 5 | 40h | Students 50+",
      image: card1,
      price: 75,
      originalPrice: 140,
    },
    {
      title: "Artificial Intelligence ",
      subtitle: "Lesson 10 | 70h | Students 300+",
      image: card1,
      price: 150,
      originalPrice: 250,
    },
    {
      title: "Business Administration ",
      subtitle: "Lesson 9 | 50h | Students 100+",
      image: card1,
      price: 95,
      originalPrice: 160,
    },
    {
      title: "Introduction to Economics",
      subtitle: "Lesson 3 | 20h | Students 60+",
      image: card1,
      price: 70,
      originalPrice: 120,
    },
    {
      title: "Photography Techniques ",
      subtitle: "Lesson 4 | 30h | Students 80+",
      image: card1,
      price: 60,
      originalPrice: 110,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedCourses = showAll ? cards : cards.slice(0, 8);

  return (
    <div className="bg-defult-100 py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Playlist Course</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedCourses.map((card, index) => (
            <CourseCard key={index} {...card} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseData;
