import React, { useRef } from "react";
import "./input.css";

const Input = ({
  label = "label",
  type = "text",
  placeholder = "Enter Value...",
  onChange,
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <label className="inputLabel" onClick={handleClick}>
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;