import React from "react";

function BlogDetails({ blogs }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <b>{blog.author}</b>
          <p>{blog.description}</p>
        </div>
      ))}
    </ul>
  );
}

export default BlogDetails;
