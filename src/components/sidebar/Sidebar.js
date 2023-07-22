import React, { useState } from "react";
import "./sidebar.css";
import { BsChevronDoubleRight } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sidebarContainer ${isOpen ? "isOpen" : ""}`}>
      <div
        className="sidebartrigger"
        style={{ justifyContent: isOpen ? "end" : "center" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsChevronDoubleRight
          color="white"
          size="1.5rem"
          style={{
            transform: isOpen ? " rotate(180deg)" : "rotate(0deg)",
            transition: ".5s ",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
