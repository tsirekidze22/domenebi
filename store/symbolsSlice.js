import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  symbolRange: [0, 26],
};

const symbolsSlice = createSlice({
  name: "symbols",
  initialState,
  reducers: {
    setSymbolRange: (state, action) => {
      state.symbolRange = action.payload;
    },
  },
});

export const { setSymbolRange } = symbolsSlice.actions;

export default symbolsSlice.reducer;
