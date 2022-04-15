import { combineReducers } from "redux";
import UiReducers from '../Reducers/UiReducers'
import ImageReducer from "../Reducers/ImageReducer";

export default combineReducers({
    UiReducers,
    ImageReducer
})