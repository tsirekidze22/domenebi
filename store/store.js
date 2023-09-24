import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./priceFilterSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import symbolsReducer from "./symbolsSlice";
import categoriesReducer from "./categoriesSlice";
import domainSuffixReducer from "./domainSuffixSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    search: searchReducer,
    symbols: symbolsReducer,
    categories: categoriesReducer,
    domainSuffix: domainSuffixReducer,
  },
});

export default store;
