import { createSlice } from "@reduxjs/toolkit";



const states = {
    filter : null,
    filterTitle : 'filterName',
    filterProperty : 'unset'
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
        },
        setFilterPropertyInRange : (state,action) => {
            return {
                ...state,
                filterProperty : () => {
                    if(action.payload === 'Brightness'){
                        return "brightness(5)"
                    }
                }
            }
        }
    }
})

export default FiltersSlice.reducer;
export const {setFilter,setFilterTitle,setFilterPropertyInRange} = FiltersSlice.actions;