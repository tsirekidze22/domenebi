import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      const category = action.payload;
      if (!state.selectedCategories.includes(category)) {
        state.selectedCategories.push(category);
      }
    },
    deselectCategory: (state, action) => {
      const category = action.payload;
      state.selectedCategories = state.selectedCategories.filter(
        (c) => c !== category
      );
    },
  },
});

export const { selectCategory, deselectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
