import React from "react";
import Base from "./Base";
import Header from "./Header";
import Decsription from "./Description";
import "./style.css";
import Action from "./Action";
import { useDispatch, useSelector } from "react-redux";
import { unsetActionHandler } from "../handlers/Handlers";
const ENTRY = "ENTRY";
const OUTRY = "OUTRY";

const Canvas = () => {
  const dispatch = useDispatch();
  const viewBox = [-30, -50, 300, 300];

  let entryArray = useSelector((state) => state.entryEvents);
  let outryArray = useSelector((state) => state.outryEvents);

  const cont = entryArray.map((item) => (
    <Action
      key={item.id}
      Component={"circle"}
      id={item.id}
      title={item.title}
      fill={"#CCFF66"}
      type={ENTRY}
      x={20}
      cy={item.cy}
      y={item.y}
      func={unsetActionHandler}
      dispatch={dispatch}
    />
  ));

  const cont2 = outryArray.map((item) => (
    <Action
      key={item.id}
      Component={"circle"}
      id={item.id}
      title={item.title}
      fill={"yellow"}
      type={OUTRY}
      x={160}
      cy={item.cy}
      y={item.y}
      func={unsetActionHandler}
      dispatch={dispatch}
    />
  ));

  return (
    <svg
      overflow={"hidden"}
      width="400"
      height="400"
      viewBox={viewBox}
    >
      {cont}
      {cont2}
      <Action
        Component={"circle"}
        cx={210}
        cy={75}
        fill={"yellow"}
        title={"example entry"}
        x={160}
        y={80}
        type={OUTRY}
        id={2}
        func={() => alert("you can not delete a default element")}
      />
      <Action
        Component={"circle"}
        cx={10}
        cy={55}
        fill={"#CCFF66"}
        title={"example outry"}
        x={20}
        y={60}
        type={ENTRY}
        id={1}
        func={() => alert("you can not delete a default element")}
      />
      <Decsription fill={"#979797"} />
      <Header fill={"white"} />

      <Base />
    </svg>
  );
};

export default Canvas;
