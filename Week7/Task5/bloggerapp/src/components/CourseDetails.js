import React from "react";

function CourseDetails({ courses }) {
  return (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </ul>
  );
}

export default CourseDetails;
