import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/shoppingcart/shoppingCartSlice";
import { addToFav, removeFromFav } from "../features/favorites/favoritesSlice";

const ProductButtons = ({ selectedProduct }) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const favProduct = favorites.find((fav) => fav.id === selectedProduct.id);
  const dispatch = useDispatch();

  const onAddToCart = (selectedProduct) => {
    dispatch(addToCart(selectedProduct));
  };

  const onAddToFav = (selectedProduct) => {
    dispatch(addToFav(selectedProduct));
  };

  const onRemoveFromFav = (selectedProduct) => {
    dispatch(removeFromFav(selectedProduct));
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onAddToCart(selectedProduct)}>
        <AntDesign name="shoppingcart" size={27} color={Colors.secondary} />
      </TouchableOpacity>
      {favProduct ? (
        <TouchableOpacity onPress={() => onRemoveFromFav(selectedProduct)}>
          <AntDesign name="heart" size={27} color={Colors.secondary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => onAddToFav(selectedProduct)}>
          <AntDesign name="hearto" size={27} color={Colors.secondary} />
        </TouchableOpacity>
      )}
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
