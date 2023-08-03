import React, { useState } from "react";
import "./recipe-booking-app.css";
import parse from "html-react-parser";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";

const Card = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    image,
    title,
    summary,
    instructions,
    dishTypes,
    spoonacularSourceUrl,
  } = data;
  const parse = require("html-react-parser");
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <Modal isOpen={openModal} setIsClose={setOpenModal}>
        {instructions && (
          <p className="instructionWrap">{parse(instructions)}</p>
        )}
      </Modal>

      <div className="cardTitleWrapper">
        <div className="forintruction">
          <div className="cardImgWrap">
            <img src={image} className="mainImage" alt="image" />
          </div>
          <div className="cardTitle">
            <h1>{title}</h1>
            <div>
              {dishTypes.map((dish, index) => {
                return (
                  <li className="cardDishName" key={index}>
                    {dish}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <div className="cardIntruction">
          <Button
            value="View Instructions"
            className="green"
            handleClick={() => setOpenModal(true)}
          />
        </div>
      </div>

      <div className="cardSummary">
        <p>
          <strong>Summary: </strong> {parse(summary)}
        </p>
      </div>
      <div className="viewRecipeWrap">
        <button className="button">
          <a
            href={spoonacularSourceUrl}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            View Recipe
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
