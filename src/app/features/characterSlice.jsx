import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("characters/fetchData", async () => {
  try {
    const Url_path = "https://rickandmortyapi.com/api/character";
    const res = await fetch(Url_path);
    const characterData = await res.json();
    return characterData;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  characters: [],
  status: "",
  error : ""
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const selectData = (state) => state.characters.characters?.results;
export const selectStatusData = (state) => state.characters.status;
export default characterSlice.reducer

