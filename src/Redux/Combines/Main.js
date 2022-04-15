import { combineReducers } from "redux";
import FilterValuesCombine from "./FilterValuesCombine";
import UiReducersCombine from '../Combines/UiReducersCombine';

export default combineReducers({
    FilterValuesCombine,
    UiReducersCombine
})