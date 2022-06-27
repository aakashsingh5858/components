import React, { useState } from "react";
import "./sidebar.css";
import DoubleArrowIcon from "../../assets/images/chevrons-right.svg";
import { Link, useHistory } from "react-router-dom";
import { ACCORDION, ROUTE_ACCORDION } from "../../constants";

const Sidebar = ({isOpen, setIsOpen, ...props}) => {
 
  const [activeClass, setActiveClass] = useState(0)

  let history = useHistory();

  const SIDEBAR_KEY = [
    {
      label: ACCORDION,
      closeLabel: "A",
      route: ROUTE_ACCORDION,
    },
  
  ];

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
        {SIDEBAR_KEY.map((item, i) => {
          return (
            <div key={i}>
              <li
                className={`closelabel`}
                style={{ display: isOpen ? "none" : "block" }}
              >
                {item.closeLabel}
              </li>

              <li
                className={`sidebar_list_item ${
                  i === activeClass ? "sidebar_active" : ""
                }`}
                style={{
                  display: isOpen ? "block" : "none",
                  textDecoration: "none",
                }}
                onClick={() => {
                  history.push("/accordion");
                  setActiveClass(i)
                }}
              >
                {item.label}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
