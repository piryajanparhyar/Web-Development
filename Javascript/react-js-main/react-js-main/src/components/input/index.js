import React from "react";
// const Input = (props) => {
const Input = ({
  title,
  type = "text",
  placeholder = "Enter",
  value,
  onChange,
}) => {
  return (
    <div style={{ border: "1px solid blue", margin: "5px", padding: "5px" }}>
      <p>Title :- {title}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
