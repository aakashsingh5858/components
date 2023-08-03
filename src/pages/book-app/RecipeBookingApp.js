import React, { useEffect } from "react";
import "./recipe-booking-app.css";
import { useDispatch, useSelector } from "react-redux";
import { recipeBook } from "../../redux/action/recipeBookAction";
import Card from "./card";

const RecipeBookingApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeBook());
  }, []);

  const data = useSelector((state) => state?.recipeBookReducer);
  console.log(data, "data");
  return (
    <div className="recipeBookingContainer">
      {data.map((details, index) => {
        return (
          <div className="cardWrapper" key={index}>
            <Card data={details} />
          </div>
        );
      })}
    </div>
  );
};

export default RecipeBookingApp;
