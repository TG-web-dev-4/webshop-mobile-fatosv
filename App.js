import React, { useState } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import productsReducer from "./src/store/reducers/products";
import cartReducer from "./src/store/reducers/cart";
import TabNavigator from "./src/navigator/TabNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "title-text": require("./assets/fonts/LibreBaskerville-Bold.ttf"),
    "main-text": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
