import { combineReducers } from "redux";
import FilterValuesCombine from "./FilterValuesCombine";
import UiReducersCombine from '../Combines/UiReducersCombine';
import FiltersCombine from "./FiltersCombine";

export default combineReducers({
    FilterValuesCombine,
    UiReducersCombine,
    FiltersCombine
})