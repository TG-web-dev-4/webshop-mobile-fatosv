import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";

const ShoppingCartScreen = () => {
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cartTotalItems = useSelector((state) => state.cart.products);

  return (
    <View style={styles.screen}>
      {/* <View>
        <Text>Total items: {cartTotalItems.length}</Text>
      </View> */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          {" "}
          Total: <Text style={styles.price}>€{cartTotalPrice.toFixed(2)}</Text>
        </Text>
        <Button color={Colors.secondary} title="Order Now" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-around",
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 5,
    backgroundColor: Colors.background,
    borderRadius: 15,
  },
  summaryText: {
    fontFamily: "title-text",
    fontSize: 18,
    color: Colors.primary,
  },
  price: {
    color: Colors.accent,
  },
});

export default ShoppingCartScreen;
