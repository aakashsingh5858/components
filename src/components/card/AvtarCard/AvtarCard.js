import React from "react";
import { MUI_THEME } from "../../../assets/css/theme";
import "./avtarCard.css";

const AvtarCard = ({ name, index, ...props }) => {
  const colorArray = [
    {
      front: MUI_THEME.palette.info.dark,
      back: MUI_THEME.palette.info.light,
    },
    {
      front: MUI_THEME.palette.accent.dark,
      back: MUI_THEME.palette.accent.light,
    },
    {
      front: MUI_THEME.palette.tertiary.dark,
      back: MUI_THEME.palette.tertiary.light,
    },
    {
      front: MUI_THEME.palette.tertiary1.dark,
      back: MUI_THEME.palette.tertiary1.light,
    },
  ];

  const firstLetter = name !== null ? name.toUpperCase().charAt(0) : "";
  const colorIndex = index % 4;
  return (
    <div
      className="avtarCardContainer"
      style={{ backgroundColor: colorArray[colorIndex].back }}
    >
      <div
        style={{
          backgroundColor: colorArray[colorIndex].front,
        }}
        className="avtarCardblock"
      >
        {firstLetter}
      </div>
    </div>
  );
};

export default AvtarCard;
