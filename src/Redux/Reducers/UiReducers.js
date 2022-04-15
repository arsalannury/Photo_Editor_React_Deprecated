import { createSlice } from "@reduxjs/toolkit";

const states = {
    transform : 'unset',
    overflowFilterSection : 'auto',
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
       },
       overflowShow : (state,action) => {
           return {
               ...state,
               overflowFilterSection : state.overflowFilterSection === 'auto' ? 'hidden' : 'auto'
           }
       }
    }
})

export default UiReducersSlice.reducer;
export const {filterShow,overflowShow} = UiReducersSlice.actions;