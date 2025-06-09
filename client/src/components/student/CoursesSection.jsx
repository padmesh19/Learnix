import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {

  const { allCourses } = useContext(AppContext);
  return (
    <div className="sm:px-10 md:px-16 md:pt-16 px-4 pt-10">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to <br /> business and wellness, our courses are crafted to
        deliver results.
      </p>

      <div
        className={`grid grid-cols-1 ${
          allCourses.length > 3
            ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : allCourses.length > 2
            ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            : allCourses.length > 1
            ? "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
            : "sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
        } gap-6 px-4 md:px-0 my-10 md:my-16 justify-items-center`}
      >
        {allCourses.slice(0,8).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/50 shadow-md px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
