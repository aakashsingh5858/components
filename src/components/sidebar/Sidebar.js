import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { FcTodoList } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import ROUTES from "../../routes/Contstants";
import { useNavigate } from "react-router-dom";
import { activeSideBar } from "../../redux/action/sidebarAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const expand = useSelector((state) => state.sideBarReducer);
  console.log(expand, "expand");
  const navigate = useNavigate();
  const list = [
    {
      label: "home",
      icon: <FcHome size="1.5rem" />,
      route: ROUTES.HOME,
    },
    {
      label: "recipe book app",
      icon: <FcTodoList size="1.5rem" />,
      route: ROUTES.BOOK_APP,
    },
  ];
  return (
    <div className={`sidebarContainer ${expand ? "isOpen" : ""}`}>
      <div
        className="sidebartrigger"
        style={{ justifyContent: expand ? "end" : "center" }}
        onClick={() => dispatch(activeSideBar(!expand))}
      >
        <BsChevronDoubleRight
          color="black"
          size="1.5rem"
          style={{
            transform: expand ? " rotate(180deg)" : "rotate(0deg)",
            transition: ".5s ",
            cursor: "pointer",
          }}
        />
      </div>
      <div>
        {list.map((item, index) => {
          return (
            <div key={index} className={expand ? "listBlock" : ""}>
              <li className={expand ? "list" : "list-icon"}>
                <span>{item.icon}</span>
                {expand ? (
                  <label onClick={() => navigate(item.route)}>
                    {item.label}
                  </label>
                ) : (
                  ""
                )}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
