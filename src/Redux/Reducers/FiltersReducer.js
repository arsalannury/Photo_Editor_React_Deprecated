import { createSlice } from "@reduxjs/toolkit";



const states = {
    filter : null,
};


const FiltersSlice = createSlice({
    name : 'filtersSlice',
    initialState : states,
    reducers : {
        setFilter : (state,action) => {
            return {
                ...state,
                filter : action.payload
            }
        }
    }
})

export default FiltersSlice.reducer;
export const {setFilter} = FiltersSlice.actions;