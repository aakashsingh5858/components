import React, { useState } from "react";
import "./accordion.css";
import Arrow from "../../assets/images/chevron-up.svg";
import styled from "styled-components";

const Accordion = ({title='Accordion', children, isOpen, setIsOpen, ...props }) => {
  return (
    <AccordionWrap isOpen={isOpen}>
      <div className="accordion_btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion_title">{title}</div>
        <div>
          <img
            src={Arrow}
            style={{ transform: isOpen ? "" : "rotate(180deg)" }}
          />
        </div>
      </div>

      <div className="accrodion_content">{children}</div>
    </AccordionWrap>
  );
};

export default Accordion;

const AccordionWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var( --dark);
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  ${(props) => `
   overflow : ${props.isOpen ? "unset" : "hidden"};
   max-height : ${props.isOpen ? "100rem" : "3.5rem"}
`}
`;
