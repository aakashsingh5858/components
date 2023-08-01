import React from "react";
import "./loader.css";
import { useSelector } from "react-redux";

const Loader = () => {
  const loading = useSelector((state) => state?.loaderState);
  
  return loading ? (
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
  ) : (
    <span />
  );
};

export default Loader;
