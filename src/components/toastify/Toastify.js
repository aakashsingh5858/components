import React, { useState } from "react";
import './toastify.css'

const Toastify = ({message='Successfully Updated', ...props}) => {
    const [toggleToastify, setToggleToastify] = useState(true)
  return (
    <div>
        {
            toggleToastify ?  <div className={`toggleToastify && show`} id="snackbar">{message}</div> : ''
        }
     
    </div>
  );
};

export default Toastify;
