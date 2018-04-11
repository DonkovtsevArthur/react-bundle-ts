import * as type from "../constants/ActionTypes";

const initialState = "";

export default function filterContext(state = initialState, action) {
  if (action.type === type.FIND_CONTEXT) {
      return action.payload;
  }
  return state;
}
