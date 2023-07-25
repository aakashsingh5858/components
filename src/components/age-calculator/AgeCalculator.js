import React, { useState } from "react";
import "./age-calculator.css";
import Input from "../../components/input/Input";
import Button from "../button/Button";

const AgeCalculator = () => {
  const [ageValue, setAgeValue] = useState(null);
  const [calAge, setCalAge] = useState();

  const getAge = (ageValue) => {
    if (ageValue === null) {
      alert("Please enter your birthday");
    } else {
      const currentDate = new Date();
      const bdDate = new Date(ageValue);
      let age = currentDate.getFullYear() - bdDate.getFullYear();
      let month = currentDate.getMonth() - bdDate.getMonth();

      if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < bdDate.getDate())
      ) {
        age--;
      }
      setCalAge(age);
    }
  };
  return (
    <div className="age_calculatorWrap">
      <h2>Age Calculator</h2>
      <h5>Enter you date of birth</h5>
      <Input
        type="date"
        onChange={(e) => setAgeValue(e.target.value)}
        max="2015-01-01 "
      />
      <Button
        value="age calculator "
        className="green"
        handleClick={() => getAge(ageValue)}
      />
      <p>Your age {calAge} years old</p>
    </div>
  );
};

export default AgeCalculator;
