
import {
  SET_COMPONENT_DATA,
  ADD_ENTRY_EVENT,
  ADD_OUTRY_EVENT,
  REMOVE_ENTRY_EVENT,
  REMOVE_OUTRY_EVENT,
  CHANGE_ENTRY_POINT,
  CHANGE_OUTRY_POINT,
} from "./action";

const initialState = {
  title: "Test title",
  description: "Test description",
  entryEvents: [],
  outryEvents: [],
  height: 95,
  entryPoints: {
    cy: 75,
    y: 80
  },
  outryPoints: {
    cy: 95,
    y: 100
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPONENT_DATA:
      console.log(action.payload)
      return {
        ...state,
        title: state.title = action.payload.title,
        description: state.title = action.payload.description,
      };
    case ADD_ENTRY_EVENT:
      return {
        ...state,
        entryEvents: [...state.entryEvents, action.payload],
        height: state.height + 20,
       
      };
    case ADD_OUTRY_EVENT:
      return {
        ...state,
        outryEvents: [...state.outryEvents, action.payload],
        height: state.height + 20
      };
    case REMOVE_ENTRY_EVENT:
      return {
        ...state,
        entryEvents: [...state.entryEvents.filter((item) => item.id !== action.payload.id)],
        height: state.height - 20,
        entryPoints: {
          cy: state.entryPoints.cy - 20,
          y: state.entryPoints.y - 20
        }
      };
    case REMOVE_OUTRY_EVENT:
      return {
        ...state,
        outryEvents: [...state.outryEvents.filter((item) => item.id !== action.payload.id)],
        height: state.height - 20,
        outryPoints: {
          cy: state.outryPoints.cy - 20,
          y: state.outryPoints.y - 20
        }
      };
    case CHANGE_ENTRY_POINT:
      return {
        ...state,
        entryPoints: {
          cy: state.entryPoints.cy + 20,
          y: state.entryPoints.y + 20
        }
      }
      case CHANGE_OUTRY_POINT:
        return {
          ...state,
          outryPoints: {
            cy: state.outryPoints.cy + 20,
            y: state.outryPoints.y + 20
          }
        }

    default:
      return state;
  }
};
