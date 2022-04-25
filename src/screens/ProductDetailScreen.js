import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import ProductButtons from "../components/ProductButtons";

const ProductDetailScreen = ({ route }) => {
  const { id, item, name } = route.params;

  const selectedProduct = item;

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actionContainer}>
        <Text style={styles.price}>€{selectedProduct.price.toFixed(2)}</Text>
        <ProductButtons selectedProduct={selectedProduct} />
      </View>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
  },
  image: {
    width: "100%",
    height: 300,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontFamily: "title-text",
    fontSize: 20,
    color: Colors.primary,
    marginHorizontal: 10,
  },
  description: {
    fontFamily: "main-text",
    fontSize: 17,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});

export default ProductDetailScreen;
