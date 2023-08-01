import React, { useEffect } from "react";
import "./recipe-booking-app.css";
import { useDispatch, useSelector } from "react-redux";
import { recipeBook } from "../../redux/action/recipeBookAction";

const RecipeBookingApp = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.recipeBookReducer);
  console.log(data, "main");
  return <div onClick={() => dispatch(recipeBook())}>RecipeBookingApp</div>;
};

export default RecipeBookingApp;
