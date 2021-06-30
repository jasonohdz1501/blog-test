import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

export const BlogDetail = () => {
  const history = useHistory();

  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="container-detail-blog">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </article>
      )}
    </>
  );
};
