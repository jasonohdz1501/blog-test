import { useState } from "react";
import { BlogList } from "./BlogList";
import useFetch from "./useFetch";

export const Home = () => {
  const [message, setMessage] = useState(null);

  const {
    data: blogs,
    isLoading,
    error,
    setData,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    setData(blogs.filter((blog) => blog.id !== id));
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() =>
      setMessage(`The article with id ${id} has been removed succesfully`)
    );
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          handleDelete={handleDelete}
          title="All blogs!"
          message={message}
        />
      )}
    </div>
  );
};
