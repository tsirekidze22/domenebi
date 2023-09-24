import { createSlice } from "@reduxjs/toolkit";

const domainSuffixSlice = createSlice({
  name: "domainSuffix",
  initialState: [],
  reducers: {
    toggleSuffix: (state, action) => {
      const suffix = action.payload;
      if (state.includes(suffix)) {
        return state.filter((s) => s !== suffix);
      } else {
        return [...state, suffix];
      }
    },
  },
});

export const { toggleSuffix } = domainSuffixSlice.actions;
export default domainSuffixSlice.reducer;
