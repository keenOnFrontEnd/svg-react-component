import React from "react";
import { useSelector } from "react-redux";

const Base = () => {
  const h = useSelector((state) => state.height);

  const rectStyle = {
    fill: "none",
    strokeWidth: 1,
    stroke: "rgb(0,0,0)",
  };
  return (
    <rect
      style={rectStyle}
      x={0}
      y={0}
      width={219}
      height={h}
      rx={10}
      ry={10}
      className="overflow-hidden"
    />
  );
};

export default Base;
