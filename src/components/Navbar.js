import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Dev Blog</h1>
      <Link to="/">Home</Link>
      <Link
        to="/create"
        style={{
          color: "#fff",
          backgroundColor: "#9D8DF1",
          borderRadius: "9px",
        }}
      >
        New Blog
      </Link>
    </div>
  );
};
