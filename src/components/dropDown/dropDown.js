import React, { useState } from "react";
import "./dropdown.css";
import SelectIcon from "../../assets/images/selectIcon.jpeg";
import Toastify from "../toastify/Toastify";

const DropDown = ({ setSelected, selected, options, ...props }) => {
  const [dropOption, setDropOption] = useState(false);
  return (
    <>
      <Toastify />
      <div className="drop_down_wrap">
        <div
          className="drop_down_btn"
          onClick={() => setDropOption(!dropOption)}
        >
          {selected}
          <img src={SelectIcon} />
        </div>
        {dropOption && (
          <div className="drop_down_option">
            {options.map((option, i) => {
              return (
                <div
                  className="drop_down_items"
                  onClick={(e) => {
                    setSelected(e.target.textContent);

                    setDropOption(false);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
