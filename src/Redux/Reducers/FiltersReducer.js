import { createSlice } from "@reduxjs/toolkit";

const states = {
  filter: null,
  filterTitle: "filterName",
  filterModel: "",
  rangeInput: "0",
  maxRangeInput: "100",
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
    setFilterModel: (state, action) => {
      if (action.payload === "Blur") {
        return {
          ...state,
          filterModel: "px",
          maxRangeInput: "100",
        };
      } else if (action.payload === "Hue-Rotate") {
        return {
          ...state,
          filterModel: "deg",
          maxRangeInput: "100",
        };
      } else {
        return {
          ...state,
          filterModel: "",
          maxRangeInput:
            action.payload === "Sepia" ||
            action.payload === "Opacity" ||
            action.payload === "Grayscale"
              ? "1"
              : "5",
        };
      }
    },
  },
});

export default FiltersSlice.reducer;
export const { setFilter, setFilterTitle, setFilterModel, setRangeValue } =
  FiltersSlice.actions;
