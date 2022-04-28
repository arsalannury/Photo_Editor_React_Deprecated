import { createSlice } from "@reduxjs/toolkit";


const states = {
    transform : 'translateY(400px)',
    overflowFilterSection : 'auto',
}

const UiReducersSlice = createSlice({
    name : 'UiReducers',
    initialState : states,
    reducers : {
       filterShow : (state,action) => {
            return {
                ...state,
                transform : state.transform === 'translateY(400px)' ? 'unset' : 'translateY(400px)'
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