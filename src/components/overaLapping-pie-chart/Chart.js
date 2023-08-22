import React from "react";

const ConcentricCircles = ({ numCircles, minRadius, step }) => {
  const circles = [];
  for (let i = 0; i < numCircles; i++) {
    const radius = minRadius + i * step;
    circles.push(
      <circle
        key={i}
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke="black"
        strokeWidth="2"
      />
    );
  }

  return (
    <svg width="200" height="200">
      {circles}
    </svg>
  );
};

export default ConcentricCircles;
