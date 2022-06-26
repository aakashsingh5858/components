import React, { useState } from "react";
import "./sidebar.css";
import DoubleArrowIcon from "../../assets/images/chevrons-right.svg";
import { useHistory } from "react-router-dom";
import { ACCORDION, ROUTE_ACCORDION } from "../../constants";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <>
              <li
                className={`closelabel`}
                style={{ opacity: isOpen ? "0" : "1" }}
              >
                {item.closeLabel}
              </li>
              <li
                key={i}
                className="sidebar_list_item"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {item.label}
              </li>
              ;
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
