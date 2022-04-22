import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import TabNavigator from "./src/navigator/TabNavigator";
import { store } from "./src/store";
import { Provider } from "react-redux";
import { getTotal } from "./src/features/shoppingcart/shoppingCartSlice";

const fetchFonts = () => {
  return Font.loadAsync({
    "title-text": require("./assets/fonts/LibreBaskerville-Bold.ttf"),
    "main-text": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

store.dispatch(getTotal());

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
