import React from "react";
import { useSelector } from "react-redux";
import { adaptiveSize } from "../utils/adaptiveSize";

const Header = props => {
let data = useSelector(state => state.title)

  return (
    <g width={219}>
      <rect
        x={0}
        y={0}
        width={219}
        height={25}
        fill={"#313549"}
        ry={10}
      />
      <rect
      x={0}
      y={6}
      width={219}
      height={20}
      fill={"#313549"}
      />
      <text className="text-decoration" fill={props.fill} y={17} x={adaptiveSize(data)}>
        {data}
      </text>
    </g>
  );
};

export default Header;
