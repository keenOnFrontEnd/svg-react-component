import React from "react";
import { adaptiveItemTitle } from "../utils/adaptiveSize";
const ENTRY = "ENTRY";

const Action = ({
  Component,
  x,
  y,
  fill,
  title,
  type,
  cy,
  func,
  dispatch,
  ...props
}) => {
    const {id} = props
    const cx = type === ENTRY ? 10 : 210;
    const xx = type === ENTRY ? x : adaptiveItemTitle(title)
  return (
    <g onClick={() => func(type, id,dispatch)}>
      <text x={xx} y={y} className="text-decoration" fill="#646464">
        {title}
      </text>
      <Component cx={cx} cy={cy} r={5} fill={fill}/>;
    </g>
  );
};
export default Action;



