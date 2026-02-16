import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page not Found!</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};
export default NotFound;
