import {
  setComponentData,
  addEventHandlerAC,
  removeEventHandlerAC,
  changePointAC,
} from "../redux/action";
const ENTRY = "ENTRY";
const OUTRY = "OUTRY";
export const SetActionTitleHandler = (
  type,
  title,
  dispatch,
  entryPoints,
  outryPoints,
  cy,
  y
) => {
  if (type === ENTRY) {
    dispatch(addEventHandlerAC(title, cy, y, ENTRY));
    dispatch(changePointAC(entryPoints.y + 10, entryPoints.cy + 10, ENTRY));
  } else {
    dispatch(addEventHandlerAC(title, outryPoints.cy, outryPoints.y, OUTRY));
    dispatch(changePointAC(outryPoints.y + 20, outryPoints.cy + 20, OUTRY));
  }
  return 0;
};

export const SetData = (title, description, dispatch) => {
  dispatch(setComponentData(title, description));
};

export const unsetActionHandler = (type, id, dispatch) => {
  dispatch(removeEventHandlerAC(id, type));
};
export const InputHandler = ({ func, text }) => {
  return (
    <input
      type="text"
      placeholder={text}
      maxLength={30}
      minLength={5}
      onChange={(e) => func(e.target.value)}
    />
  );
};
