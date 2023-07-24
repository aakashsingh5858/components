import React, { useRef } from "react";
import "./input.css";

const Input = ({
  label = "label",
  type = "text",
  placeholder = "Enter Value...",
  onChange,
  min,
  value,
  ...props
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
        min={min}
        {...props}
        value={value}
      />
    </div>
  );
};

export default Input;
