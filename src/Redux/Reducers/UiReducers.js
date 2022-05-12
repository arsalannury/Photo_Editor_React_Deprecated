import { createSlice } from "@reduxjs/toolkit";


const states = {
    transform : 'translateY(400px)',
    overflowFilterSection : 'hidden',
    isFetch : false,
    showDownloadBtn : false
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
       },
       hideFilterSection : (state,action) => {
           return {
               ...state,
               transform : 'translateY(400px)',
               overflowFilterSection: 'hidden'
           }
       },
       showDownloadBtn: (state,action) => {
           return {
               ...state,
               showDownloadBtn: action.payload
           }
       }
    }
})

export default UiReducersSlice.reducer;
export const {filterShow,overflowShow,showLoading,hideFilterSection,showDownloadBtn} = UiReducersSlice.actions;