import React from "react";
import { Link, useParams } from "react-router-dom";

export const NotFound = () => {
  const { path } = useParams();
  return (
    <div className="not-found">
      <h1>Sorry...</h1>
      <p>{`Unfourtunately the page ${path} you are looking for is not available or doesn't exist`}</p>
      <span>
        <Link to="/">Back to home...</Link>
      </span>
    </div>
  );
};
