import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    character: [],

};

export const CharacterSlice = createSlice ({
    name: "character",
    initialState,
    reducers: {},

});

export default CharacterSlice.reducer