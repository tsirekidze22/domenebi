// filterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceRange: [0, 50000], // Initial price range values
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { setPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
