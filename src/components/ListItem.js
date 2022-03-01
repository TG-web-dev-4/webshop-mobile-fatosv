import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import Colors from "../constants/Colors";

const GridTile = ({ onSelect, onAddToCart, image, name, price }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>€{price.toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Add to Cart"
            color={Colors.secondary}
            onPress={onAddToCart}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    margin: 10,
    height: 250,
    width: 350,
    backgroundColor: Colors.background,
    borderRadius: 15,
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 5,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  productInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontFamily: "title-text",
    color: Colors.primary,
  },
  price: {
    fontFamily: "main-text",
    color: Colors.primary,
  },
  buttonContainer: {},
});

export default GridTile;
