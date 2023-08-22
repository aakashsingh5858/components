import React from "react";
import "./button.css";

const Button = ({
  value = "button",
  className = "",
  disabled,
  handleClick,
}) => {
  return (
    <button
      className={`button ${className}`}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
