import React, { useState } from "react";
import DropDown from "../../components/dropDown/dropDown";
import { DROP_DOWN } from "../../constants";
import PageTitle from "../pageTitle";

const DropDownPage = () => {
  const [selected, setSelected] = useState('Select');
  const options = [
    "Audi",
    "BMW",
    "Citroen",
    "Ford",
    "Honda",
    "Jaguar",
    "Land_Rover",
    "Mercedes",
    "Mini",
    "Nissan",
    "Toyota",
    "Volvo",
  ];
  return (
    <div className="pageContainer">
      <PageTitle title={DROP_DOWN} />
      <DropDown
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default DropDownPage;
