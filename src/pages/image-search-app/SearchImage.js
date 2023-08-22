import React, { useState } from "react";
import "./search-image.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Image from "../../assets/images/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { searchImage } from "../../redux/action/searchImage";

const SearchImage = () => {
  const [getInputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(1);
  const dispatch = useDispatch();
  const SearchData = useSelector((state) => state.getSearchImageReducer);
  const handleSearch = () => {
    const payload = {
      getInputValue,
      page: visible,
    };
    dispatch(searchImage(payload));
  };

  const showMoreItem = () => {
    setVisible((preValue) => preValue + 1);
    handleSearch();
  };
  return (
    <div className="searchContainer">
      <h1>image search app</h1>
      <div className="search-feildBlock">
        <div className="searchInput">
          <Input
            type="text"
            placeholder="Search of images..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <Button
          className="green searchBtn"
          value="Search"
          handleClick={() => handleSearch()}
          disabled={getInputValue === ""}
        />
      </div>
      <div className="imageResultWraper">
        {SearchData?.map((item, index) => {
          return (
            <div className="imagesWrapper" key={index}>
              <img src={item.urls.small} />
            </div>
          );
        })}
      </div>
      {SearchData.length > 0 && (
        <div className="showMoreBtn">
          <Button value="Show more" handleClick={showMoreItem} />
        </div>
      )}
    </div>
  );
};

export default SearchImage;
