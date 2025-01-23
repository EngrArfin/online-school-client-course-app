import Header from "../components/Home/Header/Header";
import CourseCategory from "../components/Home/CourseCategory/CourseCategory";
import CourseData from "../components/Home/Course/CourseData";

export default function Home() {
  return (
    <div>
      <Header />
      <CourseCategory />
      <CourseData />
    </div>
  );
}
