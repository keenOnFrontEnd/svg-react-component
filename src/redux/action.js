export const ADD_ENTRY_EVENT = "ADD_ENTRY_EVENT";
export const REMOVE_ENTRY_EVENT = "REMOVE_ENTRY_EVENT";
export const ADD_OUTRY_EVENT = "ADD_OUTRY_EVENT";
export const REMOVE_OUTRY_EVENT = "REMOVE_OUTRY_EVENT";
export const SET_COMPONENT_DATA = "SET_COMPONENT_DATA";
export const CHANGE_ENTRY_POINT = "CHANGE_ENTRY_POINT";
export const CHANGE_OUTRY_POINT = "CHANGE_OUTRY_POINT";
const ENTRY = "ENTRY";

const ID = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const addEventHandlerAC = (title, cy, y, type) => {
  if (type === ENTRY) {
    return {
      type: ADD_ENTRY_EVENT,
      payload: { title, id: ID(), cy, y },
    };
  } else {
    return {
      type: ADD_OUTRY_EVENT,
      payload: { title, id: ID(), cy, y },
    };
  }
};
export const setComponentData = (title, description) => {
  return { type: SET_COMPONENT_DATA, payload: { title, description } };
};

export const removeEventHandlerAC = (id, type) => {
  if (type === ENTRY) {
    return {
      type: REMOVE_ENTRY_EVENT,
      payload: { id },
    };
  } else {
    return {
      type: REMOVE_OUTRY_EVENT,
      payload: { id },
    };
  }
};

export const changePointAC = (y,cy,type) => {
  if(type === ENTRY) {
    return { type: CHANGE_ENTRY_POINT, payload: { y, cy } }
  }else {
    return { type: CHANGE_OUTRY_POINT, payload: { y, cy } };
  }
} 