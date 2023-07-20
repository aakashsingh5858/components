import React from "react";
import "./button.css";

const Button = ({ value = "button", className = "", handleClick }) => {
  return (
    <button
      className={`button ${className}`}
      type="button"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
