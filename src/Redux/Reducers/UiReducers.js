import { createSlice } from "@reduxjs/toolkit";

const states = {
    transform : 'unset',
}

const UiReducersSlice = createSlice({
    name : 'UiReducers',
    initialState : states,
    reducers : {
       filterShow : (state,action) => {
            return {
                ...state,
                transform : state.transform === 'unset' ? 'translateY(400px)' : 'unset'
            }
       }
    }
})

export default UiReducersSlice.reducer;
export const {filterShow} = UiReducersSlice.actions;