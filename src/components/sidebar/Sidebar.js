import React, { useState } from "react";
import "./sidebar.css";
import DoubleArrowIcon from "../../assets/images/chevrons-right.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`sidebar_wrap`}
      style={{ width: isOpen ? "14rem" : "3.4rem" }}
    >
      <div className="sidebar_toggle_block">
      <img
        src={DoubleArrowIcon}
        className="sidebar_toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ transform: isOpen ? "rotate(180deg)" : "" }}
      />
      </div>
     
     <div className="sidebar_list">
      <li>
        Accordion
      </li>
     </div>
    </div>
  );
};

export default Sidebar;
