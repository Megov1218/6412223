import React from "react";
import "./App.css";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import { books } from "./data/books";
import { blogs } from "./data/blogs";
import { courses } from "./data/courses";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="App">
      <div className="container">
        {showBooks && (
          <div className="column">
            <h1>Book Details</h1>
            <BookDetails books={books} />
          </div>
        )}

        {showBlogs ? (
          <div className="column">
            <h1>Blog Details</h1>
            <BlogDetails blogs={blogs} />
          </div>
        ) : (
          <p>No blogs available</p>
        )}

        {showCourses ? (
          <div className="column">
            <h1>Course Details</h1>
            <CourseDetails courses={courses} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
