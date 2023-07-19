import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loaderContainer">
      <section className="section--white ">
        <div className="loader--spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Loader;
