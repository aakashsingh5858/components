import React, { useState } from "react";
import "./accordion.css";
import Arrow from "../../assets/images/chevron-up.svg";
import styled from "styled-components";

const Accordion = ({
  title = "Accordion",
  index,
  children,
  isOpen,
  setIsOpen,
  ...props
}) => {
  const toggle = (index) => {
    console.log(index);
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };
  return (
    <AccordionWrap isOpen={isOpen} index={index}>
      <div className="accordion_btn" onClick={() => toggle(index)}>
        <div className="accordion_title">{title}</div>
        <div>
          <img
            src={Arrow}
            style={{ transform: isOpen === index ? "" : "rotate(180deg)" }}
          />
        </div>
      </div>
      {isOpen === index ? (
        <div className="accrodion_content">{children}</div>
       ) : null} 
    </AccordionWrap>
  );
};

export default Accordion;

const AccordionWrap = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 16px;
  -webkit-box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.54);
  border-radius: 4px 4px 0 0;
  transition: all 0.4s ease-in-out;
  ${(props) => `
   overflow : ${props.isOpen === props.index ? "unset" : "hidden"};
   max-height : ${props.isOpen === props.index ? "100rem" : "3.5rem"}
   
`}
`;
