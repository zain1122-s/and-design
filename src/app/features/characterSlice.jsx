import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for fetching character data
export const fetchData = createAsyncThunk(
  "characters/fetchData",
  async ({ page = 1, query = "" }) => {
    try {
      const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      const characterData = await res.json();
      return characterData;
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk for fetching single character data
export const fetchCardData = createAsyncThunk(
  "characters/fetchCardData",
  async ({ id }) => {
    try {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      const res = await fetch(url);
      const cardData = await res.json();
      return cardData;
    } catch (error) {
      throw error;
    }
  }
);

// Initial state
const initialState = {
  characters: [],
  singleCharacter: {},
  status: "",
  error: "",
  searchQuery: "",
  currentPage: 1, // Added missing currentPage
  pagination: {
    count: 0,
    page: 0,
    prev: "",
    next: "",
  },
  recentVisitedProfile: [],
};

// Redux slice
export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setRecentProfiles: (state, action) => {
      state.recentVisitedProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload.results; // Fixed access
        state.pagination = {
          count: action.payload.info?.count || 0,
          page: action.payload.info?.pages || 1, // Fixed page property
          prev: action.payload.info?.prev || null,
          next: action.payload.info?.next || null,
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

// Export actions correctly
export const { setSearchQuery, setCurrentPage, setRecentProfiles } = characterSlice.actions;

// Selectors
export const selectData = (state) => state.characters.characters;
export const selectStatusData = (state) => state.characters.status;
export const selectPagination = (state) => state.characters.pagination;
export const selectSingleCharacter = (state) => state.characters.singleCharacter;
export const selectRecentlyVisited = (state) => state.characters.recentVisitedProfile;
export const selectSearchQuery = (state) => state.characters.searchQuery;

// Export reducer
export default characterSlice.reducer;
