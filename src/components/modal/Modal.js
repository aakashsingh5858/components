import React from "react";
import "./modal.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, setIsClose, ...props }) => {
  return (
    <>
      {isOpen && (
        <div className="modal_background">
          <div className="modal_container">
            <div className="closeIconWrap">
              <p className="closeIcon" onClick={() => setIsClose(false)}>
                <IoClose size="2rem" color="#fff" />
              </p>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
