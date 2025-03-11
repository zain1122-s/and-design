import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("characters/fetchData", async ({ page = 1 }) => {
  try {
    const Url_path = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const res = await fetch(Url_path);
    const characterData = await res.json();
    return characterData;
  } catch (error) {
    throw error;
  }
});

export const fetchCardData = createAsyncThunk("character/fetchCardData", async ({ id }) => {
  try {
    const url_link = `https://rickandmortyapi.com/api/character/${id}`;
    const res = await fetch(url_link);
    const cardData = await res.json();
    return cardData;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  characters: [],
  singleCharacter: {},
  status: "",
  error: "",
  pagination: {
    count: 0,
    page: 0,
    prev: "",
    next: "",
  },
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
        state.pagination = {
          count: action.payload.info?.count,
          page: action.payload.info?.page,
          prev: action.payload.info?.prev,
          next: action.payload.info?.next,
        };
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchCardData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleCharacter = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});
export const { addRecentlyVisited } = characterSlice.actions;
export const selectData = (state) => state.characters.characters?.results;
export const selectStatusData = (state) => state.characters.status;
export const selectpaginaion = (state) => state.characters?.pagination;
export const selectSingleCharacter = (state) => state.characters.singleCharacter;
export const selectRecentlyVisited = (state) => state.characters.recentlyVisited;
export const selectCharacterDetail = (state) => state.characters.singleCharacter;

export default characterSlice.reducer;