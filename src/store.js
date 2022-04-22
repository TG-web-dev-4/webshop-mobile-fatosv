import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./features/shoppingcart/shoppingCartSlice";
import productsReducer from "./features/products/productsSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
    favorites: favoritesReducer,
  },
});
