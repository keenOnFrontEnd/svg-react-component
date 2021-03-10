import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../custom/Button";
import { InputHandler, SetActionTitleHandler, SetData } from "../handlers/Handlers";
const ENTRY = "ENTRY";
const OUTRY = "OUTRY";

const FormComponent = () => {
  const dispatch = useDispatch();

  let [entryActTitle, setEntryActTitle] = useState("");
  let [outryActTitle, setOutryActTitle] = useState("");
  let [CTitle, setCTitle] = useState("");
  let [CDescription, setCDesription] = useState("");
  let entryPoints = useSelector((state) => state.entryPoints);
  let outryPoints = useSelector((state) => state.outryPoints);
  const { cy, y } = entryPoints;


  const Handler = (type) =>
    SetActionTitleHandler(
      type === ENTRY ? ENTRY : OUTRY,
      type === ENTRY ? entryActTitle : outryActTitle,
      dispatch,
      entryPoints,
      outryPoints,
      cy,
      y
    );


  let content = (
    <form className="form-container">
      <InputHandler func={setCTitle} text={"put component title, max 30 symbols"}/>
      <InputHandler func={setCDesription} text="put components description, max 30 symbols"/>
      <input
        type="button"
        onClick={() => SetData(CTitle, CDescription, dispatch)}
      />

      <div>
        Entry Action Handler
        <InputHandler func={setEntryActTitle} text="put entry title, max 30 symbols" />
        <CustomButton
          text={"Add"}
          styles="button info"
          func={() => Handler(ENTRY)}
          value={entryActTitle}
        />
      </div>
      <div>
        Outry Action Handler

        <InputHandler func={setOutryActTitle} text="put entry title, max 30 symbols" />
        <CustomButton
          text={"Add"}
          styles="button info"
          func={() => Handler(OUTRY)}
          value={outryActTitle}
        />
      </div>
    </form>
  );

  return <div className="container">{content}</div>;
};

export default FormComponent;
