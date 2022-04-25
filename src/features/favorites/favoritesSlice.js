import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFav(state, action) {
      const itemIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFav(state, action) {
      const remainingItems = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      state.favorites = remainingItems;
    },
  },
});

export const { addToFav, removeFromFav } = favoritesSlice.actions;

export default favoritesSlice.reducer;
