import React from "react";
import "./input.css";

const Input = ({ label = "label", type = "text" }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={label} />
    </div>
  );
};

export default Input;
