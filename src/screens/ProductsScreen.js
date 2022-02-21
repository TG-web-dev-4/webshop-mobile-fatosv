import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const ProductsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the products screen!</Text>
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductsScreen;
