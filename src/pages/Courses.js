import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Courses = () => {
  const courseList = [
    { id: 1, title: "React for Beginners" },
    { id: 2, title: "JavaScript Mastery" },
    { id: 3, title: "Python for Data Science" },
  ];

  return (
    <div className="courses">
      <h2>Our Courses</h2>
      <ul>
        {courseList.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
