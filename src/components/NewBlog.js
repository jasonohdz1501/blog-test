import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const formObj = {
  title: "",
  body: "",
  author: "mario",
  id: "",
};

export const NewBlog = () => {
  const [form, setForm] = useState(formObj);
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const handleForm = (e) => {
    form.id = Date.now();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      setMessage(`The blog with id ${form.id} was added succesfully!`);
      setForm({});
      history.push("/");
    });
  };

  return (
    <div className="form-new-blog">
      <h1 style={{ marginTop: "20px" }}>Add a new Blogs</h1>
      {message && <div className="alert-success">{message}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title:</label>
        <input
          required
          type="text"
          name="title"
          value={form.title}
          onChange={handleForm}
        />
        <label htmlFor="body">Blog Body: </label>
        <textarea
          name="body"
          type="text"
          value={form.body}
          onChange={handleForm}
          required
        ></textarea>
        <label htmlFor="author">Author: </label>
        <select name="author" value={form.author} onChange={handleForm}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="jason">jason</option>
        </select>
        <button type="submit"> Agregar nuevo artículo</button>
      </form>
    </div>
  );
};
