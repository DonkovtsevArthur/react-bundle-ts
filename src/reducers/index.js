import * as type from "../constants/ActionTypes";

const initialState = ["Go", "Well"];

function addFreind(state = initialState, action) {
  switch (action.type) {
    case type.ADD_NEW:
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
}

export default addFreind;
