import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const ProductButtons = ({ onAddToCart, onAddToFav }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onAddToCart}>
        <AntDesign name="shoppingcart" size={27} color={Colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddToFav}>
        <AntDesign name="hearto" size={27} color={Colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
    margin: 10,
  },
});

export default ProductButtons;
