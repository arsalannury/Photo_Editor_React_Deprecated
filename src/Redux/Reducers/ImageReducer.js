import { createSlice } from "@reduxjs/toolkit";

const imageStates = {
    currentImage : '',
    isChange : false
}


const imageSlice = createSlice({
    name : 'imageSlice',
    initialState : imageStates,
    reducers : {
        setImage : (state,action) => {
            return {
                ...state,
                currentImage : state.currentImage = action.payload
            }
        },
        imageChanged : (state,action) => {
            return {
                ...state,
                isChange : state.isChange = true
            }
        }
    }
})

export default imageSlice.reducer;
export const {setImage} = imageSlice.actions;