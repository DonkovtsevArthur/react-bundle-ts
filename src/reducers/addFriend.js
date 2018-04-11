import * as type from "../constants/ActionTypes";

const initialState = [
  {
    id: 1,
    name: "Arthur"
  },
  {
    id: 2,
    name: "Nasty"
  }
];

export default function addFriend(state = initialState, action) {
  switch (action.type) {
    case type.ADD_NEW:
      return [...state, action.payload];
    case type.GET_LIST:
      return action.payload;
    default:
      return state;
      break;
  }
}
