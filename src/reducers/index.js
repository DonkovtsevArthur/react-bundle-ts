import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';


import addFriend from './addFriend';
import addNewPeople from "./addNewPeople";
import filter from "./filter";

export default combineReducers({
    routing: routerReducer,
    addFriend,
    addNewPeople,
    filter
});
