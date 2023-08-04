import React from "react";
import "./search-image.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Image from "../../assets/images/img.jpg";

const SearchImage = () => {
  return (
    <div className="searchContainer">
      <h1>image search app</h1>
      <div className="search-feildBlock">
        <div className="searchInput">
          <Input type="text" placeholder="Search of images..." />
        </div>
        <Button className="green searchBtn" value="Search" />
      </div>
      <div>
        {Array.from("shdhdjh").map(() => {
          return (
            <div>
              <img
                src={Image}
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchImage;
