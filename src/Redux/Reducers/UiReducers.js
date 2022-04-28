import { createSlice } from "@reduxjs/toolkit";


const states = {
    transform : 'translateY(400px)',
    overflowFilterSection : 'hidden',
    isFetch : false
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
               overflowFilterSection : state.overflowFilterSection === 'hidden' ? 'auto' : 'hidden'
           }
       },
       showLoading : (state,action) => {
           return {
               ...state,
               isFetch : action.payload
           }
       }
    }
})

export default UiReducersSlice.reducer;
export const {filterShow,overflowShow,showLoading} = UiReducersSlice.actions;