import React, { useRef } from "react";
import "./input.css";

const Input = ({
  label = "label",
  type = "text",
  placeholder = "Enter Value...",
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
      <input ref={inputRef} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
