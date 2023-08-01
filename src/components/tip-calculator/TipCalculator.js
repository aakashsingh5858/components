import React, { useState } from "react";
import "./tip-calculator.css";
import Input from "../input/Input";
import Button from "../button/Button";
import cloneDeep from "lodash.clonedeep";
import { useDispatch } from "react-redux";
import { activeLoader } from "../../redux/action/loaderAction";

const TipCalculator = () => {
  const [getValue, setValue] = useState({
    bill: "",
    tip: "",
  });
  const [totalValue, setTotalValue] = useState(0);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const handleNumber = (e, key) => {
    let amount = cloneDeep(getValue);
    amount[key] = e.target.value;
    setValue(amount);
  };

  const calculateValue = () => {
    if (validateField()) {
      dispatch(activeLoader(true));
      setTimeout(() => {
        const billvalue = getValue.bill;
        const tipValue = getValue.tip;
        const totalValue = billvalue * (1 + tipValue / 100);
        const fixedValue = totalValue.toFixed(2);
        setTotalValue(fixedValue);
        dispatch(activeLoader(false));
        setValue({
          bill: "",
          tip: "",
        });
      }, 500);
    }
  };

  const validateField = () => {
    let err = {};
    if (getValue.bill === "") {
      err.bill = "Please Enter Bill Amount";
      err.billError = true;
    }
    if (getValue.tip === "") {
      err.tip = "Please Enter Tip Amount";
      err.tipError = true;
    }
    setError({ ...err });
    return Object.keys(err).length < 1;
  };

  return (
    <div className="tipCalculatorContainer">
      <h2>Tip Calculator</h2>
      <h5>Enter the amount and tip percentage to calculator the total.</h5>
      <Input
        type="number"
        label="bill amount:"
        min="0"
        onChange={(e) => handleNumber(e, "bill")}
        value={getValue.bill}
      />
      <span className="errorSpan">{error.bill}</span>
      <Input
        type="number"
        label="tip percentage:"
        min="0"
        onChange={(e) => handleNumber(e, "tip")}
        value={getValue.tip}
      />
      <span className="errorSpan">{error.tip}</span>
      <Button
        value="Calculate"
        className="green"
        handleClick={calculateValue}
      />
      <span>Total: {totalValue}</span>
    </div>
  );
};

export default TipCalculator;
