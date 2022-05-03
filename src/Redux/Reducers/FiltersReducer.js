import { createSlice } from "@reduxjs/toolkit";


const states = {
  filter: null,
  filterTitle: "filterName",
  filterProperty: "unset",
  rangeInput: "0",
};



const FiltersSlice = createSlice({
  name: "filtersSlice",
  initialState: states,
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    setFilterTitle: (state, action) => {
      return {
        ...state,
        filterTitle: action.payload,
      };
    },
    setRangeValue: (state, action) => {
      return {
        ...state,
        rangeInput: action.payload,
      };
    },
    setFilterPropertyInRange: (state, action) => {
      if (action.payload === "Brightness") {
        return {
          ...state,
          filterProperty: `brightness(${state.rangeInput})`,
        };
      } else if (action.payload === "Contrast") {
        return {
          ...state,
          filterProperty: "contrast(3)",
        };
      } else if (action.payload === "Grayscale") {
        return {
          ...state,
          filterProperty: "grayscale(1)",
        };
      } else if (action.payload === "Opacity") {
        return {
          ...state,
          filterProperty: "opacity(0.5)",
        };
      } else if (action.payload === "Saturate") {
        return {
          ...state,
          filterProperty: "saturate(5)",
        };
      } else if (action.payload === "Sepia") {
        return {
          ...state,
          filterProperty: "sepia(1)",
        };
      } else if (action.payload === "Default") {
        return {
          ...state,
          filterProperty: "unset",
        };
      }
    },
  },
});

export default FiltersSlice.reducer;
export const {
  setFilter,
  setFilterTitle,
  setFilterPropertyInRange,
  setRangeValue,
} = FiltersSlice.actions;
