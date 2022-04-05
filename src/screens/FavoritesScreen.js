import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
