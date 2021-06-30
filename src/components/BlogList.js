import React from "react";
import { Link } from "react-router-dom";

export const BlogList = ({ handleDelete, blogs, title, message }) => {
  const styleComponent = {
    paddingBottom: "8px",
    borderBottom: "1px dashed #41463D",
  };

  return (
    <div>
      <h2>{title}</h2>
      {message && <div>{message}</div>}
      {blogs.map((blog) => {
        return (
          <div className="container-blogs" key={blog.id}>
            <div className="container-info">
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p style={styleComponent}>
                  {blog.body.split().length > 300
                    ? blog.body
                    : blog.body.slice(0, 100) + "..."}
                </p>
                <em>Writen by: {blog.author}</em>
              </Link>
            </div>
            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          </div>
        );
      })}
    </div>
  );
};
