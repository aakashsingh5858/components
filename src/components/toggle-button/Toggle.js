import React from "react";
import "./toggle.css";

const Toggle = ({ onChange }) => {
  return (
    <div className="check-box">
      <input type="checkbox" onChange={(e) => onChange(e.target.checked)} />
    </div>
  );
};

export default Toggle;
