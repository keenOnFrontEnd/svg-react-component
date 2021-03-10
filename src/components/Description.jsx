import React from "react";
import { useSelector } from "react-redux";
import { adaptiveSize } from "../utils/adaptiveSize";

const Decsription = (props) => {
  let data = useSelector((state) => state.description);
  return (
    <g>
      <text
        className="text-decoration"
        x={adaptiveSize(data)}
        y={40}
        fill={props.fill}
      >
        {data}
      </text>
      <path stroke="#BBBBBB" d="M0 45 l220 0" strokeWidth="1" />
    </g>
  );
};

export default Decsription;
