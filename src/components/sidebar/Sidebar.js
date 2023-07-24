import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../store/sidebar";

const Sidebar = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state) => state?.sideBar?.isOpen);
  return (
    <div className={`sidebarContainer ${expand ? "isOpen" : ""}`}>
      <div
        className="sidebartrigger"
        style={{ justifyContent: expand ? "end" : "center" }}
        onClick={() => dispatch(toggleOpen(!expand))}
      >
        <BsChevronDoubleRight
          color="white"
          size="1.5rem"
          style={{
            transform: expand ? " rotate(180deg)" : "rotate(0deg)",
            transition: ".5s ",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
