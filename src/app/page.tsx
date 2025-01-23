import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/src/config/site";
import { title } from "@/src/components/primitives";
import Header from "../components/Home/Header/Header";
import CourseCategory from "../components/Home/CourseCategory/CourseCategory";

export default function Home() {
  return (
    <div>
      <Header />
      <CourseCategory />
    </div>
  );
}
