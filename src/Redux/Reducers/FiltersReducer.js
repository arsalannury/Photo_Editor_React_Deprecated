import { createSlice } from "@reduxjs/toolkit";



const states = {
    filter : null,
    filterTitle : 'filterName'
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
        },
        setFilterTitle: (state,action) => {
            return {
                ...state,
                filterTitle : action.payload
            }
        }
    }
})

export default FiltersSlice.reducer;
export const {setFilter,setFilterTitle} = FiltersSlice.actions;