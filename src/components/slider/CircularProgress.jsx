/*

import React, { useState, useEffect } from "react";

const CircularProgress = ({ radius, strokeWidth, progress, text }) => {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const [offset, setOffset] = useState(circumference);

  // useEffect(() => {
  //   const progressAnimation = () => {
  //     setOffset(circumference - (progress / 100) * circumference);
  //   };

  //   progressAnimation();
  // }, [progress, circumference]);

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        stroke="#ccc"
        fill="none"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#008000"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeLinecap="round"
      />
      <text x="50%" y="50%" textAnchor="middle" fontSize="18">
        {text}
      </text>
    </svg>
  );
};

export default CircularProgress;
*/

import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

const CircularProgress = ({ percentage, text }) => {
  return (
    <div style={{ width: "50px" }}>
      <CircularProgressbar
        value={percentage}
        text={text}
        strokeWidth={8}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e., the "completed progress"
          path: {
            stroke: `rgba(62, 152, 199, ${percentage / 100})`,
            strokeLinecap: "butt",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          // Customize the text
          text: {
            fill: "gray",
            fontSize: "30px",
            fontWeight: "500",
          },
          // Customize background - the trail
          trail: {
            stroke: "#d6d6d6",
          },
          path: {
            // Path color
            stroke: `green`,
          },
        }}
      />
    </div>
  );
};

export default CircularProgress;
