import { combineReducers } from "redux";
import postActionReducer from "./postActionReducer";


export default combineReducers({
    post:postActionReducer
});
