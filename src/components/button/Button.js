import React from "react";
import "./button.css";

const Button = ({ value = "button", className = "" }) => {
  return (
    <button className={`button ${className}`} type="button">
      {value}
    </button>
  );
};

export default Button;
